/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import PoolIcon from '@mui/icons-material/Pool';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WaterIcon from '@mui/icons-material/Water';

// About Us
import Introduction from "layouts/pages/aboutus/introduction";
import Purpose from "layouts/pages/aboutus/purpose";
import Coach from "layouts/pages/aboutus/coach";
import Location from "layouts/pages/aboutus/location";

// Class
import AldultClass from "layouts/pages/class/aldultClass";
import BasicClass from "layouts/pages/class/basicClass";
import KidClass from "layouts/pages/class/kidClass";
import SwimmingTeam from "layouts/pages/class/swimmingTeam";

// Notice
import Arrangement from "layouts/pages/notice/arrangement";
import Method from "layouts/pages/notice/method";
import Notice from "layouts/pages/notice/notice";
import Weather from "layouts/pages/notice/weather";

// Competition
import Athlete from "layouts/pages/competition/athlete";

// Contact Us
import ContactUs from "layouts/pages/contactus/";

const routes = [
  {
    name: "關於我們",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "關於我們",
        collapse: [
          {
            name: "本會介紹",
            route: "/pages/about-us/introduction",
            component: <Introduction />,
          },
          {
            name: "教學宗旨",
            route: "/pages/about-us/purpose",
            component: <Purpose />,
          },
          {
            name: "教練介紹",
            route: "/pages/about-us/coach",
            component: <Coach />,
          },
          {
            name: "上課地點",
            route: "/pages/about-us/location",
            component: <Location />,
          }
        ]
      },
      {
        name: "聯絡我們",
        collapse: [
          {
            name: "聯絡我們",
            route: "/pages/contactus",
            component: <ContactUs />,
          }
        ]
      }
    ]
  },
  {
    name: "課程介紹",
    icon: <PoolIcon />,
    collapse: [
      {
        name: "幼兒游泳班",
        route: "/pages/class/kid-class",
        component: <KidClass />,
      },
      {
        name: "基礎游泳班",
        route: "/pages/class/basic-class",
        component: <BasicClass />,
      },
      {
        name: "成人游泳班",
        route: "/pages/class/aldult-class",
        component: <AldultClass />,
      },
      {
        name: "泳隊訓練班",
        route: "/pages/class/swimming-team",
        component: <SwimmingTeam />,
      },
    ],
  },
  {
    name: "家長需知",
    icon: <NotificationsIcon />,
    collapse: [
      {
        name: "報名方法",
        route: "/pages/notice/method",
        component: <Method />,
      },
      {
        name: "報名需知",
        route: "/pages/notice/notice",
        component: <Notice />,
      },
      {
        name: "天氣指引",
        route: "/pages/notice/weather",
        component: <Weather />,
      },
      {
        name: "補堂指引",
        route: "/pages/notice/arrangement",
        component: <Arrangement />,
      },
    ],
  },
  {
    name: "水運會",
    icon: <WaterIcon />,
    collapse: [
      {
        name: "參賽者名單",
        route: "/pages/competition/athlete",
        component: <Athlete />,
      },
    ],
  },
]

export default routes;
