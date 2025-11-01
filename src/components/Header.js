 import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Resources", to: "/resources" },
    { label: "Log in", to: "/login" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundImage: "linear-gradient(135deg, #d3dbf4ff 0%, #d3dbf4ff 100%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        py: 1,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, sm: 6 } }}>
        {/* ---------- Left: Logo + Title ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Avatar
              src="/images/sony_logo.png"
              alt="Sony Logo"
              sx={{
                width: 40,
                height: 40,
                mr: 1.5,
                border: "2px solid #000",
                backgroundColor: "white",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#000",
                cursor: "pointer",
                fontFamily: "Poppins, sans-serif",
                letterSpacing: 0.5,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              Sony Payment Portal
            </Typography>
          </Box>
        </motion.div>

        {/* ---------- Right: Navigation Menu ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {navItems.map((item, i) => (
              <Button
                key={i}
                component={Link}
                to={item.to}
                sx={{
                  color: "#121212ff",
                  textTransform: "none",
                  fontSize: "1rem",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: 0,
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "#4B7BFF",
                    transition: "width 0.3s",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                  "&:hover": {
                    color: "#000",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Contact Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="contained"
                component={Link}
                 to="/contact"
                sx={{
                  backgroundColor: "#4B7BFF",
                  color: "#fff",
                  borderRadius: "9999px",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 600,
                  boxShadow: "0px 4px 10px rgba(75, 123, 255, 0.3)",
                  "&:hover": {
                    backgroundColor: "#3A68E2",
                    boxShadow: "0px 6px 14px rgba(75, 123, 255, 0.4)",
                  },
                }}
              >
                Contact us
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;