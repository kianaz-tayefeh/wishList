import { Header } from "./../header/Header";
import { Navigation } from "./../navigation/Navigation";
import './layout.scss'

export const Layout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
    </div>
  );
}
