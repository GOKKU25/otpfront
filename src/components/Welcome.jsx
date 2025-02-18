import React from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 4 }}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome 
        </Typography>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="success" size="large">
            Back to Opt
          </Button>
        </Link>
      </Box>
    </Container>
  )
}
export default Welcome