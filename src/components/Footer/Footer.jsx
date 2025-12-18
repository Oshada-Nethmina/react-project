import React from "react";
import { Box, Typography, Link } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const iconStyle = {
    width: 40,
    height: 40,
    border: "none",
    borderRadius: "50%", // 👈 makes it round
    backgroundColor: '#F0F0F0',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
        borderColor: "#FE5000",
        backgroundColor: "#FE500010",
    },
};

export default function Footer() {
    return (
        <div style={{ padding: '18px' }}>
            <Box
                component="footer"
                sx={{
                    bgcolor: "#fff",
                    color: "#000000",
                    py: 3,
                    px: 2,
                    mt: "auto",
                    textAlign: "center",
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: "row",

                }}
            >
                <div className="icons">
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Box sx={iconStyle}>
                            <FacebookRoundedIcon sx={{ color: "#969BAB" }} />
                        </Box>
                        <Box sx={iconStyle}>
                            <InstagramIcon sx={{ color: "#969BAB" }} />
                        </Box>
                        <Box sx={iconStyle}>
                            <LinkedInIcon sx={{ color: "#969BAB" }} />
                        </Box>
                        <Box sx={iconStyle}>
                            <TwitterIcon sx={{ color: "#969BAB" }} />
                        </Box>
                    </Box>
                </div>
                <Typography sx={{ color: '#747070', fontWeight: '600' }}>Find your needs</Typography>
            </Box>
        </div>
    );
}