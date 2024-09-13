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

  const handleRedirectFiftyMFreeStyle = (gender, age, title) => {
    navigate("/pages/competition/fiftyMFreeStyle", { state: {gender, age, title } });
  };

  const handleRedirectFiftyMBackstroke = (gender, age, title) => {
    navigate("/pages/competition/fiftyMBackstroke", {state: {gender, age, title } });
  };

  const handleRedirectFiftyMBreaststroke = (gender, age, title) => {
    navigate("/pages/competition/fiftyMBreaststroke", {state: {gender, age, title } });
  };

  const handleRedirectFiftyMButterflystroke = (gender, age, title) => {
    navigate("/pages/competition/fiftyMButterflystroke", {state: {gender, age, title } });
  };

  const handleRedirectFiftyMKickBoard = (gender, age, title) => {
    navigate("/pages/competition/fiftyMKickBoard", {state: {gender, age, title } });
  };

  const handleRedirectEliteHundredMFreestyle = (title) => {
    navigate("/pages/competition/eliteHundredMFreestyle", {state: {title } });
  };

  const handleRedirectEliteHundredMBreaststroke = (title) => {
    navigate("/pages/competition/eliteHundredMBreaststroke", {state: {title } });
  };

  const handleRedirectEliteFiftyMFreesStyle = (title) => {
    navigate("/pages/competition/eliteFiftyMFreeStyle", {state: {title } });
  };

  const handleRedirectEliteFiftyMBackstroke = (title) => {
    navigate("/pages/competition/eliteFiftyMBackstroke", {state: {title } });
  };

  const handleRedirectEliteFiftyMBreaststroke = (title) => {
    navigate("/pages/competition/eliteFiftyMBreaststroke", {state: {title } });
  };

  const handleRedirectEliteFiftyMButterflystroke = (title) => {
    navigate("/pages/competition/eliteFiftyMButterflystroke", {state: {title } });
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
              <MKTypography variant="h3">項目 A</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectEliteHundredMFreestyle('項目 A 精英組 男女子混合 100M 自由泳')}>精英組 男女子混合 100M 自由泳</a></li>
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
                  <li><a onClick={() => handleRedirectHundredMBreaststroke('M', 13, '項目 16 男子 13歲 100M 胸泳')}>男子 13歲 100M 胸泳</a></li>
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
              <MKTypography variant="h3">項目 B</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectEliteHundredMBreaststroke('項目 B 精英組 男女子混合 100M 胸泳')}>精英組 男女子混合 100M 胸泳</a></li>
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
              <MKTypography variant="h3">項目 29</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('F', 13, '項目 29 女子 13歲 50M 自由泳')}>女子 13歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 30</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('M', 13, '項目 30 男子 13歲 50M 自由泳')}>男子 13歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 31</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('F', 14, '項目 31 女子 14歲 50M 自由泳')}>女子 14歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 32</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('M', 14, '項目 32 男子 14歲 50M 自由泳')}>男子 14歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 33</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('F', 15, '項目 33 女子 15歲以上 50M 自由泳')}>女子 15歲以上 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 34</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('M', 15, '項目 34 男子 15歲以上 50M 自由泳')}>男子 15歲以上 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 C</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectEliteFiftyMFreesStyle('項目 C 精英組 男女子混合 50M 自由泳')}>精英組 男女子混合 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 35</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('F', 7, '項目 35 女子 7歲 50M 自由泳')}>女子 7歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 36</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('M', 7, '項目 36 男子 7歲 50M 自由泳')}>男子 7歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 37</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('F', 8, '項目 37 女子 8歲 50M 自由泳')}>女子 8歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 38</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('M', 7, '項目 38 男子 8歲 50M 自由泳')}>男子 8歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 39</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('F', 9, '項目 39 女子 9歲 50M 自由泳')}>女子 9歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 40</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('M', 9, '項目 40 男子 9歲 50M 自由泳')}>男子 9歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 41</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('F', 10, '項目 41 女子 10歲 50M 自由泳')}>女子 10歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 42</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('M', 10, '項目 42 男子 10歲 50M 自由泳')}>男子 10歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 43</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('F', 11, '項目 43 女子 11歲 50M 自由泳')}>女子 11歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 44</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('M', 11, '項目 44 男子 11歲 50M 自由泳')}>男子 11歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 45</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('F', 12, '項目 45 女子 12歲 50M 自由泳')}>女子 12歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 46</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMFreeStyle('M', 12, '項目 46 男子 12歲 50M 自由泳')}>男子 12歲 50M 自由泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 47</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('F', 13, '項目 47 女子 13歲 50M 背泳')}>女子 13歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 48</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('M', 13, '項目 47 男子 13歲 50M 背泳')}>男子 13歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 49</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('F', 14, '項目 49 女子 14歲 50M 背泳')}>女子 14歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 50</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('M', 14, '項目 50 男子 14歲 50M 背泳')}>男子 14歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 51</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('F', 15, '項目 51 女子 15歲以上 50M 背泳')}>女子 15歲以上 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 52</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('M', 15, '項目 52 男子 15歲以上 50M 背泳')}>男子 15歲以上 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 D</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectEliteFiftyMBackstroke('項目 D 精英組 男女子混合 50M 背泳')}>精英組 男女子混合 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 53</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('F', 7, '項目 53 女子 7歲 50M 背泳')}>女子 7歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 54</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('M', 7, '項目 54 男子 7歲 50M 背泳')}>男子 7歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 55</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('F', 8, '項目 55 女子 8歲 50M 背泳')}>女子 8歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 56</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('M', 8, '項目 56 男子 8歲 50M 背泳')}>男子 8歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 57</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('F', 9, '項目 57 女子 9歲 50M 背泳')}>女子 9歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 58</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('M', 9, '項目 58 男子 9歲 50M 背泳')}>男子 9歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 59</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('F', 10, '項目 59 女子 10歲 50M 背泳')}>女子 10歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 60</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('M', 10, '項目 60 男子 10歲 50M 背泳')}>男子 10歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 61</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('F', 11, '項目 61 女子 11歲 50M 背泳')}>女子 11歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 62</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('M', 11, '項目 62 男子 11歲 50M 背泳')}>男子 11歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 63</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('F', 12, '項目 63 女子 12歲 50M 背泳')}>女子 12歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 64</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBackstroke('M', 12, '項目 64 男子 12歲 50M 背泳')}>男子 12歲 50M 背泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 65</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('F', 13, '項目 65 女子 13歲 50M 胸泳')}>女子 13歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 66</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('M', 13, '項目 66 男子 13歲 50M 胸泳')}>男子 13歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 67</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('F', 14, '項目 67 女子 14歲 50M 胸泳')}>女子 14歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 68</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('M', 14, '項目 68 男子 14歲 50M 胸泳')}>男子 14歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 69</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('F', 15, '項目 69 女子 15歲以上 50M 胸泳')}>女子 15歲以上 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 70</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('M', 15, '項目 70 男子 15歲以上 50M 胸泳')}>男子 15歲以上 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 E</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectEliteFiftyMBreaststroke('項目 E 精英組 男女子混合 50M 胸泳')}>精英組 男女子混合 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 71</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('F', 7, '項目 71 女子 7歲 50M 胸泳')}>女子 7歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 72</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('M', 7, '項目 72 男子 7歲 50M 胸泳')}>男子 7歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 73</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('F', 8, '項目 73 女子 8歲 50M 胸泳')}>女子 8歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 74</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('M', 8, '項目 74 男子 8歲 50M 胸泳')}>男子 8歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 75</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('F', 9, '項目 75 女子 9歲 50M 胸泳')}>女子 9歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 76</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('M', 9, '項目 76 男子 9歲 50M 胸泳')}>男子 9歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 77</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('F', 10, '項目 77 女子 10歲 50M 胸泳')}>女子 10歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 78</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('M', 10, '項目 78 男子 10歲 50M 胸泳')}>男子 10歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 79</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('F', 11, '項目 79 女子 11歲 50M 胸泳')}>女子 11歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 80</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('M', 11, '項目 80 男子 11歲 50M 胸泳')}>男子 11歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 81</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('F', 12, '項目 81 女子 12歲 50M 胸泳')}>女子 12歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 82</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMBreaststroke('M', 12, '項目 82 男子 12歲 50M 胸泳')}>男子 12歲 50M 胸泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 83</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('F', 13, '項目 83 女子 13歲 50M 蝶泳')}>女子 13歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 84</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('M', 13, '項目 84 男子 13歲 50M 蝶泳')}>男子 13歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 85</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('F', 14, '項目 85 女子 14歲 50M 蝶泳')}>女子 14歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 86</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('M', 14, '項目 86 男子 14歲 50M 蝶泳')}>男子 14歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 87</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('F', 15, '項目 87 女子 15歲以上 50M 蝶泳')}>女子 15歲以上 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 88</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('M', 15, '項目 88 男子 15歲以上 50M 蝶泳')}>男子 15歲以上 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 F</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectEliteFiftyMButterflystroke('項目 F 精英組 男女混合 50M 蝶泳')}>精英組 男女混合 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 89</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('F', 8, '項目 89 女子 8歲 50M 蝶泳')}>女子 8歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 90</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('M', 8, '項目 90 男子 8歲 50M 蝶泳')}>男子 8歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 91</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('F', 9, '項目 91 女子 9歲 50M 蝶泳')}>女子 9歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 92</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('M', 9, '項目 92 男子 9歲 50M 蝶泳')}>男子 9歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 93</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('F', 10, '項目 93 女子 10歲 50M 蝶泳')}>女子 10歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 94</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('M', 10, '項目 94 男子 10歲 50M 蝶泳')}>男子 10歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 95</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('F', 11, '項目 95 女子 11歲 50M 蝶泳')}>女子 11歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 96</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('M', 11, '項目 96 男子 11歲 50M 蝶泳')}>男子 11歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 97</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('F', 12, '項目 97 女子 12歲 50M 蝶泳')}>女子 12歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 98</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMButterflystroke('M', 12, '項目 98 男子 12歲 50M 蝶泳')}>男子 12歲 50M 蝶泳</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 99</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMKickBoard('F', 6, '項目 99 女子 6歲以下 50M 浮板')}>女子 6歲以下 50M 浮板</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 100</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMKickBoard('M', 6, '項目 100 男子 6歲以下 50M 浮板')}>男子 6歲以下 50M 浮板</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 101</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMKickBoard('F', 7, '項目 101 女子 7歲 50M 浮板')}>女子 7歲 50M 浮板</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 102</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMKickBoard('M', 7, '項目 102 男子 7歲 50M 浮板')}>男子 7歲 50M 浮板</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 103</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMKickBoard('F', 8, '項目 103 女子 8歲 50M 浮板')}>女子 8歲 50M 浮板</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 104</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMKickBoard('M', 8, '項目 104 男子 8歲 50M 浮板')}>男子 8歲 50M 浮板</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 105</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMKickBoard('F', 9, '項目 105 女子 9歲 50M 浮板')}>女子 9歲 50M 浮板</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 106</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMKickBoard('M', 9, '項目 106 男子 9歲 50M 浮板')}>男子 9歲 50M 浮板</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 107</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMKickBoard('F', 10, '項目 107 女子 10歲 50M 浮板')}>女子 10歲 50M 浮板</a></li>
                </ul>
              </MKTypography>
              <MKTypography variant="h3">項目 108</MKTypography>
              <MKTypography variant="body1">
                <ul>
                  <li><a onClick={() => handleRedirectFiftyMKickBoard('M', 10, '項目 108 男子 10歲 50M 浮板')}>男子 10歲 50M 浮板</a></li>
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
