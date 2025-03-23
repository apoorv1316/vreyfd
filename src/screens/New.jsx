/* eslint-disable no-unused-vars */
import { Box, Typography, Button } from '@mui/material';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { styled } from '@mui/material/styles';
import React from 'react';
import Spline from '@splinetool/react-spline';
import { AnimatePresence } from 'framer-motion';

// Styled components
const AnimatedLogo = styled(motion.img)({
  width: '120px',
  height: 'auto',
  position: 'fixed',
  top: '3%',
  left: '5%',
  zIndex: 1000,
  filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.2))',
});

const AnimatedBackground = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(-45deg, #0a0a0a, #1a1a1a, #2a2a2a, #1a1a1a)',
  backgroundSize: '400% 400%',
  animation: 'gradient 15s ease infinite',
  zIndex: -1,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)',
  },
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
});

const VideoSection = styled(motion.div)({
  position: 'fixed',
  height: '100vh',
  width: '100%',
  margin: '0',
  overflow: 'hidden',
  perspective: '1000px',
  zIndex: 1,
  padding: '4rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(180deg, rgba(26,11,46,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(26,11,46,0.7) 100%)',
    zIndex: 2,
    mixBlendMode: 'multiply',
  },
});

const VideoOverlay = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 3,
  width: '100%',
  maxWidth: '1400px',
  textAlign: 'center',
  color: 'white',
  padding: '0 4rem',
});

const GlowingText = styled(Typography)({
  textShadow: '0 0 20px rgba(255,255,255,0.3)',
  background:
    'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.8) 50%, #fff 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  animation: 'glow 8s ease-in-out infinite',
  '@keyframes glow': {
    '0%, 100%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0.8,
    },
  },
});

const Section = styled(motion.div)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  opacity: 1,
  scale: 1,
  y: 0,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  margin: 0,
  padding: 0,
});

const FloatingBubbles = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: 0,
  background: 'linear-gradient(to bottom, #1a0b2e, #000000)',
  opacity: 0.8,
});

const SplineContainer = styled(motion.div)({
  position: 'fixed',
  right: '10%',
  top: '50%',
  width: '300px',
  height: '300px',
  zIndex: 1000,
  pointerEvents: 'auto',
  overflow: 'visible',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
});

// New styled components for How to get vREfyd section
const StepsSection = styled(motion.section)({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8rem 2rem',
  background: 'linear-gradient(45deg, #000000, #1a0b2e)',
  position: 'relative',
  overflow: 'hidden',
});

const StepsList = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
});

const StepItem = styled(motion.div)({
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'flex-start',
  padding: '2rem',
  gap: '4rem',
  borderRadius: '24px',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: 'rgba(255,255,255,0.03)',
    '& .step-number': {
      color: 'white',
      transform: 'scale(1.1)',
    },
    '& .step-content': {
      transform: 'translateX(0)',
      opacity: 1,
    },
  },
});

const StepNumber = styled(motion.div)({
  fontSize: '12rem',
  fontWeight: '800',
  color: 'rgba(255,255,255,0.1)',
  lineHeight: 1,
  background:
    'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  flexShrink: 0,
  width: '180px',
  textAlign: 'center',
  willChange: 'transform',
  '&:hover': {
    color: 'rgba(255,255,255,0.2)',
  },
});

const StepContent = styled(motion.div)({
  transform: 'translateX(-20px)',
  opacity: 0,
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  paddingTop: '2rem',
});

