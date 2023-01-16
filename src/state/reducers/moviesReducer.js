import { ActionType } from "../action-types";

const initialState = {
  loading: false,
  error: null,
  data: [],
  WishlistMovie: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES:
      return {
        ...state,
        loading: true,
        data: [],
      };
    case ActionType.GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ActionType.GET_MOVIES_ERROR:
      return { ...state, loading: false, error: action.error };
    case ActionType.GET_WISH_MOVIES:
      return {
        ...state,
        loading: true,
        WishlistMovie: [],
      };
    case ActionType.GET_WISH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        WishlistMovie: action.payload,
      };
    case ActionType.GET_WISH_MOVIES_ERROR:
      return { ...state, loading: false, error: action.error };
    case ActionType.ADD_WISH_MOVIE:
      return {
        ...state,
        loading: true,
        WishlistMovie: [...state.WishlistMovie],
      };
    case ActionType.ADD_WISH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        WishlistMovie: [...state.WishlistMovie, action.payload],
      };
    case ActionType.ADD_WISH_MOVIE_ERROR:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default reducer;
