import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/profile.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import gitHub from '../assets/img/nav-icon1.svg';
import faceBook from '../assets/img/nav-icon2.svg';
import instaGram from '../assets/img/nav-icon3.svg';
import mail from '../assets/img/mail.svg';
import phone from '../assets/img/phone.svg';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact Me</h2>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <a href="https://github.com/JamePut" style={{textDecoration: 'none'}}><img src={gitHub} style={{height:60, width:60}} alt="" /><p style={{color: 'white'}}>JamePut</p></a>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <a href="https://www.facebook.com/jame.put.9" style={{textDecoration: 'none'}}><img src={faceBook} style={{height:60, width:60}} alt="" /><p style={{color: 'white'}}>Jame Put</p></a>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <a href="https://www.instagram.com/james_put/" style={{textDecoration: 'none'}}><img src={instaGram} style={{height:60, width:60}} alt="" /><p style={{color: 'white'}}>james_put</p></a>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <img src={mail} style={{height:60, width:60}} alt="" /><p style={{color: 'white'}}>Putipong.rtws@gmail.com</p>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <img src={phone} style={{height:60, width:60}} alt="" /><p style={{color: 'white'}}>092-269-8093</p>
                    </Col>
                  </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}