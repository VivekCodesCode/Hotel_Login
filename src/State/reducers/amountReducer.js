const initialState = {
  firstArray: [],
  secondArray: [],
  thirdArray: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'deposit':
      return {
        ...state,
        firstArray: [...state.firstArray, action.payload]
      };
    case 'withdraw':
      return {
        ...state,
        firstArray: state.firstArray.filter(val => val.title !== action.payload)
      };
    case 'join_data':
      return {
        ...state,
        secondArray: [...state.secondArray, action.payload]
      };
    case 'set_quantity':
      console.log('Action payload:', action.payload); // Log the action payload
      const updatedArray = state.firstArray.map(val => {
        if (val.title === action.payload) {
          console.log('Updating item:', val); // Log the item being updated
          return { ...val, quantity: val.quantity + 1 };
        }
        return val;
      });
      console.log('Updated firstArray:', updatedArray); // Log the updated array
      return {
        ...state,
        firstArray: updatedArray
      };
    case 'hotel_id':
      console.log('Action payload for hotel_id:', action.payload); // Log the action payload
      return {
        ...state,
        thirdArray: [...state.thirdArray,action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
