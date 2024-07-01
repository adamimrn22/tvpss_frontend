import { Box, Grid, Paper, Typography, Divider } from "@mui/material";
("@mui/material/styles");

import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import InfoCard from "../components/InfoCard";
import LineChartUser from "./Chart/LineChart";
import PieChartUserLogin from "./Chart/PieChartUserLogin";
import BarChartUser from "./Chart/BarChartUser";
import DoughnutChartUser from "./Chart/DoughnutChartUser";

import StateSelect from "./SelectState";

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
            icon={SupervisedUserCircleOutlinedIcon}
            title="Bilangan State Admin"
            subtitle="Bilangan State Admin"
            value={48}
          />
          <InfoCard
            icon={Person4OutlinedIcon}
            title="Bilangan PPD Admin"
            subtitle="Bilangan PPD Admin"
            value={800}
          />
          <InfoCard
            icon={PersonOutlineOutlinedIcon}
            title="Bilangan Sekolah Admin"
            subtitle="Bilangan Sekolah Admin"
            value={4000}
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
              <Paper variant="outlined">
                <Typography
                  sx={{
                    color: "primary.main",
                    padding: 1,
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Bilangan Pengguna mengikut jenis
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "300px",
                    padding: "25px",
                  }}
                >
                  <BarChartUser />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Paper variant="outlined">
                <Typography
                  sx={{
                    color: "primary.main",
                    padding: 1,
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Bilangan Peratusan pengguna mengikut jenis
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "300px",
                    padding: "25px",
                  }}
                >
                  <DoughnutChartUser />
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ mt: 1 }}></Box>

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
                  height: "600px",
                  padding: "25px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    padding: "25px",
                    textAlign: "end",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "primary.main",
                        padding: 1,
                        fontWeight: 500,
                      }}
                    >
                      Pengguna
                    </Typography>
                    <Typography
                      sx={{
                        color: "primary.main",
                        padding: 1,
                        fontWeight: 700,
                      }}
                    >
                      1200
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "primary.main",
                        padding: 1,
                        fontWeight: 500,
                      }}
                    >
                      Purata Pengguna
                    </Typography>
                    <Typography
                      sx={{
                        color: "primary.main",
                        padding: 1,
                        fontWeight: 700,
                      }}
                    >
                      400
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "primary.main",
                        padding: 1,
                        fontWeight: 500,
                      }}
                    >
                      Purata Aktif Pengguna (minit)
                    </Typography>
                    <Typography
                      sx={{
                        color: "primary.main",
                        padding: 1,
                        fontWeight: 700,
                      }}
                    >
                      30m
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "400px",
                    padding: "5px",
                  }}
                >
                  <LineChartUser />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Paper
                variant="outlined"
                sx={{
                  height: "600px",
                  padding: "25px",
                }}
              >
                <Typography sx={{ color: "primary.main", padding: 1 }}>
                  Pengguna Dalam Tempoh 30 Minit Terakhir
                </Typography>
                <Divider></Divider>
                <StateSelect />
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
        </Box>
      </Box>
      <Box sx={{ color: "primary.main", p: 1 }}>
        © 2024 Kementerian Pendidikan Malaysia (KPM)
      </Box>
    </>
  );
};

export default ContentPage;
