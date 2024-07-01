// AllUser.jsx
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Sidebar from "../../../../SidebarAdminState.jsx";
import AdminNavbar from "../../../../components/Navbar/AdminNavbar.jsx";
import AdminSubbarSecondary from "../../../../components/Navbar/AdminSubbarSecondary.jsx";
import JanaBulkContent from "./janaBulkContent.jsx";
// import JanaSingleContent from "./janaSingleContent.jsx";

const JanaBulkSijil = () => {
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [severity, setSeverity] = useState("success"); // Default to 'success'

  useEffect(() => {
    // Get the alert message and severity from localStorage
    const message = localStorage.getItem("showAlert");
    const type = localStorage.getItem("alertSeverity") || "success"; // Default to 'success'

    if (message) {
      setAlertMessage(message);
      setSeverity(type); // Set severity based on localStorage value
      setOpen(true);
      // Clear the message and severity from localStorage
      localStorage.removeItem("showAlert");
      localStorage.removeItem("alertSeverity");
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

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
          <AdminSubbarSecondary text="Jana Pelbagai Sijil Pelajar" />
          <JanaBulkContent />
        </Stack>
      </Box>
    </>
  );
};

export default JanaBulkSijil;
