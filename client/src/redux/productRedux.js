import { API_URL } from '../config';

//selectors
export const getProducts = (state) => state.products;

//action names
const createActionName = (name) => `app/products/${name}`;

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

//action creators
export const loadProducts = (payload) => ({ type: LOAD_PRODUCTS, payload });

//API requests
export const fetchProducts = () => {
  return (dispatch) => {
    fetch(API_URL + '/api/products/')
      .then((res) => res.json())
      .then((products) => dispatch(loadProducts(products)));
  };
};

const productReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return action.payload;
    }
    default:
      return statePart;
  }
};

export default productReducer;
