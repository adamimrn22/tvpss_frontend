import { Box, Stack } from "@mui/material";
import Sidebar from "../SidebarSuperAdmin.jsx";
import AdminNavbar from "../components/Navbar//AdminNavbar.jsx";
import ContentPage from "./ContentPage.jsx";
import AdminSubBar from "../components/Navbar/AdminSubbar.jsx";

const DashboardSuperAdmin = () => {
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
          <AdminSubBar />
          <ContentPage />
        </Stack>
      </Box>
    </>
  );
};

export default DashboardSuperAdmin;
