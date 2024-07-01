import {
  Box,
  Breadcrumbs,
  Typography,
  Link as LinkMui,
  Stack,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import UserTable from "./AllUserTable.jsx"; // Path to your UserTable component
import { Link } from "react-router-dom";
import users from "../data/usersData.js";
const AllUserContent = () => {
  // Example data (replace with actual data)

  const breadcrumbs = [
    <LinkMui underline="hover" key="1" color="inherit" href="/">
      Pengurusan Pengguna
    </LinkMui>,
    <Typography key="3" color="primary.main">
      Semua Pengguna
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
        >
          <Button variant="contained">Tambah Pengguna Baharu</Button>
        </Link>
      </Stack>
      <Box sx={{ p: 1 }}>
        <UserTable users={users} />
      </Box>
    </Box>
  );
};

export default AllUserContent;
