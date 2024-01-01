import { CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './c-components/Layout/Layout';
import { NavBarButtons } from './c-components/Layout/models/layoutProps.models';

function App() {
  const navBarInfo: NavBarButtons[] = [];
  return (
    <>
      <CssBaseline />
      <Container disableGutters sx={{ minWidth: '100%' }}>
        <Layout navBarButtons={navBarInfo} staticNavbar={true}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Container>
    </>
  );
}

export default App;
