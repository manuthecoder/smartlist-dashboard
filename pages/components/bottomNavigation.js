import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentsIcon from '@mui/icons-material/Payments';
import SearchIcon from '@mui/icons-material/Search';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <>
      <CssBaseline />

      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '65px',
          display: { sm: 'block', lg: 'none' },
        }}
        variant="outlined"
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            sx={{ height: '65px' }}
            label="Home"
            icon={<DashboardIcon />}
          />
          <BottomNavigationAction
            sx={{ height: '65px' }}
            label="Finances"
            icon={<PaymentsIcon />}
          />
          <BottomNavigationAction
            sx={{ height: '65px' }}
            label="Search"
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            sx={{ height: '65px' }}
            label="Items"
            icon={<ViewAgendaIcon />}
          />
          <BottomNavigationAction
            sx={{ height: '65px' }}
            label="Meals"
            icon={<LunchDiningIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}
