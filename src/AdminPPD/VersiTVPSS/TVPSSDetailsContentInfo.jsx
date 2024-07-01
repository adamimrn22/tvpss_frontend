import { useState } from "react";
import { Box, Paper, Typography, Grid, IconButton, Modal } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

const TVPSSDetailsContentInfo = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ backgroundColor: "#F8FAFF", p: 1, m: 0 }}>
      <Paper
        sx={{
          backgroundColor: "primary.main",
          color: "#fff",
          borderRadius: "10px",
        }}
      >
        <Typography sx={{ p: 1, fontSize: 26 }}>
          SMK Mutiara Rini (JEA1059)
        </Typography>

        <Box
          sx={{
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: "#fff",
            color: "primary.main",
          }}
        >
          <Box sx={{ p: 1 }}>
            <Typography
              sx={{
                color: "#494950",
                fontWeight: 700,
                fontSize: 24,
                ml: 5,
              }}
            >
              A. Info Sekolah
            </Typography>

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ my: 2 }}
            >
              <Grid item xs={5}>
                <Typography
                  sx={{
                    color: "#494950",
                    fontWeight: 700,
                    textAlign: "end",
                  }}
                >
                  Pengawai TVPSS Sekolah:
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Box>
                  <Typography
                    component={"span"}
                    sx={{
                      backgroundColor: "#E8EBF0",
                      px: 2,
                      py: 1,
                      color: "#030303",
                      fontWeight: 500,

                      fontSize: 14,
                    }}
                  >
                    PN. ISMARIATULADLINA BINTI ISMAIL
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Typography
              sx={{
                color: "#494950",
                fontWeight: 700,
                fontSize: 24,
                ml: 5,
              }}
            >
              B. Info TVPSS Sekolah
            </Typography>

            <Box sx={{ p: 1 }}>
              {[
                "Logo TVPSS",
                "Corner/ Mini/TV Studio",
                "Upload di Youtube",
                "Rakaman dalam Sekolah",
                "Rakaman dalam dan luar sekolah",
                "Berkolaborat dengan agensi luar",
                "Penggunaan Teknologi 'Green Screen'",
              ].map((item, index) => (
                <Grid
                  key={index}
                  container
                  alignItems="start"
                  justifyContent="start"
                  spacing={2}
                  sx={{ my: 2 }}
                >
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "#494950",
                        fontWeight: 700,
                        textAlign: "end",
                      }}
                    >
                      {item} :
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Box textAlign="start">
                      <Typography
                        component={"span"}
                        sx={{
                          color: "#505050",
                          fontWeight: 500,
                          backgroundColor: "#D8DCF6",
                          borderRadius: 2,
                          p: 1,
                        }}
                      >
                        ADA
                      </Typography>
                      {index === 0 && (
                        <IconButton
                          onClick={handleOpen}
                          size="small"
                          sx={{ ml: 1 }}
                        >
                          <ImageIcon />
                        </IconButton>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              ))}

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <img
                    src="/logosekolah.png"
                    alt="TVPSS Logo"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Modal>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default TVPSSDetailsContentInfo;
