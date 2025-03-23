import { Typography, Box } from '@mui/material';
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(images/gradient.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '8rem',
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          zIndex: 2,
        }}
      >
        <img src="images/logo.png" style={{ width: '100%' }} />
      </Box>
      <Box
        sx={{
          padding: '0 1rem',
          width: '95%',
          margin: 'auto',
          height: '95%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box sx={{ width: '34%' }}>
          <Typography
            sx={{ color: 'white', fontSize: '3rem', fontWeight: '600' }}
          >
            Stand Out with Next-Level Technology.
          </Typography>
          <Typography
            sx={{ color: 'white', fontSize: '1rem', marginTop: '1rem' }}
          >
            India’s leading Agent-First Platform - Built for a Trusted,
            Inclusive Real Estate Ecosystem.
          </Typography>
        </Box>
      </Box>
      {/* Fixed Spline Scene */}
      <Box
        sx={{
          position: 'absolute',
          width: '60%',
          height: '100%',
          right: 0,
          bottom: 0,
          zIndex: 1, // Keeps Spline behind the text
        }}
      >
        <Spline scene="/model.splinecode" />
      </Box>
    </Box>
  );
};

export default Home;
