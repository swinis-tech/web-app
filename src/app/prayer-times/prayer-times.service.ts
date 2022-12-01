import {Injectable} from '@angular/core';

interface Times {
  imsak: number;
  fajr: number;
  sunrise: number;
  dhuhr: number;
  asr: number;
  sunset: number;
  maghrib: number;
  isha: number;
}

interface FullTimes extends Times {
  midnight: number
}

interface Methods {
  Karachi: { name: string; params: MethodParams };
  MWL: { name: string; params: MethodParams };
  Jafari: { name: string; params: MethodParams };
  Makkah: { name: string; params: MethodParams };
  Egypt: { name: string; params: MethodParams };
  ISNA: { name: string; params: MethodParams };
  Tehran: { name: string; params: MethodParams };
}

interface MethodParams {
  isha: number | string;
  fajr: number;
  midnight: string;
  maghrib: number | string;
}

interface Setting extends MethodParams {
  asr: string;
  imsak: string;
  dhuhr: string;
  highLats: string;
}

type TimeFormat = '24h' |        // 24-hour format
  '12h' |         // 12-hour format
  '12hNS' |       // 12-hour format with no suffix
  'Float'        // floating point number


@Injectable({
  providedIn: 'root'
})
export class PrayerTimesService {
  offset = {
    imsak: 0, fajr: 0, sunrise: 0, dhuhr: 0, asr: 0, sunset: 0, maghrib: 0, isha: 0, midnight: 0
  };

  methods = {
    MWL: {
      name: 'Muslim World League', params: {fajr: 18, isha: 17}
    }, ISNA: {
      name: 'Islamic Society of North America (ISNA)', params: {fajr: 15, isha: 15}
    }, Egypt: {
      name: 'Egyptian General Authority of Survey', params: {fajr: 19.5, isha: 17.5}
    }, Makkah: {
      name: 'Umm Al-Qura University, Makkah', params: {fajr: 18.5, isha: '90 min'}
    }, Karachi: {
      name: 'University of Islamic Sciences, Karachi', params: {fajr: 18, isha: 18}
    }, Tehran: {
      name: 'Institute of Geophysics, University of Tehran', params: {fajr: 17.7, isha: 14, maghrib: 4.5, midnight: 'Jafari'}
    }, Jafari: {
      name: 'Shia Ithna-Ashari, Leva Institute, Qum', params: {fajr: 16, isha: 14, maghrib: 4, midnight: 'Jafari'}
    }
  } as Methods;

  calcMethod: keyof Methods = 'MWL';
  // do not change anything here; use adjust method instead
  setting: Setting = {
    imsak: '10 min', dhuhr: '0 min', asr: 'Standard', highLats: 'NightMiddle'
  } as Setting;
  timeFormat: TimeFormat = '24h';
  timeSuffixes = ['am', 'pm'];
  invalidTime = '-----';
  numIterations = 1;
  private lat?: number;
  private lng?: number;
  private elv?: number;
  private timeZone?: number;
  private jDate?: number;

  constructor() {
    const defParams = {
      maghrib: '0 min', midnight: 'Standard'

    };
    for (const i in this.methods) {
      let params = this.methods[i as keyof Methods].params;
      let j: keyof typeof defParams
      for (j in defParams)
        if ((typeof(params[j]) == 'undefined'))
          params[j] = defParams[j];
    }

    // initialize settings
    let params = this.methods[this.calcMethod].params;
    let id: keyof MethodParams
    for (id in params) {
      // @ts-ignore
      this.setting[id] = params[id];
    }
  }

  // ----------------------- Public Functions ------------------------
  // set calculation method
  setMethod(method: keyof Methods) {
    if (this.methods[method]) {
      this.adjust(this.methods[method].params);
      this.calcMethod = method;
    }
  }

  // set calculating parameters
  adjust(params: Partial<Setting>) {
    for (const id in params) {
      // @ts-ignore
      this.setting[id as keyof Setting] = params[id as keyof Setting];
    }
  }

  // set time offsets
  tune(timeOffsets: Partial<typeof this.offset>) {
    for (const i in timeOffsets) {
      this.offset[i as keyof typeof timeOffsets] = <number> timeOffsets[i as keyof typeof timeOffsets];
    }
  }

