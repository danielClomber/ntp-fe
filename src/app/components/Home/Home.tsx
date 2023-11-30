import './Home.css';
import Contact from '../Contact/Contact';
import HomePage from './HomePage/HomePage';

function Home() {
  return (
    <>
      <HomePage />
      <Contact basicContact={true} />
    </>
  );
}
export default Home;
