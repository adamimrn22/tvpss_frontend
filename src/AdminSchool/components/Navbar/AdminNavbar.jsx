import { useState } from "react";

import {
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";

const AdminNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [language, setLanguage] = useState("BM");
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    handleMenuClose();
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={1}
        sx={{ p: 1, borderBottom: "1px solid #e0e0e0" }}
      >
        {/* Language Dropdown */}

        <IconButton aria-label="delete">
          <CircleNotificationsOutlinedIcon
            fontSize="inherit"
            sx={{ width: 24, height: 24 }}
          />
        </IconButton>

        <Avatar
          sx={{ bgcolor: "#767EA9", width: 32, height: 32, fontSize: "10px" }}
        >
          PA
        </Avatar>

        <Stack
          direction="column"
          spacing={0}
          alignItems="start"
          justifyContent="flex-end"
          sx={{ p: 0, m: 0 }}
        >
          <Typography
            variant="h6"
            sx={{
              verticalAlign: "text-bottom",
              fontWeight: 600,
              fontSize: "12px",
            }}
          >
            Pn Amirah
          </Typography>
          <Typography
            sx={{
              verticalAlign: "text-top",
              fontSize: "10px",
              color: "#A8AAB0",
            }}
          >
            Admin Sekolah
          </Typography>
        </Stack>

        <Box>
          <Button
            aria-controls="language-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            sx={{ marginLeft: 2 }}
            endIcon={<KeyboardArrowDownOutlinedIcon />}
          >
            {language}
          </Button>

          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleLanguageChange("BM")}>BM</MenuItem>
            <MenuItem onClick={() => handleLanguageChange("EN")}>EN</MenuItem>
          </Menu>
        </Box>
      </Stack>
    </>
  );
};

export default AdminNavbar;
