import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import "./style.css";
import NavbarButton from "../../components/button/NavbarButton/NavbarButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";
import loadImage from '../../assets/1st Image.png';
import HomepageButton from "../../components/button/HomepageButton/HomepageButton";

export default function HomePage1() {
    return (
        <>
            <div className="content">
                <Header navbarButton={<NavbarButton label="Already have a account" />} />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '100px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                        <h1 style={{ fontSize: "60px" }}>Life Insurance Made Simple</h1>
                        <Typography sx={{ fontSize: "20px", fontWeight: "" }}>
                            Find your goals and plan your future
                        </Typography>
                        <HomepageButton
                            label="Get Started"
                            icon={ArrowForwardIcon}
                            iconPosition="end"
                            sx={{ mt: '30px' }}
                        />
                    </div>
                    <div>
                        <img style={{ height: '80vh' }} src={loadImage} alt="" />

                    </div>
                </Box>

                <Footer />
            </div>



        </>

    );
}