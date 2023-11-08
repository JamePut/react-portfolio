import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resumeImg from '../assets/resume/Putipong resume.png';
import resume from "../assets/resume/Putipong resume.pdf";

export const Resume = () => {
  return (
    <section className="resume" id="resume">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={4}>
            <a href={resume}>
              <button className="download-btn" type="button" class="btn btn-lg btn-warning" download>
                Download resume 
              </button>
            </a>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Row>
                    <Col size={12} sm={6} className="px-1 mt-5 mb-5">
                      <img src={resumeImg} style={{height:1100, width:800}} alt="" />
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