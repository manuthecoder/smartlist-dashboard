import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from './components/nav.js';
import BottomNavigation from './components/bottomNavigation.js';
import FAB from './components/FAB.js';

import Box from '@mui/material/Box';

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smartlist &bull; Dashboard</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Outfit:400&amp;display=swap"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Nav />
      <BottomNavigation />
      <FAB />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { lg: '300px' },
          width: { sm: `calc(100% - 300px)` },
        }}
      >
        {props.children}
      </Box>
    </div>
  );
}
