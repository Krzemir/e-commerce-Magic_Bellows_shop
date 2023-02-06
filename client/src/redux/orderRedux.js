import { API_URL } from '../config';

//selectors
export const getOrder = (state) => state.order;

//action names
const createActionName = (name) => `app/order/${name}`;

const ADD_ORDER = createActionName('ADD_ORDER');
const CLEAR_ORDER = createActionName('CLEAR_ORDER');
const SEND_ORDER_REQUEST = createActionName('SEND_ORDER_REQUEST');

//action creators

export const addOrder = (payload) => ({ type: ADD_ORDER, payload });
export const clearOrder = (payload) => ({ type: CLEAR_ORDER, payload });

//API requests
export const sendOrderRequest = (order) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    };

    fetch(API_URL + '/api/orders', options).then((res) =>
      dispatch(addOrder(order)),
    );
  };
};

const orderReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_ORDER: {
      return action.payload;
    }
    case CLEAR_ORDER: {
      return [];
    }
    default:
      return statePart;
  }
};

export default orderReducer;
