import { Component } from '@angular/core';
import { MawladHelperService } from 'src/app/components/helper/mawlad-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  text: any = {
    Days: 'Days',
    Hours: 'Hours',
    Minutes: 'Minutes',
    Seconds: 'Seconds',
  };
  constructor(public mawladHelperService: MawladHelperService) {}
}