  // get current calculation method
  getMethod() {
    return this.calcMethod;
  }

  // get current setting
  getSetting() {
    return this.setting;
  }

  // get current time offsetsgetOffsets() { return this.offset; }
  // get default calc parametrs
  getDefaults() {
    return this.methods;
  }

  // return prayer times for a given date
  getTimes(date: Date | number[], coords: [number, number, number?], timezone?: 'auto' | number, dst?: 'auto' | number, format?: TimeFormat) {
    this.lat = 1 * coords[0];
    this.lng = 1 * coords[1];
    this.elv = coords[2] ? 1 * coords[2] : 0;
    this.timeFormat = format || this.timeFormat;
    if (date.constructor === Date) {
      date = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    }
    if (typeof (timezone) == 'undefined' || timezone == 'auto') {
      timezone = this.getTimeZone(date as number[]);
    }
    if (typeof (dst) == 'undefined' || dst == 'auto') {
      dst = this.getDst(date as number[]);
    }
    this.timeZone = 1 * timezone + (1 * dst ? 1 : 0);
    this.jDate = this.julian((date as number[])[0], (date as number[])[1], (date as number[])[2]) - this.lng / (15 * 24);
    return this.computeTimes();
  }

  // convert float time to the given format (see timeFormats)
  getFormattedTime(time: number, format: TimeFormat, suffixes?: string[]) {
    if (isNaN(time)) {
      return this.invalidTime;
    }
    if (format == 'Float') {
      return time;
    }
    suffixes = suffixes || this.timeSuffixes;
    time = DMath.fixHour(time + 0.5 / 60); // add 0.5 minutes to round
    const hours = Math.floor(time);
    const minutes = Math.floor((time - hours) * 60);
    const suffix = (format == '12h') ? suffixes[hours < 12 ? 0 : 1] : '';
    const hour = (format == '24h') ? this.twoDigitsFormat(hours) : ((hours + 12 - 1) % 12 + 1);
    return hour + ':' + this.twoDigitsFormat(minutes) + (suffix ? ' ' + suffix : '');
  }

  // ---------------------- Calculation Functions -----------------------
  // compute mid-day time
  midDay(time: number) {
    const eqt = this.sunPosition(this.jDate as number + time).equation;
    const noon = DMath.fixHour(12 - eqt);
    return noon;
  }

  // compute the time at which sun reaches a specific angle below horizon
  sunAngleTime(angle: number, time: number, direction?: string) {
    const decl = this.sunPosition(this.jDate as number + time).declination;
    const noon = this.midDay(time);
    const t = 1 / 15 * DMath.arccos((-DMath.sin(angle) - DMath.sin(decl) * DMath.sin(this.lat as number)) / (DMath.cos(decl) * DMath.cos(this.lat as number)));

    return noon + (direction == 'ccw' ? -t : t);
  }

  // compute asr tim
  asrTime(factor: number, time: number) {
    const decl = this.sunPosition(this.jDate as number + time).declination;
    const angle = -DMath.arccot(factor + DMath.tan(Math.abs(this.lat as number - decl)));
    return this.sunAngleTime(angle, time);
  }

  // compute declination angle of sun and equation of time
  // Ref: http://aa.usno.navy.mil/faq/docs/SunApprox.php
  sunPosition(jd: number) {
    const D = jd - 2451545.0;
    const g = DMath.fixAngle(357.529 + 0.98560028 * D);
    const q = DMath.fixAngle(280.459 + 0.98564736 * D);
    const L = DMath.fixAngle(q + 1.915 * DMath.sin(g) + 0.020 * DMath.sin(2 * g));
    const R = 1.00014 - 0.01671 * DMath.cos(g) - 0.00014 * DMath.cos(2 * g);
    const e = 23.439 - 0.00000036 * D;
    const RA = DMath.arctan2(DMath.cos(e) * DMath.sin(L), DMath.cos(L)) / 15;
    const eqt = q / 15 - DMath.fixHour(RA);
    const decl = DMath.arcsin(DMath.sin(e) * DMath.sin(L));
    return {declination: decl, equation: eqt};
  }

  // convert Gregorian date to Julian day
  // Ref: Astronomical Algorithms by Jean Meeus
  julian(year: number, month: number, day: number) {
    if (month <= 2) {
      year -= 1;
      month += 12;
    }

    const A = Math.floor(year / 100);
    const B = 2 - A + Math.floor(A / 4);
    const JD = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
    return JD;
  }

