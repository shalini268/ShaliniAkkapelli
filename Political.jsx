import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import pic7 from '../Photos/pic7.jpg'; 
import pic8 from '../Photos/pic8.jpg';
import pic9 from '../Photos/pic9.jpg';




const Political = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ padding: 0 }}>
        <Box sx={{ width: '100px', height: '100px' }}>
          <AppBar
            sx={{
              height: '80px',
              backgroundColor: '#67968A',
              borderBottom: '2px solid #67968A'
            }}
          >
            <Toolbar>
              <Typography
                variant="h5"
                textAlign="center"
                sx={{ flexGrow: 1 }}
              >
                Political
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>

      <Container
        maxWidth="sm"
        sx={{
          mt: 4,
          border: '2px solid #67968A',
          borderRadius: '8px',
          textAlign: 'center',
          marginLeft: '450px',
          marginBottom: '500px',
          height: 'auto',
          padding: 3
        }}
      >
        <Box
          sx={{
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              marginBottom: '20px'
            }}
          >
            Create Event
          </Typography>
          <Typography variant='body2' sx={{ marginBottom: '20px' }}>
          ⓘ By Election constitutions, State, & Country
          </Typography>

          <Box
            sx={{
              border: '3px solid #67968A',
              borderRadius: '15px',
              padding: '10px',
              width: '310px',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              marginBottom: '10px'
            }}
          >
            <img src={pic7}  style={{ width: 50, height: 50, marginRight: '15px' }} /> {/* Use the imported image */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Party Meeting
              </Typography>
            </Box>
            <ArrowForwardIosIcon sx={{ color: '#67968A' }} />
          </Box>

          <Box
            sx={{
              border: '3px solid #67968A',
              borderRadius: '15px',
              padding: '10px',
              width: '310px',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              marginBottom: '10px'
            }}
          >
         <img src={pic8} alt="Product Launch" style={{ width: 50, height: 50, marginRight: '15px' }} /> {/* Use the imported image */}

            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Party Feedback
              </Typography>
            </Box>
            <ArrowForwardIosIcon sx={{ color: '#67968A' }} />
          </Box>
          <Box
            sx={{
              border: '3px solid #67968A',
              borderRadius: '15px',
              padding: '10px',
              width: '310px',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              marginBottom: '10px'
            }}
          >
           <img src={pic9} alt="Product Launch" style={{ width: 50, height: 50, marginRight: '15px' }} /> {/* Use the imported image */}

            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Party Candidate Feedback
              </Typography>
            </Box>
            <ArrowForwardIosIcon sx={{ color: '#67968A' }} />
          </Box>

          
              
                     

        </Box>
      </Container>
    </div>
  );
};

export default Political;
