import { collection, getDocs, doc, setDoc } from "firebase/firestore/lite";
import { db } from "../../apis/firebaseConfig";

import { ActionType } from "../action-types";

export const getMovies = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.GET_MOVIES,
    });

    try {
      const moviesCol = collection(db, "movies");
      const movieSnapshot = await getDocs(moviesCol);
      const movieList = movieSnapshot.docs.map((doc) => doc.data());
      const { data } = movieList[0];

      dispatch({
        type: ActionType.GET_MOVIES_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_MOVIES_ERROR,
        error: err,
      });
    }
  };
};
export const getWishListMovies = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.GET_WISH_MOVIES,
    });

    try {
      const wishesCol = collection(db, "wishList");
      const wisheSnapshot = await getDocs(wishesCol);
      const wishMovieList = wisheSnapshot.docs.map((doc) => doc.data());
      dispatch({
        type: ActionType.GET_WISH_MOVIES_SUCCESS,
        payload: wishMovieList,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_WISH_MOVIES_ERROR,
        error: err,
      });
    }
  };
};
export const addWishListMovie = (movie) => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.ADD_WISH_MOVIE,
    });

    try {
      const newWishRef = doc(collection(db, "wishList"));

      await setDoc(newWishRef, movie);
      dispatch({
        type: ActionType.ADD_WISH_MOVIE_SUCCESS,
        payload: movie, // todo: get from firebase
      });
    } catch (err) {
      dispatch({
        type: ActionType.ADD_WISH_MOVIE_ERROR,
        error: err,
      });
    }
  };
};
