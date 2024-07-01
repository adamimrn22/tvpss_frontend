// DeleteModal.jsx

import { Modal, Box, Typography, Button, Stack, Divider } from "@mui/material";

const LulusModal = ({ open, onClose, onConfirm, itemName }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="delete-modal-title">
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
        <Typography id="delete-modal-title" variant="h6" component="h2">
          {`Adakah anda pasti mahu luluskan permohonan  ?`}
        </Typography>
        <Divider sx={{ my: 2 }}></Divider>
        <Typography
          id="delete-modal-description"
          variant="h6"
          component="h4"
          sx={{ fontWeight: 300, fontSize: 16 }}
        >
          Ini akan menghantar email kepada pelajar mengenai status mereka
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 2, justifyContent: "flex-end" }}
        >
          <Button onClick={onClose}>Batal</Button>
          <Button variant="contained" onClick={onConfirm}>
            Lulus Permohonan
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default LulusModal;