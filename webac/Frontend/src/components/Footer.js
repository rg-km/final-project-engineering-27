import React from 'react';
import { Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import './Footer.css'
import Logo from "../assets/images/logo-webac.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faTelegram, faTwitter, faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons';


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
                <FontAwesomeIcon icon={faInstagram} width="30" height="30" />
                <FontAwesomeIcon icon={faFacebook} width="30" height="30" />
                <FontAwesomeIcon icon={faTelegram} width="30" height="30" />
                <FontAwesomeIcon icon={faTwitter} width="30" height="30" />
                <FontAwesomeIcon icon={faWhatsapp} width="30" height="30" />
            </Col>

            <Col md={1}>
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
                        <li>Content</li>
                    </ul>
                </div>
            </Col>
            <p>
                Copyright@2022
            </p>
        </Row>
    </>
  )
}
export default Footer;