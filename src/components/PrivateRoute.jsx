import React from "react";

import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  let token = localStorage.getItem("token");
  return <div>{token ? props.children : <Navigate to={"/login"} />}</div>;
};

export default PrivateRoute;
