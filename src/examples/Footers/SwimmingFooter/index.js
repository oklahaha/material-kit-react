import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import logoImage from "assets/images/swim.png";

const date = new Date().getFullYear();

function Footer() {
  return (
    <MKBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            textAlign={{ xs: "center", lg: "left" }}
            mr="auto"
            mb={{ xs: 3, lg: 0 }}
          >
            <MKBox>
              <Link to="/">
                <MKBox component="img" src={logoImage} alt="泳會" maxWidth="2rem" mb={2} />
              </Link>
              <MKTypography variant="h6">泳會</MKTypography>
            </MKBox>
            <Stack
              component="ul"
              direction="row"
              flexWrap="wrap"
              spacing={3}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              pl={0}
              mb={3}
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="http://localhost:3000/"
                  target="_blank"
                  rel="noreferrer"
                >
                  首頁
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="http://localhost:3000/aboutus"
                  target="_blank"
                  rel="noreferrer"
                >
                  關於我們
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="http://localhost:3000/contractus"
                  target="_blank"
                  rel="noreferrer"
                >
                  聯絡我們
                </MKTypography>
              </MKBox>
            </Stack>
            <MKTypography variant="button" opacity={0.8}>
              Copyright © {date} 泳會
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} ml="auto" textAlign={{ xs: "center", lg: "right" }}>
            <MKTypography variant="body1" fontWeight="bold" mb={6} sx={{ fontSize: "1.125rem" }}>
              辦公時間<br />
              逢星期一至五: 0930-1800<br />
              星期六: 0930-1300<br />
              星期日及公眾假期: 休息<br />
            </MKTypography>
            <MKTypography
                  key={"https://www.facebook.com"}
                  component="a"
                  href={"https://www.facebook.com"}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={3}
                >
                  {<FacebookIcon />}
            </MKTypography>
            <MKTypography
                  key={"https://github.com"}
                  component="a"
                  href={"https://github.com"}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={3}
                >
                  {<InstagramIcon />}
            </MKTypography>
            <MKTypography
                  key={"https://www.youtube.com"}
                  component="a"
                  href={"https://www.youtube.com"}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={3}
                >
                  {<YouTubeIcon />}
            </MKTypography>
            <MKTypography
                  key={"https://www.whatsapp.com"}
                  component="a"
                  href={"https://www.whatsapp.com"}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={3}
                >
                  {<WhatsAppIcon />}
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Footer;
