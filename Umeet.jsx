import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography, Toolbar } from '@mui/material';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import FestivalIcon from '@mui/icons-material/Festival';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

const Umeet = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Container maxWidth="sm" sx={{ padding: 0 }}>
        <Box sx={{ width: '100%', height: '70px' }}>
          <AppBar
            sx={{
              height: '80px',
              backgroundColor: '#67968A',
              borderBottom: '2px solid #67968A'
            }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                textAlign="center"
                sx={{ flexGrow: 1 }}
              >
                U-MEET
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>

      <Container maxWidth="sm" sx={{ mt: 4, border: '2px solid #67968A', borderRadius: '8px', textAlign: 'center', marginLeft: '450px', marginBottom: '500px', height: '500px' }}>
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Create Event
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
              marginBottom: '10px',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/personal')}
          >
            <CelebrationOutlinedIcon sx={{ fontSize: 50, color: '#67968A', marginRight: '15px' }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Personal
              </Typography>
              <Stack spacing={0} sx={{ textAlign: 'center' }}>
                <Typography variant="caption">
                  Reunion, Birthday, wedding, etc., with
                </Typography>
                <Typography variant="caption">
                  Friends, Relatives, Classmates, Officemates & Unions
                </Typography>
              </Stack>
            </Box>
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
              marginBottom: '10px',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/public')}
          >
            <FestivalIcon sx={{ fontSize: 50, color: '#67968A', marginRight: '10px' }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Public
              </Typography>
              <Typography variant="caption" sx={{ textAlign: 'center' }}>
                Invite the public by city, state, and country
              </Typography>
            </Box>
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
              marginBottom: '10px',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/political')}
          >
            <Groups2OutlinedIcon sx={{ fontSize: 50, color: '#67968A', marginRight: '15px' }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Political
              </Typography>
              <Stack spacing={0} sx={{ textAlign: 'center' }}>
                <Typography variant="caption">
                  Invite the public and party members for meetings and polls based on election consulting, state, and country
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Umeet;
