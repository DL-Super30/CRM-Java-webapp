"use client";
import * as React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const drawerWidth = 240;
const navItems = ['Home', 'Leads', 'Opportunities', 'Learners', 'Courses', 'Activities', 'Analytics'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Image className="mx-2 hidden sm:block" src="/button.svg" width={35} height={10} alt="Button logo" />
      <Image className='mb-2' src="/skillcapital.png" width={300} height={150} alt="Skill Capital logo" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='hover-bg'>
              <ListItemText primary={item} sx={{ fontSize: '10px' }} />
              <Image src="/downarrow.svg" height={5} width={10} alt={`${item} dropdown icon`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar className='me-16'>
          <IconButton
            color="inherit"
            aria-label="open overflow menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xl: 'none' } }}
            style={{ color: '#000000' }} 
          >
            <MenuIcon />
          </IconButton>

          <Image className="mx-2" src="/button.svg" width={35} height={10} alt="Button logo" />
          <Image src="/skillcapital.png" width={300} height={150} alt="Skill Capital logo" style={{ marginRight: 'auto' }} />
          <Box sx={{ display: { xs: 'none', sm: 'block', overflow: 'hidden',whiteSpace: 'nowrap',maxWidth: '100%',} }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000000', fontSize: '17px',marginTop:'12px' }} className="nav-item-button hover-bg ">
                {item}
                <Image src="/downarrow.svg" height={5} width={10} alt={`${item} dropdown icon`} />
              </Button>
            ))}
          </Box>
          <Image src="/Stars.png" width={40} height={10} alt="Star icon" className="hidden md:block mt-2 ms-5" />
          <Button className="icon-button mt-4"><FontAwesomeIcon icon={faBell} width={23} style={{ color: 'black', fontSize: '24px' }} /></Button>
          <Button className="icon-button mt-4"><FontAwesomeIcon icon={faUser} width={23} style={{ color: 'black', fontSize: '24px' }} /></Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;