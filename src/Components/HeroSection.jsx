import React from 'react'
import {Box, Button, Typography} from '@mui/material';
import {styled} from  '@mui/system';

const HeroSection = styled(Box)(({theme}) => ({
backgroundColur: '#f0f0f0',
padding: theme.spacing(8),
textAlign:'center',
}));

const Hero =({openModal})=>{
  return (
    <HeroSection>
   <Typography variant="h3" gutterBottom>Refer a Friend & Earn Rewards!</Typography>
   <Typography variant="body1" paragraph>Share the love and get rewarded when your friends sign up for our courses. </Typography>
   <Button variant="contained" color="primary" onClick={openModal}>Refer Now</Button>

        </HeroSection>
  )
}

export default Hero