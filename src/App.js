import { Provider } from "react-redux";
import "./styles/globals.scss";

import { store } from "./state";
import { Layout } from "./components/layout/main/Layout";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
