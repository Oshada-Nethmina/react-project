import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function NavbarButtons({label}) {
  return (
    <Button
      sx={{
        borderColor: "#FE5000",
        color: "#FE5000",
        borderRadius: "20px",
        px: 5,
        py: 1,
        border: '2px solid',
        fontWeight: '600'
      }}
      variant="outlined">
      {label}
    </Button>

  );
}