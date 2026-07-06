
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Stack,
  Button,
  Avatar,
  Chip,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";

export default function Home({ user, onLogout }) {
  const navigate = useNavigate();

  const modules = [
    {
      title: "MMD",
      description: "Manage materials, procurement, and workflow processes.",
      icon: <BusinessCenterRoundedIcon sx={{ fontSize: 34 }} />,
      color: "#7c3aed",
      target: "/mmd",
    },
    {
      title: "Finance",
      description: "Access finance approvals, budgets, and accounting modules.",
      icon: <AccountBalanceWalletRoundedIcon sx={{ fontSize: 34 }} />,
      color: "#0f766e",
      target: "/finance",
    },
    {
      title: "CIMS",
      description:
        "Open the CIMS landing page and continue to portal services.",
      icon: <DashboardRoundedIcon sx={{ fontSize: 34 }} />,
      color: "#1d4ed8",
      target: "https://cims.iitdh.ac.in/default/landingpage.html",
    },
    {
      title: "Inventory",
      description: "Track stock, issue-return records, and item availability.",
      icon: <Inventory2RoundedIcon sx={{ fontSize: 34 }} />,
      color: "#ea580c",
      target: "/inventory",
    },
    {
      title: "Samarth Portal",
      description: "Access the Samarth Portal for HRMS and related services.",
      icon: <PeopleAltRoundedIcon sx={{ fontSize: 34 }} />,
      color: "#dc2626",
      target: "https://iitdh.samarth.ac.in/index.php/site/login",
    },
    {
      title: "Reports",
      description:
        "View summaries, dashboards, analytics, and downloadable reports.",
      icon: <AssessmentRoundedIcon sx={{ fontSize: 34 }} />,
      color: "#0891b2",
      target: "/reports",
    },
  ];

  const handleCardClick = (target) => {
    const isExternal = /^https?:\/\//i.test(target);

    if (isExternal) {
      window.open(target, "_blank", "noopener,noreferrer");
    } else {
      navigate(target);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            mb: 4,
            background: "linear-gradient(135deg, #4338ca 0%, #7c3aed 100%)",
            color: "white",
            boxShadow: "0 18px 40px rgba(76, 29, 149, 0.16)",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={3}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  bgcolor: "rgba(255,255,255,0.18)",
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </Avatar>

              <Box>
                <Typography variant="h4" fontWeight={700}>
                  Welcome, {user?.name || "User"}
                </Typography>

                <Typography sx={{ opacity: 0.9, mt: 0.6 }}>
                  {user?.email || "No email available"}
                </Typography>

                <Chip
                  icon={<VerifiedUserRoundedIcon />}
                  label="Authenticated User"
                  sx={{
                    mt: 1.5,
                    bgcolor: "rgba(255,255,255,0.16)",
                    color: "white",
                    "& .MuiChip-icon": { color: "white" },
                  }}
                />
              </Box>
            </Stack>

            <Button
              variant="contained"
              startIcon={<LogoutRoundedIcon />}
              onClick={onLogout}
              sx={{
                bgcolor: "white",
                color: "#4338ca",
                fontWeight: 700,
                borderRadius: 3,
                px: 3,
                py: 1.2,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#f8fafc",
                },
              }}
            >
              Logout
            </Button>
          </Stack>
        </Paper>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Modules
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Select a module to continue to its page.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {modules.map((module) => {
            const isExternal = /^https?:\/\//i.test(module.target);

            return (
              <Grid item xs={12} sm={6} md={4} key={module.title}>
                <Card
                  sx={{
                    height: "100%",
                    width: "20vw",
                    borderRadius: 4,
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 18px 32px rgba(15, 23, 42, 0.12)",
                    },
                  }}
                >
                  <CardActionArea
                    onClick={() => handleCardClick(module.target)}
                    sx={{
                      height: "100%",
                      display: "flex",
                      alignItems: "stretch",
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 3,
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            width: 58,
                            height: 58,
                            borderRadius: 3,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: `${module.color}15`,
                            color: module.color,
                            mb: 2.5,
                          }}
                        >
                          {module.icon}
                        </Box>

                        <Typography variant="h6" fontWeight={700} gutterBottom>
                          {module.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ minHeight: 52 }}
                        >
                          {module.description}
                        </Typography>
                      </Box>

                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ mt: 3 }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: module.color,
                            fontWeight: 700,
                          }}
                        >
                          {isExternal ? "Open External Page" : "Open Module"}
                        </Typography>

                        <LaunchRoundedIcon
                          sx={{ fontSize: 18, color: module.color }}
                        />
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
