import { Component, OnInit } from '@angular/core';
import data from "../../../data/gallery.json";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public gallery = data;
  constructor() { }

  ngOnInit(): void {
  }

}
