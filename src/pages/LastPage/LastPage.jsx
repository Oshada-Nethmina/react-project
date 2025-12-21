import React from "react";
import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import imageList from "../../components/store/Store";
import HomepageButton from "../../components/button/HomepageButton/HomepageButton";
import NavbarButtons from "../../components/button/NavbarButton/NavbarButton";
import NormalButton from "../../components/button/normalbutton/Button";
import "./style.css";

export default function LastPage() {
    return (
        <div className="content">
            <Header progressBar={<ProgressBar label={"My details"} step={3} totalSteps={3} />} />
            {/* <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                <ProgressBar label="My goals" step={3} totalSteps={3} />
            </Box> */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 3,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        flexWrap: "wrap",
                        gap: 2,
                    }}
                >
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 600,
                                textAlign: "start",
                                mb: 3,
                                mt: 2,
                                maxWidth: 420,
                            }}
                        >
                            What are your main goals in life?
                        </Typography>
                        <NormalButton label="All goals" />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <HomepageButton label="Add goal" icon={AddIcon} iconPosition="start" />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 4,
                    }}
                >
                    {imageList && imageList.length > 0 ? (
                        imageList.map((img) => <Card key={img.id} image={img} />)
                    ) : (
                        <Typography>No data available</Typography>
                    )}
                </Box>
                <HomepageButton
                    label="Next"
                    icon={ArrowForwardIcon}
                    iconPosition="end"
                    sx={{ mt: 4, px: 5 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                />
            </Box>
            <Footer />
        </div>
    );
}