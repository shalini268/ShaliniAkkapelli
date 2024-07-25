import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import pic2 from '../Photos/pic2.jpg'; 
import pic3 from '../Photos/pic3.jpg';
import pic4 from '../Photos/pic4.jpg';
import pic5 from '../Photos/pic5.jpg'; 
import pic6 from '../Photos/pic6.jpg'; 



const Publics = () => {
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
                Public
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
          ⓘ By Country,State & District
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
            <img src={pic2} alt="Shop Opening" style={{ width: 50, height: 50, marginRight: '15px' }} /> {/* Use the imported image */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Shop Opening
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
         <img src={pic3} alt="Product Launch" style={{ width: 50, height: 50, marginRight: '15px' }} /> {/* Use the imported image */}

            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Product Launch
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
           <img src={pic4} alt="Product Launch" style={{ width: 50, height: 50, marginRight: '15px' }} /> {/* Use the imported image */}

            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Public Meeting
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
            <img src={pic5} alt="Product Launch" style={{ width: 50, height: 50, marginRight: '15px' }} /> {/* Use the imported image */}

            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
               Public Feedback
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
           <img src={pic6} alt="Product Launch" style={{ width: 50, height: 50, marginRight: '15px' }} /> {/* Use the imported image */}

            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Others
              </Typography>
            </Box>
            <ArrowForwardIosIcon sx={{ color: '#67968A' }} />
          </Box>          

        </Box>
      </Container>
    </div>
  );
};

export default Publics;
