import {Component, HostListener, OnInit} from '@angular/core';
import data from "../../data/navigation.json";
import {ProductService} from '../../helper/shop/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public navigation = data;
  public cartlength: number | undefined;

  navmethod: boolean = false;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.cartlength = this.productService.getProductsCountInCart();
    this.productService.watchStorage().subscribe((data) => {
      this.cartlength = this.productService.getProductsCountInCart();
    })
  }

  // Sticky Nav
  @HostListener('window:scroll', ['$event']) onWindowScroll(_e: any) {
    if (window.pageYOffset > 100) {
      let element = <HTMLElement>document.getElementById('header');
      element.classList.add('sticky');
    } else {
      let element = <HTMLElement>document.getElementById('header');
      element.classList.remove('sticky');
    }
  }

  toggleNav() {
    this.navmethod = !this.navmethod;
  }
}
