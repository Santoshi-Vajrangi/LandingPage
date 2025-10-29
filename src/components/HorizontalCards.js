 import React from 'react';
import dashboardImage from '../assets/dash3.png';
import cardImage from '../assets/dash2.png';
import card3 from '../assets/a1.jpg';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const cardData = [
  {
    title: 'Horizontal Card',
    description:
      'Horizontal card description, mentioning the feature information. A multiline info can state whatever info about the feature.',
    image: dashboardImage,
  },
  {
    title: 'Horizontal Card',
    description:
      'Horizontal card description, mentioning the feature information. A multiline info can state whatever info about the feature.',
    image: cardImage,
  },
  {
    title: 'Horizontal Card',
    description:
      'Horizontal card description, mentioning the feature information. A multiline info can state whatever info about the feature.',
    image: card3,
  },
];

const HorizontalCards = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#fff' }}>
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: index % 2 === 0 ? 'row' : 'row-reverse',
              },
              alignItems: 'center',
              justifyContent: 'center',
              mb: 10,
              gap: 4,
            }}
          >
            <motion.img
              src={card.image}
              alt={card.title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{
                width: '100%',
                maxWidth: '45%',
                maxHeight: 280,
                objectFit: 'cover',
                borderRadius: 12,
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              }}
            />
            <Box sx={{ width: { xs: '100%', md: '45%' } }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                {card.description}
              </Typography>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(90deg, #748EF5, #4C63E5)',
                    textTransform: 'none',
                  }}
                >
                  Button Text
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