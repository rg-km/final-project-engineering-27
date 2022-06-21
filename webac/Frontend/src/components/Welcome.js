import { Navbar, Container, Nav,} from "react-bootstrap";
import './Welcome.css'
import Logo from "../assets/images/logo-webac.png"
import Footer from "./Footer";

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
                    <Nav.Link href="#deets">Home</Nav.Link>
                    <Nav.Link href="#deets">Profile</Nav.Link>   
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    {/* Navbar End  */}

    {/* Welcome Start */}
        <div className="welcome">
    <Container className="p-5">
            <img src={Logo} width="300" height="300" className="logo" alt=""></img>
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
                <button className="btn btn-login btn-primary ">ORGANIZATION</button>
                <button className="btn btn-register btn-primary ">PESERTA</button>
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