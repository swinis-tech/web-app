export interface Category {
  id: number;
  title: string;
  count?: number;
}

export const categories: Category[] = [
    {
        id: 1,
        title: 'Holy Books'
    },
    {
        id: 2,
        title: 'Quran Aayats'
    },
    {
        id: 3,
        title: 'Islamic Quotes'
    },
    {
        id: 4,
        title: 'Islamc Schools'
    },
    {
        id: 5,
        title: 'Five Pillars of Islam'
    },
    {
        id: 6,
        title: 'Islamic God'
    }
];

export default categories;
