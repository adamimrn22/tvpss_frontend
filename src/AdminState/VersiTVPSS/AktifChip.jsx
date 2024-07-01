import { Chip } from "@mui/material";

const AktifChip = ({ schoolType }) => {
  let color, backgroundColor;
  switch (schoolType) {
    case "Aktif":
      color = "#037847";
      backgroundColor = "#ECFDF3"; // Orange-Red
      break;
    case "Tidak Aktif":
      color = "#364254";
      backgroundColor = "#F2F4F7"; // Royal Blue
      break;

    default:
      color = "#ffa600";
      backgroundColor = "#ffa600"; // Gray
  }

  return (
    <Chip
      label={"●  " + schoolType}
      sx={{
        backgroundColor: backgroundColor,
        color: color,
        fontWeight: "bold",
        borderRadius: "16px",
        "&:hover": {
          backgroundColor: backgroundColor,
          opacity: 0.9,
        },
      }}
    />
  );
};

export default AktifChip;
