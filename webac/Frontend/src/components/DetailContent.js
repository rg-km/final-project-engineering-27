import React,{useState,useEffect} from "react";
import Footer from "./Footer";
import content1 from "../assets/images/seminar-nasional.jpg";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import NavigationPeserta from "./NavigationPeserta";

const DetailContent = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        setItem([
            {
                title: "Seminar Nasional",
                by: "Organization",
                image: content1,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                time: "3 mins ago",
                link: "https://www.google.com"
            }
        ])});
    return(
        <>
        {/* Start Navigation */}
        <div className="navigation">
            <NavigationPeserta />
        </div>
        {/* End Navigation */}

        {/* Start Content */}
        <div className="detail">
        <Container>
            <Card className="card-detail">
            {item.map((item) => {
                    return (
                        <Row>
                            <Col className="img-detail" md={4}>
                                <Card.Img src={item.image} className="image-detail"></Card.Img>
                            </Col>
                            <Col className="body-detail" md={6}>
                                <Card.Body>
                                    <Card.Title>
                                        <h2>
                                            {item.title}
                                        </h2>
                                    </Card.Title>
                                    <Card.Text>
                                        {item.text}
                                    </Card.Text>
                                    <Card.Text className="time-detail">
                                        {item.time}
                                    </Card.Text>
                                        <Button href={item.link}>
                                            Daftar
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
export default DetailContent;