import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import WomanIcon from "@mui/icons-material/Woman";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import HomepageButton from "../../components/button/HomepageButton/HomepageButton";
import SwitchBar from "../../components/SwitchBar/SwitchBar";
import NavbarButtons from "../../components/button/NavbarButton/NavbarButton";
import "./style.css";

export default function Login2() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [wifeName, setWifeName] = useState("");
  const [married, setMarried] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("userInfo");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const handleNext = () => {
    sessionStorage.setItem("maritalInfo", JSON.stringify({ married, wifeName: married ? wifeName : "" }));
    navigate(married ? "/Page-5" : "/Page-6");
  };

  return (
    <div className="content">
      <Header progressBar={<ProgressBar sx={{ mt: 4, display: "flex", justifyContent: "center" }} label={"My details"} step={2} totalSteps={3} />} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          pt: 4,
        }}
      >
        {user && (
          <>
            <Typography>
              My name is <span style={{ color: "#FF6347" }}>{user.firstName} {user.lastName}</span>
            </Typography>
            <Typography>
              And I am <span style={{ color: '#FF6347' }}>{user.title === "Mr" ? "male" : "female"}</span>  of <span style={{ color: '#FF6347' }}>{user.age}</span>  years
              old.
            </Typography>
          </>
        )}

        <Typography
          variant="h4"
          sx={{ fontWeight: 700, textAlign: "center", mb: 3, mt: 1, maxWidth: 420 }}
        >
          Are you married?
        </Typography>

        <SwitchBar value={married ? "married" : "single"} onChange={(val) => setMarried(val)} />

        {married && (
          <TextField
            fullWidth
            label="My spouse is"
            value={wifeName}
            onChange={(e) => setWifeName(e.target.value)}
            InputProps={{
              startAdornment: <WomanIcon sx={{ mr: 1, color: "#707070" }} />,
            }}
            sx={{ maxWidth: 440, mt: 2 }}
          />
        )}

        <HomepageButton
          label="Next"
          icon={ArrowForwardIcon}
          iconPosition="end"
          sx={{ mt: 3, px: 5 }}
          disabled={married && !wifeName.trim()}
          onClick={handleNext}
        />
      </Box>
      <Footer />
    </div>
  );
}
