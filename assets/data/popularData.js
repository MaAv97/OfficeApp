const popularData = [
  {
    id: '1',
    image: require('../images/fastfood.png'),
    title: 'Meniul zilei nr. 1',
    weight: '540 gr',
    rating: '5.0',
    price: 13.99,
    sizeName: 'Hamburger de pui',
    crust: 'Cartofi Prajiti',
    deliveryTime: 30,
    ingredients: [
      {
        id: '1',
        name: 'fries',
        image: require('../images/fries.png'),
      },
      {
        id: '2',
        name: 'meat',
        image: require('../images/meat.png'),
      },
      {
        id: '3',
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
      {
        id: '4',
        name: 'salad',
        image: require('../images/salad.png'),
      },
    ],
  },
  {
    id: '2',
    image: require('../images/soup.png'),
    title: 'Meniul zilei nr. 2',
    weight: '450 gr',
    rating: '4.0',
    price: 15.99,
    sizeName: 'Supa de legume',
    crust: 'Pireu cu piept de pui',
    deliveryTime: 40,
    ingredients: [
      {
        id: '1',
        name: 'potato',
        image: require('../images/potato.png'),
      },
      {
        id: '2',
        name: 'meat',
        image: require('../images/meat.png'),
      },
    ],
  },
  {
    id: '3',
    image: require('../images/pizza3.png'),
    title: 'Meniul zilei nr. 3',
    weight: '700 gr',
    rating: '5.0',
    price: 13.99,
    sizeName: 'Pizza de pui',
    crust: 'Sos dulce/picant',
    deliveryTime: 20,
    ingredients: [
      {
        id: '1',
        name: 'tomato',
        image: require('../images/tomato.png'),
      },
      {
        id: '2',
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
    ],
  },
];

export default popularData;
