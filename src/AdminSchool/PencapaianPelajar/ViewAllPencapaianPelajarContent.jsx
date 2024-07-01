import {
  Box,
  Breadcrumbs,
  Typography,
  Link as LinkMui,
  Stack,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import UserTable from "./AllUserTable.jsx"; // Path to your UserTable component
import { Link } from "react-router-dom";
import AllPencapaianPelajarTable from "./AllPencapaianPelajarTable";
// import AllUserKrewMohonTable from "./AllUserKrewMohonTable";
import permohonan from "./data/permohonan";
const ViewAllPencapaianPelajarContent = () => {
  // Example data (replace with actual data)

  const breadcrumbs = [
    <LinkMui
      underline="hover"
      key="1"
      color="inherit"
      href="/AdminSchool/PencapaianPelajar"
    >
      Pencapaian Pelajar
    </LinkMui>,
    <Typography key="3" color="primary.main">
      Semua Pencapaian
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
          to="/AdminSchool/PencapaianPelajar/Mohon"
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained">Hantar Borang Pencapaian Pelajar</Button>
        </Link>
      </Stack>
      <Box sx={{ p: 1 }}>
        <AllPencapaianPelajarTable users={permohonan} />
      </Box>
    </Box>
  );
};

export default ViewAllPencapaianPelajarContent;
