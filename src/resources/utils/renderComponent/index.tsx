import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "../../";
import { store } from "../../redux";

const renderComponent = ({ router = "/" } = {}) => {
  window.history.pushState({}, "Test page", router);
  return render(
    <Provider store={store}>
      <App />
    </Provider>,
    {
      wrapper: BrowserRouter,
    }
  );
};

export default renderComponent;
