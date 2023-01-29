import TrackingHeads from "./components/TrackingHeads";
import SideBar from "./components/SideBar";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Headmap from "./components/Headmap";
import Staking from "./components/Staking";

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
    component: <div>SHOP</div>,
  },
  {
    key: "ABOUTUS",
    heading: "ABOUT US",
    component: <AboutUs />,
  },
];
const extraPages = [
  {
    key: "STAKING",
    heading: "STAKING",
    component: <Staking />,
  },
  {
    key: "SNEAKERHEADS",
    heading: "SNEAKER HEADS",
    component: <div>SNEAKERHEADS</div>,
  },
  {
    key: "TRACKINGHEADS",
    heading: "TRACKING HEADS",
    component: <TrackingHeads />,
  },
];

export default function App() {
  return (
    <div>
      <SideBar pages={pages} extraPages={extraPages} />
    </div>
  );
}
