import { CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Layout from './c-components/Layout/Layout';
import { NavBarButtons } from './c-components/Layout/models/layoutProps.models';
import Technology from './components/Technology/Technology';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  const navBarInfo: NavBarButtons[] = [
    { name: 'Technology', redirectionUrl: '/technology' },
    { name: 'About Us', redirectionUrl: '/about-us' },
    { name: 'Contact', redirectionUrl: '/contact' }
  ];
  return (
    <>
      <CssBaseline />
      <Container disableGutters sx={{ minWidth: '100%' }}>
        <Layout navBarButtons={navBarInfo} staticNavbar={true}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Container>
    </>
  );
}

export default App;
