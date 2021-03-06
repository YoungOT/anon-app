import React from "react";
import { Route, Redirect } from "react-router";
import store from "store";

const PrivateRoutes = ({ component: Component, isgeneral, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = store.get("token");
      if (typeof currentUser === "undefined" || currentUser === null) {
        return (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        );
      }

      return <Component {...props} />;
    }}
  />
);

export default PrivateRoutes;
