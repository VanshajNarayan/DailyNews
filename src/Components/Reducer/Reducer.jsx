export const firstReducerFunction = (state, action) => {
  switch (action.type) {
    case 'STORE': {
      state = action.liText;
      return state;
    };
    // case 'ADDNEWS': {
      // state.pageSize = state.pageSize + 10;
      // return { ...state, pageSize: state.pageSize + 10 };
      // return state;
    // };
    default: {
      return state;
    };
  };
};