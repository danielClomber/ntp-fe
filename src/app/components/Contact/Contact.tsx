import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { styles } from '../../../assets/styles/styles';
import CoffeeIcon from '@mui/icons-material/Coffee';
import './Contact.css';

function Contact() {
  return (
    <>
      <Container sx={{ my: 13 }}>
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
      </Container>
    </>
  );
}
export default Contact;
