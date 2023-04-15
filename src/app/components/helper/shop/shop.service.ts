import {AfterContentInit, AfterViewInit, Injectable, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import productBlockData, {Product} from '../../data/shop/shop';

import productCategoryData, {Category} from '../../data/category';
import productTagData, {Tag} from '../../data/tags';
import {ActivatedRoute, Router} from '@angular/router';
import {LabelType, Options} from '@angular-slider/ngx-slider';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import authorData, {Author} from '../../data/author';
import {Item} from '../filter/item';

@Injectable({
  providedIn: 'root'
})
export class ShopService extends ProductService implements AfterContentInit, AfterViewInit, OnInit {
  constructor(
    private modalService: NgbModal,
    private productService: ProductService,
    private router: ActivatedRoute,
    private route: Router
  ) {
    super();
    this.searchText = '';
    this.searchQuery = '';
    this.minPrice = 0;
    this.maxPrice = 0;
    this.activeItem = 1;
  }
  closeResult: string | undefined;
  modalContent: any;
  // pagination
  page = 1;
  public shopBlock: Product[] = [];
  public productTag = 0;
  public tags = productTagData;
  public category = productCategoryData;
  public block = productBlockData;
  public productCategory: Category[] | number = productCategoryData;
  public productBlock = productBlockData;
  public shopDetails = productBlockData;
  public wishlistLength: number | undefined;
  public cartLength: number | undefined;
  public activeItem: number;
  // Search
  public searchText: string;
  public searchQuery: string;
  // Price
  public minPrice: number;
  public maxPrice: number;
  // Increment decrement
  public counter = 1;
  // Price filter
  priceFilter: number[] = [0, 100];
  priceFilterOptions: Options = {
    floor: 1,
    ceil: 100,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '$' + value;
        case LabelType.High:
          return '$' + value;
        default:
          return '$' + value;
      }
    }
  };
  // Social Share
  public pageUrl = window.location.href;
  // Filter
  items: Item[] = productBlockData;
  categories = productCategoryData;
  filteredItems: Item[] | Product[] = [] = [...this.items];
  open(content: any, item: any): void {
    this.modalContent = item;
    this.modalService.open(content, { centered: true, size: 'lg', windowClass: 'quick-view-modal' });
  }
  increment(): void {
    this.counter += 1;
  }
  decrement(): void {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }
  // Category
  public getCategories(items: number[]): Category[] {
    return productCategoryData.filter( (item) => {
      return items.includes(item.id);
    });
  }
  // Author
  public getAuthor(items: number[]): Author[] {
    return authorData.filter((item) => {
      return items.includes(item.id);
    });
  }
  // Tag
  public getTags(items: number[]): Tag[] {
    return productTagData.filter((item) => {
      return items.includes(item.id);
    });
  }
  // Recent post
  public changeToMonth(month: string | number | any): string {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
  }

  public setDemoDate(): void {
    const today = new Date();
    this.shopBlock.slice(0, 4).map((item) => (
      item.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000),
      // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
      // in the blog.ts object
      item.postdate = `${today.getDate() - 2} ${this.changeToMonth(today.getMonth())}, ${today.getFullYear()}`
    ));
  }

  public getRecentProduct() {
    const elems = productBlockData.filter((item) => {
      // @ts-ignore
      return item.timestamp < new Date(item.postdate);
    });
    return elems;
  }
  // Related Product
  public getProductByCategory(items: number[]) {
    const elems = productBlockData.filter((product) => product.id !== parseInt(this.router.snapshot.params.id, 10) && product.category.some(r => items.includes(r)));
    return elems;
  }

  // Search
  onSubmit(): void {
    if (this.searchText === '') {
      return;
    } else {
      this.route.navigate(['shop/search', this.searchText]);
    }
  }
  handlePriceChange() {
    this.minPrice = this.priceFilter[0];
    this.maxPrice = this.priceFilter[1];

    if (this.maxPrice !== 0 && this.minPrice !== 0) {
      this.route.navigate(['/shop', this.minPrice, this.maxPrice]);
    }
  }
  // Category Filter
  public setCategory(id: number) {
    this.productCategory = id;
  }
  public getCategory() {
    return this.productCategory;
  }
  public getPostsByCategory(catId: number) {
    return this.shopBlock = productBlockData.filter((item: { category: number[]; }) => {
      return item.category.includes(catId);
    });
  }

  // Tag Filter
  public setTag(id: number) {
    this.productTag = id;
  }
  public getTag() {
    return this.productTag;
  }
  public getPostsByTag(tagId: number) {
    return this.shopBlock = productBlockData.filter((item: { tags: number[]; }) => {
      return item.tags.includes(tagId);
    });
  }

  // Search Filter
  public setSearch(query: string) {
    this.searchQuery = query;
  }
  public getSearch() {
    return this.searchQuery;
  }
  public getPostsBySearch(query: string) {
    return this.shopBlock = productBlockData.filter((item: { title: (string) }) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  }
  // Price Filter
  public setPrice(minPrice: number, maxPrice: number) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
  }
  public getPrice() {
    return [this.minPrice, this.maxPrice];
  }
  public getPostsByPrice(minPrice: number, maxPrice: number) {
    return this.shopBlock = productBlockData.filter((item: { price: (number) }) => {
      return item.price > minPrice && item.price <= maxPrice;
    });
  }
  // Fetch All filter
  public setPosts() {
    const postsByCategory = this.getCategory() != undefined ? this.getPostsByCategory(this.getCategory() as number) : '';
    const postsBySearch = this.getSearch() != undefined ? this.getPostsBySearch(this.getSearch()) : '';
    const postsByTag = this.getTag() != undefined ? this.getPostsByTag(this.getTag()) : '';
    const postsByPrice = this.getPrice() != undefined ? this.getPostsByPrice(this.getPrice()[0], this.getPrice()[1]) : '';

    if ((postsByCategory != undefined && postsByCategory != []) && postsByCategory.length > 0) {
      this.shopBlock = postsByCategory as Product[];
    } else if ((postsBySearch != undefined && postsBySearch != []) && postsBySearch.length > 0) {
      this.shopBlock = postsBySearch as Product[];
    } else if ((postsByTag != undefined && postsByTag != []) && postsByTag.length > 0) {
      this.shopBlock = postsByTag as Product[];
    } else if ((postsByPrice != undefined && postsByPrice != []) && postsByPrice.length > 0) {
      this.shopBlock = postsByPrice as Product[];
    } else {
      this.shopBlock = this.productService.getProducts();
    }
  }
  // Detail
  public setProduct(id: any) {
    this.shopDetails = productBlockData.filter((item: { id: any; }) => item.id == id);
  }
  ngAfterContentInit(): void {
    this.setSearch(this.router.snapshot.params.query);
    this.setCategory(this.router.snapshot.params.catId);
    this.setTag(this.router.snapshot.params.tagId);
    this.setPrice(this.router.snapshot.params.minPrice, this.router.snapshot.params.maxPrice);
    this.setPosts();
    this.setProduct(this.router.snapshot.params.id);
  }
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.shopBlock = this.productService.getProducts();
    this.setCategoriesCount();
    this.setDemoDate();
    this.cartLength = this.productService.getProductsCountInCart();
    this.wishlistLength = this.productService.getProductsCountInWishlist();
    this.productService.watchStorage().subscribe((data) => {
      this.cartLength = this.productService.getProductsCountInCart();
      this.wishlistLength = this.productService.getProductsCountInWishlist();
    });
  }
  public setCategoriesCount() {
    for (let i = 0; i < (this.productCategory as Category[]).length; i++) {
      const products = this.productBlock.filter((product: { category: number[]; }) => product.category.includes((this.productCategory as Category[])[i].id));
      (this.productCategory as Category[])[i].count = products.length;
    }
  }
  public socialShare(title: string) {
    const socialIcons = [
      {
        title: 'facebook',
        iconClass: 'fab fa-facebook-f',
        link: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.pageUrl) + ''
      },
      {
        title: 'twitter',
        iconClass: 'fab fa-twitter',
        link: 'http://twitter.com/intent/tweet?text=' + encodeURIComponent(title) + '&' + encodeURIComponent(this.pageUrl) + ''
      },
      {
        title: 'linkedin',
        iconClass: 'fab fa-linkedin-in',
        link: 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(this.pageUrl) + '&title=' + encodeURIComponent(title) + ''
      },
      {
        title: 'pinterest',
        iconClass: 'fab fa-pinterest-p',
        link: 'http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(this.pageUrl) + ''
      }
    ];
    return socialIcons;
  }
  openSocialPopup(social: any) {
    window.open(social.link, 'MsgWindow', 'width=600,height=600');
  }

  filterItemsByCategory(category: Category, id: number, ) {
    this.filteredItems = this.items.filter((item: Item) => {
      return item.category.includes(category.id);
    });
    this.activeItem = id;
  }
  reset(id: number) {
    this.filteredItems = [...this.items];
    this.activeItem = id;
  }
  // Add to cart btn
  public handleAddToCart(product: Product) {
    this.productService.addToCart(product);
  }
  public handleOutofStock() {
    alert('Product Out of Stock');
  }
  public handlePopupAddToCart(product: Product) {
    for (let i = 0; i < this.counter; i++) {
      this.productService.addToCart(product);
    }
  }
  public detailHandleAddToCart(product: Product) {
    for (let i = 0; i < this.counter; i++) {
      this.productService.addToCart(product);
    }
  }
  // Add to Wishlist btn
  public handleAddToWishlist(product: Product) {
    this.productService.addToWishlist(product);
  }
  public handleDeleteFromWishlist(product: Product) {
    if (confirm('Are you sure you want to delete this item from your Wishlist?')) {
      this.productService.deleteFromWishlist(product);
    }
  }
  public isProductInWishlist(id: number) {
    return this.getWishlistProductsFromStorage()?.includes(id.toString());
  }
}
