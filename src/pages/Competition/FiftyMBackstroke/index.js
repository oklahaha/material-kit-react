// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Table from "pages/Competition/FiftyMBackstroke/Sections/Table";
import Footer from "examples/Footers/SwimmingFooter";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/swimmers.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate, useLocation } from "react-router-dom";

import React, { useEffect, useState } from "react";

function FiftyMBackstroke() {

  const navigate = useNavigate();
  const location = useLocation();

  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (location.state?.message) {
      setAlert({
        message: location.state.message,
        type: location.state.type || "success"
      });
      // Clear the message from location state
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const appendAlert = (message, type) => {
    setAlert({ message, type });
    // Automatically remove the alert after 5 seconds
    setTimeout(() => setAlert(null), 5000);
  }

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/contactus",
          label: "聯絡我們",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          {alert && (
            <div className={`alert alert-${alert.type} alert-dismissible`} role="alert">
              <div>{alert.message}</div>
              <button type="button" className="btn-close" onClick={() => setAlert(null)} aria-label="Close"></button>
            </div>
          )}
          <br />
          <Table gender={location.state?.gender} age={location.state?.age} title={location.state?.title} /> {/* Pass props */}
        </Card>
        <MKBox pt={6} px={1} mt={6}>
          <Footer />
        </MKBox>
      </MKBox>
    </>
  );
}

export default FiftyMBackstroke;
