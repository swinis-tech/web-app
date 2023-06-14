import { Component, OnInit } from '@angular/core';
import data from '../../../data/banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  public banner = data;
  constructor() {}
  ngOnInit(): void {}
}
