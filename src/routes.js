
// Material Dashboard 2 React layouts
import Home from "layouts/dashboard";
import ConsumerProfile from "layouts/consumerprofile";
import Billing from "layouts/billing";
import MeterReading from "layouts/meter_reading";
import Rnh from "layouts/rnh";
import About from "layouts/about";
import BilingDeatails from "layouts/billing_details";
import Billingadjustment from "layouts/billing_adjustment";
import Payment from "layouts/payment";
import Cds from "layouts/cds";

import Report from "layouts/Chart/chart";
// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "dashboard",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/dashboard",
    component: <Home />,
  },
  {
    type: "collapse",
    name: "Consumer Basic Profile",
    key: "consumer",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/consumer",
    component: <ConsumerProfile />,
    // component: <SideLogin />,
  },
  {
    type: "collapse",
    name: "Billing Parameters",
    key: "billing-parameters",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/billing-parameters",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Meter Reading",
    key: "meter-reading",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/meter-reading",
    component: <MeterReading />,
  },
  {
    type: "collapse",
    name: "Biling Details",
    key: "biling-details",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/biling-details",
    component: <BilingDeatails />,
  },
  {
    type: "collapse",
    name: "Biling Adjustment Details",
    key: "biling-adjustment",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/biling-adjustment",
    component: <Billingadjustment />,
  },
  {
    type: "collapse",
    name: "Payment Detail",
    key: "payment-details",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/payment-details",
    component: <Payment />,
  },
  {
    type: "collapse",
    name: "Customer Data Summary",
    key: "customer-data-summary",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/customer-data-summary",
    component: <Cds />,
  },
  {
    type: "collapse",
    name: "Refrence Number History",
    key: "refrence-number-history",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/refrence-number-history",
    component: <Rnh />,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/report",
    component: <Report />,
  },
  {
    type: "collapse",
    name: "About Us",
    key: "about",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/about",
    component: <About />,
  },
];

export default routes;
