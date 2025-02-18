import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';  

const Appp = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await axios.post('https://otpbackend-m4qb.onrender.com/send-otp', { email });
      setOtpSent(true);
    } catch (err) {
      setError('Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };
  
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post('https://otpbackend-m4qb.onrender.com/verify-otp', { email, otp });

      if (response.status === 200) {
        setOtpVerified(true);
        
        navigate('/welcome');
      }
    } catch (err) {
      setError('Invalid OTP');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
          padding: 6,
          border: 1,
          borderColor: 'grey.300',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          OTP Authentication
        </Typography>

        {otpSent && !otpVerified ? (
          <form onSubmit={handleOtpSubmit} style={{ width: '100%' }}>
            <TextField
              variant="outlined"
              fullWidth
              label="Enter your OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              margin="normal"
            />
            <Button
  type="submit"
  variant="contained"
  fullWidth
  color="error" 
  disabled={loading}
  sx={{ marginTop: 2 }}
>
  {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit OTP'}
</Button>
          </form>
        ) : (
          <form onSubmit={handleEmailSubmit} style={{ width: '100%' }}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="success"
              disabled={loading}
              sx={{ marginTop: 2 }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Send OTP'}
            </Button>
          </form>
        )}
        {error && (
          <Typography variant="body2" color="error" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}
        {otpVerified && (
          <Typography variant="h6" sx={{ marginTop: 2, color: 'green' }}>
            Welcome! OTP Verified Successfully.
          </Typography>
        )}
      </Box>
    </Container>
  );
};
export default Appp;
