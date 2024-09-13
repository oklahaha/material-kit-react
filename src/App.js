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
import FiftyMFreeStylePage from "layouts/pages/competition/fiftyMFreeStyle";
import EditFiftyMFreeStylePage from "layouts/pages/competition/editFiftyMFreeStyle"
import FiftyMBackstrokePage from "layouts/pages/competition/fiftyMBackstroke";
import EditFiftyMBackstrokePage from "layouts/pages/competition/editFiftyMBackstroke"
import FiftyMBreaststrokePage from "layouts/pages/competition/fiftyMBreaststroke"
import EditFiftyMBreaststrokePage from "layouts/pages/competition/editFiftyMBreaststroke";
import FiftyMButterflystrokePage from "layouts/pages/competition/fiftyMButterflystroke"
import EditFiftyMButterflystrokePage from "layouts/pages/competition/editFiftyMButterflystroke";
import FiftyMKickBoardPage from "layouts/pages/competition/fiftyMKickBoard"
import EditFiftyMKickBoardPage from "layouts/pages/competition/editFiftyMKickBoard";

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
        <Route path="/pages/competition/fiftyMFreeStyle" element={<FiftyMFreeStylePage />} />
        <Route path="/pages/competition/editFiftyMFreeStyle" element={<EditFiftyMFreeStylePage />} />
        <Route path="/pages/competition/fiftyMBackstroke" element={<FiftyMBackstrokePage />} />
        <Route path="/pages/competition/editFiftyMBackstroke" element={<EditFiftyMBackstrokePage />} />
        <Route path="/pages/competition/fiftyMBreaststroke" element={<FiftyMBreaststrokePage />} />
        <Route path="/pages/competition/editFiftyMBreaststroke" element={<EditFiftyMBreaststrokePage />} />
        <Route path="/pages/competition/fiftyMButterflystroke" element={<FiftyMButterflystrokePage />} />
        <Route path="/pages/competition/editFiftyMButterflystroke" element={<EditFiftyMButterflystrokePage />} />
        <Route path="/pages/competition/fiftyMKickBoard" element={<FiftyMKickBoardPage />} />
        <Route path="/pages/competition/editFiftyMKickBoard" element={<EditFiftyMKickBoardPage />} />

      </Routes>
    </ThemeProvider>
  );
}
