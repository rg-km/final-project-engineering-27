import React, {useState,useEffect} from "react";
import NavigationOrganization from "./NavigationOrganization";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import gambar1 from '../assets/images/profile.jpg';



const ProfileOrganization = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        setItem([
            {
                nama: "Organization Bismillah Selesai",
                email: "bismillahselsai@gmail.com",
                nohp: "081212121212",
                gambar: gambar1
            }
        ])});
    return(
        <>
        {/* Start Navigation */}
        <div className="navigation">
            <NavigationOrganization />
        </div>
        {/* End Navigation */}

        {/* Start Content */}
        <div className="organization">
            <Container>
                <h1 className="h1-profile">
                    ORGANIZATION
                </h1>
                <Card className="card-organization">
                {item.map((item) => {
                    return (
                    <Row>
                        <Col className="img-organization">
                            <Card.Img src={item.gambar} className="image-organization"></Card.Img>
                        </Col>
                        <Col className="body-organization">
                            <Card.Body>
                                <h1 className="h1-profile">
                                    BIODATA PROFILE
                                </h1>
                                <Card.Text className="text">
                                    <Row>
                                        <Col md={4}>
                                            ORGANIZATION
                                        </Col>
                                        <Col md={5}>
                                            {item.nama}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            EMAIL
                                        </Col>
                                        <Col md={5}>
                                            {item.email}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            PHONE
                                        </Col>
                                        <Col md={5}>
                                            {item.nohp}
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <Button className="btn-organization">
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
export default ProfileOrganization;