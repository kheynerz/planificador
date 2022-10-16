import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './NavBar.css'
const NavBar = ({leftnavs = [], rightnavs = [], navstyles}) => {

  return (
    <Navbar style={navstyles ? navstyles : {backgroundColor: 'rgb(13,110,253)'}} variant="dark">
      <Container>
        <Link to={"/plan"}>Main</Link>

        <Nav className="me-auto navig">
          {leftnavs.map(({ name, route }, index) => (
            <Link key={index} to={route}>
              {name}
            </Link>
          ))}
        </Nav>

        <Nav className=" navig">
            {rightnavs.map(({ name, route }, index) => (
            <Link key={index} to={route}>
              {name}
            </Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar