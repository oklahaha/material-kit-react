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
                <MKTypography variant="h3">基礎游泳班</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <h3>課程介紹</h3>
                <br />
                <ul>
                <li>啟發學員對游泳產生及具持續性的興趣（Create and Maintain Interest），幫助他們提高學習效果。本會會將程度相若之學員歸為同組，以收最大效益。</li>
                  <li>可因應要求自由組合上課時間，每星期上課之次數具彈性。課程採用小組形式教授，照顧每一位學員的需要，還有一批助教，協助提高教學質素。</li>
                </ul>
                <br />
                <h3>教學內容</h3>
                <br />
                <ul>
                  <li>由基礎技巧開始 – 換氣，浮身，踢水，划手</li>
                  <li>以捷泳（自由式）作為首個學習的泳式</li>
                  <li>目標為學懂四種泳式（捷泳、胸泳、抑泳及蝶泳）</li>
                </ul>
                <br />
                <h3>學員對象</h3>
                <br />
                <ul>
                  <li>6歲以下能徒手完成5米距離   或</li>
                  <li>6至16歲不懂游泳   或</li>
                  <li>未能達競賽訓練班水平（任何3種泳式連續完成各200米或上）</li>
                </ul>
                <br />
                <h3>師生比例</h3>
                <br />
                <ul>
                  <li>1:2</li>
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
