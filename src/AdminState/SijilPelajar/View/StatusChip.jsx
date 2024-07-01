import { Chip } from "@mui/material";

const AktifChip = ({ statusType }) => {
  let color, backgroundColor;
  switch (statusType) {
    case "Menunggu Kelulusan":
      color = "#f9a825";
      backgroundColor = "#fff59d"; // Orange-Red
      break;
    case "Dijana":
      color = "#00c853";
      backgroundColor = "#b9f6ca"; // Royal Blue
      break;

    default:
      color = "#ffa600";
      backgroundColor = "#ffa600"; // Gray
  }

  return (
    <Chip
      label={"●  " + statusType}
      sx={{
        backgroundColor: backgroundColor,
        color: color,
        fontWeight: "medium",
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
