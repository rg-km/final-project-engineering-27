import React from "react";
import NavigationPeserta from "./NavigationPeserta";
import Footer from "./Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import gambar1 from "../assets/images/seminar-nasional.jpg";
import gambar2 from "../assets/images/technopreneurship.jpg";

const item = [
    {
        id: 1,
        title: "Seminar Nasional",
        image: gambar1,
        waktu: "dilaksanakan pada tanggal 4 juli 2020"
    },
    {
        id: 2,
        title: "Technopreneurship",
        image: gambar2,
        waktu: "dilaksanakan pada tanggal 2 juli 2020"
    }
]

const Riwayat = () => {
    return (
        <>
        {/* Start Navigation */}
        <div className="navigation">
            <NavigationPeserta />
        </div>
        {/* End Navigation */}

        {/* Start Content */}
        <Container>
            <div className="content">
            {item.map((item) => {
                        return (
                            <Row>
                                <Card>
                                <Col md={3}>
                                    <Card.Img variant="top" src={item.image} />
                                </Col>
                                <Col md={9}>
                                        <Card.Body className="card-content">
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.waktu}</Card.Text>
                                        </Card.Body>
                                </Col>
                                </Card>
                            </Row>
                        )
                    }
                )}
            </div>
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
export default Riwayat;