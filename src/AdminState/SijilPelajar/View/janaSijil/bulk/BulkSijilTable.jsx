import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const data = [
  {
    icNumber: "070101-14-5678",
    fullName: "Ahmad Bin Abdullah",
    educationLevel: "Tingkatan 1",
    achievementType: "Sukan",
    achievementDetails:
      "Tempat pertama dalam larian 100m di Kejohanan Sukan Daerah",
  },
  {
    icNumber: "060101-07-1234",
    fullName: "Siti Binti Ibrahim",
    educationLevel: "Tingkatan 2",
    achievementType: "Akademik",
    achievementDetails:
      "Skor tertinggi dalam Olimpiad Matematik peringkat Kebangsaan",
  },
  {
    icNumber: "050101-10-9876",
    fullName: "Tan Mei Ling",
    educationLevel: "Tingkatan 3",
    achievementType: "Seni",
    achievementDetails: "Anugerah Pelakon Terbaik dalam Festival Drama Sekolah",
  },
];

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [selectedAchievement, setSelectedAchievement] = React.useState("");

  const handleOpen = (achievementDetails) => {
    setSelectedAchievement(achievementDetails);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>IC Number</TableCell>
              <TableCell>Nama Penuh</TableCell>
              <TableCell>Tingkatan Pendidikan</TableCell>
              <TableCell>Jenis Pencapaian</TableCell>
              <TableCell>Maklumat Pencapaian</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.icNumber}</TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.educationLevel}</TableCell>
                <TableCell>{row.achievementType}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpen(row.achievementDetails)}>
                    Lihat Butiran Pencapaian
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 500,
              bgcolor: "background.paper",
              borderRadius: 1,
              boxShadow: 24,
              p: 2,
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Butiran Pencapaian
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selectedAchievement}
            </Typography>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
