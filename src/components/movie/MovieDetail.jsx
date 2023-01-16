import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Button } from "../ui/button/Button";

import "./movieDetail.scss";

export const MovieDetail = memo(() => {
  const { id: movieId } = useParams();
  const { getMovies, addWishListMovie } = useActions();
  const { data: movieCategories, loading } = useTypedSelector(
    (state) => state.movies
  );
  const [movie, setMovie] = useState({});
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (loading) return;
    let movieData = null;
    for (const category of movieCategories) {
      movieData = category.movies.find((m) => m.id === +movieId);
      if (movieData) {
        setCategory(category.category);
        setMovie(movieData);
        break;
      }
    }

    if (movieCategories.length) return;

    getMovies();
  }, [movieCategories]);

  const handleAddToWishlist = (movie) => {
    addWishListMovie(movie);
  };

  return (
    <div className="container">
      <div className={`movie-wrapper category-${category.toLowerCase()}`}>
        <div className="row">
          <div className="movie-image">
            <img
              className="movie-image-item"
              src={movie.image}
              alt={movie.desc}
            />
          </div>
          <div className="movie-info">
            <p className="movie-info-desc">
              {movie.desc} <p>{category}</p>
            </p>
            <Button
              type="button"
              className="row add-to-whislist"
              onClick={() => handleAddToWishlist(movie)}
            >
              Add to wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});
