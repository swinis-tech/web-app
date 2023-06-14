import { Component, OnInit } from '@angular/core';
import data from '../../../data/about';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  public about = data;
  constructor() {}

  ngOnInit(): void {}
}
