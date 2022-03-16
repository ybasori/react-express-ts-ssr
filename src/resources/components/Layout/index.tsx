import React from "react";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import { store } from "../../redux";

interface Props {
  routes: React.ReactChild;
}

const Layout: React.FC<Props> = ({ routes }) => {
  return (
    <Provider store={store}>
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">about</Link>
        </div>
      </div>
      {routes}
    </Provider>
  );
};

export default Layout;
