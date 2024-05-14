import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
];
const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];
const Milliy_taomlar = [
  {
    title: "Lag'mon",
    price: '$35',
    tags: 'Uz | Delicious Meal'
  },
  {
    title: "Osh",
    price: '$32',
    tags: 'Uz | teahouse food'
  },
  {
    title: "Sho'rva",
    price: '$32',
    tags: 'Uz | liquid food'
  },
];
const salatlar = [
  {
    title: "Achchiq-chuchuk",
    price: '$12',
    tags: 'Uz | Osh uchun ideal'
  },
  {
    title: "Sezar",
    price: '$11',
    tags: 'Uz | Great Salad'
  },
  {
    title: "Olivia",
    price: '$9',
    tags: 'Uz | Salad'
  },
];

export default { wines, cocktails, awards, Milliy_taomlar, salatlar };
