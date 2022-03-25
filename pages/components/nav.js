import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentsIcon from '@mui/icons-material/Payments';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import BathroomIcon from '@mui/icons-material/Bathroom';
import GarageIcon from '@mui/icons-material/Garage';
import LivingIcon from '@mui/icons-material/Living';
import DiningIcon from '@mui/icons-material/Dining';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import YardIcon from '@mui/icons-material/Yard';
import LandscapeIcon from '@mui/icons-material/Landscape';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const drawerWidth = 300;

function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="view account info"
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        edge="end"
        color="inherit"
        sx={{ ml: 0 }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

function SidenavListItem({ text, icon }) {
  return (
    <ListItem
      button
      key={text}
      sx={{
        borderRadius: '0 100px 100px 0',
        overflow: 'hidden',
        paddingLeft: '20px',
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} sx={{ color: '#212121' }} />
    </ListItem>
  );
}

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List
      sx={{
        background: 'white',
        paddingRight: '3px',
        borderWidth: 0,
        border: 0,
      }}
    >
      <Toolbar class="hide-on-mobile" />
      <ListSubheader component="div">Home</ListSubheader>
      <SidenavListItem text="Overview" icon={<DashboardIcon />} />
      <SidenavListItem text="Finances" icon={<PaymentsIcon />} />
      <SidenavListItem text="Meal planner" icon={<LunchDiningIcon />} />

      <ListSubheader component="div">Rooms</ListSubheader>
      <SidenavListItem text="Kitchen" icon={<KitchenIcon />} />
      <SidenavListItem text="Bedroom" icon={<BedroomParentIcon />} />
      <SidenavListItem text="Bathroom" icon={<BathroomIcon />} />
      <SidenavListItem text="Garage" icon={<GarageIcon />} />
      <SidenavListItem text="Living room" icon={<LivingIcon />} />
      <SidenavListItem text="Dining room" icon={<DiningIcon />} />
      <SidenavListItem text="Laundry room" icon={<LocalLaundryServiceIcon />} />
      <SidenavListItem text="Storage room" icon={<Inventory2Icon />} />
      <SidenavListItem text="Garden" icon={<YardIcon />} />
      <SidenavListItem text="Camping supplies" icon={<LandscapeIcon />} />

      <ListSubheader component="div">Other</ListSubheader>
      <SidenavListItem text="Notes" icon={<InboxIcon />} />
      <SidenavListItem text="Maintenance" icon={<InboxIcon />} />
      <SidenavListItem text="Starred" icon={<InboxIcon />} />
      <SidenavListItem text="Trash" icon={<InboxIcon />} />
    </List>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          zIndex: { lg: 9 },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, ml: '-5px', display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Smartlist
          </Typography>
          <IconButton
            size="large"
            aria-label="notifications"
            edge="end"
            color="inherit"
            sx={{ ml: 0, mr: 0 }}
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="search"
            edge="end"
            color="inherit"
            sx={{ ml: 1, mr: 0 }}
          >
            <SearchIcon />
          </IconButton>
          <PositionedMenu />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          zIndex: { lg: 1 },
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          background: 'green',
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            borderWidth: 0,
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            border: 'none',
            borderWidth: 0,
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              background: 'transparent',
              borderRadius: '10px',
              margin: '10px',
              height: 'calc(100vh - 20px)',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              border: 0,
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
