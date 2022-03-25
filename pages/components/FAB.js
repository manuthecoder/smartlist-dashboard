import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';

import MicrowaveIcon from '@mui/icons-material/Microwave';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import BathroomIcon from '@mui/icons-material/Bathroom';
import GarageIcon from '@mui/icons-material/Garage';
import LivingIcon from '@mui/icons-material/Living';
import DiningIcon from '@mui/icons-material/Dining';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import YardIcon from '@mui/icons-material/Yard';
import LandscapeIcon from '@mui/icons-material/Landscape';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create item</DialogTitle>
        <DialogContent>
          <DialogContentText>Kitchen</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function GenerateListItem({ text, icon }) {
  return (
    <ListItem button key={text}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

export default function AddItem() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListSubheader
          sx={{ fontSize: '20px', textAlign: 'center' }}
          component="div"
          id="nested-list-subheader"
        >
          Create new
        </ListSubheader>
        <GenerateListItem text="Kitchen" icon={<MicrowaveIcon />} />
        <GenerateListItem text="Bedroom" icon={<BedroomParentIcon />} />
        <GenerateListItem text="Bathroom" icon={<BathroomIcon />} />
        <GenerateListItem text="Garage" icon={<GarageIcon />} />
        <GenerateListItem text="Living room" icon={<LivingIcon />} />
        <GenerateListItem text="Dining room" icon={<DiningIcon />} />
        <GenerateListItem
          text="Laundry rom"
          icon={<LocalLaundryServiceIcon />}
        />
        <GenerateListItem text="Storage room" icon={<Inventory2Icon />} />
        <GenerateListItem text="Garden" icon={<YardIcon />} />
        <GenerateListItem text="Camping supplies" icon={<LandscapeIcon />} />
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key="bottom">
          <Box
            sx={{
              position: 'fixed',
              bottom: { sm: '75px', xs: '75px', md: '75px', lg: '15px' },
              right: '15px',
            }}
          >
            <Fab
              variant="extended"
              onClick={toggleDrawer('bottom', true)}
              color="primary"
              aria-label="add"
              sx={{
                textTransform: 'none',
                borderRadius: '15px',
                fontSize: '15px',
              }}
            >
              <EditIcon sx={{ mr: 2 }} />
              Create
            </Fab>
          </Box>
          <Drawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
          >
            {list('bottom')}
          </Drawer>
          <FormDialog />
        </React.Fragment>
      }
    </div>
  );
}
