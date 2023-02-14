import TrackingHeads from "./components/TrackingHeads";
import SideBar from "./components/SideBar";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Headmap from "./components/Headmap";
import Staking from "./components/Staking";
import SneakerHeads from "./components/SneakerHeads";
import Shop from "./components/Shop";

const pages = [
  {
    key: "HOME",
    heading: "HOME",
    component: <Home />,
  },
  {
    key: "HEADMAP",
    heading: "HEADMAP",
    component: <Headmap />,
  },
  {
    key: "SHOP",
    heading: "SHOP",
    component: <Shop />,
  },
  {
    key: "ABOUTUS",
    heading: "ABOUT US",
    component: <AboutUs />,
  },
];
const extraPages = [
  {
    key: "SNEAKERHEADS",
    heading: "SNEAKER HEADS",
    component: <SneakerHeads />,
  },
  {
    key: "TRACKINGHEADS",
    heading: "TRACKING HEADS",
    component: <TrackingHeads />,
  },
  {
    key: "STAKING",
    heading: "STAKING",
    component: <Staking />,
  },
];

export default function App() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <SideBar pages={pages} extraPages={extraPages} />
    </div>
  );
}
