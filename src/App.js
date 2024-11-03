import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Jewellery from "./pages/Jewellery";
import Footer from "./components/footer";
import Signin from "./pages/Signin";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AdminProduct from './pages/Admin/AddProduct';
import Dashboard from './pages/Admin'; // Import the Dashboard
import AllProducts from './pages/Admin/AllProducts';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#432B25',
      },
      secondary: {
        main: '#33B5FF',
      },
      background: {
        default: '#E9DFDC',
      },
      text: {
        primary: '#432B25',
        secondary: '#432B25',
        light: '#E9DFDC'
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/jewellery" element={<Jewellery />} />

            {/* Dashboard route that doesn't show Navbar or Footer */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="addProduct" element={<AdminProduct />} />
              <Route path="listProducts" element={<AllProducts />} />
            </Route>

          </Routes>
          {/* Only render Footer on non-dashboard routes */}
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
