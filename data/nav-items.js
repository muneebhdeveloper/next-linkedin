import { AiFillHome, AiFillMessage, AiFillBell } from "react-icons/ai";
import { BsPeopleFill, BsFillBagDashFill } from "react-icons/bs";

const navItems = [
  {
    name: "Home",
    icon: AiFillHome,
    link: "/",
  },
  {
    name: "My Network",
    icon: BsPeopleFill,
    link: "/",
  },
  {
    name: "Jobs",
    icon: BsFillBagDashFill,
    link: "/",
  },
  {
    name: "Messaging",
    icon: AiFillMessage,
    link: "/",
  },
  {
    name: "Notifications",
    icon: AiFillBell,
    link: "/",
  },
];

export default navItems;
