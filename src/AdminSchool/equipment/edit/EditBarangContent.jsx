import {
  Box,
  Breadcrumbs,
  Typography,
  Link as LinkMui,
  Stack,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EditBarangForm from "./EditBarangForm";
const EditBarangContent = () => {
  const breadcrumbs = [
    <LinkMui underline="hover" key="1" color="inherit">
      Pengurusan Bilangan Barang
    </LinkMui>,
    <Typography key="3" color="primary.main">
      Kemaskini Barang
    </Typography>,
    <Typography key="3" color="primary.main">
      Kamera Nikon D850
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
        <EditBarangForm />
      </Box>
    </Box>
  );
};

export default EditBarangContent;
