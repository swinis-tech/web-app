import {AfterContentInit, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import authors, {Author} from '../data/author';
import blog, {Blog} from '../data/blog/blog';
import blogcategory, {Category} from '../data/category';
import blogtags, {Tag} from '../data/tags';

@Injectable({
  providedIn: 'root'
})
export class BlogHelperService implements AfterContentInit, OnInit {

  // pagination
  page: number = 1;
  public blogpost = blog;
  public blogdetails = blog;
  public category = blogcategory;
  public blogcategory: Category[] | string = blogcategory;
  public tags = blogtags;
  public blogtags: Tag[] | string = blogtags;
  public author: Author[] | string = authors;
  public searchText: string;
  public searchQuery: string;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.searchText = '';
    this.searchQuery = '';
  }
  // category
  public getCategories(items: string | number[]) {
    return blogcategory.filter((item) => {
      return (items as number[]).includes(item.id);
    });
  }
  // Tags
  public getTags(items: string | any[]) {
    return blogtags.filter((item) => {
      return (items as any[]).includes(item.id);
    });
  }
  // Author
  public getAuthor(items: string | any[]) {
    return authors.filter((item) => {
      return (items as any[]).includes(item.id);
    });
  }
  // Count Category
  public setCategoriesCount() {
    for (let i = 0; i < this.blogcategory.length; i++) {
      const data = this.blogpost.filter((post: { category: number[]; }) => {
        return post.category.includes((this.blogcategory as Category[])[i].id);
      });
      (this.blogcategory[i] as Category).count = data.length;
    }
  }
  // Related post
  public getPostByCategory(items: string | any[]) {
    return blog.filter((post) => {
      // tslint:disable-next-line:radix
      return post.id !== parseInt(this.route.snapshot.params.id) && post.category.some(r => (items as any[]).includes(r));
    });
  }
  // Search Filter
  onSubmit() {
    if (this.searchText === "") {
      return;
    } else {
      this.router.navigate(['blog/search', this.searchText]);
    }
  }
  // Filter
  // Category Filter
  public setCategory(id: any) {
    this.blogcategory = id;
  }
  public getCategory() {
    return this.blogcategory;
  }
  public getPostsByCategory(catId: string) {
    return this.blogpost = blog.filter((item: { category: number[]; }) => { return item.category.includes(parseInt(catId)) });
  }
  // Tag Filter
  public setTag(id: any) {
    this.blogtags = id;
  }
  public getTag() {
    return this.blogtags;
  }
  public getPostsByTags(tagId: string) {
    return this.blogpost = blog.filter((item: { tags: number[]; }) => { return item.tags.includes(parseInt(tagId)) });
  }
  // Author Filter
  public setAuthor(id: any) {
    this.author = id;
  }
  public getAuthorPost() {
    return this.author;
  }
  public getPostsByAuthors(authorId: string) {
    return this.blogpost = blog.filter((item: { author: number[]; }) => { return item.author.includes(parseInt(authorId)) });
  }
  // Search Filter
  public setSearch(query: string) {
    this.searchQuery = query;
  }
  public getSearch() {
    return this.searchQuery;
  }
  public getPostsBySearch(query: string) {
    return this.blogpost = blog.filter((item: { title: (string) }) => {
      return item.title.toLowerCase().includes(query.toLowerCase())
    });
  }
  // Fetch All filter
  public setPosts() {
    const postsByCategory = this.getCategory() != undefined ? this.getPostsByCategory(this.getCategory() as string) : '',
      postsByTags = this.getTag() != undefined ? this.getPostsByTags(this.getTag() as string) : '',
      postsByAuthor = this.getAuthorPost() != undefined ? this.getPostsByAuthors(this.getAuthorPost() as string) : '',
      postsBySearch = this.getSearch() != undefined ? this.getPostsBySearch(this.getSearch()) : '';

    if ((postsByCategory != '' || postsByCategory != undefined || postsByCategory != null) && postsByCategory.length > 0) {
      this.blogpost = postsByCategory as Blog[];
    } else if ((postsByTags != '' || postsByTags != undefined || postsByTags != null) && postsByTags.length > 0) {
      this.blogpost = postsByTags as Blog[];
    } else if ((postsByAuthor != '' || postsByAuthor != undefined || postsByAuthor != null) && postsByAuthor.length > 0) {
      this.blogpost = postsByAuthor as Blog[];
    } else if ((postsBySearch != '' || postsBySearch != undefined || postsBySearch != null) && postsBySearch.length > 0) {
      this.blogpost = postsBySearch as Blog[];
    }
  }
  // Post Details
  public setPost(id: any) {
    this.blogdetails = blog.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setCategory(this.route.snapshot.params.catId);
    this.setTag(this.route.snapshot.params.tagId);
    this.setAuthor(this.route.snapshot.params.authorId);
    this.setSearch(this.route.snapshot.params.query);
    this.setPosts();
    this.setPost(this.route.snapshot.params.id);
  }
  // Recent post
  public changeToMonth(month: string | number | any) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
  }

  public setDemoDate() {
    var today = new Date();
    this.blogpost.slice(0, 3).map((post) => (
      post.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000),
      // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
      // in the blog.ts object
      post.postdate = `${this.changeToMonth(today.getMonth())} ${today.getDate() - 2}, ${today.getFullYear()}`
    ));
  }

  public getRecentPost() {
    return (blog as Blog[]).filter((post) => {
      // @ts-ignore
      return post.timestamp < new Date(post.postdate);
    });
  }

  ngOnInit(): void {
    this.setCategoriesCount();
    this.setDemoDate();
  }
  // Social Share
  public pageUrl = window.location.href;
  public socialShare(title: string) {
    var socialIcons = [
      {
        title: "facebook",
        iconClass: "fa fa-facebook-f",
        link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "twitter",
        iconClass: "fa fa-twitter",
        link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "linkedin",
        iconClass: "fa fa-linkedin",
        link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(this.pageUrl) + "&title=" + encodeURIComponent(title) + ""
      },
      {
        title: "pinterest",
        iconClass: "fa fa-pinterest-p",
        link: "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(this.pageUrl) + ""
      }
    ];
    return socialIcons;
  }
  openSocialPopup(social: any){
    window.open(social.link, "MsgWindow", "width=600,height=600")
  }
}
