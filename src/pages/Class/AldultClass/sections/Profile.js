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
                <MKTypography variant="h3">成人游泳班</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <h3>課程介紹</h3>
                <br />
                <ul>
                  <li>成人可能出於恐懼或兒時因某些原因缺乏學習游泳的機會，導致錯過游泳帶來的種種樂趣和時光。</li>
                  <li>與此同時，都市人生活節奏急促，工作及生活壓力大，再加上缺乏運動，因此藉著游泳加強心肺功能，改善心理壓力及睡眠素質，減少患病的可能性。</li>
                </ul>
                <br />
                <h3>教學內容</h3>
                <br />
                <ul>
                  <li>成人習泳，課程設計貼心，因材施教。教練會因應學員的能力及程度調整課程內容編排，達致更大效益。</li>
                  <li>學員亦可按特別要求自選泳式學習，讓教練為學員度身制定訓練及教授內容。</li>
                </ul>
                <br />
                <h3>學員對象</h3>
                <br />
                <ul>
                  <li>16歲或以上，適合任何程度之人士</li>
                </ul>
                <br />
                <h3>師生比例</h3>
                <br />
                <ul>
                  <li>1:1</li>
                </ul>
                <br />
                <h3>上課地點</h3>
                <br />
                <ul>
                  <li>新界： 城門谷游泳池</li>
                  <li>九龍： 荔枝角公園游泳池、觀塘游泳池</li>
                  <li>港島： 堅尼地城游泳池</li>
                </ul>
                <br />
                <h3>上課時間</h3>
                <br />
                <ul>
                  <li>60分鐘/堂</li>
                </ul>
                <br />
                <h3>堂數</h3>
                <br />
                <ul>
                  <li>一期 8-9 堂</li>
                </ul>
                <br />
                <h3>學費</h3>
                <br />
                <ul>
                  <li>$400/堂</li>
                </ul>
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
