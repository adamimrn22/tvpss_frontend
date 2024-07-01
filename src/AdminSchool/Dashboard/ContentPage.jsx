import { Box, Grid, Paper, Typography, Divider, Stack } from "@mui/material";
("@mui/material/styles");

import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";

import InfoCard from "../components/InfoCard";
import PieChartGenderPercentage from "./Chart/PieChartGenderPercentage";
import BarChartUser from "./Chart/BarChartUser";
import Filter2Icon from "@mui/icons-material/Filter2";

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
            subtitle="Bilangan Pelajar Sekolah"
            value={300}
          />
          <InfoCard
            icon={AssignmentIndOutlinedIcon}
            subtitle="Bilangan Pencapaian"
            value={124}
          />
          <InfoCard
            icon={Person4OutlinedIcon}
            subtitle="Bilangan Krew Pelajar"
            value={25}
          />
          <InfoCard
            icon={Filter2Icon}
            subtitle="Versi TVPSS Terkini"
            value={3}
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
                  height: "550px",
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
                      Bilangan Krew
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
                      25
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
                      Purata Krew
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
                      Purata Krew mengikut Jantina
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
                      12
                    </Typography>
                  </Box>
                </Stack>

                <Divider></Divider>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    textAlign: "center",
                    mt: 1,
                  }}
                >
                  Bilangan Krew Mengikut Bulanan
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
                  height: "550px",
                  padding: "25px",
                }}
              >
                <Typography sx={{ color: "primary.main", padding: 1 }}>
                  Jumlah Pecahan Krew Mengikut Jantina
                </Typography>
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
                  <PieChartGenderPercentage />
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
