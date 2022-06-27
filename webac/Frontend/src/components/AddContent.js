import React from "react";
import NavigationOrganization from "./NavigationOrganization";
import Footer from "./Footer";
import { Container, Card, Button, InputGroup, Form, Row, Col } from "react-bootstrap";

const AddContent = () => {
    return(
        <>
        {/* Start Navigation */}
        <div className="navigation">
            <NavigationOrganization />
        </div>
        {/* End Navigation */}

        {/* Start Content */}
        <div className="add-content">
            <Container>
                <Card className="card-add">
                    <h3>
                        UPLOAD CONTENT
                    </h3>
                    <Row>
                        <Col md={3}>
                            <h5>
                                TITLE
                            </h5>
                        </Col>
                        <Col md={9}>
                        <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <h5>
                                DESCRIPTION
                            </h5>
                        </Col>
                        <Col md={9}>
                            <Form.Control as="textarea" aria-label="With textarea" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <h5>
                                LINK PENDAFTARAN
                            </h5>
                        </Col>
                        <Col md={9}>
                        <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <h5>
                                PAMFLET
                            </h5>
                        </Col>
                        <Col md={9}>
                            <Form.Control type="file" />
                        </Col>
                    </Row>
                    <Button className="upload">
                        Upload Content
                    </Button>
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
export default AddContent;