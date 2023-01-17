export interface Mawlad {
  timeday: string;
  date: string;
  image: string;
  shorttext: string;
  title: string;
  htmltext: string;
  organiser: string;
  reviews: { replies: { commentdate: string; comment: string; user: number[] }[]; commentdate: string; comment: string; user: number[] }[];
  phone: string;
  location: string;
  id: number;
  place: string;
  email: string;
  timestamp?: number
}

const data: Mawlad[] = [
    {
        id: 1,
        title: 'The Day Of Arafah Begins',
        image: 'assets/images/mawlads/mawlad-01.png',
        shorttext: 'You need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend.',
        timeday: 'Sunday (8:00 am -9:00 am)',
        location: '56 Thatcher Avenue River Forest',
        date: '10 June 2021',
        place: 'Mosque',
        organiser: 'mawlad Planer',
        phone: '+01 1587 1248',
        email: 'example@example.com',
        htmltext: '<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p><p>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.</p><blockquote><p>Curabitur porta quam sit amet est semper congue. The web design industry has been undergoing tremendous changes to meet the demand But in certain circumstances and owing to the claims of duty</p><h6>- Frederick</h6></blockquote><div class=\'row\'><div class=\'col-lg-7\'><ul><li><i class=\'fa fa-check-circle\'></i> Internet tend to repeat predefined chunks.</li><li><i class=\'fa fa-check-circle\'></i> Contrary to popular belief, Lorem Ipsum is not simply</li><li><i class=\'fa fa-check-circle\'></i> On the other hand, we denounce with righteous</li><li><i class=\'fa fa-check-circle\'></i> In a free hour, when our power of choice is untrammelled</li><li><i class=\'fa fa-check-circle\'></i> But in certain circumstances and owing.</li></ul></div></div>',
        reviews: [
            {
                user: [
                    1
                ],
                commentdate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
                replies: [
                    {
                        user: [
                            2
                        ],
                        commentdate: '10 June, 2021',
                        comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'The Month Of Ramazan Starts',
        image: 'assets/images/mawlads/mawlad-02.png',
        shorttext: 'You need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend.',
        timeday: 'Sunday (8:00 am -9:00 am)',
        location: '56 Thatcher Avenue River Forest',
        date: '10 June 2021',
        place: 'Mosque',
        organiser: 'mawlad Planer',
        phone: '+01 1587 1248',
        email: 'example@example.com',
        htmltext: '<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p><p>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.</p><blockquote><p>Curabitur porta quam sit amet est semper congue. The web design industry has been undergoing tremendous changes to meet the demand But in certain circumstances and owing to the claims of duty</p><h6>- Frederick</h6></blockquote><div class=\'row\'><div class=\'col-lg-7\'><ul><li><i class=\'fa fa-check-circle\'></i> Internet tend to repeat predefined chunks.</li><li><i class=\'fa fa-check-circle\'></i> Contrary to popular belief, Lorem Ipsum is not simply</li><li><i class=\'fa fa-check-circle\'></i> On the other hand, we denounce with righteous</li><li><i class=\'fa fa-check-circle\'></i> In a free hour, when our power of choice is untrammelled</li><li><i class=\'fa fa-check-circle\'></i> But in certain circumstances and owing.</li></ul></div></div>',
        reviews: [
            {
                user: [
                    1
                ],
                commentdate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
                replies: [
                    {
                        user: [
                            2
                        ],
                        commentdate: '10 June, 2021',
                        comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'The Holy Festival Eid-Al Adha Arrives',
        image: 'assets/images/mawlads/mawlad-03.png',
        shorttext: 'You need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend.',
        timeday: 'Sunday (8:00 am -9:00 am)',
        location: '56 Thatcher Avenue River Forest',
        date: '10 June 2021',
        place: 'Mosque',
        organiser: 'mawlad Planer',
        phone: '+01 1587 1248',
        email: 'example@example.com',
        htmltext: '<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p><p>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.</p><blockquote><p>Curabitur porta quam sit amet est semper congue. The web design industry has been undergoing tremendous changes to meet the demand But in certain circumstances and owing to the claims of duty</p><h6>- Frederick</h6></blockquote><div class=\'row\'><div class=\'col-lg-7\'><ul><li><i class=\'fa fa-check-circle\'></i> Internet tend to repeat predefined chunks.</li><li><i class=\'fa fa-check-circle\'></i> Contrary to popular belief, Lorem Ipsum is not simply</li><li><i class=\'fa fa-check-circle\'></i> On the other hand, we denounce with righteous</li><li><i class=\'fa fa-check-circle\'></i> In a free hour, when our power of choice is untrammelled</li><li><i class=\'fa fa-check-circle\'></i> But in certain circumstances and owing.</li></ul></div></div>',
        reviews: [
            {
                user: [
                    1
                ],
                commentdate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
                replies: [
                    {
                        user: [
                            2
                        ],
                        commentdate: '10 June, 2021',
                        comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'When Our Power Of Choice Is Untram',
        image: 'assets/images/mawlads/mawlad-04.png',
        shorttext: 'You need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend.',
        timeday: 'Sunday (8:00 am -9:00 am)',
        location: '56 Thatcher Avenue River Forest',
        date: '10 June 2021',
        place: 'Mosque',
        organiser: 'mawlad Planer',
        phone: '+01 1587 1248',
        email: 'example@example.com',
        htmltext: '<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p><p>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.</p><blockquote><p>Curabitur porta quam sit amet est semper congue. The web design industry has been undergoing tremendous changes to meet the demand But in certain circumstances and owing to the claims of duty</p><h6>- Frederick</h6></blockquote><div class=\'row\'><div class=\'col-lg-7\'><ul><li><i class=\'fa fa-check-circle\'></i> Internet tend to repeat predefined chunks.</li><li><i class=\'fa fa-check-circle\'></i> Contrary to popular belief, Lorem Ipsum is not simply</li><li><i class=\'fa fa-check-circle\'></i> On the other hand, we denounce with righteous</li><li><i class=\'fa fa-check-circle\'></i> In a free hour, when our power of choice is untrammelled</li><li><i class=\'fa fa-check-circle\'></i> But in certain circumstances and owing.</li></ul></div></div>',
        reviews: [
            {
                user: [
                    1
                ],
                commentdate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
                replies: [
                    {
                        user: [
                            2
                        ],
                        commentdate: '10 June, 2021',
                        comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        title: 'Eid-E-Shuja Arrives',
        image: 'assets/images/mawlads/mawlad-05.png',
        shorttext: 'You need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend.',
        timeday: 'Sunday (8:00 am -9:00 am)',
        location: '56 Thatcher Avenue River Forest',
        date: '10 June 2021',
        place: 'Mosque',
        organiser: 'mawlad Planer',
        phone: '+01 1587 1248',
        email: 'example@example.com',
        htmltext: '<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p><p>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.</p><blockquote><p>Curabitur porta quam sit amet est semper congue. The web design industry has been undergoing tremendous changes to meet the demand But in certain circumstances and owing to the claims of duty</p><h6>- Frederick</h6></blockquote><div class=\'row\'><div class=\'col-lg-7\'><ul><li><i class=\'fa fa-check-circle\'></i> Internet tend to repeat predefined chunks.</li><li><i class=\'fa fa-check-circle\'></i> Contrary to popular belief, Lorem Ipsum is not simply</li><li><i class=\'fa fa-check-circle\'></i> On the other hand, we denounce with righteous</li><li><i class=\'fa fa-check-circle\'></i> In a free hour, when our power of choice is untrammelled</li><li><i class=\'fa fa-check-circle\'></i> But in certain circumstances and owing.</li></ul></div></div>',
        reviews: [
            {
                user: [
                    1
                ],
                commentdate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
                replies: [
                    {
                        user: [
                            2
                        ],
                        commentdate: '10 June, 2021',
                        comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        title: 'Islamic New Year',
        image: 'assets/images/mawlads/mawlad-06.png',
        shorttext: 'You need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend.',
        timeday: 'Sunday (8:00 am -9:00 am)',
        location: '56 Thatcher Avenue River Forest',
        date: '10 June 2021',
        place: 'Mosque',
        organiser: 'mawlad Planer',
        phone: '+01 1587 1248',
        email: 'example@example.com',
        htmltext: '<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p><p>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.</p><blockquote><p>Curabitur porta quam sit amet est semper congue. The web design industry has been undergoing tremendous changes to meet the demand But in certain circumstances and owing to the claims of duty</p><h6>- Frederick</h6></blockquote><div class=\'row\'><div class=\'col-lg-7\'><ul><li><i class=\'fa fa-check-circle\'></i> Internet tend to repeat predefined chunks.</li><li><i class=\'fa fa-check-circle\'></i> Contrary to popular belief, Lorem Ipsum is not simply</li><li><i class=\'fa fa-check-circle\'></i> On the other hand, we denounce with righteous</li><li><i class=\'fa fa-check-circle\'></i> In a free hour, when our power of choice is untrammelled</li><li><i class=\'fa fa-check-circle\'></i> But in certain circumstances and owing.</li></ul></div></div>',
        reviews: [
            {
                user: [
                    1
                ],
                commentdate: '10 June, 2021',
                comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.',
                replies: [
                    {
                        user: [
                            2
                        ],
                        commentdate: '10 June, 2021',
                        comment: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.'
                    }
                ]
            }
        ]
    }
];

export default data;
