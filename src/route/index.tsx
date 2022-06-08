import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./public.route";
import PrivateRoute from "./private.route";
import { ROUTES } from "./constant";
import { MyShop } from "../pages/myshop";
import { Home } from "../pages/home/home";
import { AppLayout } from "../components/layout";
import { Login } from "../pages/login/login";
import { PrivateRoutes, PublicRoutes } from "../components/sidebar/model";

const Routers: React.FC = () => {
  const publicRoutes:PublicRoutes[] = [
    {
      key: 1,
      path: ROUTES.INDEX,
      component: Login,
      restricted: false,
    },
  ];

  const privateRoutes:PrivateRoutes[] = [
    {
      key: 1,
      component: MyShop,
      path: ROUTES.MY_SHOP,
      exact: true,
    },
    {
      key: 1,
      path: ROUTES.DASHBOARD,
      component: Home,
      exact: false,
    },
  ];

  return (
    <Router>
      <AppLayout>
        <Routes>
          {publicRoutes.map((i) => (
            <Route
              path={i?.path}
              key={i?.key}
              element={
                <PublicRoute
                  restricted={i?.restricted}
                  key={i?.key}
                  component={i?.component}
                />
              }
            />
          ))}

          {privateRoutes.map((i) => (
            <Route
              path={i?.path}
              key={i?.key}
              element={<PrivateRoute key={i?.key} component={i?.component} />}
            />
          ))}
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default Routers;
