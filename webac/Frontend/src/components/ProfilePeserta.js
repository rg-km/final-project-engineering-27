import React from "react";
import NavigationPeserta from "./NavigationPeserta";
import Footer from "./Footer";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import './ProfilePeserta.css';
import Content from "./Content";
import gambar1 from '../assets/images/profile.jpg';

const item = [
    {
        nama: "Rizki",
        email: "rizkiraya@gmail.com",
        nohp: "081212121212",
        gambar: gambar1
    }
]

const ProfilePeserta = () => {
    return (
        <>
        {/* Start Navigation */}
        <div className="navigation">
            <NavigationPeserta />
        </div>
        {/* End Navigation */}

        {/* Start Content */}
        <Container>
            <Row>
                <Col>
                {item.map((item) => {
                    return(
                        <div className="img">
                        <img src={item.gambar} width="450" height="500" alt="image"></img>
                    </div>
                    )

                })}
                </Col>

                <Col>
                    <div className="bio">

                    </div>
                </Col>
            </Row>
        </Container>
        {/* End Content */}

        {/* Start Footer */}
        <div className="footer">
            <Footer />
        </div>
        {/* End Footer */}
        </>
    )
}
export default ProfilePeserta;