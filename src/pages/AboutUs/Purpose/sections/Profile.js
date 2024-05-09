// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">教學宗旨</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <ul>
                  <li>以正統、實用及有效之方法授泳，使參加者能在短時間內學懂游泳，鍛鍊身體，享受游泳樂趣。</li>
                  <li>透過兒童游泳班過程能夠培養孩子堅定的意志以及堅持的態度。教導他們良好的價值觀，使孩子在重要成長歷程有所得益。</li>
                  <li>十分着重學員或兒童在兒童游泳班內外的身心發展，尤其在兒童游泳班以外的心理與生理的發展。</li>
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
