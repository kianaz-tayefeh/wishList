import { Route, Routes } from "react-router-dom";

import { Home } from "../../home/Home";
import { MovieDetail } from "../../movie/MovieDetail";
import { WishList } from "../../wishlist/Wishlist";
import { NotFound } from "../../ui";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie">
        <Route path=":id" element={<MovieDetail />} />
      </Route>
      <Route path="/wishlist" element={<WishList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
