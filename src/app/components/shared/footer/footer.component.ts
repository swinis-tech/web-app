import { Component, OnInit } from '@angular/core';
import data from '../../data/instagram';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public instagram = data;
  constructor() { }
  scrollToTop(): void {
    function smoothScroll(): void {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    }

    smoothScroll();
  }
  ngOnInit(): void { }

}
