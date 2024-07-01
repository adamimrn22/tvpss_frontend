import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AlertButton = ({ text, alertMessage, redirectTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("showAlert", alertMessage); // Set the alert message in localStorage
    navigate(redirectTo); // Redirect to the specified path
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default AlertButton;
