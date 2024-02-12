import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';

const ToolBarCustom = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const SearchBar = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));
const IconContainer = styled(Box)(({ theme }) => ({
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  display: 'none',

  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const UserInfoSmall = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

function Navbar() {
  const [openAppDrawer, setOpenAppDrawer] = useState(false);

  return (
    <AppBar position='sticky'>
      <ToolBarCustom>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          NavBar
        </Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <SearchBar>
          <InputBase
            placeholder='Search...'
            sx={{
              // '&::placeholder': {
              //   color: 'black',
              // },
              color:"black"
            }}
          />
        </SearchBar>
        <IconContainer>
          <Badge color='error' badgeContent={5}>
            <EmailIcon />
          </Badge>
          <Badge color='error' badgeContent={5}>
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
            sx={{ width: '30px', height: '30px' }}
            onClick={() => {
              setOpenAppDrawer(true);
            }}
          />
        </IconContainer>
        <UserInfoSmall
          onClick={() => {
            setOpenAppDrawer(true);
          }}
        >
          <Avatar
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
            sx={{ width: '30px', height: '30px' }}
          />
          <span>Remy Sharp</span>
        </UserInfoSmall>
      </ToolBarCustom>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        // anchorEl={anchorEl}
        open={openAppDrawer}
        onClose={() => {
          setOpenAppDrawer(false);
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
