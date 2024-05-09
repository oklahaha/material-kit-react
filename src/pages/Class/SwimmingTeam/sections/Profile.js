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
                <MKTypography variant="h3">泳隊訓練班</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <h3>課程介紹</h3>
                <br />
                <ul>
                  <li>目的爲提升各學員之泳術及體能，應付日後各類形之學界/分齡比賽等，務求令學員全面提升。</li>
                  <li>除配合一系列特定水陸器材訓練加強效果，更於今年起率先引入歐洲高端科技產品，協助提供泳員數據分析及詳細記錄，使教練充分掌握泳員狀態, 制定更有效訓練。</li>
                  <li>以月費形式每星期最多可操練6日，學員可按照自己的需要決定上課之多寡或安排密集式訓練。</li>
                </ul>
                <br />
                <h3>教學內容</h3>
                <br />
                <ul>
                  <li>系統性訓練，建立學員紀律；加強其體能及游泳距離，從而提升泳術技巧及速度，改善耐力和競賽技術。</li>
                </ul>
                <br />
                <h3>學員對象</h3>
                <br />
                <ul>
                  <li>任何學員（不論年齡）能以3種泳式連續完成各200米或上，並通過教練評核方可參加</li>
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
                  <li>120分鐘/堂</li>
                </ul>
                <br />
                <h3>堂數</h3>
                <br />
                <ul>
                  <li>每月形式 （每星期上2日）</li>
                </ul>
                <br />
                <h3>學費</h3>
                <br />
                <ul>
                  <li>$1000/月</li>
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
