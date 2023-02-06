//selectors
export const getOrder = (state) => state.order;

//action names
const createActionName = (name) => `app/order/${name}`;

const ADD_ORDER = createActionName('ADD_ORDER');
const CLEAR_ORDER = createActionName('CLEAR_ORDER');

//action creators

export const addOrder = (payload) => ({ type: ADD_ORDER, payload });
export const clearOrder = (payload) => ({ type: CLEAR_ORDER, payload });

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
