import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

// Styled Paper component for the InfoCard
const DemoPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  textOverflow: "ellipsis",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%", // Ensure each DemoPaper stretches to fill the Grid item height
}));

// InfoCard component definition
const InfoCard = ({ icon: Icon, title, subtitle, value }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <DemoPaper variant="outlined" sx={{ p: 2 }}>
        {Icon && (
          <Icon sx={{ fontSize: { md: 60, lg: 80 }, color: "primary.main" }} />
        )}
        <Box
          sx={{
            color: "primary.main",
          }}
        >
          <Typography
            variant="subtitle1"
            textAlign={"end"}
            sx={{
              fontSize: { lg: "18px" },
            }}
          >
            {subtitle || title}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { lg: "32px" },
              fontWeight: 600,
              textAlign: "end",
            }}
          >
            {value}
          </Typography>
        </Box>
      </DemoPaper>
    </Grid>
  );
};

// Define PropTypes for the InfoCard component
InfoCard.propTypes = {
  icon: PropTypes.elementType.isRequired, // Expecting a component type for the icon
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  value: PropTypes.number.isRequired,
};

// Default props
InfoCard.defaultProps = {
  subtitle: "",
};

export default InfoCard;
