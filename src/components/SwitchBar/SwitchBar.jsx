import * as React from "react";
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import BoyIcon from "@mui/icons-material/Boy";
import WcIcon from "@mui/icons-material/Wc";

export default function SwitchBar({ value = "single", onChange }) {
  const [status, setStatus] = React.useState(value);

  const handleChange = (event, newStatus) => {
    if (newStatus !== null) {
      setStatus(newStatus);
      if (onChange) {
        onChange(newStatus === "married"); // true if married, false if single
      }
    }
  };

  return (
    <Box>
      <Typography sx={{ mb: 1, fontWeight: 500, color: "#707070" }}>
        Marital Status
      </Typography>

      <ToggleButtonGroup
        value={status}
        exclusive
        onChange={handleChange}
        sx={{
          backgroundColor: "#fff",
          borderRadius: "18px",
          boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
          overflow: "hidden", // ⭐ IMPORTANT
        }}
      >
        {/* Single */}
        <ToggleButton
          value="single"
          disableRipple
          sx={{
            border: "none",
            px: 3,
            py: 1.2,
            gap: 1,
            textTransform: "none",
            fontWeight: 500,
            borderRadius: "11px 0 0 11px", // ⭐ LEFT ONLY
            color: status === "single" ? "#fff" : "#000",
            backgroundColor: status === "single" ? "#000" : "transparent",

            "&.Mui-selected": {
              backgroundColor: "#000",
              color: "#fff",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "#000",
            },
          }}
        >
          <BoyIcon fontSize="small" />
          Single
        </ToggleButton>

        {/* Married */}
        <ToggleButton
          value="married"
          disableRipple
          sx={{
            border: "none",
            px: 3,
            py: 1.2,
            gap: 1,
            textTransform: "none",
            fontWeight: 500,
            borderRadius: "0 11px 11px 0", // ⭐ RIGHT ONLY
            color: status === "married" ? "#fff" : "#000",
            backgroundColor: status === "married" ? "#ff6a00" : "transparent",

            "&.Mui-selected": {
              backgroundColor: "#ff6a00",
              color: "#fff",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "#ff6a00",
            },
          }}
        >
          <WcIcon fontSize="small" />
          Married
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}