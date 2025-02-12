// import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
import Hero from './Components/HeroSection';
import ReferralModal from './Components/ReferralModal';
import CustomerSnackbar from './Components/Snackbar';

const App=()=> {
  const [openModal, setOpenModal] =useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] =useState('');
  const [snackbarSeverity, setSnackSeverity] = useState('success');

  const handleOpenModal =()=> setOpenModal(true);
  const handleCloseModal =()=>setOpenModal(false);

  const handleReferralSubmit =(referralData) =>{
    // basic form validation (enhance as needed)
    if (!referralData.referrerName || !referralData.referrerEmail || !referralData.referrerName || !referralData.referrerEmail || !referralData.courseName){
      setSnackbarMessage('Please fill in all required fields.');
      setSnackSeverity('error');
      setSnackbarOpen(true);
      return;
    };

    console.log('Referral Data:', referralData);  // replace with API call

    setSnackbarMessage('Referral submitted successfully!');
    setSnackSeverity('success');
    setSnackbarOpen(true);
  };

    const handleCloseSnackbar = (event, reason) =>{
      if(reason === 'clickaway'){
        return;
      }
      setSnackbarOpen(false);
    };
  


  return (
   <div>
  <Hero openModal={handleOpenModal}/>
  <ReferralModal
  open={openModal}
  handleClose={handleCloseModal}
  handleReferralSubmit={handleReferralSubmit} 
  />
  <CustomerSnackbar
  open={snackbarOpen}
  handleClose={handleCloseModal}
  message={snackbarMessage}
  severity={snackbarSeverity}
  />
    </div>
  );
};

export default App;
