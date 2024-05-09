// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              教練團隊
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              本會游泳教練通過嚴格認證及有大部份教練為前業餘游泳運動員，均經過大量的訓練及培訓
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="教練"
                position={{ color: "info", label: "泳會會長" }}
                description="擁有13年以上教學經驗"
                description2="中國香港游泳總會註冊游泳教練"
                description3="香港拯溺總會泳池救生章"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="教練"
                position={{ color: "info", label: "教學顧問" }}
                description="擁有10年以上教學經驗"
                description2="中國香港游泳總會註冊游泳教練"
                description3="香港拯溺總會泳池救生章"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="教練"
                position={{ color: "info", label: "泳班主教練" }}
                description="擁有5年以上教學經驗"
                description2="中國香港游泳總會註冊游泳教練"
                description3="香港拯溺總會泳池救生章"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="教練"
                position={{ color: "info", label: "泳班高級教練" }}
                description="擁有6年以上教學經驗"
                description2="中國香港游泳總會註冊游泳教練"
                description3="香港拯溺總會泳池救生章"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="教練"
                position={{ color: "info", label: "營運總監" }}
                description="擁有8年以上教學經驗"
                description2="中國香港游泳總會註冊游泳教練"
                description3="香港拯溺總會泳池救生章"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="教練"
                position={{ color: "info", label: "首席課程經理" }}
                description="擁有10年以上教學經驗"
                description2="中國香港游泳總會註冊游泳教練"
                description3="香港拯溺總會泳池救生章"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
