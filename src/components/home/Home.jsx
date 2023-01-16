import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Carousel } from "../ui";

import "./home.scss";

export const Home = () => {
  const { getMovies } = useActions();
  const { data: movieCategories, loading } = useTypedSelector(
    (state) => state.movies
  );

  useEffect(() => {
    if (loading || movieCategories.length) return;
    getMovies();
  }, [getMovies, loading, movieCategories.length]);

  return (
    <div className="container">
      {movieCategories.map((movieCategory) => (
        <Carousel
          key={movieCategory.category}
          data={movieCategory.movies}
          title={movieCategory.category}
        />
      ))}
    </div>
  );
};