  // ---------------------- Compute Prayer Times -----------------------
  // compute prayer times at given julian date
  computePrayerTimes(times: Times): Times {
    times = this.dayPortion(times);
    const params = this.setting;
    const imsak = this.sunAngleTime(this.eval(params.imsak), times.imsak, 'ccw');
    const fajr = this.sunAngleTime(this.eval(params.fajr), times.fajr, 'ccw');
    const sunrise = this.sunAngleTime(this.riseSetAngle(), times.sunrise, 'ccw');
    const dhuhr = this.midDay(times.dhuhr);
    const asr = this.asrTime(this.asrFactor(params.asr), times.asr);
    const sunset = this.sunAngleTime(this.riseSetAngle(), times.sunset);

    const maghrib = this.sunAngleTime(this.eval(params.maghrib), times.maghrib);
    const isha = this.sunAngleTime(this.eval(params.isha), times.isha);
    return {
      imsak, fajr, sunrise, dhuhr, asr, sunset, maghrib, isha
    };
  }

  // compute prayer times
  computeTimes(): Times {
    // default times
    let times: Times = {
      imsak: 5, fajr: 5, sunrise: 6, dhuhr: 12, asr: 13, sunset: 18, maghrib: 18, isha: 18
    };
    // main iterations
    for (let i = 1; i <= this.numIterations; i++) {
      times = this.computePrayerTimes(times);
    }
    //@ts-ignore
    times = this.adjustTimes(times);
    // add midnight time
    let fullTimes: FullTimes = {
      ...times,
      midnight: (this.setting.midnight == 'Jafari') ? times.sunset + this.timeDiff(times.sunset, times.fajr) / 2 : times.sunset + this.timeDiff(times.sunset, times.sunrise) / 2
    }
    fullTimes = this.tuneTimes(fullTimes);
    return this.modifyFormats(fullTimes);
  }

  // adjust times
  adjustTimes(times: { imsak: any; fajr: any; sunrise?: number; dhuhr: any; asr?: number; sunset: any; maghrib: any; isha: any; midnight?: number | undefined; }) {
    const params = this.setting;
    for (const i in times) {
      times[i as keyof typeof times] += this.timeZone as number - (this.lng as number) / 15;
    }
    if (params.highLats != 'None') {
      //@ts-ignore
      times = this.adjustHighLats(times);
    }
    if (this.isMin(params.imsak)) {
      times.imsak = times.fajr - this.eval(params.imsak) / 60;
    }
    if (this.isMin(params.maghrib)) {
      times.maghrib = times.sunset + this.eval(params.maghrib) / 60;
    }
    if (this.isMin(params.isha)) {
      times.isha = times.maghrib + this.eval(params.isha) / 60;
    }
    times.dhuhr += this.eval(params.dhuhr) / 60;
    return times;
  }

  // get asr shadow factor
  asrFactor(asrParam: string) {
    const factor = {Standard: 1, Hanafi: 2}[asrParam];
    return factor || this.eval(asrParam);
  }

  // return sun angle for sunset/sunrise
  riseSetAngle() {
    // const earthRad = 6371009; // in meters
    // const angle = DMath.arccos(earthRad/(earthRad+ this.elv));
    const angle = 0.0347 * Math.sqrt(this.elv as number); // an approximation
    return 0.833 + angle;
  }

  // apply offsets to the times
  tuneTimes(times: FullTimes): FullTimes {
    for (const i in times) {
      times[i as keyof FullTimes] += this.offset[i as keyof FullTimes] / 60;
    }
    return times;
  }

  // convert times to given time format
  modifyFormats(times: Times) {
    let newObj = Object.fromEntries(Object.entries(times).map(([k, v]) => [k, this.getFormattedTime(v, this.timeFormat)]))

    for (const i in times) {
      // @ts-ignore
      times[i] = this.getFormattedTime(times[i], this.timeFormat);
    }
    return times;
  }

