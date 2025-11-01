 import React from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PaymentBanner = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #4B65F6 0%, #4B7BFF 100%)',
          color: '#fff',
          py: { xs: 6, sm: 8 },
          px: { xs: 3, sm: 6 },
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ maxWidth: 600 }}>
          <Typography
            variant={isSmallScreen ? 'h5' : 'h4'}
            sx={{ fontWeight: 700, mb: 2, textAlign: 'left' }}
          >
            Your Payments. Our Platform. Infinite Possibilities.
          </Typography>
          <Typography
            variant={isSmallScreen ? 'body1' : 'h6'}
            sx={{ fontWeight: 400, mb: 4, textAlign: 'left' }}
          >
            Partner with us to simplify complex payment operations across multiple entities. One dashboard. Zero chaos.
          </Typography>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant="outlined"
              component={Link}
              to="/contact"
              aria-label="Get in touch with us"
              sx={{
                backgroundColor: "#fff",
                color: "#4B65F6",
                borderRadius: "9999px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                fontSize: '1rem',
                border: 'none',
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
                "&:hover": {
                  backgroundColor: "#f0f0ff",
                  boxShadow: "0px 6px 14px rgba(255, 255, 255, 0.4)",
                },
              }}
            >
              Get in touch
            </Button>
          </motion.div>
        </Box>
      </Box>

      {/* Short padding after the banner */}
      <Box sx={{ height: '2px' }} />
    </>
  );
};

export default PaymentBanner;