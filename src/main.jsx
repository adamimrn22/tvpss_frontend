import { ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

import theme from "./theme.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardSuperAdmin from "./SuperAdmin/Dashboard/DashboardSuperAdmin.jsx";
import ViewAllUser from "./SuperAdmin/UserManagement/View/ViewAllUser.jsx";
import AddUser from "./SuperAdmin/UserManagement/Add/AddUser.jsx";
import EditUser from "./SuperAdmin/UserManagement/Edit/EditUser.jsx";
import SettingSuperAdmin from "./SuperAdmin/Setting/ViewSetting.jsx";
import SettingAdminPPD from "./AdminPPD/Setting/ViewSetting.jsx";
import DashboardAdminPPD from "./AdminPPD/Dashboard/DashboardAdminPPD.jsx";
import DashboardAdminState from "./AdminState/Dashboard/DashboardAdminState.jsx";
import ViewAllVersion from "./AdminPPD/VersiTVPSS/ViewAllVersion.jsx";
import TVPSSDetails from "./AdminPPD/VersiTVPSS/TVPSSDetails.jsx";
import ViewAllPermohonan from "./AdminState/SijilPelajar/View/ViewAllPermohonan.jsx";
import JanaSingleSijil from "./AdminState/SijilPelajar/View/janaSijil/single/janaSingle.jsx";
import JanaBulkSijil from "./AdminState/SijilPelajar/View/janaSijil/bulk/janaBulk.jsx";
import LihatBulkSijil from "./AdminState/SijilPelajar/View/lihatSijil/bulk/LihatBulkSijil.jsx";
import StateViewAllVersion from "./AdminState/VersiTVPSS/StateViewAllVersion.jsx";
import StateTVPSSDetails from "./AdminState/VersiTVPSS/StateTVPSSDetails.jsx";
import SettingAdminState from "./AdminState/Setting/ViewSetting.jsx";
import DashboardAdminSchool from "./AdminSchool/Dashboard/DashboardAdminSchool.jsx";
import ViewAllKrewMohon from "./AdminSchool/PermohonanKrew/View/ViewAllKrewMohon.jsx";
import PermohonanKrewDetail from "./AdminSchool/PermohonanKrew/Edit/PermohonanKrewDetail.jsx";
import ViewAllPencapaianPelajar from "./AdminSchool/PencapaianPelajar/ViewAllPencapaianPelajar.jsx";
import ViewBulk from "./AdminSchool/PencapaianPelajar/view/ViewBulk.jsx";
import ViewSingle from "./AdminSchool/PencapaianPelajar/view/viewSingle.jsx";
import AddPencapaian from "./AdminSchool/PencapaianPelajar/crud/addPencapaian.jsx";
import InformasiSekolah from "./AdminSchool/informasiSekolah/InformasiSekolah.jsx";
import TVPSSFormOne from "./AdminSchool/TVPSSVersion/TVPSSFormOne.jsx";
import TVPSSFormTwo from "./AdminSchool/TVPSSVersion/TVPSSFormTwo.jsx";
import ViewEquipment from "./AdminSchool/equipment/ViewEquipment.jsx";
import TambahBarang from "./AdminSchool/equipment/add/TambahBarang.jsx";
import EditBarang from "./AdminSchool/equipment/edit/EditBarang.jsx";
import SettingAdminSchool from "./AdminSchool/Setting/ViewSetting.jsx";
import LoginForm from "./Login.jsx";
import LogoutPage from "./Logout,.jsx";
import ForgotPass from "./ForgotPass.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/LupaKataLaluan",
    element: <ForgotPass />,
  },
  {
    path: "/logout",
    element: <LogoutPage />,
  },
  {
    path: "/SuperAdmin/Dashboard",
    element: <DashboardSuperAdmin />,
  },
  {
    path: "/SuperAdmin/PengurusanPengguna",
    element: <ViewAllUser />,
  },
  {
    path: "/SuperAdmin/PengurusanPengguna/TambahPengguna",
    element: <AddUser />,
  },
  {
    path: "/SuperAdmin/PengurusanPengguna/KemaskiniPengguna",
    element: <EditUser />,
  },
  {
    path: "/SuperAdmin/Tetapan",
    element: <SettingSuperAdmin />,
  },
  {
    path: "/AdminState/Dashboard",
    element: <DashboardAdminState />,
  },
  {
    path: "/AdminState/SijilPelajar",
    element: <ViewAllPermohonan />,
  },
  {
    path: "/AdminState/SijilPelajar/LihatSijil/bulk",
    element: <LihatBulkSijil />,
  },
  {
    path: "/AdminState/SijilPelajar/JanaSijil/bulk",
    element: <JanaBulkSijil />,
  },
  {
    path: "/AdminState/SijilPelajar/JanaSijil/single",
    element: <JanaSingleSijil />,
  },
  {
    path: "/AdminState/SijilPelajar/LihatSijil/single",
    element: <ViewAllPermohonan />,
  },
  {
    path: "/AdminState/ValidasiTVPSS",
    element: <StateViewAllVersion />,
  },
  {
    path: "/AdminState/ValidasiTVPSS/NotifikasiSekolah",
    element: <StateTVPSSDetails />,
  },
  {
    path: "/AdminState/Tetapan",
    element: <SettingAdminState />,
  },
  {
    path: "/AdminPPD/Dashboard",
    element: <DashboardAdminPPD />,
  },
  {
    path: "/AdminPPD/ValidasiTVPSS",
    element: <ViewAllVersion />,
  },
  {
    path: "/AdminPPD/ValidasiTVPSS/KemaskiniSekolah",
    element: <TVPSSDetails />,
  },
  {
    path: "/AdminPPD/Tetapan",
    element: <SettingAdminPPD />,
  },
  {
    path: "/AdminSchool/Dashboard",
    element: <DashboardAdminSchool />,
  },
  {
    path: "/AdminSchool/PermohonanKrew",
    element: <ViewAllKrewMohon />,
  },
  {
    path: "/AdminSchool/PermohonanKrewDetail",
    element: <PermohonanKrewDetail />,
  },
  {
    path: "/AdminSchool/PencapaianPelajar",
    element: <ViewAllPencapaianPelajar />,
  },
  {
    path: "/AdminSchool/PencapaianPelajar/Mohon",
    element: <AddPencapaian />,
  },
  {
    path: "/AdminSchool/PencapaianPelajar/Permohonan/Bulk",
    element: <ViewBulk />,
  },
  {
    path: "/AdminSchool/PencapaianPelajar/Permohonan/Single",
    element: <ViewSingle />,
  },
  {
    path: "/AdminSchool/Informasi",
    element: <InformasiSekolah />,
  },
  {
    path: "/AdminSchool/SubmitTVPSS",
    element: <TVPSSFormOne />,
  },
  {
    path: "/AdminSchool/SubmitTVPSS/Two",
    element: <TVPSSFormTwo />,
  },
  {
    path: "/AdminSchool/BilanganBarang",
    element: <ViewEquipment />,
  },
  {
    path: "/AdminSchool/BilanganBarang/Tambah",
    element: <TambahBarang />,
  },
  {
    path: "/AdminSchool/BilanganBarang/Kemaskini",
    element: <EditBarang />,
  },
  {
    path: "/AdminSchool/Tetapan",
    element: <SettingAdminSchool />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
