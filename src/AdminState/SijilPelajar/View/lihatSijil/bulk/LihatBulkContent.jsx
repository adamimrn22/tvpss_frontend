import {
  Box,
  Breadcrumbs,
  Typography,
  Link as LinkMui,
  Stack,
  Paper,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import AlertButton from "../alertButtonSijil";

import InputComponent from "../../../../components/InputCompononent";
import BulkSijilTable from "./BulkSijilTable";

const LihatBulkContent = () => {
  const breadcrumbs = [
    <LinkMui underline="hover" key="1" color="inherit" href="/">
      Jana Sijil Pelajar
    </LinkMui>,
    <Typography key="2" color="primary.main">
      Permohonan Sijil
    </Typography>,
    <Typography key="3" color="primary.main">
      SMK Mutiara Rini (JEA4567)
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
        <Paper sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ my: 2, color: "primary.main" }}>
            Permohonan Sijil Pelajar
          </Typography>
          <Box component={"form"} noValidate autoComplete="off">
            <BulkSijilTable />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default LihatBulkContent;