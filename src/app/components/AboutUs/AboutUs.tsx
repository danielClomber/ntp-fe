import { Box, Container, Typography } from '@mui/material';
import ourMissionImage from '../../../assets/images/our-mission.png';
import ourValuesImage from '../../../assets/images/our-values.png';
import './AboutUs.css';

function AboutUs() {
  return (
    <Container
      sx={{
        mt: 13
      }}
    >
      <Box>
        <Typography variant="h3">About Us</Typography>
        <Typography
          sx={{
            mt: 2
          }}
          variant="h6"
        >
          Welcome to Clomber, a startup dedicated to revolutionizing space
          exploration. We aim to create a team of skilled engineers and
          visionaries that will be the forefront of developing advanced NTP
          rocket engines. We believe in a future where interstellar travel is
          not just possible but efficient, sustainable, and accessible.
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
          Our Mission
        </Typography>
        <Typography variant="body1">
          Our mission is to create highly efficient, reliable, and sustainable
          rocket engines that enable longer and faster space missions, reducing
          the barriers to deep space exploration. We are committed to pushing
          the boundaries of aerospace technology, fostering innovation, and
          making interplanetary travel more accessible and feasible.
        </Typography>
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
            maxHeight: { xs: 'auto', md: 300 },
            borderRadius: 1,
            boxShadow: 10
          }}
          alt="Rocket engine"
          src={ourMissionImage}
        />
        <Box
          sx={{
            pl: { xs: 0, md: 5 },
            mt: { xs: 4, md: 0 },
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              At Clomber, our vision is to revolutionize space travel through
              the innovative application of Nuclear Thermal Propulsion (NTP)
              technology.
            </Typography>

            <Typography variant="body1">
              We envision a future where NTP becomes the cornerstone of
              interplanetary travel, enabling humanity to explore the far
              reaches of our solar system and beyond. Our commitment to
              research, development, and collaboration positions us at the
              forefront of this technological evolution, as we strive to unlock
              new possibilities for scientific discovery, commercial
              opportunities, and the expansion of human presence in space.
            </Typography>
          </Box>
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
          Our Commitment
        </Typography>
        <Typography variant="body1">
          We are committed to leading the charge in NTP technology. Through our
          work, we aim to provide viable, next-generation propulsion solutions
          for space agencies, commercial enterprises, and scientific missions.
          Our goal is to make deep space more accessible and to contribute to
          the advancement of human knowledge and capabilities in space.
        </Typography>
      </Box>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        <Box
          sx={{
            pr: { xs: 0, md: 5 },
            mb: { xs: 4, md: 0 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Typography variant="h4">Our Approach</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Innovation, safety, and sustainability are at the core of
              everything we do. We are developing NTP systems that are not only
              powerful and efficient but also safe and environmentally
              responsible. Our approach is one of rigorous research, meticulous
              design, and extensive testing, ensuring that our technology meets
              the highest standards of quality and reliability.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 2,
              display: { xs: 'none', md: 'block' }
            }}
          >
            <Typography
              sx={{
                mt: 1
              }}
              variant="body1"
            >
              <strong>
                Looking ahead, we see a future where NTP technology plays a
                crucial role in space exploration. From manned missions to Mars
                to unmanned probes venturing to the outer reaches of our solar
                system, we envision our technology paving the way for
                groundbreaking discoveries and new frontiers.
              </strong>
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          sx={{
            my: 'auto',
            maxWidth: { xs: 'auto', md: 500 },
            maxHeight: { xs: 'auto', md: 300 },
            borderRadius: 1,
            boxShadow: 10
          }}
          alt="Rocket engine"
          src={ourValuesImage}
        />
      </Box>
      <Box
        sx={{
          mt: 2,
          display: { xs: 'block', md: 'none' }
        }}
      >
        <Typography
          sx={{
            mt: 1
          }}
          variant="body1"
        >
          <strong>
            Looking ahead, we see a future where NTP technology plays a crucial
            role in space exploration. From manned missions to Mars to unmanned
            probes venturing to the outer reaches of our solar system, we
            envision our technology paving the way for groundbreaking
            discoveries and new frontiers.
          </strong>
        </Typography>
      </Box>
    </Container>
  );
}
export default AboutUs;
