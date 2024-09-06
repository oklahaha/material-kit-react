// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Table from "pages/Competition/Athlete/Sections/Table";
import Footer from "examples/Footers/SwimmingFooter";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/swimmers.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from "react-router-dom";

function Athlete() {

  const navigate = useNavigate();

    const addAthlete = () => {
      console.log("add");
      navigate("/pages/competition/addAthlete");
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
            <div style={{textAlign: "right"}}>
                <button class="btn btn-default btn-primary"  onClick={addAthlete}>添加</button>
            </div>
            <br />
            <Table />
          </Card>
          <MKBox pt={6} px={1} mt={6}>
            <Footer />
          </MKBox>
        </MKBox>
      </>
    );
  }
  
  export default Athlete;
  