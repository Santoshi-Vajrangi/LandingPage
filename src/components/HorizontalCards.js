 import React from 'react';
import dashboardImage from '../assets/dash3.png';
import cardImage from '../assets/dash2.png';
import card3 from '../assets/a1.jpg';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const cardData = [
  {
    title: 'Multi-Tenant Payment Dashboard',
    description:
      'A unified platform designed for multiple Sony tenants — including Sony Pictures, Sony Music, and Crunchyroll — to view and manage their transactions, payments, refunds, and settlements in one place. Each tenant has isolated access to ensure data security and privacy.',
    image: dashboardImage,
    button: 'View Dashboard',
  },
  {
    title: 'Tenant Configuration & Preferences',
    description:
      'Tenant users can easily configure new payment methods, select preferred currencies, and customize settlement settings based on their business needs. This gives each tenant complete flexibility and control over their payment environment.',
    image: cardImage,
    button: 'More Info..',
  },
  {
    title: 'Admin Control & my Global Insights',
    description:
      'Admins can onboard new tenants, monitor transactions across tenants, and visualize financial activities on a global map. This provides transparency and a high-level overview of all payment flows within the Sony Payments ecosystem.',
    image: card3,
    button: 'Explore Insights',
  },
];

const HorizontalCards = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: index % 2 === 0 ? 'row' : 'row-reverse',
              },
              alignItems: 'stretch',
              justifyContent: 'center',
              mb: 10,
              px: { xs: 2, md: 6 },
              gap: { xs: 4, md: 6 },
              minHeight: { md: 320 },
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <motion.img
                src={card.image}
                alt={card.title}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: 280,
                  objectFit: 'cover',
                  borderRadius: 16,
                  boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
                }}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={3}>
                {card.description}
              </Typography>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(90deg, #748EF5, #4C63E5)',
                    textTransform: 'none',
                    px: 4,
                    py: 1.5,
                    borderRadius: 8,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    alignSelf: 'flex-start',
                  }}
                >
                  {card.button}
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default HorizontalCards;