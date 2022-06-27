import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import NavigationPeserta from "./NavigationPeserta";
import Footer from "./Footer";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import Content from "./Content";
import gambar1 from '../assets/images/profile.jpg';


const ProfilePeserta = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        setItem([
            {
                nama: "Rizki Adi Firmansyah",
                email: "rizkiraya@gmail.com",
                nohp: "081212121212",
                gambar: gambar1
            }
        ])});
    return (
        <>
        {/* Start Navigation */}
        <div className="navigation">
            <NavigationPeserta />
        </div>
        {/* End Navigation */}

        {/* Start Content */}
        <div className="peserta">
            <Container>
                <h1 className="h1-profile">
                    PESERTA
                </h1>
                <Card className="card-peserta">
                {item.map((item) => {
                    return (
                    <Row>
                        <Col className="img-peserta">
                            <Card.Img src={item.gambar} className="image-peserta"></Card.Img>
                        </Col>
                        <Col className="body-peserta">
                            <Card.Body>
                                <h1 className="h1-profile">
                                    BIODATA PROFILE
                                </h1>
                                <Card.Text className="text">
                                    <Row>
                                        <Col md={2}>
                                            NAMA
                                        </Col>
                                        <Col md={5}>
                                            {item.nama}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={2}>
                                            EMAIL
                                        </Col>
                                        <Col md={5}>
                                            {item.email}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={2}>
                                            PHONE
                                        </Col>
                                        <Col md={5}>
                                            {item.nohp}
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <Button className="btn-peserta">
                                    Edit
                                </Button>
                            </Card.Body>
                        </Col>
                    </Row>
                    );
                })}
                </Card>
            </Container>
        </div>
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