const New = () => {
  const { scrollYProgress } = useScroll();
  const springConfig = {
    stiffness: 70,
    damping: 30,
    mass: 1.5,
    restDelta: 0.001,
  };
  const featuresRef = React.useRef(null);

  // Update feature animations to complete later
  const featureXPositions = [
    useTransform(scrollYProgress, [0.4, 0.5], [-100, 0]),
    useTransform(scrollYProgress, [0.42, 0.52], [-100, 0]),
    useTransform(scrollYProgress, [0.44, 0.54], [-100, 0]),
    useTransform(scrollYProgress, [0.46, 0.56], [-100, 0]),
    useTransform(scrollYProgress, [0.48, 0.58], [-100, 0]),
    useTransform(scrollYProgress, [0.5, 0.6], [-100, 0]),
  ];

  const featureOpacities = [
    useTransform(scrollYProgress, [0.4, 0.5], [0, 1]),
    useTransform(scrollYProgress, [0.42, 0.52], [0, 1]),
    useTransform(scrollYProgress, [0.44, 0.54], [0, 1]),
    useTransform(scrollYProgress, [0.46, 0.56], [0, 1]),
    useTransform(scrollYProgress, [0.48, 0.58], [0, 1]),
    useTransform(scrollYProgress, [0.5, 0.6], [0, 1]),
  ];

  // Video section animations with spring
  const videoSectionOpacitySpring = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [1, 0]),
    springConfig
  );
  const videoSectionScaleSpring = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [1, 0.8]),
    springConfig
  );
  const videoSectionYSpring = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [0, -100]),
    springConfig
  );

  // Features section animations with spring
  const featuresSectionOpacitySpring = useSpring(
    useTransform(scrollYProgress, [0.3, 0.4], [0, 1]),
    springConfig
  );
  const featuresSectionScaleSpring = useSpring(
    useTransform(scrollYProgress, [0.3, 0.4], [0.8, 1]),
    springConfig
  );
  const featuresSectionYSpring = useSpring(
    useTransform(scrollYProgress, [0.3, 0.4], [100, 0]),
    springConfig
  );

  // Logo fade out animation with spring
  const logoOpacitySpring = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [1, 0]),
    springConfig
  );

  // Parallax effect for video overlay
  const parallaxFast = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Enhanced parallax effects with different speeds
  const videoScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 1.1]),
    springConfig
  );
  const videoOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0.8]),
    springConfig
  );

  // Spline slide-in animation with smoother transition
  const splineX = useTransform(
    scrollYProgress,
    [0.35, 0.5], // Start earlier for smoother entrance
    [200, 0] // Increased initial distance
  );
  const splineOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.45], // Faster fade-in
    [0, 1]
  );

  // Enhanced bounce effect with spring
  const bounceY = useSpring(0, {
    stiffness: 50, // Decreased for smoother motion
    damping: 8, // Adjusted for more controlled bounce
    mass: 0.5, // Lighter mass for quicker response
  });

  // Smoother continuous bounce with increased height
  React.useEffect(() => {
    const interval = setInterval(() => {
      bounceY.set(Math.random() * -25);
    }, 2000);
    return () => clearInterval(interval);
  }, [bounceY]);

  // Steps section animations
  const stepsContainerRef = React.useRef(null);
  const { scrollYProgress: stepsProgress } = useScroll({
    target: stepsContainerRef,
    offset: ['start end', 'end start'],
  });

  const stepsData = [
    {
      title: 'Sign Up',
      description:
        'Create your account in minutes and join the future of real estate.',
      icon: '✍️',
      gradient: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
      image:
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=60',
    },
    {
      title: 'List Properties',
      description:
        "Upload your properties with our intuitive interface - it's quick and easy.",
      icon: '🏠',
      gradient: 'linear-gradient(135deg, #4ECDC4, #556270)',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60',
    },
    {
      title: 'We Prepare Marketing',
      description:
        'Our team creates stunning visuals and compelling content for your listings.',
      icon: '📈',
      gradient: 'linear-gradient(135deg, #6C5CE7, #A8E6CF)',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    },
    {
      title: 'AIRA Manages Follow-Ups',
      description:
        'Our AI assistant handles inquiries 24/7, qualifying leads automatically.',
      icon: '🤖',
      gradient: 'linear-gradient(135deg, #A8E6CF, #DCEDC1)',
      image:
        'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&fit=crop&q=60',
    },
    {
      title: 'You Close The Deal',
      description:
        'Focus on what matters most - closing deals and growing your business.',
      icon: '🤝',
      gradient: 'linear-gradient(135deg, #FF8C94, #FF6B6B)',
      image:
        'https://images.unsplash.com/photo-1559581958-df379578606a?w=800&auto=format&fit=crop&q=60',
    },
  ];

  // Add new state for selected step
  const [selectedStep, setSelectedStep] = React.useState(null);

  // Add animation variants for steps
  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
    selected: {
      width: '100%',
      height: '400px',
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
    },
    unselected: {
      scale: 0.95,
      opacity: 0.7,
      transition: { duration: 0.5 },
    },
  };

  // Update scroll triggers to appear earlier
  const stepsSectionOpacitySpring = useSpring(
    useTransform(scrollYProgress, [0.5, 0.6], [0, 1]),
    springConfig
  );

  const stepsSectionScaleSpring = useSpring(
    useTransform(scrollYProgress, [0.5, 0.6], [0.8, 1]),
    springConfig
  );

  return (
    <Box sx={{ position: 'relative', background: '#000', height: '800vh' }}>
      <AnimatedBackground />

      {/* Animated Logo */}
      <AnimatedLogo
        src="/images/logo2.png"
        style={{
          opacity: logoOpacitySpring,
        }}
        whileHover={{ scale: 1.1, cursor: 'pointer' }}
        whileTap={{ scale: 0.9 }}
      />

      {/* Video Section with Parallax */}
      <VideoSection
        style={{
          opacity: videoSectionOpacitySpring,
          scale: videoSectionScaleSpring,
          y: videoSectionYSpring,
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            width: '90%',
            height: '80vh',
            top: '52%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden',
            borderRadius: '24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '90%',
              objectFit: 'cover',
              scale: videoScale,
              opacity: videoOpacity,
              filter: 'brightness(0.8) contrast(1.2)',
              zIndex: 1,
              borderRadius: '24px',
            }}
          >
            <source src="/video.mp4" type="video/mp4" />
          </motion.video>
        </motion.div>
        <VideoOverlay
          style={{
            width: '90%',
            height: '80vh',
            padding: 0,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            style={{
              y: parallaxFast,
              maxWidth: '1200px',
              margin: '0 auto',
              position: 'relative',
              height: '90%',
            }}
          >
            <GlowingText
              sx={{
                fontWeight: '600',
                fontSize: { xs: '2.5rem', md: '4.5rem', lg: '3.5rem' },
                letterSpacing: '-0.02em',
                position: 'absolute',
                top: '4%',
                left: '-2%',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              Stand Out <br /> with
            </GlowingText>
            <GlowingText
              sx={{
                fontWeight: '600',
                fontSize: { xs: '2.5rem', md: '4.5rem', lg: '3.5rem' },
                letterSpacing: '-0.02em',
                position: 'absolute',
                bottom: '1%',
                right: '-2%',
                textAlign: 'right',
                cursor: 'pointer',
              }}
            >
              Next-Level <br /> Technology
            </GlowingText>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '1.5rem',
                letterSpacing: '-0.02em',
                position: 'absolute',
                bottom: '2%',
                left: '-2%',
                cursor: 'pointer',
                fontStyle: 'italic',
                textAlign: 'left',
              }}
            >
              Built for Real Estate Agents, <br /> By Real Estate Agents.
            </Typography>
          </motion.div>
        </VideoOverlay>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'absolute',
            bottom: '2%',
            right: '5%',
            zIndex: 5,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              px: 6,
              py: 2,
              borderRadius: '100px',
              fontSize: '1.1rem',
              letterSpacing: '0.1em',
              textTransform: 'none',
              background: 'rgba(237, 224, 224, 0.05)',
              backdropFilter: 'blur(10px)',

              '&:hover': {
                background: 'rgba(255,255,255,0.1)',
                borderColor: 'rgba(255,255,255,0.3)',
              },
            }}
          >
            Join vREfyd
          </Button>
        </motion.div>
      </VideoSection>

      {/* Features Section */}
      <Section
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          opacity: featuresSectionOpacitySpring,
          scale: featuresSectionScaleSpring,
          y: featuresSectionYSpring,
        }}
      >
        <FloatingBubbles />

        <motion.div
          ref={featuresRef}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '2rem',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <motion.div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '4rem',
              padding: '4rem',
            }}
          >
            {/* Title with scroll effect */}
            <motion.div
              style={{
                x: featureXPositions[0],
                opacity: featureOpacities[0],
                transform: 'translateZ(0)',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  textShadow: '0 0 20px rgba(255,255,255,0.3)',
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #fff, #a8b8ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))',
                }}
              >
                Why Agents Love vREfyd
              </Typography>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
              }}
            >
              {[
                {
                  title: 'The Simplest Interface Ever',
                  description:
                    'Forget juggling multiple tools. vREfyd provides everything from lead management to pro-level flyers and reels',
                  icon: '🎯',
                  gradient: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
                },
                {
                  title: 'Meaningful Connections Only',
                  description:
                    'We verify every property and filter out time-wasters, so you meet genuine leads and serious clients.',
                  icon: '🤝',
                  gradient: 'linear-gradient(135deg, #4ECDC4, #556270)',
                },
                {
                  title: 'Professional Digital Shop',
                  description:
                    'Showcase your listings, achievements, and client stories in one professional hub.',
                  icon: '🏪',
                  gradient: 'linear-gradient(135deg, #6C5CE7, #A8E6CF)',
                },
                {
                  title: 'Rock-Solid Data Security',
                  description:
                    'Your listings and leads are fully protected—zero data leaks, no unwanted sharing.',
                  icon: '🔒',
                  gradient: 'linear-gradient(135deg, #A8E6CF, #DCEDC1)',
                },
                {
                  title: 'AIRA : AI-Powered Growth',
                  description:
                    'Our 24/7 AI Assistant AIRA helps you close deals in days, not weeks—freeing you to focus on what you do best.',
                  icon: '🤖',
                  gradient: 'linear-gradient(135deg, #FF8C94, #FF6B6B)',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  style={{
                    position: 'relative',
                    x: featureXPositions[index + 1],
                    opacity: featureOpacities[index + 1],
                  }}
                >
                  <motion.div
                    initial={{
                      scale: 1,
                      y: 0,
                      rotateX: 0,
                      backgroundColor: 'rgba(255,255,255,0.05)',
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -10,
                      rotateX: 10,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 15,
                    }}
                    style={{
                      position: 'relative',
                      borderRadius: '24px',
                      padding: '2rem',
                      height: '100%',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.5rem',
                      transformStyle: 'preserve-3d',
                      perspective: '1000px',
                      zIndex: 80,
                    }}
                  >
                    {/* Feature Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                      }}
                      style={{
                        fontSize: '2.5rem',
                        width: '60px',
                        height: '60px',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: feature.gradient,
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        transformStyle: 'preserve-3d',
                        transform: 'translateZ(20px)',
                      }}
                    >
                      {feature.icon}
                    </motion.div>

                    {/* Feature Content */}
                    <motion.div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        zIndex: 1,
                        transformStyle: 'preserve-3d',
                        transform: 'translateZ(10px)',
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: 'white',
                          fontSize: { xs: '1.2rem', md: '1.5rem' },
                          fontWeight: 600,
                          letterSpacing: '0.5px',
                          background: feature.gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255,255,255,0.8)',
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          lineHeight: 1.6,
                          letterSpacing: '0.3px',
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </motion.div>

                    {/* Decorative Background Element */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '150px',
                        height: '150px',
                        background: feature.gradient,
                        opacity: 0.1,
                        borderRadius: '50%',
                        filter: 'blur(40px)',
                        transform: 'translate(50%, -50%)',
                        pointerEvents: 'none',
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Update the spacer box to remove the black overlay */}
      <Box
        sx={{
          height: '600vh',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50vh',
            background:
              'linear-gradient(to bottom, transparent 0%, #1a0b2e 100%)',
            pointerEvents: 'none',
            opacity: 0.5,
          },
        }}
      />

      {/* Static Steps Section with enhanced animations */}
      <StepsSection
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          },
        }}
        viewport={{ once: true, margin: '-100px' }}
        sx={{
          background: 'linear-gradient(180deg, #1a0b2e 0%, #000000 100%)',
          position: 'relative',
          zIndex: 2, // Ensure this section is above the previous section
          paddingTop: '8rem', // Add padding to avoid overlap
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            textAlign: 'center',
            mb: 12,
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 800,
            background: 'linear-gradient(45deg, #fff, #a8b8ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out forwards',
            '@keyframes fadeIn': {
              to: { opacity: 1 },
            },
            zIndex: 3, // Ensure the heading is above the background
          }}
        >
          How to get vREfyd?
        </Typography>
        <StepsList>
          {stepsData.map((step, index) => (
            <StepItem
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <StepNumber
                className="step-number"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: 'easeOut',
                  },
                }}
                viewport={{ once: true }}
              >
                {(index + 1).toString().padStart(2)}
              </StepNumber>
              <StepContent
                className="step-content"
                style={{
                  transform: 'none',
                  opacity: 1,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.2 + 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    mb: 2,
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    background: step.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    lineHeight: 1.8,
                    maxWidth: '600px',
                  }}
                >
                  {step.description}
                </Typography>
              </StepContent>
            </StepItem>
          ))}
        </StepsList>
      </StepsSection>
    </Box>
  );
};

export default New;
