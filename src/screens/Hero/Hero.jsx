import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, Button, Typography } from '@mui/material';

const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Scaling effect for the video box (shrinking when scrolling down)
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const yVideo = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight / 4]
  );

  // Scaling and movement for the image
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const yImage = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerHeight / 4]
  );

  // Scaling and movement for the join btn
  const yBtn = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacityBtn = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const opacityImg = useTransform(scrollYProgress, [0, 0.3], [0, 0.2]);

  // Scaling and movement for the cards
  const scaleCards = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const yCards = useTransform(scrollYProgress, [0.5, 1], [50, 0]);

  return (
    <Box
      sx={{
        backgroundImage: 'url(images/gradient.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          height: '120vh',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Video Container */}
        <motion.div
          style={{
            scale: scaleVideo,
            y: yVideo,
            opacity: scaleVideo,
            position: 'absolute',
            zIndex: 2,
            width: '95%',
            height: '70%',
            background: 'lightyellow',
            marginTop: '1rem',
            borderRadius: '1rem',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              zIndex: 2,
              position: 'absolute',
              top: '3%',
              right: '3%',
              fontSize: {
                xs: '1.25rem',
                sm: '1.5rem',
                md: '2rem'
              },
              color: 'white',
              textAlign: 'right',
              padding: { xs: '0.5rem', md: 0 }
            }}
          >
            Stand Out with <br /> Next-Level <br /> Technology
          </Typography>

          <Typography
            sx={{
              zIndex: 2,
              position: 'absolute',
              bottom: '3%',
              left: '3%',
              fontSize: {
                xs: '0.875rem',
                sm: '1rem'
              },
              color: 'white',
              textAlign: 'left',
              padding: { xs: '0.5rem', md: 0 }
            }}
          >
            India's leading Agent-First Platform <br /> Built for a Trusted,
            <br />
            Inclusive Real Estate Ecosystem.
          </Typography>
          {/* Video */}
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.4)',
            }}
          />
        </motion.div>

        {/* Image Container with Reflection */}
        <motion.div
          style={{
            position: 'absolute',
            top: 'calc(70% + 2rem)',
            left: '43%',
            transform: 'translateX(-50%)',
            scale: scaleImage,
            y: yImage,
            zIndex: 3,
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Original Image */}
          <motion.img
            src="/images/logo.svg"
            alt="Original Image"
            initial={{ filter: 'none' }} // No glow initially
            whileHover={{
              scale: 1.1,
            }}
            animate={{ filter: 'none' }} // Reset filter when not hovering
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />

          {/* Reflection Effect */}
          <motion.img
            src="/images/logo.svg"
            alt="Reflection"
            style={{
              width: '100%',
              marginTop: '-2rem',
              objectFit: 'contain',
              transform: 'scaleY(-1)',
              opacity: opacityImg,
              maskImage:
                'linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0))',
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0))',
            }}
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          style={{
            position: 'absolute',
            top: 'calc(80% + 2rem)',
            left: '50%',
            transform: 'translateX(-50%)',
            scale: scaleCards,
            y: yCards,
            zIndex: 3,
            display: 'flex',
            gap: '1rem',
          }}
        >
          {[1, 2, 3, 4].map((card) => (
            <Box
              key={card}
              sx={{
                width: '10rem',
                height: '15rem',
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#600DB4',
              }}
            >
              Card {card}
            </Box>
          ))}
        </motion.div>

        <motion.div
          style={{
            width: '10rem',
            height: '5rem',
            position: 'absolute',
            top: 'calc(72% + 2rem)',
            right: '5%',
            y: yBtn,
            opacity: opacityBtn,
            zIndex: 3,
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: 'white',
              borderRadius: '24px',
              color: '#600DB4',
              textTransform: 'capitalize',
              fontWeight: '600',
              fontSize: '1rem',
              width: '100%',
              padding: '10px 1.5rem',
            }}
          >
            Join vREfyd
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
