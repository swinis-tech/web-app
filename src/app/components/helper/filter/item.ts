export interface Item {
  id: number;
  title: string;
  image: string[];
  shortDesc: string;
  price: number;
  rating: number;
  stock: boolean;
  category: number[];
  tags: number[];
  htmlText: string;
  reviews: Review[];
}

export interface Review {
  user: number[];
  rating: number;
  commentDate: string;
  comment: string;
}
