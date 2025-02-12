import { Box, Button, Modal, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const ModalContent = styled(Box)(({theme}) =>({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    borderRadius:'8px',
    width: 400,
}));



const ReferralModal = ({open, handleClose, handleReferralSubmit}) => {
    const [referralData, setReferralData] = useState({
        referrerName:'',
        referrerEmail:'',
        refereeName:'',
        refereeEmail:'',
        courseName:'',
    });

const handleInputChange = (event) =>{
  setReferralData({ ...referralData, [event.target.name]: event.target.value});
};

const handleSubmit =(event)=>{
    event.preventDefault();
    handleReferralSubmit(referralData); // Pass data to parent
    setReferralData({   // clear form after submit
      refereeName: '',
      referrerEmail:'',
      referrerName:'',
      refereeEmail:'',
      courseName:'',
    });

handleClose();    //close the modal
};
    
  return (
    <Modal open={open} onClose={handleClose}>
        <ModalContent>
            <Typography variant='h5' gutterBottom>Refer a Course</Typography>
            <form onSubmit={handleSubmit}>
                {/* ...(TextFields as before) */}
                <TextField
                    label="Your Name"
                    name="refereeName"
                    value={referralData.refereeName}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                 label="Your Email"
                 name="referrerEmail"
                 value={referralData.refereeEmail}
                 onChange={handleInputChange}
                 fullWidth
                 margin="normal"
                 required
                 type="email"
                />
                 <TextField
              label="Course Name"
              name="courseName"
              value={referralData.courseName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Friend's Name"
              name="refereeName"
              value={referralData.refereeName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Friend's Email"
              name="refereeEmail"
              value={referralData.refereeEmail}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              type="email"
              />
            <Button type='submit' variant='contained' color='primary' sx={{ mt:2}}>Submit Referral</Button>  
                

            </form>
        </ModalContent>
        </Modal>
  )
}

export default ReferralModal