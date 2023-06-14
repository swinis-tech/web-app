import { Injectable, AfterViewInit, OnInit } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';

@Injectable({
  providedIn: 'root',
})
export class HelperService implements AfterViewInit, OnInit {
  constructor() {}

  //Mobile
  open: boolean = false;
  trigger(item: { open: boolean }) {
    item.open = !item.open;
  }
  // Search
  searchMethod: boolean = false;
  toggleSearch() {
    this.searchMethod = !this.searchMethod;
  }
  // Cart
  cartMethod: boolean = false;
  toggleCart() {
    this.cartMethod = !this.cartMethod;
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    ($('.popup-youtube') as any).magnificPopup({
      type: 'iframe',
    });
    ($('.gallery-thumb') as any).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
      mainClass: 'mfp-fade',
    });
  }
}
