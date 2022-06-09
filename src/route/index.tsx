import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./public.route";
import PrivateRoute from "./private.route";
import { ROUTES } from "./constant";
import { MyShop } from "../pages/myshop";
import { Home } from "../pages/home/home";
import { Login } from "../pages/Authentication/login/login";
import { PrivateRoutes, PublicRoutes } from "../components/sidebar/model";
import { CreateCatalog } from "../pages/myshop/catalog/createCatalog";
import { Order } from "../pages/order/order";

const Routers: React.FC = () => {
  const publicRoutes: PublicRoutes[] = [
    {
      key: 1,
      path: ROUTES.INDEX,
      component: Login,
      restricted: false,
    },
  ];

  const privateRoutes: PrivateRoutes[] = [
    {
      key: 1,
      component: MyShop,
      path: ROUTES.MY_SHOP,
      exact: true,
    },
    {
      key: 2,
      path: ROUTES.DASHBOARD,
      component: Home,
      exact: false,
    },
    {
      key: 3,
      path: ROUTES.CREATE_CATALOG,
      component: CreateCatalog,
      exact: false,
    },
    {
      key: 4,
      path: ROUTES.ORDER,
      component: Order,
      exact: false,
    },

  ];

  return (
    <Router>
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
    </Router>
  );
};

export default Routers;
