import SideBar from './Components/SideBar';
import Feed from './Components/Feed';
import RightBar from './Components/RightBar';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Navebar from './Components/Navebar.jsx';
import ThemeContext from '../Context/ThemeContext.js';
import { useContext } from 'react';

function App() {
  // const ButtonStyle = styled(Button)({
  //   backgroundColor: 'pink',
  //   '&:hover': { backgroundColor: 'lightblue', color: 'white' },
  // });

  const themeContext = useContext(ThemeContext);
  console.log('==>App JS', themeContext.mode);
  const themeProvider = createTheme({
    palette: {
      mode: themeContext.mode,
    },
  });

  return (
    <ThemeProvider theme={themeProvider}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navebar />
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          <SideBar />
          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
