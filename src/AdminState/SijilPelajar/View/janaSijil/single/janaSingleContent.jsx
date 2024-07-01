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
import Cert from "../Cert";

const JanaSingleContent = () => {
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
            <InputComponent
              label="Kad Pengenalan"
              value={"020202020"}
              readOnly={true}
            />
            <InputComponent
              label="Nama Penuh Pelajar"
              value={"Abu bin Ahmad"}
              readOnly={true}
            />
            <InputComponent
              label="Tahun Pelajaran"
              value={"Tingkatan 2"}
              readOnly={true}
            />
            <InputComponent
              label="Nama Sekolah Pelajar"
              value={"SMK Mutiara Rini"}
              readOnly={true}
            />
            <Box>
              <InputComponent
                label="Jenis Pencapaian"
                value={"Pencapaian Akademik"}
                readOnly={true}
              />
            </Box>
            <InputComponent
              label="Maklumat Pencapaian"
              value={"Pemenang Pertama Pidato"}
              readOnly={true}
            />
            <Typography>
              <LinkMui
                component="button"
                variant="body1"
                underline="hover"
                color="primary"
              >
                Lihat Dokumen Sokongan
              </LinkMui>
            </Typography>
            <Cert />
          </Box>
          <Box textAlign="center" mt={2}>
            <AlertButton
              text="Jana Sijil Pelajar"
              alertMessage="Sijil ini telah dihantar kepada email PIC SMK Mutiara Rini."
              redirectTo="/AdminState/SijilPelajar"
            />
          </Box>{" "}
        </Paper>
      </Box>
    </Box>
  );
};

export default JanaSingleContent;
