
import Button from "@mui/material/Button";

export default function HomepageButton({ label,
    icon: Icon,
    iconPosition = "end",
    sx = {},
    ...props }) {
    return (
        <Button
            variant="contained"
            startIcon={iconPosition === "start" && Icon ? <Icon /> : null}
            endIcon={iconPosition === "end" && Icon ? <Icon /> : null}
            sx={{
                backgroundColor: "#FE5000",
                color: "white",
                borderRadius: "20px",
                px: 3,
                "&:hover": {
                    backgroundColor: "#e64800",
                },
                ...sx,
            }}
            {...props}
        >
            {label}
        </Button>
    );
}