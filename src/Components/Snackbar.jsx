import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const CustomerSnackbar = ({open, handleClose, message, severity}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
            {message}
        </Alert>
        </Snackbar>
  )
}

export default CustomerSnackbar;