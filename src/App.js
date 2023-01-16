import TrackingHeads from "./TrackingHeads";
import SideBar from "./components/SideBar";
import AboutUs from "./components/AboutUs";

const pages = [
  {
    key: "HOME",
    heading: "HOME",
    component: <div>HOME</div>,
  },
  {
    key: "HEADMAP",
    heading: "HEADMAP",
    component: <div>HEADMAP</div>,
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
    component: <div>STAKING</div>,
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
