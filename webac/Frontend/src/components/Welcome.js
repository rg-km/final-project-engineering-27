import { Navbar, Container, Nav,} from "react-bootstrap";
import Logo from "../assets/images/logo-webac.png"
import Footer from "./Footer";
import {Link} from "react-router-dom"

const Welcome = () => {
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
                <Nav>
                    <Nav.Link href="/peserta">Peserta</Nav.Link>
                    <Nav.Link href="/organization">Organization</Nav.Link>   
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    {/* Navbar End  */}

    {/* Welcome Start */}
        <div className="welcome">
    <Container className="p-5">
            <img src={Logo} width="300" height="300" className="logo1" alt=""></img>
            <h1 className="h1">
                WEBINAR ACADEMY
            </h1>
            <h4 className="h4">
                Wujudkan acaramu bersama kami!
            </h4>

            <h3 className="h3">
                LOGIN / REGISTER
            </h3>
            <div className="login-register">
                <Link to="/login-organization"><button className="btn-login btn-primary">ORGANIZATION</button></Link>
                <Link to="/login-peserta"><button className="btn-register btn-primary">PESERTA</button></Link>
            </div>
    </Container>
        </div>
    {/* Welcome End */}

    {/* Footer Start */}
        <div className="footer">
            <Footer />
        </div>
    </>
    )
}
export default Welcome;