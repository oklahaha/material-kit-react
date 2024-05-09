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
                <MKTypography variant="h3">幼兒游泳班</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <h3>課程介紹</h3>
                <br />
                <ul>
                  <li>幼兒期是發育最旺盛的時期，利用這黃金時間發展游泳活動，對身心、智力發展及反應能力有極大幫助。</li>
                  <li>課程以小班教學加上正規訓練，讓他們從愉快過程中學習及培養興趣，為日後游泳發展打好基礎。</li>
                </ul>
                <br />
                <h3>教學內容</h3>
                <br />
                <ul>
                  <li>以循序漸進之教學方針: 讓幼兒先熟習水性，克服畏水心理，再教授換氣、浮身和打腿等基礎動作，進而教授自由泳全式。課堂中除了讓小朋友學會游泳，更讓他們學習辨識、聆聽和跟隨指示及規矩。</li>
                </ul>
                <br />
                <h3>學員對象</h3>
                <br />
                <ul>
                  <li>3 – 6歲完全不懂游泳之幼兒。</li>
                </ul>
                <br />
                <h3>師生比例</h3>
                <br />
                <ul>
                  <li>1:2 (照顧幼小學員安全性為前提)</li>
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
                  <li>$250/堂</li>
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
