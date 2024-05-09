// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <h3>報名方法</h3>
                <br />
                <ul>
                  <li>下載報名表</li>
                  <li>填妥報名表格電郵、傳真、WhatsApp留位致本會</li>
                  <li>本會職員收到後會回覆家長確認及提供付款方法</li>
                </ul>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
