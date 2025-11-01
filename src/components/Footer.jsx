 // Footer.js
import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import {
  Button,
} from "@mui/material"; 
import { motion } from "framer-motion";


const Footer = () => {
  return (
     
     <Box sx={{ backgroundColor: '#4B65F6', color: '#fff', py: 6, px: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{ display: 'inline-block', backgroundColor: '#fff', color: '#000', px: 2, py: 1, borderRadius: 1 }}
        >
          Sony
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" mb={2}>Company</Typography>
          {['About Us', 'Contact Us', 'Our Company', 'Company History', 'Business Data & Sales', 'Innovation', 'Careers Opens an external website'].map((link, i) => (
            <Typography key={i}>
              <Link href="#" underline="hover" color="inherit">
                {link}
              </Link>
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" mb={2}>News & Media</Typography>
          {['Newsroom', 'SIE.Blog', 'Tech.Blog', 'Press Releases', 'Asset Library', 'Media Inquiries Opens an external website'].map((link, i) => (
            <Typography key={i}>
              <Link href="#" underline="hover" color="inherit">
                {link}
              </Link>
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" mb={2}>Impact</Typography>
          {['Impact', 'Accessibility', 'Online Safety', 'Diversity & Beyond', 'Environment', 'Education', 'Responsible Supply Chain'].map((link, i) => (
            <Typography key={i}>
              <Link href="#" underline="hover" color="inherit">
                {link}
              </Link>
            </Typography>
          ))}
        </Grid>
      </Grid>

      <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.4)', mt: 4, pt: 2, textAlign: 'center' }}>
        <Typography variant="body2">© 2025 Sony Interactive Entertainment</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
