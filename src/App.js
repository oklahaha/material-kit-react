/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
// import Presentation from "layouts/pages/presentation";
import Frontpage from "layouts/pages/index";
import AddAthletePage from "layouts/pages/competition/addAthlete";
import EditAthletePage from "layouts/pages/competition/editAthlete";
import HundredMFreestylePage from "layouts/pages/competition/hundredMFreestyle";
import EditHundredMFreestylePage from "layouts/pages/competition/editHundredMFreestyle";
import HundredMBreaststrokePage from "layouts/pages/competition/hundredMBreaststroke";
import EditHundredMBreaststrokePage from "layouts/pages/competition/editHundredMBreaststroke"

// Material Kit 2 React routes
import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/frontpage" element={<Frontpage />} />
        <Route path="*" element={<Navigate to="/frontpage" />} />
        <Route path="/pages/competition/addAthlete" element={<AddAthletePage />} />
        <Route path="/pages/competition/editAthlete" element={<EditAthletePage />} />
        <Route path="/pages/competition/hundredMFreestyle" element={<HundredMFreestylePage />} />
        <Route path="/pages/competition/editHundredMFreestyle" element={<EditHundredMFreestylePage />} />
        <Route path="/pages/competition/hundredMBreaststroke" element={<HundredMBreaststrokePage />} />
        <Route path="/pages/competition/editHundredMBreaststroke" element={<EditHundredMBreaststrokePage />} />

      </Routes>
    </ThemeProvider>
  );
}
