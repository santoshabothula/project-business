import { useState } from "react";
import { AppBar, Avatar, Box, Button, ButtonGroup, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Person2Icon from '@mui/icons-material/Person2';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const pages = ['online', 'matches', 'Search', 'Messages', 'Activity'];

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleProfileMenu = () => {
        handleCloseUserMenu();
        navigate('/profile');
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {pages.map((text, index) => (
                <div key={text} >
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </div>
            ))}
          </List>
        </Box>
    );

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    
                    <BakeryDiningIcon sx={{ display: { xs: 'none', md: 'flex', fontSize: 'xxx-large' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        
                        <IconButton
                            size="large"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    
                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            {DrawerList}
                        </Drawer>
                    </Box>
                    
                    <BakeryDiningIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <ButtonGroup variant="text" color="secondary" aria-label="Basic button group">
                            {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                            ))}
                        </ButtonGroup>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 1 }}>
                            <Avatar sx={{ bgcolor: '#FFF' }}> <Person2Icon color="primary" /> </Avatar>
                        </IconButton>

                        {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar sx={{ bgcolor: '#FFF' }}> <SettingsIcon color="primary" /> </Avatar>
                        </IconButton> */}
                        
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleProfileMenu}>
                                <Avatar sx={{ mr:2 }} /> Profile
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Avatar sx={{ mr:2 }} /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleCloseUserMenu}>
                                <ListItemIcon> <Settings fontSize="small" /> </ListItemIcon> Settings
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <ListItemIcon> <Logout fontSize="small" /> </ListItemIcon> Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;