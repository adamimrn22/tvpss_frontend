import { Box, Divider } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink and useLocation
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomMenuItem from "./CustomMenuItem"; // Adjust the import path as needed

const Sidebar = ({ items }) => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: { sm: 250, md: 300 },
        borderRight: "1px solid #e0e0e0",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
        position: "fixed",
        overflowY: "auto",
      }}
    >
      <Box>
        <img src="/LogoTVPSS.svg" alt="" height={84} />

        <Box sx={{ mt: 1, py: 1 }}>
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <CustomMenuItem
                icon={item.icon}
                text={item.text}
                sx={item.sx}
                active={location.pathname.includes(item.path)}
              />
            </NavLink>
          ))}
        </Box>
      </Box>

      <Box>
        <Divider sx={{ my: 1 }} />

        <NavLink
          to="/AdminPPD/Tetapan"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CustomMenuItem
            icon={SettingsIcon}
            text="Tetapan"
            active={location.pathname === "/AdminPPD/Tetapan"}
          />
        </NavLink>

        <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <CustomMenuItem icon={LogoutIcon} text="Log Keluar" />
        </NavLink>
      </Box>
    </Box>
  );
};

export default Sidebar;
