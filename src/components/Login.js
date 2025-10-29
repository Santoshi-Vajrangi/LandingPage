 import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import sonylogo from "../assets/sonylogo.jpg";
import Login from "../assets/Login.png"; // Background image

const LoginPage = () => {
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
          justifyContent: "flex-end",
          alignItems: "center",
          p: { xs: 3, md: 4 },
          backdropFilter: "brightness(0.9)",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "480px", textAlign: "center", mb: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold", color: "#fff" }}>
              Join <span style={{ color: "#2ecc71" }}>Millions</span> Businesses
              that Trust Sony to Supercharge their Business
            </Typography>

            <Typography sx={{ color: "#fff", mt: 2 }}>
              Payment Methods · Powerful Dashboard · Easy Integration
            </Typography>
          </motion.div>
        </Box>
      </Grid>

      {/* Right Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          p: { xs: 2, md: 5 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginLeft: "60px", width: "100%" }}
        >
          <Paper
            elevation={4}
            sx={{
              p: 5,
              borderRadius: "16px",
              width: "100%",
              maxWidth: "400px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            {/* Sony Logo */}
            <Box
              sx={{
                mb: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={sonylogo} alt="Sony Logo" style={{ height: "40px" }} />
            </Box>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Get Started with your email or phone number
            </Typography>

            <TextField
              fullWidth
              placeholder="Enter your email or phone number"
              variant="outlined"
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
              }}
            />

            <motion.div whileHover={{ scale: 1.03 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  borderRadius: "12px",
                  py: 1.3,
                  mb: 2,
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "#1565c0",
                  },
                }}
              >
                Continue
              </Button>
            </motion.div>

            <Divider sx={{ my: 2 }}>or</Divider>

            <motion.div whileHover={{ scale: 1.03 }}>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  py: 1.3,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Continue with Google
              </Button>
            </motion.div>

            <Typography
              sx={{
                mt: 3,
                fontSize: "0.8rem",
                color: "text.secondary",
              }}
            >
              By continuing you agree to our{" "}
              <a href="#" style={{ color: "#1976d2" }}>privacy policy</a> and{" "}
              <a href="#" style={{ color: "#1976d2" }}>terms of use</a>.
            </Typography>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;