import {
  Box,
  Breadcrumbs,
  Typography,
  Link as LinkMui,
  Stack,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import UserTable from "./AllUserTable.jsx"; // Path to your UserTable component
import { Link } from "react-router-dom";
import SchoolTable from "./schoolTable";
// import users from "../data/usersData.js";
import schools from "./data/schools";

const AllTVPSSContent = () => {
  const breadcrumbs = [
    <LinkMui underline="hover" key="1" color="inherit" href="/">
      Pengurusan TVPSS
    </LinkMui>,
    <Typography key="3" color="primary.main">
      Semua Sekolah
    </Typography>,
  ];

  return (
    <Box sx={{ backgroundColor: "#F8FAFF", p: 1, m: 0 }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ p: 1, m: 0 }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Link
          to="/SuperAdmin/PengurusanPengguna/TambahPengguna"
          style={{ textDecoration: "none" }}
        ></Link>
      </Stack>
      <Box sx={{ p: 1 }}>
        <Typography variant="h4" color="primary.main" sx={{ mb: 2 }}>
          Maklumat Sekolah
        </Typography>
        <SchoolTable schools={schools} />
        {/* <UserTable users={users} /> */}
      </Box>
    </Box>
  );
};

export default AllTVPSSContent;
