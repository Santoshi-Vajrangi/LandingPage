  import React from 'react';
 import { Box, Typography, Button, Paper } from '@mui/material';
 import { motion } from 'framer-motion';
 
 const features = [
   {
     title: 'Multi-Tenant Management',
     description: 'Effortlessly manage multiple business entities under one roof.',
     badgeColor: '#3a3a3a',
   },
   {
     title: 'Real-Time Payments & Settlements',
     description: 'Experience instant transactions and seamless settlements.',
     badgeColor: '#2558ff',
   },
   {
     title: 'Global Insights',
     description: 'Gain valuable insights into your global payment operations.',
     badgeColor: '#f48b86',
   },
   {
     title: 'Secure & Compliant',
     description: 'Trust in our top-notch security measures and compliance standards.',
     badgeColor: '#14a84b',
   },
 ];
 
 export default function FeatureGrid() {
   return (
     <Box sx={{ py: 10, backgroundColor: '#f8faff' }}>
       {/* Section Header */}
       <Box textAlign="center" mb={6}>
         <Typography variant="h4" fontWeight="700" color="#3558e6">
           Core Features
         </Typography>
         <Typography color="text.secondary" mt={1.5} fontSize="1.05rem">
           Discover the powerful capabilities that make our Sony Payment Portal efficient, intelligent, and secure.
         </Typography>
       </Box>
 
       {/* Grid Container */}
       <Box
         sx={{
           display: 'grid',
           gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(4,1fr)' },
           gap: 4,
           px: { xs: 3, md: 8 },
           alignItems: 'stretch',
         }}
       >
         {features.map((f, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: i * 0.15 }}
             whileHover={{
               y: -8,
               boxShadow: '0 20px 40px rgba(80,120,255,0.25)',
               transition: { duration: 0.3 },
             }}
             style={{ height: '100%' }}
           >
             <Paper
               elevation={3}
               sx={{
                 position: 'relative',
                 height: '100%',
                 minHeight: { xs: 250, md: 320 },
                 borderRadius: 4,
                 p: { xs: 3, md: 4 },
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'space-between',
                 textAlign: 'center',
                 background: 'linear-gradient(145deg, #748EF5 0%, #4C63E5 100%)',
                 color: '#fff',
                 overflow: 'visible',
                 transition: 'all 0.3s ease',
               }}
             >
               {/* Floating Badge */}
               <Box
                 sx={{
                   position: 'absolute',
                   top: -18,
                   left: '50%',
                   transform: 'translateX(-50%)',
                   width: 40,
                   height: 40,
                   borderRadius: '50%',
                   backgroundColor: f.badgeColor,
                   boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
                 }}
               />
 
               {/* Title & Description */}
               <Box>
                 <Typography variant="h6" fontWeight="700" mb={1.5}>
                   {f.title}
                 </Typography>
                 <Typography
                   variant="body2"
                   sx={{ color: 'rgba(255,255,255,0.92)', lineHeight: 1.6 }}
                 >
                   {f.description}
                 </Typography>
               </Box>
 
               {/* CTA Button */}
               <Box sx={{ mt: 3 }}>
                 <Button
                   variant="text"
                   sx={{
                     color: '#fff',
                     fontWeight: 600,
                     textTransform: 'none',
                     p: 0,
                     '&:hover': { textDecoration: 'underline', background: 'transparent' },
                   }}
                 >
                   Learn More →
                 </Button>
               </Box>
             </Paper>
           </motion.div>
         ))}
       </Box>
     </Box>
   );
 }
 