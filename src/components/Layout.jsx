import { Outlet } from 'react-router-dom';
import OceanCanvas from './OceanCanvas.jsx';
import CursorCanvas from './CursorCanvas.jsx';
import DepthMeter from './DepthMeter.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
  return (
    <>
      <OceanCanvas />
      <CursorCanvas />
      <DepthMeter />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
