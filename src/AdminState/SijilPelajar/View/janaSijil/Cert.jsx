import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
  Popover,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ChromePicker } from "react-color";

const Certificate = ({
  imageSrc,
  title,
  text,
  selectedFont,
  fontColor,
  signatureSrc,
}) => {
  const certificateRef = useRef(null);

  const containerStyle = {
    position: "relative",
    display: "inline-block",
    textAlign: "center", // Center align the container
  };

  const imageStyle = {
    display: "block",
    width: "100%",
    height: "auto",
  };

  const titleStyle = {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "16px", // Smaller font size for title
    textAlign: "center",
    width: "20%", // Ensure title fits within the container
    color: fontColor,
    fontFamily: selectedFont,
  };

  const textStyle = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: fontColor,
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: selectedFont,
  };

  const icStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: fontColor,
    fontSize: "18px", // Smaller font size for IC number
    textAlign: "center",
    fontFamily: selectedFont,
  };

  const signatureStyle = {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)", // Center align horizontally
    maxWidth: "150px",
    maxHeight: "100px",
  };

  const handleDownload = () => {
    html2canvas(certificateRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "certificate.png";
      link.click();
    });
  };

  return (
    <Box>
      <Box ref={certificateRef} sx={containerStyle}>
        <img src={imageSrc} alt="Certificate" style={imageStyle} />
        <Typography variant="subtitle2" sx={titleStyle}>
          {title}
        </Typography>
        <Box component="div" sx={textStyle}>
          {text}
        </Box>
        <Box component="div" sx={icStyle}>
          IC Number: 1234567890
        </Box>
        {signatureSrc && (
          <img src={signatureSrc} alt="Signature" style={signatureStyle} />
        )}
      </Box>
      <Box>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleDownload}
          sx={{ mt: 2 }}
        >
          Lihat jana sijil
        </Button>
      </Box>
    </Box>
  );
};

const Cert = () => {
  const [fileUploadData, setFileUploadData] = useState("");
  const [signatureData, setSignatureData] = useState("");
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [fontColor, setFontColor] = useState("#000000");
  const [anchorEl, setAnchorEl] = useState(null);
  const [textTitle, setTextTitle] = useState("");

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const handleColorChange = (color) => {
    setFontColor(color.hex);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "color-picker-popover" : undefined;

  const fileUploadInput = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setFileUploadData(imageUrl);
  };

  const signatureUploadInput = (event) => {
    const file = event.target.files[0];
    const signatureUrl = URL.createObjectURL(file);
    setSignatureData(signatureUrl);
  };

  return (
    <Box sx={{}}>
      <Button sx={{ my: 1 }} component="label" variant="contained">
        Muat Template Sijil
        <VisuallyHiddenInput type="file" onChange={fileUploadInput} />
      </Button>

      <TextField
        fullWidth
        onChange={(e) => setTextTitle(e.target.value)}
        sx={{ my: 2 }}
        placeholder="Anugerah 00000"
        label="Tajuk Sijil"
        variant="outlined"
      />

      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel id="font-select-label">Pilih Jenis Font</InputLabel>
        <Select
          labelId="font-select-label"
          value={selectedFont}
          label="Choose a font"
          onChange={handleFontChange}
        >
          <MenuItem value="Arial">Arial</MenuItem>
          <MenuItem value="Courier New">Courier New</MenuItem>
          <MenuItem value="Georgia">Georgia</MenuItem>
          <MenuItem value="Times New Roman">Times New Roman</MenuItem>
          <MenuItem value="Verdana">Verdana</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ mb: 2 }}>
        <Typography component="div">Pilih Warna Font: </Typography>
        <Button
          aria-describedby={id}
          variant="outlined"
          onClick={handleClick}
          sx={{ backgroundColor: fontColor, color: "#ffffff", my: 1 }}
        >
          {fontColor}
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <ChromePicker
            color={fontColor}
            onChangeComplete={handleColorChange}
          />
        </Popover>
      </Box>

      <Button sx={{ mb: 2 }} component="label" variant="outlined">
        Muat Naik Tandatangan
        <VisuallyHiddenInput type="file" onChange={signatureUploadInput} />
      </Button>

      {fileUploadData && (
        <Certificate
          imageSrc={fileUploadData}
          title={textTitle} // Passes the title entered in the TextField
          text="Abu bin Ahmad" // Hardcoded text
          selectedFont={selectedFont}
          fontColor={fontColor}
          signatureSrc={signatureData}
        />
      )}
    </Box>
  );
};

export default Cert;
