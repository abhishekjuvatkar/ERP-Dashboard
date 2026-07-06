import { useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
        background: "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)",
      }}
    >
      <CircularProgress />
      <Typography variant="h6" fontWeight={600}>
        Redirecting to CIMS...
      </Typography>
    </Box>
  );
}