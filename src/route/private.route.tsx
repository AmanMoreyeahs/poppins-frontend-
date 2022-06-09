import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "./constant";
import { isLogin } from "../utils/isLogin";
import { Props } from "../components/sidebar/model";
import { AppLayout } from "../components/layout";

/**
 *
 * @param {*} param0  component of page
 * @returns private route
 */
const PrivateRoute: React.FC<Props> = ({ component: Component, ...props }) => {
  return isLogin() ? (
    <AppLayout>
      <Component {...props} />
    </AppLayout>
  ) : (
    <Navigate replace to={ROUTES.INDEX} />
  );
};

export default PrivateRoute;
