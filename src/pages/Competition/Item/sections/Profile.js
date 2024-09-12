// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Profile() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRedirectHundredMFreestyle = (gender, age, title) => {
    navigate("/pages/competition/hundredMFreestyle", { state: { gender, age, title } });
  };

  const handleRedirectHundredMBreaststroke = (gender, age, title) => {
    navigate("/pages/competition/hundredMBreaststroke", { state: { gender, age, title } });
  };

  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">2024年海獅會 40 週年水運會 比賽項目</MKTypography>
              </MKBox>
              <br />
              <MKTypography variant="body1" fontWeight="light" color="text">
                {/* Removed <h3> from within MKTypography */}
              </MKTypography>
              <MKTypography variant="h3">項目 1</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('F', 13, '項目 1 女子 13歲 100M 自由泳')}>女子 13歲 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 2</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('M', 13, '項目 2 男子 13歲 100M 自由泳')}>男子 13歲 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 3</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('F', 14, '項目 3 女子 14歲 100M 自由泳')}>女子 14歲 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 4</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('M', 14, '項目 4 男子 14歲 100M 自由泳')}>男子 14歲 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 5</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('F', 15, '項目 5 女子 15歲以上 100M 自由泳')}>女子 15歲以上 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 6</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('M', 15, '項目 6 男子 15歲以上 100M 自由泳')}>男子 15歲以上 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 7</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('F', 9, '項目 7 女子 9歲 100M 自由泳')}>女子 9歲 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 8</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('M', 9, '項目 8 男子 9歲 100M 自由泳')}>男子 9歲 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 9</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('F', 10, '項目 9 女子 10歲 100M 自由泳')}>女子 10歲 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 10</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('M', 10, '項目 10 男子 10歲 100M 自由泳')}>男子 10歲 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 11</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('F', 11, '項目 11 女子 11歲 100M 自由泳')}>女子 11歲 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 12</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('M', 11, '項目 12 男子 11歲 100M 自由泳')}>男子 11歲 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 13</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('F', 12, '項目 13 女子 12歲 100M 自由泳')}>女子 12歲 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 14</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMFreestyle('M', 12, '項目 14 男子 12歲 100M 自由泳')}>男子 12歲 100M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 15</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('F', 13, '項目 15 女子 13歲 100M 胸泳')}>女子 13歲 100M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 16</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('M', 13, '項目 26 男子 13歲 100M 胸泳')}>男子 13歲 100M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 17</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('F', 14, '項目 17 女子 14歲 100M 胸泳')}>女子 14歲 100M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 18</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('M', 14, '項目 18 男子 14歲 100M 胸泳')}>男子 14歲 100M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 19</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('F', 15, '項目 19 女子 15歲以上 100M 胸泳')}>女子 15歲以上 100M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 20</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('M', 15, '項目 20 男子 15歲以上 100M 胸泳')}>男子 15歲以上 100M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 21</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('F', 9, '項目 21 女子 9歲 100M 胸泳')}>女子 9歲 100M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 22</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('M', 9, '項目 22 男子 9歲 100M 胸泳')}>男子 9歲 100M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 23</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('F', 10, '項目 23 女子 10歲 100M 胸泳')}>女子 10歲 100M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 24</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('M', 10, '項目 24 男子 10歲 100M 胸泳')}>男子 10歲 100M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 25</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('F', 11, '項目 25 女子 11歲 100M 胸泳')}>女子 11歲 100M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 26</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('M', 11, '項目 26 男子 11歲 100M 胸泳')}>男子 11歲 100M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 27</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('F', 12, '項目 27 女子 12歲 100M 胸泳')}>女子 12歲 100M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 28</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('M', 12, '項目 28 男子 12歲 100M 胸泳')}>男子 12歲 100M 胸泳</a></li>
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
