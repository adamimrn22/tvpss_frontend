import { Box, Stack } from "@mui/material";
import Sidebar from "../../SidebarSuperAdmin.jsx";
import AdminNavbar from "../../components/Navbar/AdminNavbar.jsx";
import AdminSubbarSecondary from "../../components/Navbar/AdminSubbarSecondary.jsx";
import EditUserContent from "./EditUserContent.jsx";

const EditUser = () => {
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
          <AdminSubbarSecondary text="Kemaskini Penguna" />
          <EditUserContent />
        </Stack>
      </Box>
    </>
  );
};

export default EditUser;
