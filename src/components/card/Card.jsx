import { Box, Typography } from "@mui/material";
import React from "react";

export default function Card({ image }) {
    return (
        <Box
            sx={{
                position: "relative",
                width: 300,
                height: 180,
                borderRadius: 2,
                overflow: "hidden",
                m: 1,
                cursor: "pointer",
            }}
        >
            {/* Background Image */}
            <Box
                component="img"
                src={image.src}
                alt={image.description}
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.05)",
                    },
                }}
            />

            {/* Dark Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0, // top, right, bottom, left = 0
                    bgcolor: "rgba(0, 0, 0, 0.35)", // darkness level
                }}
            />

            {/* Text Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    p: 1.5,
                    color: "#fff",
                }}
            >
                <Typography variant="subtitle1" fontWeight={600}>
                    {image.description}
                </Typography>
            </Box>
        </Box>
    );
}
