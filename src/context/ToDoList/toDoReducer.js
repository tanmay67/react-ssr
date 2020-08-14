import {
  SHOW_LIST,
  DELETE_ITEM,
  SET_CURRENT,
  DELETE_CURRENT,
  ADD_ITEM,
  EDIT_ITEM,
  FETCH_DATA,
} from '../Types';

export default (state, action) => {
  switch (action.type) {
    case SHOW_LIST:
      return {
        ...state,
        list: state.list,
        loading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };
    case DELETE_CURRENT:
      return {
        ...state,
        current: null,
        loading: false,
      };
    case ADD_ITEM:
      return {
        ...state,
        list: [action.payload, ...state.list],
        loading: false,
      };
    case EDIT_ITEM:
      return {
        ...state,
        loading: false,
        list: state.list.map((listItem) =>
          listItem.id === action.payload.id ? action.payload : listItem
        ),
      };
    case FETCH_DATA:
      return {
        ...state,
        dataFetch: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
