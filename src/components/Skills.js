import react from "../assets/img/react.svg";
import html5 from "../assets/img/html5.svg";
import css3 from "../assets/img/css3.svg";
import php from "../assets/img/php.svg";
import javascript from "../assets/img/javascript.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import docker from "../assets/img/docker.svg";
import mysql from "../assets/img/mysql.svg";
import figma from "../assets/img/figma.svg";
import git from "../assets/img/git.svg";
import vscode from "../assets/img/visual-studio-code.svg";
import java from "../assets/img/java.svg";
import python from "../assets/img/python.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Skills&</h2>
                        <p>I'm motivated to develop my abilities and gain knowledge and new experience.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} style={{height:180, width:180}} alt="" />
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                <img src={html5} style={{height:180, width:180}} alt="" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={css3} style={{height:180, width:180}} alt="" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} style={{height:180, width:180}} alt="" />
                                <h5>JAVA SCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={php} style={{height:180, width:180}} alt="" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} style={{height:180, width:180}} alt="" />
                                <h5>BOOTSTRAP</h5>
                            </div>
                            <div className="item">
                                <img src={git} style={{height:180, width:180}} alt="" />
                                <h5>GIT</h5>
                            </div>
                            <div className="item">
                                <img src={vscode} style={{height:180, width:180}} alt="" />
                                <h5>VS-CODE</h5>
                            </div>
                            <div className="item">
                                <img src={figma} style={{height:180, width:180}} alt="" />
                                <h5>FIGMA</h5>
                            </div>
                            <div className="item">
                                <img src={docker} style={{height:180, width:180}} alt="" />
                                <h5>DOCKER</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} style={{height:180, width:180}} alt="" />
                                <h5>MYSQL</h5>
                            </div>
                            <div className="item">
                                <img src={python} style={{height:180, width:180}} alt="" />
                                <h5>PYTHON</h5>
                            </div>
                            <div className="item">
                                <img src={java} style={{height:180, width:180}} alt="" />
                                <h5>JAVA</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
