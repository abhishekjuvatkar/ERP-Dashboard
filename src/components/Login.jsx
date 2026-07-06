import { GoogleLogin } from "@react-oauth/google";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";

export default function Login({ onLogin }) {
  const [loading, setLoading] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #6c1b85 0%, #3d0f4d 100%)",
        padding: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(255, 173, 74, 0.08)",
          top: -100,
          right: -100,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255, 173, 74, 0.06)",
          bottom: -80,
          left: -80,
        }}
      />

      <Card
        elevation={12}
        sx={{
          maxWidth: 420,
          width: "100%",
          borderRadius: 4,
          padding: 4,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          borderTop: "5px solid #ffad4a",
        }}
      >
        <CardContent>
          <Box
            component="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHKN6vbB95iOilkt8YYaSDi_5x3E-c2z8qrQQtQIvmHJ-savWMB3BiTna&s=10"
            alt="IIT Dharwad"
            sx={{ height: 250, mb: 2 }}
          />

          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ color: "#6c1b85", letterSpacing: 0.3 }}
          >
            Indian Institute of Technology Dharwad
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"v
            sx={{ mb: 3, mt: 0.5 }}
          >
            Enterprise Resource Planning (ERP) System
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
            Sign in to continue
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {loading ? (
              <CircularProgress size={28} sx={{ color: "#6c1b85" }} />
            ) : (
              <GoogleLogin
                useOneTap
                auto_select
                use_fedcm_for_prompt
                containerProps={{ allow: "identity-credentials-get" }}
                theme="filled_black"
                size="large"
                shape="pill"
                width="300"
                onSuccess={(credentialResponse) => {
                  setLoading(true);
                  onLogin(credentialResponse.credential);
                }}
                onError={() => console.log("Login Failed")}
              />
            )}
          </Box>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 4, display: "block" , fontSize: "0.99rem", color: "rgba(0, 0, 0, 0.6)" }}
          >
            Use your official @iitdh.ac.in Google account
          </Typography>
        </CardContent>
      </Card>

      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          bottom: 16,
          color: "rgba(255,255,255,0.6)",
          zIndex: 1,
        }}
      >
        © {new Date().getFullYear()} IIT Dharwad — All Rights Reserved
      </Typography>
    </Box>
  );
}