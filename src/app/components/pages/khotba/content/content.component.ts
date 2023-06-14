import { Component } from '@angular/core';
import { KhotbaHelperService } from 'src/app/components/helper/khotba-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  constructor(public khotbaHelperService: KhotbaHelperService) {}
}
