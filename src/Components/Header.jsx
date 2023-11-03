import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark-blue">
        <Container >
          <Navbar.Brand style={{"color": "white", "font-weight": "bold"}} href="/">SHARETRADE.COM</Navbar.Brand>
          
        </Container>
      </Navbar>
    );
}

export default Header;