  // adjust times for locations in higher latitudes
  adjustHighLats(times: { imsak: any; fajr: any; sunrise: any; dhuhr?: any; asr?: number | undefined; sunset: any; maghrib: any; isha: any; midnight?: number | undefined; }) {
    const params = this.setting;
    const nightTime = this.timeDiff(times.sunset, times.sunrise);
    times.imsak = this.adjustHLTime(times.imsak, times.sunrise, this.eval(params.imsak), nightTime, 'ccw');
    times.fajr = this.adjustHLTime(times.fajr, times.sunrise, this.eval(params.fajr), nightTime, 'ccw');
    times.isha = this.adjustHLTime(times.isha, times.sunset, this.eval(params.isha), nightTime);
    times.maghrib = this.adjustHLTime(times.maghrib, times.sunset, this.eval(params.maghrib), nightTime);
    return times;
  }

  // adjust a time for higher latitudes
  adjustHLTime(time: number, base: number, angle: number, night: number, direction?: string | undefined) {
    const portion = this.nightPortion(angle, night);
    const timeDiff = (direction == 'ccw') ? this.timeDiff(time, base) : this.timeDiff(base, time);
    if (isNaN(time) || timeDiff > portion) {
      time = base + (direction == 'ccw' ? -portion : portion);
    }
    return time;
  }

  // the night portion used for adjusting times in higher latitudes
  nightPortion(angle: number, night: number) {
    const method = this.setting.highLats;
    let portion = 1 / 2; // MidNight
    if (method == 'AngleBased') {
      portion = 1 / 60 * angle;
    }
    if (method == 'OneSeventh') {
      portion = 1 / 7;
    }
    return portion * night;
  }

  // convert hours to day portions
  dayPortion(times: Times) {
    for (const i in times) {
      (times[i as keyof Times]) /= 24;
    }
    return times;
  }

  // ---------------------- Time Zone Functions -----------------------
  // get local time zone
  getTimeZone(date: number[]): number {
    const year = date[0];
    const t1 = this.gmtOffset([year, 0, 1]);
    const t2 = this.gmtOffset([year, 6, 1]);
    return Math.min(t1, t2);
  }

  // get daylight saving for a given date
  getDst(date: number[]): number {
    // @ts-ignore
    return 1 * (this.gmtOffset(date) != this.getTimeZone(date));
  }

  // GMT offset for a given date
  gmtOffset(date: number[]): number {
    const localDate = new Date(date[0], date[1] - 1, date[2], 12, 0, 0, 0);
    const GMTString = localDate.toUTCString();
    const GMTDate = new Date(GMTString.substring(0, GMTString.lastIndexOf(' ') - 1));
    const hoursDiff = (Number(localDate) - Number(GMTDate)) / (1000 * 60 * 60);
    return hoursDiff;
  }

  // ---------------------- Misc Functions -----------------------
  // convert given string into a number
  eval(str: string | number | undefined) {
    return Number(String(str).split(/[^0-9.+-]/)[0]);
  }

  // detect if input contains 'min'
  isMin(arg: number | string | undefined) {
    return (arg + '').indexOf('min') != -1;
  }

  // compute the difference between two times
  timeDiff(time1: number, time2: number) {
    return DMath.fixHour(time2 - time1);
  }

  // add a leading 0 if necessary
  twoDigitsFormat(num: number) {
    return (num < 10) ? '0' + num : num;
  }
}

// ---------------------- Degree-Based Math Class -----------------------
const DMath = {
  dtr(d: number) { return (d * Math.PI) / 180.0; },
  rtd(r: number) { return (r * 180.0) / Math.PI; },

  sin(d: number) { return Math.sin(this.dtr(d)); },
  cos(d: number) { return Math.cos(this.dtr(d)); },
  tan(d: number) { return Math.tan(this.dtr(d)); },

  arcsin(d: number) { return this.rtd(Math.asin(d)); },
  arccos(d: number) { return this.rtd(Math.acos(d)); },
  arctan(d: number) { return this.rtd(Math.atan(d)); },

  arccot(x: number) { return this.rtd(Math.atan(1 / x)); },
  arctan2(y: number, x: number) { return this.rtd(Math.atan2(y, x)); },

  fixAngle(a: number) { return this.fix(a, 360); },
  fixHour(a: number) { return this.fix(a, 24); },

  fix(a: number, b: number) {
    a = a - b * (Math.floor(a / b));
    return (a < 0) ? a + b : a;
  }
};
