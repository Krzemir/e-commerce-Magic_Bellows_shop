const initialState = {
  products: [],
  cart: [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Hohner Fun Top 120 Bass',
      price: 8999,
      quantity: 2,
      totalPrice: 17998,
      comment:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      name: 'Cavagnolo 120 Bass B-Griff',
      price: 2899,
      quantity: 1,
      totalPrice: 2899,
      comment:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
  ],

  order: {
    client: 'Adam',
    address: 'Baker str. 23',
    cart: [
      {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
        name: 'Hohner Fun Top 120 Bass',
        price: 8999,
        quantity: 3,
        totalPrice: 26997,
        comment: '',
      },
      {
        id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
        name: 'Cavagnolo 120 Bass B-Griff',
        price: 2899,
        quantity: 1,
        totalPrice: 2899,
        comment: '',
      },
      {
        id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
        name: 'Hohner Amati De Luxe C-Griff',
        price: 1199,
        quantity: 1,
        totalPrice: 1199,
        comment: '',
      },
    ],
    totalToPay: 31095,
  },
};

export default initialState;
