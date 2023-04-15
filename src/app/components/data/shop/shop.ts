export interface Product {
  image: string[];
  rating: number;
  postdate: number | string;
  title: string;
  tags: number[];
  reviews: ({ commentDate: string; rating: number; comment: string; user: number[] })[];
  price: number;
  shortDesc: string;
  id: number;
  stock: boolean;
  category: number[];
  htmlText: string;
  timestamp: number;
}

const data: Product[] = [
    {
        id: 1,
        postdate: 0,
      timestamp: 0,
        title: 'Prayer Cards',
        image: [
            'assets/images/Resized/1.png',
            'assets/images/Resized/2.png',
            'assets/images/Resized/3.png',
            'assets/images/Resized/4.png'
        ],
        shortDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera putintion in some form, by injected humour, or randomised words which don\'t look even slightly you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        price: 5,
        rating: 5,
        stock: true,
        category: [
            1,
            2,
            3
        ],
        tags: [
            1,
            2,
            3
        ],
        htmlText: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>',
        reviews: [
            {
                user: [
                    1
                ],
                rating: 4,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            },
            {
                user: [
                    2
                ],
                rating: 3,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            }
        ]
    },
    {
        id: 2,
      postdate: 0,
      timestamp: 0,
        title: 'Prayer Cards',
        image: [
            'assets/images/Resized/2.png',
            'assets/images/Resized/3.png',
            'assets/images/Resized/4.png',
            'assets/images/Resized/5.png'
        ],
        shortDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera putintion in some form, by injected humour, or randomised words which don\'t look even slightly you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        price: 6,
        rating: 4,
        stock: true,
        category: [
            4,
            5,
            6
        ],
        tags: [
            4,
            5,
            6
        ],
        htmlText: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>',
        reviews: [
            {
                user: [
                    1
                ],
                rating: 4,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            },
            {
                user: [
                    2
                ],
                rating: 3,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            }
        ]
    },
    {
        id: 3,
      postdate: 0,
      timestamp: 0,
        title: 'Prayer Cards',
        image: [
            'assets/images/Resized/3.png',
            'assets/images/Resized/4.png',
            'assets/images/Resized/5.png',
            'assets/images/Resized/6.png'
        ],
        shortDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera putintion in some form, by injected humour, or randomised words which don\'t look even slightly you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        price: 8,
        rating: 4,
        stock: false,
        category: [
            1,
            2,
            3
        ],
        tags: [
            1,
            2,
            3
        ],
        htmlText: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>',
        reviews: [
            {
                user: [
                    1
                ],
                rating: 4,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            },
            {
                user: [
                    2
                ],
                rating: 3,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            }
        ]
    },
    {
        id: 4,
      postdate: 0,
      timestamp: 0,
        title: 'Prayer Cards',
        image: [
            'assets/images/Resized/4.png',
            'assets/images/Resized/5.png',
            'assets/images/Resized/6.png',
            'assets/images/Resized/7.png'
        ],
        shortDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera putintion in some form, by injected humour, or randomised words which don\'t look even slightly you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        price: 3,
        rating: 3,
        stock: true,
        category: [
            4,
            5,
            6
        ],
        tags: [
            4,
            5,
            6
        ],
        htmlText: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>',
        reviews: [
            {
                user: [
                    1
                ],
                rating: 4,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            },
            {
                user: [
                    2
                ],
                rating: 3,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            }
        ]
    },
    {
        id: 5,
      postdate: 0,
      timestamp: 0,
        title: 'Prayer Cards',
        image: [
            'assets/images/Resized/5.png',
            'assets/images/Resized/6.png',
            'assets/images/Resized/7.png',
            'assets/images/Resized/8.png'
        ],
        shortDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera putintion in some form, by injected humour, or randomised words which don\'t look even slightly you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        price: 8,
        rating: 5,
        stock: true,
        category: [
            1,
            2,
            3
        ],
        tags: [
            1,
            2,
            3
        ],
        htmlText: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>',
        reviews: [
            {
                user: [
                    1
                ],
                rating: 4,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            },
            {
                user: [
                    2
                ],
                rating: 3,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            }
        ]
    },
    {
        id: 6,
      postdate: 0,
      timestamp: 0,
        title: 'Prayer Cards',
        image: [
            'assets/images/Resized/6.png',
            'assets/images/Resized/7.png',
            'assets/images/Resized/8.png',
            'assets/images/Resized/9.png'
        ],
        shortDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera putintion in some form, by injected humour, or randomised words which don\'t look even slightly you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        price: 9,
        rating: 4,
        stock: true,
        category: [
            4,
            5,
            6
        ],
        tags: [
            4,
            5,
            6
        ],
        htmlText: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>',
        reviews: [
            {
                user: [
                    1
                ],
                rating: 4,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            },
            {
                user: [
                    2
                ],
                rating: 3,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            }
        ]
    },
    {
        id: 7,
      postdate: 0,
      timestamp: 0,
        title: 'Prayer Cards',
        image: [
            'assets/images/Resized/7.png',
            'assets/images/Resized/8.png',
            'assets/images/Resized/9.png',
            'assets/images/Resized/10.png'
        ],
        shortDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera putintion in some form, by injected humour, or randomised words which don\'t look even slightly you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        price: 12,
        rating: 4,
        stock: false,
        category: [
            1,
            2,
            3
        ],
        tags: [
            1,
            2,
            3
        ],
        htmlText: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>',
        reviews: [
            {
                user: [
                    1
                ],
                rating: 4,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            },
            {
                user: [
                    2
                ],
                rating: 3,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            }
        ]
    },
    {
        id: 8,
      postdate: 0,
      timestamp: 0,
        title: 'Prayer Cards',
        image: [
            'assets/images/Resized/8.png',
            'assets/images/Resized/9.png',
            'assets/images/Resized/10.png',
            'assets/images/Resized/11.png'
        ],
        shortDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera putintion in some form, by injected humour, or randomised words which don\'t look even slightly you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        price: 11,
        rating: 3,
        stock: true,
        category: [
            4,
            5,
            6
        ],
        tags: [
            4,
            5,
            6
        ],
        htmlText: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>',
        reviews: [
            {
                user: [
                    1
                ],
                rating: 4,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            },
            {
                user: [
                    2
                ],
                rating: 3,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            }
        ]
    },
    {
        id: 9,
      postdate: 0,
      timestamp: 0,
        title: 'Prayer Cards',
        image: [
            'assets/images/Resized/9.png',
            'assets/images/Resized/10.png',
            'assets/images/Resized/11.png',
            'assets/images/Resized/12.png'
        ],
        shortDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera putintion in some form, by injected humour, or randomised words which don\'t look even slightly you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        price: 8,
        rating: 5,
        stock: true,
        category: [
            1,
            2,
            3
        ],
        tags: [
            1,
            2,
            3
        ],
        htmlText: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>',
        reviews: [
            {
                user: [
                    1
                ],
                rating: 4,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            },
            {
                user: [
                    2
                ],
                rating: 3,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            }
        ]
    },
    {
        id: 10,
      postdate: 0,
      timestamp: 0,
        title: 'Prayer Cards',
        image: [
            'assets/images/Resized/10.png',
            'assets/images/Resized/11.png',
            'assets/images/Resized/12.png',
            'assets/images/Resized/1.png'
        ],
        shortDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera putintion in some form, by injected humour, or randomised words which don\'t look even slightly you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        price: 7,
        rating: 4,
        stock: true,
        category: [
            4,
            5,
            6
        ],
        tags: [
            4,
            5,
            6
        ],
        htmlText: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>',
        reviews: [
            {
                user: [
                    1
                ],
                rating: 4,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            },
            {
                user: [
                    2
                ],
                rating: 3,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            }
        ]
    },
    {
        id: 11,
      postdate: 0,
      timestamp: 0,
        title: 'Prayer Cards',
        image: [
            'assets/images/Resized/11.png',
            'assets/images/Resized/12.png',
            'assets/images/Resized/1.png',
            'assets/images/Resized/2.png'
        ],
        shortDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera putintion in some form, by injected humour, or randomised words which don\'t look even slightly you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        price: 4,
        rating: 4,
        stock: false,
        category: [
            1,
            2,
            3
        ],
        tags: [
            1,
            2,
            3
        ],
        htmlText: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>',
        reviews: [
            {
                user: [
                    1
                ],
                rating: 4,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            },
            {
                user: [
                    2
                ],
                rating: 3,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            }
        ]
    },
    {
        id: 12,
      postdate: 0,
      timestamp: 0,
        title: 'Prayer Cards',
        image: [
            'assets/images/Resized/12.png',
            'assets/images/Resized/1.png',
            'assets/images/Resized/2.png',
            'assets/images/Resized/3.png'
        ],
        shortDesc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera putintion in some form, by injected humour, or randomised words which don\'t look even slightly you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        price: 5,
        rating: 3,
        stock: true,
        category: [
            4,
            5,
            6
        ],
        tags: [
            4,
            5,
            6
        ],
        htmlText: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>',
        reviews: [
            {
                user: [
                    1
                ],
                rating: 4,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            },
            {
                user: [
                    2
                ],
                rating: 3,
                commentDate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
            }
        ]
    }
];

export default data;
