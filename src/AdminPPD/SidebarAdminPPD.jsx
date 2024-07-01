import Sidebar from "./components/Sidebar"; // Adjust the import path as needed
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const itemsAdmin = [
  {
    icon: DashboardRoundedIcon,
    text: "Dashboard",
    path: "/AdminPPD/Dashboard",
  }, // Specify paths for each item
  {
    icon: InfoOutlinedIcon,
    text: "Informasi TVPSS Sekolah",
    path: "/AdminPPD/ValidasiTVPSS",
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
