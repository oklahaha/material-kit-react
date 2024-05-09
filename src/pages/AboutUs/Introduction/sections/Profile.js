// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/swim.png";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">泳會介紹</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                游泳會成立於 1989 年 ，擁有豐富舉辦游泳訓練班、培訓專業游泳運動員的經驗。
                泳會致力將科學的方法和技術，應用到泳會的教學和管理中。
                一直推廣香港游泳運動以及青少年培訓。
                於2020年在香港多個區域擁有4分校。資質優良 ，深受家長及學生愛戴已於觀塘，荔枝角，港島東，維多利亞公園，皆有分校。
                <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
