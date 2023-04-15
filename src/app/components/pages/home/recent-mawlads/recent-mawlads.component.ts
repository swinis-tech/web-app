import { Component } from '@angular/core';
import { MawladHelperService } from 'src/app/components/helper/mawlad-helper.service';

@Component({
  selector: 'app-recent-mawlads',
  templateUrl: './recent-mawlads.component.html',
  styleUrls: ['./recent-mawlads.component.css']
})
export class RecentMawladsComponent {
  constructor(public mawladHelperService: MawladHelperService) { }

  settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2500,
    dots: false,
    arrows: true,
    prevArrow: '.sj-left-arrow',
    nextArrow: '.sj-right-arrow',
    vertical: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  }
}
