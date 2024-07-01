// src/components/TVPSSUpgradeSection.jsx
import React from "react";
import {
  Box,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import AlertButton from "./alertButton";

const TVPSSUpgradeSection = () => {
  return (
    <Box
      sx={{
        p: 1,
        m: 0,
        height: "100%",
      }}
    >
      <Paper
        sx={{
          background: "linear-gradient(to bottom, #D8DCF6, #fff)",
          color: "primary.main",
          borderRadius: "10px",
          p: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: 24, textAlign: "center", mb: 2 }}>
          PENUHI KEPERLUAN
        </Typography>
        <Typography
          sx={{
            fontSize: 18,
            textAlign: "center",
            textDecoration: "underline",
            mb: 2,
          }}
        >
          Naik Taraf Status Versi
        </Typography>

        <Typography sx={{ fontSize: 40, textAlign: "center", mb: 2 }}>
          3 ➔{" "}
          <Typography
            component="span"
            sx={{ fontSize: 40, textAlign: "center", mb: 2, color: "#f44336" }}
          >
            4
          </Typography>
        </Typography>

        <Paper
          variant="elevation"
          elevation={3}
          sx={{
            flex: 1,
            p: 5,
            alignSelf: "center",
            backgroundColor: "#FBF8FF",
          }}
        >
          {[
            "Logo TVPSS",
            "Corner/ Mini/TV Studio",
            "Upload di Youtube",
            "Rakaman dalam dan luar Sekolah",
            "Berkolaborat dengan agensi luar",
            "Penggunaan Teknologi ‘Green Screen’",
          ].map((item, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox defaultChecked />}
              label={item}
              sx={{ display: "block" }}
            />
          ))}

          <Box textAlign="center" mt={2}>
            <AlertButton
              text="Kemaskini Status TVPSS"
              alertMessage="Status Versi TVPSS Sekolah untuk “SMK Mutiara Rini” telah dinaik taraf."
              redirectTo="/AdminPPD/ValidasiTVPSS"
              sx={{
                backgroundColor: "#f44336", // Red color for danger
                color: "#fff", // White text color
                "&:hover": {
                  backgroundColor: "#d32f2f", // Darker red for hover state
                },
              }}
            />
          </Box>
        </Paper>
      </Paper>
    </Box>
  );
};

export default TVPSSUpgradeSection;
