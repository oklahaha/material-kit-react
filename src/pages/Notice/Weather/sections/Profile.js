// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MuiAvatarGroup from "@mui/material/AvatarGroup";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKAvatar from "components/MKAvatar";

// Images
import thunderstorm from "assets/images/thunderstorm.png";
import amber from "assets/images/amber.png";
import signal3 from "assets/images/signal-3.png";
import red from "assets/images/red.png";
import signal8 from "assets/images/signal-8.png";
import black from "assets/images/black.png";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">惡劣天氣安排</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <h3>一般安排：</h3>
                <br />
                <ul>
                  <li>公眾游泳池有開放的安全標準。簡單來說，游泳池開放，游泳班將會如常進行。</li>
                  <li>天文台發出之全港性警告(如:雷暴警告)與各區天氣實際情況未必一致，最新安排請聯絡本會或負責教練為準。</li>
                  <li>家長及學員是否上堂，請按自身情況決定，因事請假(不需原因及解釋)，可以補一堂。</li>
                </ul>
                <br />
              </MKTypography>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <h3>惡劣天氣或特殊情況安排：</h3>
                <br />
                <h4>如常進行</h4>
                <Grid container justifyContent="center">
                  <MuiAvatarGroup spacing={12}>
                    <MKAvatar src={thunderstorm} alt="thunderstorm" size="lg" />
                    <MKAvatar src={amber} alt="amber" size="lg" />
                    <MKAvatar src={signal3} alt="signal3" size="lg" />
                    <MKAvatar src={red} alt="red" size="lg" />
                  </MuiAvatarGroup>
                </Grid>
                <br />
                <p>如雷暴警告或大雨，泳班一般會照常上課，本會教練將按個別游泳池之規定及當時情況作出適當安排 (如認為泳班可繼續進行，但不宜下水時，將會安排學員於池邊或有蓋地方學習游泳姿勢)。</p>
                <br />
                <h4>游泳班取消</h4>
                <Grid container justifyContent="center">
                  <MuiAvatarGroup spacing={12}>
                    <MKAvatar src={signal8} alt="signal8" size="lg" />
                    <MKAvatar src={black} alt="black" size="lg" />
                  </MuiAvatarGroup>
                </Grid>
                <br />
                <p>8 號颱風訊號生效前兩小時及以後之泳班將取消上課。 例:天文台預報下午 6 時將改發 8 號或以上颱風訊號；當天下午 4 時及以後開始之泳班將會取消。</p>
                <p>暴雨警告訊號(視乎泳池及按照現有上課時間)生效前兩小時之泳班將取消上課。 例:天文台下午 3 時發出暴雨警告訊號(視乎泳池)，當天下午5時或之前的泳班將會取消。</p>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
