import './HomePage.css';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  List,
  ListItem,
  Typography
} from '@mui/material';
import bgImage from '../../../../assets/images/ntp-engine2.png';
import whoWeAreImage from '../../../../assets/images/who-we-are.png';
import ourMissionImage from '../../../../assets/images/our-mission.png';
import rocketLaunchImage from '../../../../assets/images/rocket-launch.jpg';
import rocketEngineImage from '../../../../assets/images/rocket-engine.png';
import { styles } from '../../../../assets/styles/styles';
import { useNavigate } from 'react-router-dom';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EngineeringIcon from '@mui/icons-material/Engineering';

function HomePage() {
  let navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
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
            variant="h3"
          >
            Pioneering the Future of Space Travel
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
            Innovating with Nuclear Thermal Propulsion Technology
          </Typography>
          <Box>
            <Button
              variant="outlined"
              sx={{
                mt: 4,
                color: styles.white,
                maxWidth: {
                  sm: '100%',
                  md: '50%'
                }
              }}
              onClick={() => handleNavigation('/technology')}
            >
              Explore The Technology
            </Button>
          </Box>
        </Box>
      </Container>
      {/* Technology Overview */}
      <Container
        sx={{
          mt: 6,
          p: 3,
          borderRadius: 3,
          boxShadow: 4
        }}
      >
        <Box>
          <Typography variant="h3">Technology Overview</Typography>
          <Typography
            sx={{
              mt: 2
            }}
            variant="h6"
          >
            A Leap Forward in Aerospace Engineering
          </Typography>
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
            <HelpOutlinedIcon fontSize="large" sx={{ mr: 2 }} /> What is NTP?
          </Typography>
          <Typography variant="body1">
            Nuclear Thermal Propulsion (NTP) harnesses the immense energy
            produced by nuclear reactions to heat a propellant, typically
            hydrogen, to extremely high temperatures before expelling it to
            produce thrust. This technology offers a significant improvement
            over traditional chemical rockets, providing higher efficiency and
            the potential for faster and longer space missions.
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
              onClick={() => handleNavigation('/technology')}
            >
              Explore The Technology <RocketLaunchIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Box
            component="img"
            sx={{
              my: 'auto',
              maxWidth: { xs: 'auto', md: 500 },
              maxHeight: { xs: 'auto', md: 300 }
            }}
            alt="Rocket engine"
            src={rocketEngineImage}
          />
          <Box
            sx={{
              pl: { xs: 0, md: 5 },
              mt: { xs: 4, md: 0 }
            }}
          >
            <Typography
              variant="h4"
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <EmojiObjectsIcon fontSize="large" sx={{ mr: 2 }} /> Why NTP?
            </Typography>
            <List sx={{ listStyleType: 'disc' }}>
              <ListItem sx={{ display: 'list-item' }}>
                <strong>Higher Efficiency: </strong>NTP engines operate at a
                higher specific impulse than chemical rockets, meaning they can
                use fuel more efficiently, enabling longer missions and reduced
                travel times.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <strong>Greater Payload Capacity: </strong>With NTP, spacecraft
                can carry more payload for the same amount of fuel, or the same
                payload for less fuel, enhancing mission capabilities.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <strong>Extended Mission Durability: </strong>NTP technology is
                particularly suited for long-duration missions, such as manned
                missions to Mars and beyond, due to its efficient fuel usage.
              </ListItem>
            </List>
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
            <EngineeringIcon fontSize="large" sx={{ mr: 2 }} /> Our Approach to
            NTP
          </Typography>
          <Typography variant="body1">
            Our team is focused on developing NTP engines that are not only
            efficient and powerful but also safe and reliable. We integrate
            cutting-edge materials and innovative engineering to create engines
            that meet the rigorous demands of deep space exploration.
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 2
          }}
        >
          <Typography
            sx={{
              mt: 1
            }}
            variant="body1"
          >
            <strong>
              Join us on this incredible journey as we push the boundaries of
              what's possible in space exploration and open new horizons for
              humanity's venture into the universe.
            </strong>
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
          "At Clomber, we aim to specialize in the development of Nuclear
          Thermal Propulsion (NTP) technology, a groundbreaking approach to
          space travel that promises to revolutionize how we explore the
          cosmos."
        </Typography>
      </Container>
      {/* About Us */}
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          mt: 6
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
                  Welcome to Clomber, a startup dedicated to revolutionizing
                  space exploration. We aim to create a team of skilled
                  engineers and visionaries that will be the forefront of
                  developing advanced NTP rocket engines. We believe in a future
                  where interstellar travel is not just possible but efficient,
                  sustainable, and accessible.
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
                  Our mission is to create highly efficient, reliable, and
                  sustainable rocket engines that enable longer and faster space
                  missions, reducing the barriers to deep space exploration. We
                  are committed to pushing the boundaries of aerospace
                  technology, fostering innovation, and making interplanetary
                  travel more accessible and feasible.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Container>
      {/* image */}
      <Container
        disableGutters
        sx={{
          minWidth: '100%',
          minHeight: '700px',
          backgroundImage: `url(${rocketLaunchImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
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
            variant="h3"
          >
            Igniting New Horizons
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
            Pioneering the Future with Nuclear Thermal Propulsion
          </Typography>
        </Box>
      </Container>
    </>
  );
}
export default HomePage;
