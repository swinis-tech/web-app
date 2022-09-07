import { Component } from '@angular/core';
import { ShopService } from 'src/app/components/helper/shop/shop.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css']
})
export class RelatedProductsComponent extends ShopService {
}
