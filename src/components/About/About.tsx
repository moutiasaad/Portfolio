import { Container } from "./styles";
import springboot from "../../assets/spring-boot.svg";
import flutter from "../../assets/flutter.svg";
import django from "../../assets/django.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import angular from "../../assets/angular.svg";
import pythonIcon from "../../assets/python.svg";
import raspberrypiIcon from "../../assets/raspberrypi.svg";
import arduinoIcon from "../../assets/arduino.svg";
import mongodbIcon from "../../assets/mongodb.svg";
import fastapiIcon from "../../assets/fastapi.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hi there! I'm Moutia, an embedded systems and IoT developer with a Professional Master's degree in Embedded and Mobile Systems (Mention Très Bien). I build complete solutions, from the sensor wired on the machine to the notification on the user's phone.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          I work on IoT data collection with Raspberry Pi, ESP32, Arduino and STM32, machine learning models (scikit-learn, XGBoost) served with FastAPI, backends with Node.js / Express and MongoDB, and web (React) and mobile (Flutter) applications.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          My final-year project was a predictive maintenance system for industrial wire processing machines: sensors, AI failure prediction and real-time alerts for the maintenance team. I am open to opportunities in embedded systems, IoT and mobile / full-stack development.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <div className="skill-group">
            <h4>Embedded & IoT</h4>
            <div className="hard-skills">
              <div className="hability">
                <img src={raspberrypiIcon} alt="Raspberry Pi" />
                <span>Raspberry Pi</span>
              </div>
              <div className="hability">
                <img src={arduinoIcon} alt="Arduino" />
                <span>Arduino</span>
              </div>
              <span className="chip">STM32</span>
              <span className="chip">ESP32</span>
              <span className="chip">FreeRTOS</span>
              <span className="chip">VHDL</span>
              <span className="chip">I2C</span>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <div className="skill-group">
            <h4>AI & Backend</h4>
            <div className="hard-skills">
              <div className="hability">
                <img src={pythonIcon} alt="Python" />
                <span>Python</span>
              </div>
              <div className="hability">
                <img src={fastapiIcon} alt="FastAPI" />
                <span>FastAPI</span>
              </div>
              <div className="hability">
                <img src={nodeIcon} alt="Node.js" />
                <span>Node.js</span>
              </div>
              <div className="hability">
                <img src={mongodbIcon} alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <span className="chip">scikit-learn</span>
              <span className="chip">XGBoost</span>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
          <div className="skill-group">
            <h4>Web & Mobile</h4>
            <div className="hard-skills">
              <div className="hability">
                <img src={flutter} alt="Flutter" />
                <span>Flutter</span>
              </div>
              <div className="hability">
                <img src={reactIcon} alt="React" />
                <span>React</span>
              </div>
              <div className="hability">
                <img src={typescriptIcon} alt="TypeScript" />
                <span>TypeScript</span>
              </div>
              <div className="hability">
                <img src={jsIcon} alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="hability">
                <img src={angular} alt="Angular" />
                <span>Angular</span>
              </div>
              <div className="hability">
                <img src={django} alt="Django" />
                <span>Django</span>
              </div>
              <div className="hability">
                <img src={springboot} alt="Spring Boot" />
                <span>Spring Boot</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={moutiasaad} alt="Moutia Bensaad" />
        </ScrollAnimation>
      </div> */}
    </Container>
  )
}
