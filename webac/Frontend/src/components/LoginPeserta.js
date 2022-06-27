import React from "react";
import Footer from "../components/Footer";
import {Link} from "react-router-dom"
import { Container, Row, Col, Form, Button, Nav, Navbar } from "react-bootstrap";
import Peserta from "../assets/images/peserta.jpg";
import Logo from "../assets/images/logo-webac.png";


const LoginPeserta = () => {
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
                    <Nav>
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
                <div className="img">
                    <img src={Peserta} width="900" height="700" className='gambar' alt="gambar" />
                </div>
                </Col>

                <Col>
                <div className="logo">
                    <img src={Logo} width="200" height="200" className='logo' alt="logo" />
                </div>
                <div className="header">
                    <h3>
                        LOGIN
                    </h3>
                </div>

                <div className="form-login">
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Group>
                        <Link to="/home">
                        <Button variant="primary" type="submit" className="button">
                            Login
                        </Button>
                        </Link>
                    </Form>
                    <p className="p">
                        Belum punya akun?   <a href="/register-peserta">Registrasi</a>
                    </p>
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
export default LoginPeserta;