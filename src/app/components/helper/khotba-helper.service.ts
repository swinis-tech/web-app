import { AfterContentInit, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import authors, { Author } from '../data/author';
import khotbatags, { Tag } from '../data/tags';
import khotba from '../data/khotba/khotba.json';

@Injectable({
  providedIn: 'root',
})
export class KhotbaHelperService implements AfterContentInit, OnInit {
  // pagination
  page = 1;
  public khotbapost = khotba;
  public khotbadetails = khotba;
  public tags = khotbatags;
  public khotbatags: Tag[] | string = khotbatags;
  public author: Author[] | string = authors;
  constructor(private route: ActivatedRoute) {}
  // Tags
  public getTags(items: string | any[]) {
    return khotbatags.filter((item) => {
      return (items as any[]).includes(item.id);
    });
  }
  // Author
  public getAuthor(items: string | any[]) {
    return authors.filter((item) => {
      return (items as any[]).includes(item.id);
    });
  }
  // Recent post
  public changeToMonth(month: string | number | any) {
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[month];
  }

  public setDemoDate() {
    var today = new Date();
    this.khotbapost.slice(0, 4).map(
      (post: { timestamp: number; postdate: string }) => (
        (post.timestamp = today.getTime() - 3 * 24 * 60 * 60 * 1000),
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the khotba.json object
        (post.postdate = `${this.changeToMonth(today.getMonth())} ${
          today.getDate() - 2
        }, ${today.getFullYear()}`)
      )
    );
  }

  public getRecentPost() {
    var elems = khotba.filter(
      (post: { timestamp: number | any; postdate: string | number | Date }) => {
        return (post.timestamp || '') < new Date(post.postdate);
      }
    );
    // arbitrarily chose 4 because that's how many were visible in the original iteration
    return elems.slice(0, 4);
  }
  // Filter
  // Tag Filter
  public setTag(id: any) {
    this.khotbatags = id;
  }
  public getTag() {
    return this.khotbatags;
  }
  public getPostsByTags(tagId: string) {
    return (this.khotbapost = khotba.filter((item: { tags: number[] }) => {
      return item.tags.includes(parseInt(tagId));
    }));
  }
  // Author Filter
  public setAuthor(id: any) {
    this.author = id;
  }
  public getAuthorPost() {
    return this.author;
  }
  public getPostsByAuthors(authorId: string) {
    return (this.khotbapost = khotba.filter((item: { author: number[] }) => {
      return item.author.includes(parseInt(authorId));
    }));
  }
  // Fetch All filter
  public setPosts() {
    var postsByTags =
      this.getTag() != undefined
        ? this.getPostsByTags(this.getTag() as string)
        : '';
    var postsByAuthor =
      this.getAuthorPost() != undefined
        ? this.getPostsByAuthors(this.getAuthorPost() as string)
        : '';

    if (
      (postsByTags != '' || postsByTags != undefined || postsByTags != null) &&
      postsByTags.length > 0
    ) {
      this.khotbapost = postsByTags;
    } else if (
      (postsByAuthor != '' ||
        postsByAuthor != undefined ||
        postsByAuthor != null) &&
      postsByAuthor.length > 0
    ) {
      this.khotbapost = postsByAuthor;
    }
  }
  // Post Details
  public setKhotba(id: any) {
    this.khotbadetails = khotba.filter((item: { id: any }) => {
      return item.id == id;
    });
  }
  ngAfterContentInit(): void {
    this.setTag(this.route.snapshot.params.tagId);
    this.setAuthor(this.route.snapshot.params.authorId);
    this.setPosts();
    this.setKhotba(this.route.snapshot.params.id);
  }
  ngOnInit(): void {
    this.setDemoDate();
  }
  // Social Share
  public pageUrl = window.location.href;
  public socialShare(title: string) {
    var socialIcons: SocialIcon[] = [
      {
        title: 'facebook',
        iconClass: 'fa fa-facebook-f',
        link:
          'https://www.facebook.com/sharer/sharer.php?u=' +
          encodeURIComponent(this.pageUrl) +
          '',
      },
      {
        title: 'twitter',
        iconClass: 'fa fa-twitter',
        link:
          'http://twitter.com/intent/tweet?text=' +
          encodeURIComponent(title) +
          '&' +
          encodeURIComponent(this.pageUrl) +
          '',
      },
      {
        title: 'linkedin',
        iconClass: 'fa fa-linkedin',
        link:
          'https://www.linkedin.com/shareArticle?mini=true&url=' +
          encodeURIComponent(this.pageUrl) +
          '&title=' +
          encodeURIComponent(title) +
          '',
      },
      {
        title: 'pinterest',
        iconClass: 'fa fa-pinterest-p',
        link:
          'http://pinterest.com/pin/create/button/?url=' +
          encodeURIComponent(this.pageUrl) +
          '',
      },
    ];
    return socialIcons;
  }
  openSocialPopup(social: SocialIcon): void {
    window.open(social.link, 'MsgWindow', 'width=600,height=600');
  }
}

type SocialIcon = {
  title: string;
  iconClass: string;
  link: string;
};
