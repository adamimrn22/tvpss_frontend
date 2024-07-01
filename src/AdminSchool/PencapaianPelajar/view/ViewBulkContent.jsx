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
import BulkSijilTable from "./BulkSijilTable";
const ViewBulkContent = () => {
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
      PS0456
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
      </Stack>
      <Box sx={{ p: 1 }}>
        <BulkSijilTable />
      </Box>
    </Box>
  );
};

export default ViewBulkContent;
