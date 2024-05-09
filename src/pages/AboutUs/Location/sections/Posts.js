// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import lckp from "assets/images/swimming-pool/lckp.jpg";
import sysmp from "assets/images/swimming-pool/sysmp.jpg";
import mh from "assets/images/swimming-pool/mh.jpg";
import kt from "assets/images/swimming-pool/kt.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            場地介紹
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={lckp}
              title="荔枝角公園游泳池"
              description="地址: 九龍荔枝角荔灣道1號"
              description2="步行路線圖：港鐵美孚站 D1 出口"
              action={{
                type: "external",
                route: "https://www.lcsd.gov.hk/clpss/tc/webApp/Swimming.do?dist=loc6",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={sysmp}
              title="中山紀念公園游泳池"
              description="地址: 香港西營盤東邊街北16號"
              description2="步行路線圖： 港鐵西營盤站A2出口"
              action={{
                type: "external",
                route: "https://www.lcsd.gov.hk/clpss/tc/webApp/Swimming.do?dist=loc3",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={mh}
              title="摩理臣山游泳池"
              description="地址: 香港灣仔愛群道7號"
              description2="步行路線圖：港鐵灣仔站 A1 出口"
              action={{
                type: "external",
                route: "https://www.lcsd.gov.hk/clpss/tc/webApp/Swimming.do?dist=loc2",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={kt}
              title="觀塘游泳池"
              description="地址: 九龍觀塘翠屏道2號"
              description2="步行路線圖：港鐵觀塘站 D1 出口"
              action={{
                type: "external",
                route: "https://www.lcsd.gov.hk/clpss/tc/webApp/Swimming.do?dist=loc9",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
