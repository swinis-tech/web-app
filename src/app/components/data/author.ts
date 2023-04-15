export interface Author {
  id: number;
  name: string;
  image: string;
  post: string;
  htmltext: string;
  social: { icon: string, url: string }[];
}

const data: Author[] = [
    {
        id: 1,
        name: 'Kamal Alhaydari',
        image: 'assets/images/aboutus/Maulvis-01.png',
        post: 'Imam',
        htmltext: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.</p>',
        social: [
            {
                icon: 'fa fa-facebook-f',
                url: '/'
            },
            {
                icon: 'fa fa-twitter',
                url: '/'
            },
            {
                icon: 'fa fa-linkedin',
                url: '/'
            },
            {
                icon: 'fa fa-pinterest-p',
                url: '/'
            }
        ]
    },
    {
        id: 2,
        name: 'Abdullah Al-Harari',
        image: 'assets/images/aboutus/Maulvis-03.png',
        post: 'Qazi',
        htmltext: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.</p>',
        social: [
            {
                icon: 'fa fa-facebook-f',
                url: '/'
            },
            {
                icon: 'fa fa-twitter',
                url: '/'
            },
            {
                icon: 'fa fa-linkedin',
                url: '/'
            },
            {
                icon: 'fa fa-pinterest-p',
                url: '/'
            }
        ]
    },
    {
        id: 3,
        name: 'Hisham Kabbani',
        image: 'assets/images/aboutus/Priest-01.png',
        post: 'Mullah',
        htmltext: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.</p>',
        social: [
            {
                icon: 'fa fa-facebook-f',
                url: '/'
            },
            {
                icon: 'fa fa-twitter',
                url: '/'
            },
            {
                icon: 'fa fa-linkedin',
                url: '/'
            },
            {
                icon: 'fa fa-pinterest-p',
                url: '/'
            }
        ]
    },
    {
        id: 4,
        name: 'Rashid Rida',
        image: 'assets/images/aboutus/Maulvis-01.png',
        post: 'Maulvi',
        htmltext: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.</p>',
        social: [
            {
                icon: 'fa fa-facebook-f',
                url: '/'
            },
            {
                icon: 'fa fa-twitter',
                url: '/'
            },
            {
                icon: 'fa fa-linkedin',
                url: '/'
            },
            {
                icon: 'fa fa-pinterest-p',
                url: '/'
            }
        ]
    }
];

export default data;
