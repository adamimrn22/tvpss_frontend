import {
  Box,
  Breadcrumbs,
  Typography,
  Grid,
  Link as LinkMui,
  Stack,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

import TVPSSDetailsContentInfo from "./TVPSSDetailsContentInfo";
import TVPSSUpgradeSection from "./TVPSSUpgradeSection";

const AllTVPSSContent = () => {
  const breadcrumbs = [
    <LinkMui underline="hover" key="1" color="inherit" href="/">
      Pengurusan TVPSS
    </LinkMui>,
    <Typography key="3" color="primary.main">
      Butiran Sekolah
    </Typography>,
    <Typography key="3" color="primary.main">
      SMK MUTIARA RINI
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
          to="/AdminPPD/ValidasiTVPSS"
          style={{ textDecoration: "none" }}
        ></Link>
      </Stack>
      <Box sx={{ p: 1 }}>
        <Typography variant="h4" color="primary.main" sx={{ mb: 2 }}>
          Maklumat Sekolah
        </Typography>
        <Grid container>
          <Grid item sm={12}>
            <TVPSSDetailsContentInfo />
          </Grid>
          {/* <Grid item sm={12} md={6}>
            <TVPSSUpgradeSection />
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
};

export default AllTVPSSContent;
