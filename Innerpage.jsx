import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Typography,
  Toolbar,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Switch,
  FormControlLabel,
  InputAdornment,
  Button
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import pic10 from '../Photos/pic10.jpg';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

const PhoneNumberInput = () => {
  const [countryCode, setCountryCode] = React.useState('+91'); // Default country code

  const handleChange = (event) => {
    setCountryCode(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
      <Select
        value={countryCode}
        onChange={handleChange}
        variant="standard"
        sx={{ minWidth: '80px', marginRight: '8px' }}
      >
        <MenuItem value="+91">IN +91</MenuItem>
        <MenuItem value="+93">AF +93</MenuItem>
      </Select>
      <TextField
        placeholder="Phone Number*"
        variant="standard"
        sx={{ width: '720px' }}
        InputProps={{
          sx: {
            borderRadius: '4px'
          }
        }}
      />
    </Box>
  );
};

const Innerpage = () => {
  const [visibility, setVisibility] = React.useState('all'); // Default visibility option
  const [foodAvailable, setFoodAvailable] = React.useState(true); // Default food availability
  const [aboutEvent, setAboutEvent] = React.useState(''); // State for the about event text

  const handleVisibilityChange = (event) => {
    setVisibility(event.target.value);
  };

  const handleFoodAvailabilityChange = (event) => {
    setFoodAvailable(event.target.checked);
  };

  const handleAboutEventChange = (event) => {
    // Limit to 200 characters
    if (event.target.value.length <= 200) {
      setAboutEvent(event.target.value);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: 0 }}
    >
      <Box
        sx={{
          width: '900px',
          height: '1250px',
          border: '1px solid #000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <AppBar
          sx={{
            width: '100%',
            backgroundColor: '#67968A',
            borderBottom: '2px solid #67968A',
            position: 'absolute',
            top: 0,
            borderRadius: '4px 4px 0 0'
          }}
        >
          <Toolbar sx={{ minHeight: '70px', padding: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <IconButton edge="start" color="inherit" sx={{ padding: '0 8px' }}>
                <ArrowBackIosIcon sx={{ color: '#fff' }} />
              </IconButton>

              <Typography variant="h6" textAlign="center" sx={{ flexGrow: 1, fontSize: '1.1rem' }}>
                Personal Event
              </Typography>

              <IconButton edge="end" color="inherit" sx={{ padding: '0 8px' }}>
                <RemoveRedEyeIcon sx={{ color: '#fff', height: '30px', width: '30px' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ position: 'absolute', top: '90px', left: '16px' }}>
          <Typography variant="h6" sx={{ color: '#67968A' }}>
            Birthday
          </Typography>
          <Box
            component="img"
            src={pic10}
            alt="Birthday"
            sx={{
              width: '300px',
              height: 'auto',
              marginTop: '20px',
              position: 'relative',
              left: '90px'
            }}
          />
          <Typography
            variant="h6"
            sx={{ color: '#67968A', fontSize: '1.0rem', marginTop: '10px', left: '180px', position: 'relative' }}
          >
            Select Template
          </Typography>
          <Box sx={{ marginTop: '20px', position: 'relative', left: '40px' }}>
            <TextField
              placeholder="Event Title*"
              variant="standard"
              sx={{ width: '800px', marginTop: '20px' }}
              InputProps={{
                sx: {
                  borderRadius: '4px',
                  '&::placeholder': {
        color: '#888',
                  }
                }
              }}
            />
            <TextField
              placeholder="Start Date & Time*"
              variant="standard"
              sx={{ width: '800px', marginTop: '20px' }}
              InputProps={{
                sx: {
                  borderRadius: '4px',
                  borderRadius: '4px',
                  '&::placeholder': {
        color: 'Black',
                  }
                }
              }}
            />
            <TextField
              placeholder="End Date & Time*"
              variant="standard"
              sx={{ width: '800px', marginTop: '20px' }}
              InputProps={{
                sx: {
                  borderRadius: '4px',
                  borderRadius: '4px',
                  '&::placeholder': {
        color: '#888',
                  }
                }
              }}
            />
            <TextField
              placeholder="Location*"
              variant="standard"
              sx={{ width: '800px', marginTop: '20px' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RoomOutlinedIcon />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: '4px',
                  borderRadius: '4px',
                  '&::placeholder': {
        color: '#888',
                  }
                }
              }}
            />
            <PhoneNumberInput />
            <TextField
              placeholder="Host Mail Id"
              variant="standard"
              sx={{ width: '800px', marginTop: '20px' }}
              InputProps={{
                sx: {
                  borderRadius: '4px',
                  borderRadius: '4px',
                  '&::placeholder': {
        color: '#888',
                  }
                }
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
              <GroupOutlinedIcon sx={{ marginRight: '8px' }} />
              <Typography variant="body1" sx={{ color: '#67968A' }}>
                Invite Guests
              </Typography>
            </Box>
            <Select
              value={visibility}
              onChange={handleVisibilityChange}
              variant="standard"
              sx={{ width: '800px', marginTop: '20px' }}
            >
              <MenuItem value="all">Guest list-Display to All</MenuItem>
              <MenuItem value="selected">Guest list-Display only to Host</MenuItem>
            </Select>
            <Box sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '800px' }}>
              <Typography variant="body1" sx={{ color: '#67968A', marginRight: '16px' }}>
                Food Availability
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ color: 'primary', marginRight: '8px' }}>
                  No
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
  checked={foodAvailable}
  onChange={handleFoodAvailabilityChange}
  name="foodAvailability"
  color="#67968A"
  sx={{
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#67968A',  // Green color when ON
    }
  }}
/>
                  }
                  label={<Typography sx={{ color: 'primary' }}>Yes</Typography>}
                  labelPlacement="end"
                />
              </Box>
            </Box>
            {/* About Event Box */}
            <Box sx={{ width: '800px', marginTop: '20px', position: 'relative' }}>
              <TextField
                multiline
                rows={3}
                label="About Event"
                variant="outlined"
                value={aboutEvent}
                onChange={handleAboutEventChange}
                sx={{ width: '100%', marginTop: '10px' }}
                InputProps={{
                  sx: {
                    borderRadius: '15px','&:hover': {
                     
                     borderColor: '#67968A',}
                  }
                  
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5px' }}>
                <Typography variant="caption" sx={{ color: '#67968A' }}>
                  {aboutEvent.length}/200
                </Typography>
              </Box>
            </Box>
            <TextField
              variant="standard"
              sx={{ width: '800px', marginTop: '1px' }}
              InputProps={{
                sx: {
                  borderRadius: '4px'
                }
              }}
            />
            {/* Submit Button */}
            <Button
  variant="contained"
  sx={{ 
    marginTop: '20px',
    textTransform: 'none',
    backgroundColor: "#67968A",
    width: '700px',
    borderRadius: '20px',
    '&:hover': {
      backgroundColor: "#67968A",  // Maintain the same color on hover
    }
  }}
>
  Submit
</Button>
<Button
  variant="contained"
  sx={{ 
    marginTop: '20px',
    textTransform: 'none',
    color: "#67968A",
    backgroundColor: 'white',
    width: '700px',
    border: '2px solid #67968A',
    borderRadius: '20px',
    '&:hover': {
      backgroundColor: 'white', 
       borderColor: '#67968A',  // Maintain the same color on hover
    }
  }}
>
  Cancel
</Button>

          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Innerpage;
