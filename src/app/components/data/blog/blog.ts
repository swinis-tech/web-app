export interface Blog {
  image: string;
  shorttext: string;
  reviews: {
    replies: { commentdate: string; comment: string; user: number[] }[];
    commentdate: string;
    comment: string;
    user: number[];
  }[];
  author: number[];
  postdate: string;
  id: number;
  title: string;
  category: number[];
  htmltext: string;
  tags: number[];
  timestamp?: number;
}

const data: Blog[] = [
  {
    id: 1,
    title: 'Eid-Al-Adha Around The World',
    image: 'assets/images/Blog/News-01.png',
    shorttext:
      "You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined",
    postdate: 'June 10, 2021',
    category: [1, 2, 3],
    tags: [1, 2, 3],
    author: [1],
    htmltext:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p><p>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.</p><blockquote><p>Curabitur porta quam sit amet est semper congue. The web design industry has been undergoing tremendous changes to meet the demand But in certain circumstances and owing to the claims of duty</p><h6 class='quote-name'>- Wasim</h6></blockquote><ul><li><i class='fa fa-check-circle'></i> Internet tend to repeat predefined chunks.</li><li><i class='fa fa-check-circle'></i> Contrary to popular belief, Lorem Ipsum is not simply</li><li><i class='fa fa-check-circle'></i> On the other hand, we denounce with righteous</li><li><i class='fa fa-check-circle'></i> In a free hour, when our power of choice is untrammelled</li><li><i class='fa fa-check-circle'></i> But in certain circumstances and owing.</li></ul>",
    reviews: [
      {
        user: [1],
        commentdate: '10 June, 2021',
        comment:
          'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
        replies: [
          {
            user: [2],
            commentdate: '10 June, 2021',
            comment:
              'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Flying To Hajj',
    image: 'assets/images/Blog/News-02.png',
    shorttext:
      "You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined",
    postdate: 'June 10, 2021',
    category: [4, 5, 6],
    tags: [4, 5, 6],
    author: [2],
    htmltext:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p><p>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.</p><blockquote><p>Curabitur porta quam sit amet est semper congue. The web design industry has been undergoing tremendous changes to meet the demand But in certain circumstances and owing to the claims of duty</p><h6 class='quote-name'>- Wasim</h6></blockquote><ul><li><i class='fa fa-check-circle'></i> Internet tend to repeat predefined chunks.</li><li><i class='fa fa-check-circle'></i> Contrary to popular belief, Lorem Ipsum is not simply</li><li><i class='fa fa-check-circle'></i> On the other hand, we denounce with righteous</li><li><i class='fa fa-check-circle'></i> In a free hour, when our power of choice is untrammelled</li><li><i class='fa fa-check-circle'></i> But in certain circumstances and owing.</li></ul>",
    reviews: [
      {
        user: [1],
        commentdate: '10 June, 2021',
        comment:
          'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
        replies: [
          {
            user: [2],
            commentdate: '10 June, 2021',
            comment:
              'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'India Criminalises Muslim Practice',
    image: 'assets/images/Blog/News-03.png',
    shorttext:
      "You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined",
    postdate: 'June 10, 2021',
    category: [1, 2, 3],
    tags: [1, 2, 3],
    author: [3],
    htmltext:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p><p>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.</p><blockquote><p>Curabitur porta quam sit amet est semper congue. The web design industry has been undergoing tremendous changes to meet the demand But in certain circumstances and owing to the claims of duty</p><h6 class='quote-name'>- Wasim</h6></blockquote><ul><li><i class='fa fa-check-circle'></i> Internet tend to repeat predefined chunks.</li><li><i class='fa fa-check-circle'></i> Contrary to popular belief, Lorem Ipsum is not simply</li><li><i class='fa fa-check-circle'></i> On the other hand, we denounce with righteous</li><li><i class='fa fa-check-circle'></i> In a free hour, when our power of choice is untrammelled</li><li><i class='fa fa-check-circle'></i> But in certain circumstances and owing.</li></ul>",
    reviews: [
      {
        user: [1],
        commentdate: '10 June, 2021',
        comment:
          'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
        replies: [
          {
            user: [2],
            commentdate: '10 June, 2021',
            comment:
              'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Rise Of Female Sharia Judges',
    image: 'assets/images/Blog/News-04.png',
    shorttext:
      "You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined",
    postdate: 'June 10, 2021',
    category: [4, 5, 6],
    tags: [4, 5, 6],
    author: [4],
    htmltext:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p><p>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.</p><blockquote><p>Curabitur porta quam sit amet est semper congue. The web design industry has been undergoing tremendous changes to meet the demand But in certain circumstances and owing to the claims of duty</p><h6 class='quote-name'>- Wasim</h6></blockquote><ul><li><i class='fa fa-check-circle'></i> Internet tend to repeat predefined chunks.</li><li><i class='fa fa-check-circle'></i> Contrary to popular belief, Lorem Ipsum is not simply</li><li><i class='fa fa-check-circle'></i> On the other hand, we denounce with righteous</li><li><i class='fa fa-check-circle'></i> In a free hour, when our power of choice is untrammelled</li><li><i class='fa fa-check-circle'></i> But in certain circumstances and owing.</li></ul>",
    reviews: [
      {
        user: [1],
        commentdate: '10 June, 2021',
        comment:
          'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
        replies: [
          {
            user: [2],
            commentdate: '10 June, 2021',
            comment:
              'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Lorem Ipsum Dolor Sit',
    image: 'assets/images/Blog/News-05.png',
    shorttext:
      "You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined",
    postdate: 'June 10, 2021',
    category: [1, 2, 3],
    tags: [1, 2, 3],
    author: [1],
    htmltext:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p><p>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.</p><blockquote><p>Curabitur porta quam sit amet est semper congue. The web design industry has been undergoing tremendous changes to meet the demand But in certain circumstances and owing to the claims of duty</p><h6 class='quote-name'>- Wasim</h6></blockquote><ul><li><i class='fa fa-check-circle'></i> Internet tend to repeat predefined chunks.</li><li><i class='fa fa-check-circle'></i> Contrary to popular belief, Lorem Ipsum is not simply</li><li><i class='fa fa-check-circle'></i> On the other hand, we denounce with righteous</li><li><i class='fa fa-check-circle'></i> In a free hour, when our power of choice is untrammelled</li><li><i class='fa fa-check-circle'></i> But in certain circumstances and owing.</li></ul>",
    reviews: [
      {
        user: [1],
        commentdate: '10 June, 2021',
        comment:
          'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
        replies: [
          {
            user: [2],
            commentdate: '10 June, 2021',
            comment:
              'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Zamzam Ibrahim Became Muslim President',
    image: 'assets/images/Blog/News-03.png',
    shorttext:
      "You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined",
    postdate: 'June 10, 2021',
    category: [4, 5, 6],
    tags: [4, 5, 6],
    author: [2],
    htmltext:
      "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p><p>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.</p><blockquote><p>Curabitur porta quam sit amet est semper congue. The web design industry has been undergoing tremendous changes to meet the demand But in certain circumstances and owing to the claims of duty</p><h6 class='quote-name'>- Wasim</h6></blockquote><ul><li><i class='fa fa-check-circle'></i> Internet tend to repeat predefined chunks.</li><li><i class='fa fa-check-circle'></i> Contrary to popular belief, Lorem Ipsum is not simply</li><li><i class='fa fa-check-circle'></i> On the other hand, we denounce with righteous</li><li><i class='fa fa-check-circle'></i> In a free hour, when our power of choice is untrammelled</li><li><i class='fa fa-check-circle'></i> But in certain circumstances and owing.</li></ul>",
    reviews: [
      {
        user: [1],
        commentdate: '10 June, 2021',
        comment:
          'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
        replies: [
          {
            user: [2],
            commentdate: '10 June, 2021',
            comment:
              'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
          },
        ],
      },
    ],
  },
];

export default data;
