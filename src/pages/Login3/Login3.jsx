import React, { useEffect, useMemo, useState } from "react";
import { Box, Slider, TextField, Typography } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import HomepageButton from "../../components/button/HomepageButton/HomepageButton";
import "./style.css";

export default function Login3() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [marital, setMarital] = useState(null);
  const [numChildren, setNumChildren] = useState(0);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const savedUser = sessionStorage.getItem("userInfo");
    const savedMarital = sessionStorage.getItem("maritalInfo");
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedMarital) setMarital(JSON.parse(savedMarital));
  }, []);

  useEffect(() => {
    setChildren((prev) => {
      const draft = [...prev];
      while (draft.length < numChildren) draft.push({ name: "", age: "" });
      while (draft.length > numChildren) draft.pop();
      return draft;
    });
  }, [numChildren]);

  const isFormValid = useMemo(
    () => children.every((c) => c.name.trim() && c.age.trim()),
    [children]
  );

  const handleChildChange = (index, field, value) => {
    setChildren((prev) => {
      const draft = [...prev];
      draft[index] = { ...draft[index], [field]: value };
      return draft;
    });
  };

  const handleNext = () => {
    sessionStorage.setItem("childrenInfo", JSON.stringify(children));
    navigate("/Page-6");
  };

  return (
    <div className="content">
      <Header progressBar={<ProgressBar label={"My details"} step={1} totalSteps={3} />} />

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
          <Typography sx={{ textAlign: "center" }}>
            Hi {user.firstName} {user.lastName} <br />
            And I am <span style={{ color: '#FF6347' }}>{user.title === "Mr" ? "male" : "female"}</span>  of <span style={{ color: '#FF6347' }}>{user.age}</span>  years.
            old.
          </Typography>

        )}
        {marital && marital.married && (
          <Typography>I am married to <span style={{ color: "#FF6347" }}>{marital.wifeName}</span>.</Typography>
        )}

        <Typography
          variant="h4"
          sx={{ fontWeight: 700, textAlign: "center", mb: 2, mt: 1, maxWidth: 420 }}
        >
          I have (kids)
        </Typography>

        <Slider className="slider"
          sx={{
            "& .MuiSlider-thumb": { height: 16, width: 16, backgroundColor: "#FE5000" },
            "& .MuiSlider-track": { height: 4, width: 4, backgroundColor: "#FE5000" },
            "& .MuiSlider-rail": { height: 4, opacity: 0.3, backgroundColor: "#FE5000" },
          }}
          value={numChildren}
          onChange={(e, newValue) => setNumChildren(newValue)}
          min={0}
          max={10}
          step={1}
          valueLabelDisplay="on"
        />

        {children.map((child, index) => (
          <Box
            key={`child-${index}`}
            sx={{ display: "flex", flexDirection: "row", gap: 1, alignItems: "center", mt: 1, width: "100%", maxWidth: 460 }}
          >
            <TextField
              fullWidth
              label={`Child ${index + 1} name`}
              value={child.name}
              onChange={(e) => handleChildChange(index, "name", e.target.value)}
              InputProps={{
                startAdornment: <AccessibilityNewIcon sx={{ mr: 1, color: "#707070" }} />,
              }}
            />
            <TextField
              label="Age"
              type="number"
              value={child.age}
              onChange={(e) => handleChildChange(index, "age", e.target.value)}
              inputProps={{ min: 0, max: 120 }}
              sx={{ width: 120 }}
            />
          </Box>
        ))}

        <HomepageButton
          label="Next"
          icon={ArrowForwardIcon}
          iconPosition="end"
          sx={{ mt: 3, px: 5 }}
          disabled={numChildren > 0 && !isFormValid}
          onClick={handleNext}
        />
      </Box>
      <Footer />
    </div>
  );
}
