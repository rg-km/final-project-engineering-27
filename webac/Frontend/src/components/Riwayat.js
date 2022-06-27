import React, {useState, useEffect} from "react";
import NavigationPeserta from "./NavigationPeserta";
import Footer from "./Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import gambar1 from "../assets/images/seminar-nasional.jpg";
import gambar2 from "../assets/images/technopreneurship.jpg";


const Riwayat = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        setItem([
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
            },
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
        ])});

    return (
        <>
        {/* Start Navigation */}
        <div className="navigation">
            <NavigationPeserta />
        </div>
        {/* End Navigation */}

        {/* Start Content */}
        <div className="riwayat">
            <Container>
                <h1 className="h1-riwayat">
                    RIWAYAT
                </h1>
                {item.map((item) => {
                return (
                    <Row>
                        <Card className="card-riwayat">
                            <Row>
                                <Col className="img-riwayat" md={1}>
                                    <Card.Img src={item.image} className="image-riwayat"></Card.Img>
                                </Col>
                                <Col className="body-riwayat" md={6}>
                                    <Card.Body>
                                        <Card.Title>
                                            {item.title}
                                        </Card.Title>
                                        <Card.Text>
                                            {item.waktu}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Row>
                );
                })}
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
export default Riwayat;