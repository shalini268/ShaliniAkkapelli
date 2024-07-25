import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import CakeIcon from '@mui/icons-material/Cake';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RingIcon from '@mui/icons-material/Favorite';

const Personal = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/innerpage');
  };

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
              <Typography variant="h5" textAlign="center" sx={{ flexGrow: 1 }}>
                Personal
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
            ⓘ Invite friends, relatives, classmates, officemates, and union members
          </Typography>

          <Box
            onClick={handleNavigation}
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
          >
            <EscalatorWarningIcon sx={{ fontSize: 50, color: '#67968A', marginRight: '15px' }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Re-Union
              </Typography>
            </Box>
            <ArrowForwardIosIcon sx={{ color: '#67968A' }} />
          </Box>

          <Box
            onClick={handleNavigation}
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
          >
            <CakeIcon sx={{ fontSize: 50, color: '#67968A', marginRight: '15px' }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Birthday
              </Typography>
            </Box>
            <ArrowForwardIosIcon sx={{ color: '#67968A' }} />
          </Box>

          <Box
            onClick={handleNavigation}
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
          >
            <RingIcon sx={{ fontSize: 50, color: '#67968A', marginRight: '15px' }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Wedding
              </Typography>
            </Box>
            <ArrowForwardIosIcon sx={{ color: '#67968A' }} />
          </Box>

          <Box
            onClick={handleNavigation}
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
          >
            <WorkspacePremiumIcon sx={{ fontSize: 50, color: '#67968A', marginRight: '15px' }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Anniversary
              </Typography>
            </Box>
            <ArrowForwardIosIcon sx={{ color: '#67968A' }} />
          </Box>

          <Box
            onClick={handleNavigation}
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
          >
            <ChildCareIcon sx={{ fontSize: 50, color: '#67968A', marginRight: '15px' }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#67968A', marginBottom: '0px' }}>
                Baby Shower
              </Typography>
            </Box>
            <ArrowForwardIosIcon sx={{ color: '#67968A' }} />
          </Box>

          <Box
            onClick={handleNavigation}
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
          >
            <AutoAwesomeIcon sx={{ fontSize: 50, color: '#67968A', marginRight: '15px' }} />
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

export default Personal;
