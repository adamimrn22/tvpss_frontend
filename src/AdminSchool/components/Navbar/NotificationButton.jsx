import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  Avatar,
  Divider,
} from "@mui/material";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const NotificationButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="pemberitahuan"
        onClick={handleClick}
        aria-controls={open ? "menu-pemberitahuan" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <CircleNotificationsOutlinedIcon
          fontSize="inherit"
          sx={{ width: 24, height: 24 }}
        />
      </IconButton>
      <Menu
        id="menu-pemberitahuan"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box sx={{ width: 550, maxWidth: "100%" }}>
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              Pemberitahuan <span style={{ color: "blue" }}>1 Baharu</span>
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: "pointer" }}
            >
              Lihat Semua
            </Typography>
          </Box>
          <Divider />
          <MenuItem onClick={handleClose} sx={{ py: 2 }}>
            <Avatar sx={{ bgcolor: "orange" }}>
              <WarningAmberIcon />
            </Avatar>
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle1">Pengesahan TVPSS</Typography>
              <Typography variant="body2" color="text.secondary">
                Permohonan TVPSS anda ditunggu untuk divalidasi
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ ml: "auto" }}>
              Baru saja
            </Typography>
          </MenuItem>
          <Divider />
          <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
            <Typography variant="button" sx={{ cursor: "pointer" }}>
              LIHAT SEMUA PEMBERITAHUAN
            </Typography>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default NotificationButton;
