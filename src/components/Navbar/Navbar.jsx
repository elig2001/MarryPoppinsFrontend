import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand>Marry Poppins</Navbar.Brand>
        </Container>
      </Navbar>

  );
}

export default NavigationBar;