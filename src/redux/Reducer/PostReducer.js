let initialState = {
  items: [],
  item: [],
  ItemId: [],
  UpdatedItem: [],
  DeletedItem: [],
};

let PostReducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        items: action.payload,
      };
    case "CREATE_POST":
      return {
        ...state,
        item: action.payload,
      };
    case "UPDATE_ID":
      return {
        ...state,
        ItemId: action.payload,
      };
    case "UPDATE_POST":
      return {
        ...state,
        UpdatedItem: action.payload,
      };
    case "DELETE_POST":
      return {
        ...state,
        DeletedItem: action.payload,
      };

    default:
      return state;
  }
};

export default PostReducers;
