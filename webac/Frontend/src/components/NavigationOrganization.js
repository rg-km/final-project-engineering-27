import React from "react";
import { Navbar, Container, Nav,} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "../assets/images/logo-webac.png"
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import './NavigationOrganization.css'

const NavigationOrganization = () => {
    return (
        <>
            {/* Navbar Start */}
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={Logo} width="70" height="50" alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav className="nav">
                                <Nav.Link href="#deets">Content</Nav.Link>
                                <Nav.Link href="#deets">Profile</Nav.Link>
                                <Nav.Link href="#deets"><FontAwesomeIcon icon={faRightFromBracket} /></Nav.Link>    
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            {/* Navbar End  */}
        </>
        )
    }
    export default NavigationOrganization;