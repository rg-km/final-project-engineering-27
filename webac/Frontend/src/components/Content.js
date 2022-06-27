import React, {useEffect,useState} from "react";
import NavigationOrganization from "./NavigationOrganization";
import Footer from "./Footer";
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import gambar1 from "../assets/images/seminar-nasional.jpg";
import gambar2 from "../assets/images/technopreneurship.jpg";



const Content = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        setItem([
            {
                id: 1,
                title: "Seminar Nasional",
                image: gambar1,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
                id: 2,
                title: "Technopreneurship",
                image: gambar2,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            }
        ])});
    return (
        <>
        {/* Start Navigation */}
        <div className="navigation">
            <NavigationOrganization />
        </div>
        {/* End Navigation */}

        {/* Start Content */}
        <Container>
            <Row className="content">
                {item.map((item) => {
                    return (
                        <Col md={3}>
                            <Card className="card-content">
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.text}</Card.Text>
                                </Card.Body>
                                <Button className="btn" href="">Edit</Button>
                                <Button className="btn" href="">Delete</Button>
                            </Card>
                        </Col>
                    )
                })}
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
export default Content;