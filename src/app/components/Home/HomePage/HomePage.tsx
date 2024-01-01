import './HomePage.css';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography
} from '@mui/material';
import bgImage from '../../../../assets/images/pt.jpg';
import whoWeAreImage from '../../../../assets/images/who-we-are.png';
import ourMissionImage from '../../../../assets/images/our-mission.png';
import aiBg1Image from '../../../../assets/images/ai-bg1.png';
import { styles } from '../../../../assets/styles/styles';
import { useNavigate } from 'react-router-dom';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HelpIcon from '@mui/icons-material/Help';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { useState } from 'react';

function HomePage() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  let navigate = useNavigate();

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  const handleNavigation = (path: string | null) => {
    setAnchorElNav(null);
    if (path) {
      const isInternalNavigation = path[0] === '/';
      if (isInternalNavigation) {
        navigate(path);
      } else {
        window.location.assign(path);
      }
    }
  };

  return (
    <>
      <Container
        disableGutters
        sx={{
          minWidth: '100%',
          minHeight: '90vh',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: {
              sm: '100%',
              md: '50%'
            },
            m: 'auto',
            p: 3,
            bgcolor: 'text.secondary',
            borderRadius: {
              sm: 0,
              md: 4
            },
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 5,
            textAlign: 'center'
          }}
        >
          <Typography
            sx={{
              maxWidth: 'sm',
              color: styles.white,
              textAlign: 'center',
              mx: 'auto',
              px: 2,
              fontWeight: 'bold'
            }}
            variant="h4"
          >
            Where AI Meets Your Fitness and Nutrition Goals
          </Typography>
          <Typography
            sx={{
              maxWidth: 'sm',
              color: styles.white,
              textAlign: 'center',
              mx: 'auto',
              mt: 2,
              px: 2
            }}
            variant="h6"
          >
            We blend advanced artificial intelligence with expert fitness and
            nutrition insights to offer you a uniquely personalized health
            journey.
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 4,
                fontWeight: 'bold',
                maxWidth: {
                  sm: '100%',
                  md: '50%'
                }
              }}
              onClick={() =>
                handleNavigation(
                  'https://train.westrive.com/train/westrive.33742417907b4604'
                )
              }
            >
              Discover Your Path
            </Button>
          </Box>
        </Box>
      </Container>
      {/* What we offer */}
      <Container
        sx={{
          mt: 6,
          p: 3,
          borderRadius: 3,
          boxShadow: 4
        }}
      >
        <Box>
          <Typography variant="h3">What We Offer</Typography>
        </Box>
        <Box
          sx={{
            mt: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ImportantDevicesIcon fontSize="large" sx={{ mr: 2 }} /> AI-Crafted
            Training Routines
          </Typography>
          <Typography variant="body1">
            Experience workout plans designed by AI, based on scientific
            principles, tailored to your fitness level, goals, and personal
            preferences.
          </Typography>
          <Box>
            <Button
              variant="outlined"
              sx={{
                mt: 1,
                maxWidth: {
                  sm: '100%',
                  md: '50%'
                }
              }}
              onClick={() =>
                handleNavigation(
                  'https://train.westrive.com/train/westrive.33742417907b4604'
                )
              }
            >
              Get your plan <RocketLaunchIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <RestaurantIcon fontSize="large" sx={{ mr: 2 }} /> Nutrition Plans
          </Typography>
          <Typography variant="body1">
            Enjoy meal plans crafted by AI, considering your dietary needs,
            allergies, taste preferences, and nutritional goals. From vegan to
            keto, we cater to all.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <EventAvailableIcon fontSize="large" sx={{ mr: 2 }} />
            Monthly AI Updates for Optimal Adaptation
          </Typography>
          <Typography variant="body1">
            Our AI system updates your fitness and diet plans monthly. This
            schedule allows your body sufficient time to adjust and respond
            effectively to the new routines, ensuring a balanced and sustainable
            approach to your health journey.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <SmartphoneIcon fontSize="large" sx={{ mr: 2 }} />
            Comprehensive App for Tracking and Guidance
          </Typography>
          <Typography variant="body1">
            User-friendly app (powered by WeStrive) makes it easy to track your
            progress and learn exercises. It features a range of instructional
            videos for your workout routines, ensuring you're always on track
            and exercising effectively.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <HelpIcon fontSize="large" sx={{ mr: 2 }} />
            Got Questions or Need Guidance? Chat with Our Experts!
          </Typography>
          <Typography variant="body1">
            Our dedicated chat service lets you directly connect with our
            fitness and nutrition experts for personalized advice and support.
            Accessible via our app or website, ensuring you have the guidance
            you need for your AI-driven wellness path.
          </Typography>
        </Box>
      </Container>
      {/* Quote */}
      <Container
        sx={{
          minWidth: '100%',
          my: 8,
          bgcolor: styles.clomberBlue3,
          boxShadow: 10
        }}
      >
        <Typography
          variant="h5"
          mx={'auto'}
          sx={{ textAlign: 'center', fontStyle: 'italic', py: 5 }}
        >
          "At Fitfai, our vision is to harness the precision of artificial
          intelligence to craft individualized wellness journeys, making
          effective training and nutrition accessible to everyone."
        </Typography>
      </Container>
      <Container
        sx={{
          mt: 10,
          p: 3,
          borderRadius: 3,
          boxShadow: 4
        }}
      >
        <Box>
          <Typography variant="h3">How It Works</Typography>
        </Box>
        <Box
          sx={{
            mt: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <AnalyticsIcon fontSize="large" sx={{ mr: 2 }} /> In-Depth Analysis
          </Typography>
          <Typography variant="body1">
            Begin with a comprehensive questionnaire covering your health
            history, lifestyle, fitness level, and nutritional needs.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ImportantDevicesIcon fontSize="large" sx={{ mr: 2 }} /> AI-Powered
            Customization
          </Typography>
          <Typography variant="body1">
            Our sophisticated AI algorithms process your data to generate a
            bespoke fitness and nutrition plan.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <EventAvailableIcon fontSize="large" sx={{ mr: 2 }} />
            Detailed Plan Delivery
          </Typography>
          <Typography variant="body1">
            Receive a plan in up to 24 hours that includes workout routines and
            meal plans, all accessible via our user-friendly app.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <SmartphoneIcon fontSize="large" sx={{ mr: 2 }} />
            Progress Tracking & Adjustments
          </Typography>
          <Typography variant="body1">
            Track your workouts, meals, and progress; our AI adapts your plan
            based on real-world performance and feedback.
          </Typography>
        </Box>
      </Container>
      {/* image */}
      <Container
        disableGutters
        sx={{
          minWidth: '100%',
          minHeight: '700px',
          backgroundImage: `url(${aiBg1Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: 5,
          mt: 10
        }}
      >
        <Box
          sx={{
            maxWidth: {
              sm: '100%',
              md: '50%'
            },
            m: 'auto',
            p: 3,
            bgcolor: 'text.secondary',
            borderRadius: {
              sm: 0,
              md: 4
            },
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 5,
            textAlign: 'center'
          }}
        >
          <Typography
            sx={{
              maxWidth: 'sm',
              color: styles.white,
              textAlign: 'center',
              mx: 'auto',
              px: 2,
              fontWeight: 'bold'
            }}
            variant="h3"
          >
            Shaping the Future of Fitness
          </Typography>
          <Typography
            sx={{
              maxWidth: 'sm',
              color: styles.white,
              textAlign: 'center',
              mx: 'auto',
              mt: 2,
              px: 2,
              fontWeight: 'bold'
            }}
            variant="h6"
          >
            AI-Powered Health for a Better You
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 4,
                fontWeight: 'bold'
              }}
              onClick={() =>
                handleNavigation(
                  'https://train.westrive.com/train/westrive.33742417907b4604'
                )
              }
            >
              Start Your AI Fitness Adventure
            </Button>
          </Box>
        </Box>
      </Container>
      {/* About Us */}
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          mt: 10
        }}
      >
        <Typography variant="h3">About Us</Typography>
        <Container
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            my: 6
          }}
        >
          <Card sx={{ maxWidth: 450, mx: { sm: 0, md: 2 }, my: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={whoWeAreImage}
                alt="Who we are"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Who We Are
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  We are a team of passionate innovators, fitness enthusiasts,
                  nutrition experts, and tech wizards dedicated to
                  revolutionizing the way individuals approach health and
                  wellness. Our journey began with a simple yet powerful idea:
                  to merge the precision of artificial intelligence with the
                  personal touch of human expertise.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 450, mx: { sm: 0, md: 2 }, my: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={ourMissionImage}
                alt="Our mission"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Our Mission
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Our mission is to redefine the approach to health and fitness,
                  making it more personalized, accessible, and effective for
                  everyone. We leverage the power of artificial intelligence to
                  break down barriers in personal wellness, providing tailored
                  solutions that adapt to each individual's unique needs and
                  goals.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Container>
    </>
  );
}
export default HomePage;
