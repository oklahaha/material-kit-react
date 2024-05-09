// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">報名需知</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <h3>報名相關</h3>
                <br />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>報學泳班前需注意什麼事項？</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      1. 報學人士需要先了解學員之游泳程度，以便選擇合適之泳班。
                    </Typography>
                    <br />
                    <Typography>
                      2. 報學人士可以先參考網站內「課程介紹」，了解泳班架構。
                    </Typography>
                    <br />
                    <Typography>
                      3. 報名前，需細閱網站內「泳班條款」、「報名流程」、「報名須知」及「學員守則」，以上資料亦可見於「泳班章程及報名表」。
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>泳班是否只接受初學者報名？</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      1. 泳會之泳班適合由初學到有一定游泳能力的人士報名。
                    </Typography>
                    <br />
                    <Typography>
                      2. 泳會之泳班分為多個類別，照顧由 2 歲開始至 16 歲或以上之成人，並按「泳天游泳十級進度表」教授適切之游泳技術。
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>泳班除了學費以外，尚有沒有其他收費？</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      1. 初次報學泳天泳班之學員於首次成功報名時將免費獲贈泳帽 1 頂。
                    </Typography>
                    <br />
                    <Typography>
                      2. 所有泳班學員如遺失泳帽，須繳付 $30 作購買新泳帽 (「泳隊預備班」及四式改良班學員須付 $25)。
                    </Typography>
                    <br />
                    <Typography>
                      3. 家長或監護人必須自費進入康文署轄下公眾泳池觀課 (如泳班於康文署轄下公眾泳池休息時間舉行，家長或監護人均不可進場觀課)。
                    </Typography>
                    <br />
                    <Typography>
                      4. 如學員欲申領泳班證書，而於泳池或辦公室自行領取，泳天將收取 $50 行政費；或選擇以快遞方式寄達學員指定地址，泳天將收取 $120 行政費。行政程序需時 14 個工作天。
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <br />
                <h3>課堂安排</h3>
                <br />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>學員是否可以選擇教練？</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      1. 學員不可以指定教練授課，泳天亦保留更改課程原定之教練、上課時間及地點之權利。
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>泳池池水會否太凍？上水後會否讓年紀小的學員著涼？</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      1. 泳班的游泳池均為溫水游泳池，池水保持在攝氏 28 至 29 度左右 (實際水溫有機會出現輕微變化)，適合泳班學員進行習泳之用。
                    </Typography>
                    <br />
                    <Typography>
                      2. 泳班的游泳池為室內溫水游泳池，可以將溫差減到最少，而且不會受天雨或室外溫度影響。
                    </Typography>
                    <br />
                    <Typography>
                      3. 當泳班完結後，學員上水時，教練會先安排學員穿上自行準備之保暖衣物才引領學員進更衣室，減少著涼機會。
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
