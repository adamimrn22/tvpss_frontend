import {
  Box,
  Breadcrumbs,
  Typography,
  Link as LinkMui,
  Stack,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PermohonanKrewDetailForm from "./PermohonanKrewDetailForm";
const PermohonanKrewDetailContent = () => {
  const breadcrumbs = [
    <LinkMui
      underline="hover"
      key="1"
      color="inherit"
      href="/AdminSchool/PermohonanKrew"
    >
      Permohonan Krew
    </LinkMui>,
    <Typography key="3" color="primary.main">
      Butiran Permohonan
    </Typography>,
    <Typography key="3" color="primary.main">
      Ahmad Bin Ali
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
        <PermohonanKrewDetailForm />
      </Box>
    </Box>
  );
};

export default PermohonanKrewDetailContent;
