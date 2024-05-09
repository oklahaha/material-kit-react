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
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">補堂安排</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <br />
                <ul>
                  <li>游泳訓練的連貫性十分重要，為了達到合理的成效，學員必須盡量依時出席。</li>
                  <br />
                  <li>不論任何事假/病假，一期只有一堂補堂，並於指定補課日同時間進行。若未能出席補課日，則作棄權論</li>
                  <br />
                  <li>如上堂前沒有請假及通知則作無故缺席論，本會並不安排補堂。</li>
                  <br />
                  <li>天文台發出紅色、黑色暴雨警告或8號風球以上信號，所有泳班及陸上訓練取消並不設補堂。</li>
                  <br />
                  <li> 本會有最終決定權利修改、批准及拒絕所有調堂之申請而不作另行通知。本會保留解釋及更改本資料內容的所有權利。</li>
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
