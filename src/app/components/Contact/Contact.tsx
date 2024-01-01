import { Box, Container, Link, Typography } from '@mui/material';
import './Contact.css';
import modernRunImage from '../../../assets/images/modern-run.png';

function Contact() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}
    >
      <Box sx={{ mt: 6, px: 5 }}>
        <Typography variant="h3">Contact Us</Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          We’d love to hear from you
        </Typography>
        <Box>
          <Link
            target="_top"
            rel="noopener noreferrer"
            href={`mailto:info@fitfai.com`}
          >
            info@fitfai.com
          </Link>
        </Box>
      </Box>
      <Box sx={{ mt: 6, px: 5 }}>
        <img width="250" src={modernRunImage} alt="modern runner with colors" />
      </Box>
    </Container>
  );
}
export default Contact;
