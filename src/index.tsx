import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./lib/store";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement
);
