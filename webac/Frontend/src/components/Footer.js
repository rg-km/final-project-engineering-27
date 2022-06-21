import React from 'react';
import { Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import './Footer.css'
import Logo from "../assets/images/logo-webac.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <>
        <Row className='footer'>
            <Col>
                <img src={Logo} width="160" height="160" className='logo' alt="logo" />
            </Col>
            <Col className='brand'>
                <h4>
                    WEBINAR ACADEMY
                </h4>
                <p className='caption'>
                    Wujudkan acaramu bersama kami!
                </p>
            </Col>
            <Col>
            <div className='list'>
                    <h5>
                        FITUR UTAMA
                    </h5>
                    <ul>
                        <li>Home</li>
                        <li>Profile</li>
                        <li>Riwayat</li>
                    </ul>
                </div>
            </Col>
            <Col>
                <div className='list'>
                    <h5>
                        PESERTA
                    </h5>
                    <ul>
                        <li>Profile</li>
                        <li>Riwayat</li>
                    </ul>
                </div>
            </Col>
            <Col>
            <div className='list'>
                    <h5>
                        ORGANIZATION
                    </h5>
                    <ul>
                        <li>Profile</li>
                        <li>content</li>
                    </ul>
                </div>
            </Col>
        </Row>
    </>
  )
}
export default Footer;