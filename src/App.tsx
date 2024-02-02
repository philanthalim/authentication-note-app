import './App.css';
import {Box} from "@mui/material";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import {Navbar} from "./components/navigation";
import {Footer} from "./components/footer"

function App() {
  return (
    <Box>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      <Footer/>
    </Router>
    </Box>
  );
}

export default App;
