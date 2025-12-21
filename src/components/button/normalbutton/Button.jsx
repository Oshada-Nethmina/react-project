import React from "react";
import MuiButton from "@mui/material/Button";

export default function NormalButton({
  label,
  ...props
}) {
  return (
    <MuiButton
      variant="contained"
      sx={{
        backgroundColor: "#E6E6E6",
        color: "#707070", // Changed to dark gray for visibility; use "white" if preferred
        borderRadius: "20px",
        px: 3,
        textTransform: "none", // Prevents MUI from making text all caps
        boxShadow: "none", // Optional: cleaner look for gray buttons
        "&:hover": {
          backgroundColor: "#969BAB",
          color: "white", // Changes text to white on hover for contrast
        }, // Spread incoming sx prop last so it can override defaults
      }}
      {...props} // Spreads remaining props like onClick, disabled, type, etc.
    >
      {label}
    </MuiButton>
  );
}