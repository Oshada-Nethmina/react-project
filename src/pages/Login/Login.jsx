import React, { useMemo, useState } from "react";
import { Box, FormControl, InputAdornment, MenuItem, Select, TextField, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import NavbarButtons from "../../components/button/NavbarButton/NavbarButton";
import HomepageButton from "../../components/button/HomepageButton/HomepageButton";
import "./style.css";

export default function Login() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");

    const isFormValid = useMemo(
        () => Boolean(title && firstName.trim() && lastName.trim() && dob),
        [title, firstName, lastName, dob]
    );

    const handleNext = () => {
        const payload = { title, firstName, lastName, dob };
        sessionStorage.setItem("userInfo", JSON.stringify(payload));
        navigate("/Page-4");
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
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, textAlign: "center", maxWidth: 420, mb: 2 }}
                >
                    Let's get started by telling a little bit about yourself
                </Typography>

                <Box sx={{ display: "flex", gap: 1, width: "100%", maxWidth: 440 }}>
                    <FormControl sx={{ minWidth: 120 }}>
                        <Select
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            displayEmpty
                            inputProps={{ "aria-label": "Title" }}
                            sx={{
                                "& .MuiSelect-select": { display: "flex", alignItems: "center", gap: 1 },
                            }}
                        >
                            <MenuItem value="">
                                <em style={{ color: "#707070" }}>Title</em>
                            </MenuItem>
                            <MenuItem value="Mr">Mr.</MenuItem>
                            <MenuItem value="Mrs">Mrs.</MenuItem>
                            <MenuItem value="Miss">Miss</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        fullWidth
                        label="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                <TextField
                    fullWidth
                    label="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ maxWidth: 440 }}
                />

                <TextField
                    fullWidth
                    label="Date of birth"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <CalendarTodayIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ maxWidth: 440 }}
                />

                <HomepageButton
                    label="Next"
                    icon={ArrowForwardIcon}
                    iconPosition="end"
                    sx={{ mt: 3, px: 5 }}
                    disabled={!isFormValid}
                    onClick={handleNext}
                />
            </Box>
            <Footer />
        </div>
    );
}