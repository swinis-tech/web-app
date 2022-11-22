import { Component } from '@angular/core';
import { MawladHelperService } from 'src/app/components/helper/mawlad-helper.service';

@Component({
  selector: 'app-upcoming-malwads',
  templateUrl: './upcoming-malwads.component.html',
  styleUrls: ['./upcoming-malwads.component.css']
})
export class UpcomingMalwadsComponent {
  constructor(public mawladHelperService: MawladHelperService) { }
  text: any = {
    Days: 'Days',
    Hours: 'Hours',
    Minutes: 'Minutes',
    Seconds: 'Seconds'
  };
}
