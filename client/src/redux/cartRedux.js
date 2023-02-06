//selectors
export const getCart = (state) => state.cart;

//action names
const createActionName = (name) => `app/products/${name}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
const UPDATE_CART = createActionName('UPDATE_CART');

//action creators
export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const updateCart = (payload) => ({ type: UPDATE_CART, payload });

const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...statePart, action.payload];
    }
    case UPDATE_CART: {
      console.log('action.payload', action.payload);
      return statePart.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: action.payload.quantity,
            comment: action.payload.comment,
          };
        } else {
          return product;
        }
      });
    }
    default:
      return statePart;
  }
};

export default cartReducer;
