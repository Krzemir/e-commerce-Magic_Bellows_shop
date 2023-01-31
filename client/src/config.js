export const API_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000';

export const IMGS_URL =
  process.env.NODE_ENV === 'production'
    ? '/uploads/products_img/'
    : 'http://localhost:8000/uploads/products_img/';
