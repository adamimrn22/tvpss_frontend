// DeleteModal.jsx

import { Modal, Box, Typography, Button, Stack, Divider } from "@mui/material";

const DeleteModal = ({ open, onClose, onConfirm, itemName }) => {
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
          {`Adakah anda pasti mahu memadam bagi data pengguna ${itemName}?`}
        </Typography>
        <Divider sx={{ my: 2 }}></Divider>
        <Typography
          id="delete-modal-description"
          variant="h6"
          component="h4"
          sx={{ fontWeight: 300, fontSize: 16 }}
        >
          Ini akan hilang selama-lamanya, data tidak dapat dipulihkan
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 2, justifyContent: "flex-end" }}
        >
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={onConfirm}>
            Delete
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default DeleteModal;