import { Component } from '@angular/core';
import { KhotbaHelperService } from 'src/app/components/helper/khotba-helper.service';

@Component({
  selector: 'app-recent-khotba',
  templateUrl: './recent-khotba.component.html',
  styleUrls: ['./recent-khotba.component.css'],
})
export class RecentKhotbaComponent {
  constructor(public khotbaHelperService: KhotbaHelperService) {}
}
