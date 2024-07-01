import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

const ExportButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleExportPDF = () => {
    // Implement PDF export logic here
    alert("Ekport ke PDF");
    handleCloseMenu();
  };

  const handleExportExcel = () => {
    // Implement Excel export logic here
    alert("Ekport ke Excel");
    handleCloseMenu();
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<CloudDownloadOutlinedIcon />}
        sx={{ color: "grey", mx: 1 }}
        onClick={handleOpenMenu}
      >
        Eksport
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleExportPDF}>Eksport ke PDF</MenuItem>
        <MenuItem onClick={handleExportExcel}>Eksport ke Excel</MenuItem>
      </Menu>
    </>
  );
};

export default ExportButton;
