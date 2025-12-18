import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/logo.png";

export default function Header({homepageButton,navbarButton}) {
    return (
        <AppBar
            position="sticky"
            elevation={0} // border and shadow none
            sx={{
                top: 0,
                backgroundColor: "white",
                color: "black",
                zIndex: 1200,
            }}
        >
            <Toolbar
                sx={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <img src={logo} alt="" style={{ width: "200px", height: "auto" }} />
                {homepageButton}
                {navbarButton}
            </Toolbar>
        </AppBar>
    );
}