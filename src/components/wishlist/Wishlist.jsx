import { useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./wishlist.scss";

export const WishList = memo(() => {
  const navigate = useNavigate();
  const { getWishListMovies } = useActions();
  const { WishlistMovie, loading } = useTypedSelector((state) => state.movies);

  useEffect(() => {
    if (loading) return;
    getWishListMovies();
  }, []);

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  console.log("WishlistMovie", WishlistMovie);

  return (
    <div className="container">
      <div className="wishlist">
        <ul className="wishlist-ul">
          {WishlistMovie.map((movie, index) => (
            <li
              key={movie.id}
              onClick={() => handleClick(movie.id)}
              className="wishlist-ul-li"
            >
              <img
                src={movie.image}
                alt={movie.desc}
                className="wishlist-ul-li-image"
              />
              <p>
                {index + 1}
                <br />
                {movie.id} -
                <br />
                {movie.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
