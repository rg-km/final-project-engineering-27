import React from "react";
import Footer from "../components/Footer";
import { Container, Row, Col, Form, Button, Nav, Navbar } from "react-bootstrap";
import organization from "../assets/images/organization.jpg";
import Logo from "../assets/images/logo-webac.png";

const RegisterOrganization = () => {
    return (
        <>
        {/* Start Navigation */}
        <div className="navigation">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} width="70" height="50" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="nav">
                        <Nav.Link href="/">Welcome</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        {/* End Navigation */}

        {/* Start Content */}
        <Container>
            <Row className="row">
                <Col>
                <div className="logo">
                    <img src={Logo} width="200" height="200" className='logo' alt="logo" />
                </div>
                <div className="header">
                    <h3>
                        ORGANIZATION - REGISTER
                    </h3>
                </div>

                <div className="form-register">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name Organization</Form.Label>
                        <Form.Control type="email" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>No. HP</Form.Label>
                        <Form.Control type="email" placeholder="Enter No. HP" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" href="/content" type="submit" className="button">
                        Register
                    </Button>
                </Form>
                    <p className="p">
                        Sudah punya akun?   <a href="/login-organization">Login</a>
                    </p>
                </div>
                </Col>
                <Col>
                <div className="img">
                    <img src={organization} width="900" height="850" className='gambar' alt="gambar" />
                </div>
                </Col>
            </Row>
        </Container>
        {/* End Content */}

        {/* Start Footer */}
        <div className="footer">
            <Footer/>
        </div>
        {/* End Footer */}
        </>
    )
}
export default RegisterOrganization;