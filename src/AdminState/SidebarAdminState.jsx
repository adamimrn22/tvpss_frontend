import Sidebar from "./components/Sidebar"; // Adjust the import path as needed
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
const itemsAdmin = [
  {
    icon: DashboardRoundedIcon,
    text: "Dashboard",
    path: "/AdminState/Dashboard",
  }, // Specify paths for each item
  {
    icon: CheckBoxOutlinedIcon,
    text: "Jana Sijil Pelajar",
    path: "/AdminState/SijilPelajar",
  },
  {
    icon: InfoOutlinedIcon,
    text: "Informasi TVPSS Sekolah",
    path: "/AdminState/ValidasiTVPSS",
  },
];

const SidebarAdminPPD = () => {
  return (
    <div>
      <Sidebar items={itemsAdmin} />
    </div>
  );
};

export default SidebarAdminPPD;
