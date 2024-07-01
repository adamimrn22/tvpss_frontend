import { Box, Grid, Paper, Typography, Divider, Stack } from "@mui/material";
("@mui/material/styles");

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import BusinessIcon from "@mui/icons-material/Business";
import InfoCard from "../components/InfoCard";
import PieChartUserLogin from "./Chart/PieChartUserLogin";
import BarChartUser from "./Chart/BarChartUser";
import ApprovalIcon from "@mui/icons-material/Approval";
import GradeIcon from "@mui/icons-material/Grade";

import BasicSelect from "./selectVersion";

const ContentPage = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F8FAFF", p: 1, m: 0 }}>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch" // Ensure items stretch to fill the height
        >
          <InfoCard
            icon={ApprovalIcon}
            subtitle="Bilangan Permohonan Sijil"
            value={20}
          />
          <InfoCard
            icon={GradeIcon}
            subtitle="Bilangan Pencapaian"
            value={55}
          />
          <InfoCard
            icon={BusinessIcon}
            subtitle="Bilangan TVPPSS  Mengikut Negeri"
            value={80}
          />
        </Grid>

        <Box sx={{ my: 1, minHeight: "70vh" }}>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={6}>
              <Paper
                variant="outlined"
                sx={{
                  height: "500px",
                  padding: "25px",
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "primary.main",
                        padding: 1,
                        fontWeight: 700,
                        textAlign: "end",
                      }}
                    >
                      Bilangan Versi
                    </Typography>
                    <Typography
                      sx={{
                        color: "primary.main",
                        padding: 1,
                        fontWeight: 400,
                        fontSize: 24,
                        textAlign: "end",
                      }}
                    >
                      3
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "primary.main",
                        padding: 1,
                        fontWeight: 700,
                        textAlign: "end",
                      }}
                    >
                      Bilangan Telah Disahkan
                    </Typography>
                    <Typography
                      sx={{
                        color: "primary.main",
                        padding: 1,
                        fontSize: 24,
                        fontWeight: 400,
                        textAlign: "end",
                      }}
                    >
                      4
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "primary.main",
                        padding: 1,
                        fontWeight: 700,
                        textAlign: "end",
                      }}
                    >
                      Purata Bilangan Telah Disahkan
                    </Typography>
                    <Typography
                      sx={{
                        color: "primary.main",
                        padding: 1,
                        fontSize: 24,
                        fontWeight: 400,
                        textAlign: "end",
                      }}
                    >
                      25
                    </Typography>
                  </Box>
                </Stack>

                <Divider></Divider>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    mt: 2,
                    textAlign: "center",
                  }}
                >
                  Bilangan Sekolah Mengikut Versi
                </Typography>
                <Box
                  sx={{
                    paddingTop: "15px",
                  }}
                >
                  <BarChartUser />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Paper
                variant="outlined"
                sx={{
                  height: "500px",
                  padding: "25px",
                }}
              >
                <Typography sx={{ color: "primary.main", padding: 1 }}>
                  Jumlah Peratusan mengikut versi
                </Typography>
                <Divider></Divider>
                <BasicSelect />
                <Divider></Divider>
                <Box sx={{ marginTop: 5 }}></Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "300px",
                  }}
                >
                  <PieChartUserLogin />
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ mt: 1 }}></Box>
        </Box>
      </Box>
      <Box sx={{ color: "primary.main", p: 1 }}>
        © 2024 Kementerian Pendidikan Malaysia (KPM)
      </Box>
    </>
  );
};

export default ContentPage;
