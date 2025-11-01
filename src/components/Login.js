 import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  Paper,
  Link as MuiLink,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import sonylogo from "../assets/sonylogo.jpg";
import Login from "../assets/Login.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    navigate("/dashboard");
  };

  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${Login})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f5f7fa",
        overflow: "hidden",
      }}
    >
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: { xs: 3, md: 6 },
          backdropFilter: "brightness(0.9)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: "480px" }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{
              mb: 1,
              fontWeight: "bold",
              color: "#fff",
              lineHeight: 1.4,
            }}
          >
            Join{" "}
            <span style={{ color: "#2ecc71" }}>Millions</span> of Businesses
            that Trust Sony to Supercharge Their Growth
          </Typography>

          <Typography sx={{ color: "#e0e0e0", mt: 2, fontSize: "1rem" }}>
            Payment Methods · Powerful Dashboard · Easy Integration
          </Typography>
        </motion.div>
      </Grid>

      {/* Right Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: { xs: 5, md: 0 },
          px: { xs: 3, md: 8 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: { xs: 4, sm: 5 },
              borderRadius: "20px",
              width: "100%",
              maxWidth: "440px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
            }}
          >
            {/* Logo */}
            <Box sx={{ mb: 3, textAlign: "center" }}>
              <img
                src={sonylogo}
                alt="Sony Logo"
                style={{
                  height: "60px",
                  width: "auto",
                }}
              />
            </Box>

            {/* Title */}
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", mb: 0.5, color: "#333" }}
            >
              Sign In
            </Typography>
            <Typography
              sx={{
                color: "#666",
                mb: 3,
                fontSize: "0.95rem",
              }}
            >
              Access your account and manage your Sony services
            </Typography>

            {/* Form */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ textAlign: "left", mt: 2 }}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  mb: 2.5,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />

              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                  mt: 1,
                }}
              >
                <FormControlLabel
                  control={<Checkbox color="primary" size="small" />}
                  label="Remember me"
                  sx={{ color: "#666", fontSize: "0.9rem" }}
                />
                <MuiLink
                  href="#"
                  underline="hover"
                  sx={{
                    color: "#1976d2",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  Forgot password?
                </MuiLink>
              </Box>

              <motion.div whileHover={{ scale: 1.03 }}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{
                    py: 1.3,
                    borderRadius: "12px",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    backgroundColor: "#1976d2",
                    "&:hover": { backgroundColor: "#1565c0" },
                  }}
                >
                  Sign In
                </Button>
              </motion.div>
            </Box>

            <Divider sx={{ my: 3 }}>or</Divider>

            <motion.div whileHover={{ scale: 1.03 }}>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  py: 1.3,
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Continue with Google
              </Button>
            </motion.div>

            {/* Footer */}
            <Box
              sx={{
                textAlign: "center",
                mt: 3,
                pt: 2,
                borderTop: "1px solid #eee",
              }}
            >
              <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
                Don’t have an account?{" "}
                <MuiLink
                  href="#"
                  underline="hover"
                  sx={{ color: "#1976d2", fontWeight: 500 }}
                >
                  Sign up here
                </MuiLink>
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
