import { Component } from '@angular/core';
import { KhotbaHelperService } from '../../helper/khotba-helper.service';

@Component({
  selector: 'app-khotba-sidebar',
  templateUrl: './khotba-sidebar.component.html',
  styleUrls: ['./khotba-sidebar.component.css'],
})
export class KhotbaSidebarComponent {
  constructor(public khotbaHelperService: KhotbaHelperService) {}
}
