// actions.js
export const depositMoney = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'deposit',
      payload: item
    });
  };
};

export const withdrawMoney = (title) => {
  return (dispatch) => {
    dispatch({
      type: 'withdraw',
      payload: title
    });
  };
};

export const joinData = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'join_data',
      payload: data
    });
  };
};

export const set_quantity = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'set_quantity',
      payload: data
    });
  };
};
export const hotel_id = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'hotel_id',
      payload: data
    });
  };
};

export const set_quantity_decrease = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'set_quantity_decrease',
      payload: data
    });
  };
};
export const empty_cart = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'empty_cart',
      payload: data
    });
  };
};