import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { styles } from '../../../assets/styles/styles';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HandshakeIcon from '@mui/icons-material/Handshake';
import './Contact.css';

function Contact({ basicContact = false }) {
  return (
    <>
      <Container sx={{ my: 13 }}>
        {basicContact ? (
          <Grid container direction={{ xs: 'column', sm: 'row' }} spacing={4}>
            <Grid item xs={6} md={8} sx={{ bgcolor: styles.white }}>
              <Typography variant="h3">We're here</Typography>
              <Box sx={{ display: 'flex', mt: 2 }}>
                <CoffeeIcon />
                <Typography variant="subtitle1" sx={{ ml: 2 }}>
                  Our door is always open to have a cup of coffee
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={4} sx={{ bgcolor: styles.white }}>
              <Typography variant="h3">Contact Us</Typography>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                We’d love to hear from you
              </Typography>
              <Box>
                <Link
                  target="_top"
                  rel="noopener noreferrer"
                  href={`mailto:info@clomber.com`}
                >
                  info@clomber.com
                </Link>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Box>
            <Box>
              <Typography variant="h3">Contact Us</Typography>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Whether you have queries about our NTP technology, want to
                explore partnership opportunities, or simply wish to join our
                journey into the new era of space technology, we're here to
                engage.
              </Typography>
            </Box>
            <Box sx={{ my: 5 }}>
              <Typography
                variant="h4"
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                General Inquiries{' '}
                <ContactSupportIcon fontSize="large" sx={{ ml: 2 }} />
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Curious about our projects or want to know more about Clomber
                Ltd? Reach out to us at:
              </Typography>
              <Box>
                <Link
                  target="_top"
                  rel="noopener noreferrer"
                  href={`mailto:info@clomber.com`}
                >
                  info@clomber.com
                </Link>
              </Box>
            </Box>
            <Box sx={{ my: 5 }}>
              <Typography
                variant="h4"
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                Partnership Opportunities{' '}
                <HandshakeIcon fontSize="large" sx={{ ml: 2 }} />
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Interested in collaborating or investing in our NTP project? Our
                business development team would love to discuss potential
                synergies:
              </Typography>
              <Box>
                <Link
                  target="_top"
                  rel="noopener noreferrer"
                  href={`mailto:partnership@clomber.com`}
                >
                  partnership@clomber.com
                </Link>
              </Box>
            </Box>
            <Typography variant="h3">We're here</Typography>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <CoffeeIcon />
              <Typography variant="subtitle1" sx={{ ml: 2 }}>
                Our door is always open to have a cup of coffee
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
}
export default Contact;
