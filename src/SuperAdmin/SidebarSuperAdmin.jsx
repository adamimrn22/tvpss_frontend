import Sidebar from "./components/Sidebar"; // Adjust the import path as needed
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";

const itemsAdmin = [
  {
    icon: DashboardRoundedIcon,
    text: "Dashboard",
    path: "/SuperAdmin/Dashboard",
  }, // Specify paths for each item
  {
    icon: GroupRoundedIcon,
    text: "Pengurusan Pengguna",
    path: "/SuperAdmin/PengurusanPengguna",
  },
];

const SidebarSuperAdmin = () => {
  return (
    <div>
      <Sidebar items={itemsAdmin} />
    </div>
  );
};

export default SidebarSuperAdmin;
