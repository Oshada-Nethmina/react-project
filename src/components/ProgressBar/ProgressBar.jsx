import React from "react";
import { Box, Typography, IconButton, CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function ProgressBar({
    label = "My details",
    step = 2,
    totalSteps = 3,
}) {
    const progress = (step / totalSteps) * 100;
    const size = 64;
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                borderRadius: "40px",
                px: 3,
                py: 1.5,
                display: "flex",
                alignItems: "center",
                boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
                maxWidth: 450,
                mx: "auto",
                gap: 2, 
            }}
        >
            
            <IconButton size="small" onClick={() => navigate(-1)}>
                <ArrowBackIcon />
            </IconButton>

            
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2, 
                    flexGrow: 1,
                    justifyContent: "space-between",
                }}
            >
             
                <Typography
                    sx={{
                        fontWeight: 600,
                        color: "#18191F",
                        whiteSpace: "nowrap",
                    }}
                >
                    {label}
                </Typography>

                {/* Circular Progress */}
                <Box sx={{ position: "relative", width: size, height: size }}>
                    <CircularProgress
                        variant="determinate"
                        value={100}
                        size={size}
                        thickness={4}
                        sx={{ color: "#F2F2F2" }}
                    />

                    <CircularProgress
                        variant="determinate"
                        value={progress}
                        size={size}
                        thickness={4}
                        sx={{
                            color: "#FE5000",
                            position: "absolute",
                            left: 0,
                            top: 0,
                            transform: "rotate(-90deg)",
                            transition: "all 0.8s ease-in-out",
                            "& .MuiCircularProgress-circle": {
                                strokeLinecap: "round",
                            },
                        }}
                    />

                    {/* Center Text */}
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                    >
                        <Typography sx={{ fontSize: 11, fontWeight: 600, lineHeight: 1.2, color: '#707070' }}>
                            Step {step}
                            <br />
                            of {totalSteps}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
