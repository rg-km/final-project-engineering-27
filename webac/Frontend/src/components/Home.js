import React from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import NavigationPeserta from "./NavigationPeserta";
import './Home.css'
import Footer from "./Footer";
import content1 from "../assets/images/seminar-nasional.jpg";
import content2 from "../assets/images/technopreneurship.jpg";

const content = [
    {
        title: "Seminar Nasional",
        by: "Organization",
        image: content1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        time: "3 mins ago",
        link: "https://www.google.com"
    },
    {
        title: "Technopreneurship",
        by: "Organization",
        image: content2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        time: "2 mins ago",
        link: "https://www.google.com"
    }
]

const Home = () => {
    return (
        <>
        {/* Start Navigation */}
        <div className="navigation">
            <NavigationPeserta />
        </div>
        {/* End Navigation */}

        {/* Start Content */}
        <Container>
            <Row className="content">
                {content.map((item) => {
                    return (
                        <Col md={3}>
                            <Card className="card-content">
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.text}</Card.Text>
                                </Card.Body>
                                <Link to="/detail">
                                <Button className="btn" href={item.link}>
                                    Read More
                                </Button>
                                </Link>
                                <Card.Footer>
                                    <small className="text-muted">{item.time}</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
        {/* End Content */}

        {/* Start Footer */}
            <Footer />
        {/* End Footer */}
        </>
    )
}
export default Home;