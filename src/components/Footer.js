import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Putipong-Rtws.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <h1><br></br></h1>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/JamePut"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/jame.put.9"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/james_put/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
