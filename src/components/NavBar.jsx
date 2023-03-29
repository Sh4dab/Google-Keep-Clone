import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Header = styled(AppBar)`
    z-index: 1201;
    background: #f9f7f3;
    height: 70px;
    box-shadow: inset 0 -1px 0 0 #dadce0
`;

const Heading = styled(Typography)`
    color:#5F6368;
    font-size: 22px;
    margin-left: 20px;
    font-family: "Product Sans",Arial,sans-serif;
`;

const NavBar = ({ open, handleDrawer }) => {
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';


  return (
    <Header open={open} >
      <Toolbar >
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px' }}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="logo" style={{ width: 25 }} />
        <Heading>Keep</Heading>
      </Toolbar>
    </Header>
  )
}
export default NavBar