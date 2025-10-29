 import React from "react";
import { Box, Typography, Paper, Link } from "@mui/material";
import { motion } from "framer-motion";

const features = [
  {
    title: "Multi-Tenant Management",
    description: "Effortlessly manage multiple business entities under one roof.",
    color: "#4B4B4B",
  },
  {
    title: "Real-Time Payments & Settlements",
    description: "Experience instant transactions and seamless settlements.",
    color: "#1E4DFF",
  },
  {
    title: "Global Insights",
    description: "Gain valuable insights into your global payment operations.",
    color: "#F28B82",
  },
  {
    title: "Secure & Compliant",
    description: "Trust in our top-notch security measures and compliance standards.",
    color: "#00B050",
  },
];

const CoreFeatures = () => {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#FFFFFF",
        textAlign: "center",
        px: { xs: 2, md: 8 },
      }}
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#1E4DFF",
            mb: 2,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Core Features
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#555",
            mb: 6,
            maxWidth: 600,
            mx: "auto",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Discover the powerful capabilities that make our Sony Payment
          Portal efficient, intelligent, and secure.
        </Typography>
      </motion.div>

      {/* Feature Cards Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 4,
          flexWrap: { xs: "wrap", md: "nowrap" },
          overflowX: { xs: "auto", md: "visible" },
          px: 2,
          pb: 2,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{ flex: "0 0 auto" }}
          >
            <Paper
              elevation={6}
              sx={{
                width: 240,
                minHeight: 200,
                borderRadius: "20px",
                p: 3,
                background:
                  "linear-gradient(145deg, rgba(116,142,245,0.9), rgba(30,77,255,0.9))",
                color: "#fff",
                textAlign: "left",
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0px 8px 24px rgba(30,77,255,0.3)",
                },
              }}
            >
              {/* Colored Circle */}
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: feature.color,
                  position: "absolute",
                  top: -18,
                  left: 20,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              />

              {/* Card Text */}
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ mt: 3, fontFamily: "Poppins, sans-serif" }}
              >
                {feature.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: "rgba(255,255,255,0.85)",
                  mb: 2,
                }}
              >
                {feature.description}
              </Typography>

              <Link
                href="#"
                underline="hover"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "Poppins, sans-serif",
                  "&:hover": { textDecorationColor: "#fff" },
                }}
              >
                Learn More →
              </Link>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default CoreFeatures;