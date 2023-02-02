//selectors
export const getCart = (state) => state.cart;

//action names
const createActionName = (name) => `app/products/${name}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');

//action creators
export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });

const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...statePart, action.payload];
    }
    default:
      return statePart;
  }
};

export default cartReducer;
