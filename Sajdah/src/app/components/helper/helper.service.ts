import { Injectable, HostListener, AfterViewInit, OnInit } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';

@Injectable({
  providedIn: 'root'
})
export class HelperService implements AfterViewInit, OnInit {

  constructor() { }
  // Sticky Nav
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_e: any) {
    if (window.pageYOffset > 100) {
      let element = <HTMLElement>document.getElementById('header');
      element.classList.add('sticky');
    } else {
      let element = <HTMLElement>document.getElementById('header');
      element.classList.remove('sticky');
    }
  }
  // navigation
  navmethod: boolean = false;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }
  //Mobile 
  open: boolean = false;
  trigger(item: { open: boolean; }) {
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
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    ($('.popup-youtube') as any).magnificPopup({
      type: 'iframe'
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
