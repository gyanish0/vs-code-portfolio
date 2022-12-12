import { Box } from '@mui/material';
import { Suspense } from 'react';
import './App.css';
import AllRoutes from './routes';
import "./styles/globals.css";
import "./styles/themes.css";

function App() {
  return (
    <Box>
      <Suspense fallback={<h3>Loading...!</h3>}>
        <AllRoutes />
      </Suspense>
    </Box>
  );
}

export default App;
