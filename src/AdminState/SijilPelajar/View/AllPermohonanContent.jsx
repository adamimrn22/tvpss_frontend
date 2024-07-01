import {
  Box,
  Breadcrumbs,
  Typography,
  Link as LinkMui,
  Stack,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SchoolTable from "./SchoolTable";
import schools from "./data/schoolsPermohonan";
const AllPermohonanContent = () => {
  // Example data (replace with actual data)

  console.log(schools);
  const breadcrumbs = [
    <LinkMui underline="hover" key="1" color="inherit" href="/">
      Jana Sijil Pelajar
    </LinkMui>,
    <Typography key="3" color="primary.main">
      Semua Permohonan Sijil
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
        <SchoolTable schools={schools} />
      </Box>
    </Box>
  );
};

export default AllPermohonanContent;
