 import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import cardImage from "../assets/payment.jpg";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "blur(8px)",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        {/* ---------- Left Text Section ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ flex: 1 }}
        >
          <Box sx={{ ml: { xs: 0, md: 6 } }}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontWeight: 700,
                color: "#0a0a0a",
                mb: 3,
                lineHeight: 1.2,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              One Portal. <br /> Endless Tenants...
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#444",
                mb: 4,
                maxWidth: 480,
                lineHeight: 1.6,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Manage global business entities, transactions, and billing — all
              from one secure platform.
            </Typography>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4B7BFF",
                  color: "#fff",
                  borderRadius: "9999px",
                  px: 4,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                  boxShadow: "0px 4px 10px rgba(75, 123, 255, 0.3)",
                  "&:hover": {
                    backgroundColor: "#3A68E2",
                    boxShadow: "0px 6px 14px rgba(75, 123, 255, 0.4)",
                  },
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </Box>
        </motion.div>

        {/* ---------- Right Image Section ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          style={{ flex: 1, display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            src={cardImage}
            alt="Payment Portal"
            sx={{
              width: "100%",
              maxWidth: 600,
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          />
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;