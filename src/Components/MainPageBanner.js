import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Title';

import "../styles/MainPagebanner.css";


function MainPageBanner(props) {

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href='/'> < Title title="Candidate Details" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Add" id="forms scroll">
              <NavDropdown.Item href='/CandidateDetails'>
                Candidate Details
                </NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item href='/InterviewDetails'>
                Interview Details
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/OfferDetails'>
                Offer Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/AllCandidateDetails'>
              View
            </Nav.Link>
            <Nav.Link href='/EditCandidateDetails'>
              Edit
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {props.children}
    </>
  );
}

export default MainPageBanner;