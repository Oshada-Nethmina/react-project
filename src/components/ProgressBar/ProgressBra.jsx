import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';

function CircularProgressWithLabel(props, stepLable) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: 'text.secondary', }}
                >    {stepLable}
                    {/* {`${Math.round(props.value)}`} */}
                </Typography>
            </Box>
        </Box>
    );
}

export default function ProgressBar(lable, props) {
    const [progress, setProgress] = React.useState(4);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 4 ? 0 : prevProgress + 1));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <>
            <Box component="section" sx={{
                backgroundColor: "#fff",
                borderRadius: "40px",
                px: 3,
                py: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
                maxWidth: 500,
                mx: "auto",
            }}>
                <IconButton aria-label="back">
                    <ArrowBackIcon />
                </IconButton>
                <CircularProgressWithLabel value={progress} />
            </Box>
        </>
    );
}