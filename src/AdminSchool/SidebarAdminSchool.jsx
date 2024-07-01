import Sidebar from "./components/Sidebar"; // Adjust the import path as needed
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
const itemsAdmin = [
  {
    icon: DashboardRoundedIcon,
    text: "Dashboard",
    path: "/AdminSchool/Dashboard",
  }, // Specify paths for each item
  {
    icon: PeopleAltOutlinedIcon,
    text: "Permohonan Krew",
    path: "/AdminSchool/PermohonanKrew",
  },
  {
    icon: CheckBoxOutlinedIcon,
    text: "Pencapaian Pelajar",
    path: "/AdminSchool/PencapaianPelajar",
  },
  {
    icon: InfoOutlinedIcon,
    text: "Informasi Sekolah",
    path: "/AdminSchool/Informasi",
  },
  {
    icon: AllInclusiveOutlinedIcon,
    text: "Bilangan Barang",
    path: "/AdminSchool/BilanganBarang",
  },
  {
    icon: SyncOutlinedIcon,
    text: "Submit Versi TVPSS",
    path: "/AdminSchool/SubmitTVPSS",
  },
];

const SidebarAdminSchool = () => {
  return (
    <div>
      <Sidebar items={itemsAdmin} />
    </div>
  );
};

export default SidebarAdminSchool;
