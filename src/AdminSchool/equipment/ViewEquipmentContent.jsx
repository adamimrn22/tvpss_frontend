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
import EquipmentTable from "./EquipmentTable";
import equipment from "./data/equipment";
const ViewEquipmentContent = () => {
  // Example data (replace with actual data)

  const breadcrumbs = [
    <LinkMui underline="hover" key="1" color="inherit">
      Pengurusan Bilangan Barang
    </LinkMui>,
    <Typography key="3" color="primary.main">
      Semua Barang
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
          to="/AdminSchool/BilanganBarang/Tambah"
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained">Tambah Barang</Button>
        </Link>
      </Stack>
      <Box sx={{ p: 1 }}>
        <EquipmentTable equipment={equipment} />
      </Box>
    </Box>
  );
};

export default ViewEquipmentContent;
