import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography
} from '@mui/material';
import './Technology.css';
import nuclearFissionImage from '../../../assets/images/nuclear-fission.png';
import radiationShieldImage from '../../../assets/images/radiation-shield.png';
import IspImage from '../../../assets/images/Isp.jpeg';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styles } from '../../../assets/styles/styles';
function Technology() {
  return (
    <>
      <Container sx={{ mt: 13 }}>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h3">
            Exploring the Depths of Space with NTP
          </Typography>
        </Box>
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h5"
            sx={{
              mt: 2
            }}
          >
            Technology
          </Typography>
          <Typography
            sx={{
              my: 2
            }}
            variant="body1"
          >
            Nuclear Thermal Propulsion (NTP) is an advanced propulsion
            technology that uses a nuclear reactor to heat a propellant to
            extreme temperatures, producing thrust far more efficiently than
            traditional chemical rockets. This technology, rooted in
            sophisticated nuclear physics and engineering, offers a
            transformative approach to deep space exploration.
          </Typography>
          <Accordion>
            <AccordionSummary
              sx={{
                bgcolor: styles.clomberBlue3
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                The Physics of NTP
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderTop: '1px solid rgba(0, 0, 0, .125)'
              }}
            >
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
                    boxShadow: 3
                  }}
                  alt="Conceptual illustration of nuclear fission"
                  src={nuclearFissionImage}
                />
                <Box
                  sx={{
                    ml: 3,
                    display: 'flex',
                    alignItems: 'center',
                    pl: { xs: 0, md: 5 },
                    mt: { xs: 4, md: 0 }
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 1,
                        fontWeight: 'bold'
                      }}
                    >
                      Nuclear Fission
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      NTP systems harness the energy released from nuclear
                      fission, where heavy atomic nuclei (like Uranium-235 or
                      Plutonium-239) are split into smaller fragments, releasing
                      a tremendous amount of heat.
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 1,
                        fontWeight: 'bold'
                      }}
                    >
                      Heat Transfer Dynamics
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      The core of NTP technology lies in efficiently
                      transferring this heat to a propellant. The choice of
                      propellant, typically liquid hydrogen due to its high
                      specific impulse potential, is crucial. The hydrogen is
                      circulated around the reactor core, absorbing the
                      fission-generated heat.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{
                bgcolor: styles.clomberBlue3
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                Detailed Component Analysis
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderTop: '1px solid rgba(0, 0, 0, .125)'
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                1. Reactor Core Design
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                The reactor core, composed of fuel elements made from enriched
                Uranium or Plutonium, is designed to sustain a controlled chain
                reaction. Materials like graphite or refractory metals, capable
                of withstanding high neutron flux and extreme temperatures, are
                used in the core construction.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                2. Control Rod Mechanism
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Boron or cadmium control rods, capable of absorbing excess
                neutrons, are used to regulate the fission process. Their
                insertion and removal control the reactor's power output,
                ensuring a stable and controllable heat source.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                3. Thermal Propellant System
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                The propellant flow system is engineered for optimal heat
                transfer and minimal pressure drop. Advanced materials and
                designs are used to construct heat exchangers that efficiently
                transfer reactor heat to the propellant.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                4. Nozzle and Thrust Structure
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                The nozzle design is critical for converting the thermal energy
                of the heated propellant into kinetic energy. Advanced materials
                are used to withstand the high temperatures and pressures of the
                expelled hot gases.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{
                bgcolor: styles.clomberBlue3
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                Safety and Radiation Concerns
              </Typography>
            </AccordionSummary>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }
              }}
            >
              <AccordionDetails
                sx={{
                  borderTop: '1px solid rgba(0, 0, 0, .125)'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 1,
                    fontWeight: 'bold'
                  }}
                >
                  Radiation Shielding
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Innovative shielding materials and designs are employed to
                  protect spacecraft electronics and crew from harmful
                  radiation. This includes multi-layered composite materials and
                  active shielding concepts.
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 1,
                    fontWeight: 'bold'
                  }}
                >
                  Environmental Safeguards
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  We adhere to strict safety protocols for handling, storage,
                  and disposal of nuclear materials, ensuring minimal
                  environmental impact during all mission phases.
                </Typography>
              </AccordionDetails>
              <Box
                component="img"
                sx={{
                  my: 'auto',
                  maxWidth: { xs: 'auto', md: 500 },
                  maxHeight: { xs: 'auto', md: 300 }
                }}
                alt="Radiation shielding for a nuclear thermal propulsor"
                src={radiationShieldImage}
              />
            </Box>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{
                bgcolor: styles.clomberBlue3
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                Performance Metrics
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderTop: '1px solid rgba(0, 0, 0, .125)'
              }}
            >
              <Box
                sx={{
                  mt: 4,
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' }
                }}
              >
                <Box sx={{ mr: { xs: 0, md: 3 } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1,
                      fontWeight: 'bold'
                    }}
                  >
                    Specific Impulse (Isp) Advantages
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Rocket efficiency is stated in seconds of specific impulse
                    (Isp), this is the time in seconds that one poiund of
                    propellant will deliver one pound of thrust. NTP can achieve
                    a specific impulse up to twice that of the best chemical
                    rockets, drastically improving fuel efficiency and reducing
                    travel times.
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1,
                      fontWeight: 'bold'
                    }}
                  >
                    Energy Density and Mission Capability
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    The high energy density of nuclear fuel enables longer
                    mission durations and the ability to carry larger payloads,
                    opening new possibilities for exploration and scientific
                    discovery.
                  </Typography>
                </Box>
                <Box
                  component="img"
                  sx={{
                    my: 'auto',
                    maxWidth: { xs: 'auto', md: 500 },
                    maxHeight: { xs: 'auto', md: 300 }
                  }}
                  alt="Chart comparing the specific impulse (Isp) of Nuclear Thermal Propulsion (NTP) up to 900 seconds against chemical propulsion up to 450 seconds"
                  src={IspImage}
                />
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{
                bgcolor: styles.clomberBlue3
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                Addressing Engineering Challenges
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderTop: '1px solid rgba(0, 0, 0, .125)'
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Materials Science
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Developing materials that can withstand intense neutron
                bombardment, extreme temperatures, and radiation without
                degrading is a primary research focus.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Reactor Control and Stability
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Advancing reactor control technologies to ensure stable and
                predictable performance under varying conditions is critical for
                the safe operation of NTP systems.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{
                bgcolor: styles.clomberBlue3
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                The Future and Potential Missions
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderTop: '1px solid rgba(0, 0, 0, .125)'
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Mars and Beyond
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                NTP is particularly suited for missions to Mars and outer
                planets, offering reduced travel times and increased payload
                capacity. Potential missions could include manned Mars missions,
                outer planet exploration, and deep space probes.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h5"
            sx={{
              mt: 2
            }}
          >
            History
          </Typography>
          <Typography
            sx={{
              my: 2
            }}
            variant="body1"
          >
            The journey of NTP from theoretical concept to a potential
            cornerstone technology for future space exploration underscores the
            continuous evolution and challenges in the field of astronautics.
          </Typography>
          <Accordion>
            <AccordionSummary
              sx={{
                bgcolor: styles.clomberBlue3
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                Early Theoretical Work (1940s-1950s)
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderTop: '1px solid rgba(0, 0, 0, .125)'
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Foundational Ideas
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                The idea of nuclear propulsion emerged soon after the discovery
                of nuclear fission. Scientists theorized about harnessing the
                immense energy from nuclear reactions for propulsion.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Initial Studies
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Early studies explored the physics of nuclear reactions and how
                they could be used to generate thrust, laying the groundwork for
                future developments.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{
                bgcolor: styles.clomberBlue3
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                Project Rover (1955-1961)
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderTop: '1px solid rgba(0, 0, 0, .125)'
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Inception
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Initiated by the U.S. Atomic Energy Commission and NASA's
                predecessor, the NACA, Project Rover aimed to develop a
                nuclear-powered rocket for interplanetary travel.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Technical Approach
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                The project focused on developing reactors that could heat a
                propellant like hydrogen to extremely high temperatures,
                expelling it to generate thrust.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{
                bgcolor: styles.clomberBlue3
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                NERVA Program (1961-1972)
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderTop: '1px solid rgba(0, 0, 0, .125)'
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Expansion of Rover
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                NERVA (Nuclear Engine for Rocket Vehicle Application) was an
                extension of Project Rover, conducted in partnership between
                NASA and the Atomic Energy Commission.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Key Developments
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Reactor Design: </strong>Engineers created reactors
                  capable of operating at incredibly high temperatures, a
                  necessity for efficient nuclear propulsion.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Fuel Element Design: </strong>The development of
                  robust fuel elements that could withstand the extreme
                  conditions inside the reactor was crucial.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  <strong>Ground Testing: </strong>Several reactors were built
                  and tested on the ground, demonstrating the viability of NTP
                  technology.
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Challenges and Cancellation
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Despite technical successes, the program faced challenges like
                radiation shielding, material integrity, and public concern over
                nuclear safety. Budget cuts and shifting focus to the Space
                Shuttle led to the program's cancellation.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{
                bgcolor: styles.clomberBlue3
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                Revival of Interest (1990s-Present)
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderTop: '1px solid rgba(0, 0, 0, .125)'
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Resurgence in the 1990s
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                With renewed interest in deep space missions, NTP again became a
                topic of interest due to its potential for significantly faster
                travel times than conventional rockets.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Modern Developments
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Advanced Reactor Designs </strong>Reactor designs have
                  been revisited with modern materials and technology, focusing
                  on safety and efficiency.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>New Fuel Types </strong> Research into new types of
                  nuclear fuel, including low-enriched uranium, has been pursued
                  to enhance safety and performance.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  <strong>Simulation and Testing </strong>Advances in computer
                  simulations have allowed for more extensive testing and
                  optimization of NTP systems. technology.
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Current Projects
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                NASA's Space Technology Mission Directorate, for example, has
                been actively researching NTP systems.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{
                bgcolor: styles.clomberBlue3
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                Future Outlook
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderTop: '1px solid rgba(0, 0, 0, .125)'
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Manned Missions to Mars
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                NTP is seen as a promising technology for enabling faster manned
                missions to Mars, potentially cutting travel time significantly
                compared to chemical rockets.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Technical Milestones
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Future goals include testing a fully functional NTP engine in
                space and addressing the remaining technical and safety
                challenges.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: 'bold'
                }}
              >
                Broader Applications
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Beyond Mars missions, NTP could revolutionize deep space
                exploration, enabling faster travel to the outer planets and
                beyond.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </>
  );
}
export default Technology;
