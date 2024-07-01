import { Box, Stack } from "@mui/material";
import Sidebar from "../../SidebarAdminSchool.jsx";
import AdminNavbar from "../components/Navbar/AdminNavbar.jsx";
import AdminSubbarSecondary from "../components/Navbar/AdminSubbarSecondary.jsx";
import TambahBarangContent from "./EditBarangContent.jsx";

const EditBarang = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Stack
          direction="column"
          flex="1"
          sx={{
            ml: { sm: "250px", md: "300px" }, // Adjust the margin-left to the width of the sidebar
          }}
        >
          <AdminNavbar />
          <AdminSubbarSecondary text="Pengurusan Bilangan Barang" />
          <TambahBarangContent />
        </Stack>
      </Box>
    </>
  );
};

export default EditBarang;
