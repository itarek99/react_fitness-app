import './App.css';

import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';

const App = () => {
  return (
    <Box>
      <Box width='400px' sx={{ width: { xl: '1488px', lg: '1200px' } }} m='auto' px='8px'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetails />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};
export default App;
