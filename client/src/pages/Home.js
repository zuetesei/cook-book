import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogInForm from "../components/LogInForm";
import "../styles/Home.css";
import Illustration from "../assets/cooks.jpg";

function Home() {
  return (
    <div className="home">
      <Container>
        <Row className="about-app">
          <Col sm={8}>
            <div className="intro">
              <h1>
                {" "}
                What is <span className="only-cooks"> OnlyCooks </span>?{" "}
              </h1>
              <div class="custom-shape-divider-bottom-1669850492">
                {/* <svg
                                    data-name="Layer 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1200 120"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                        class="shape-fill"
                                    ></path>
                                </svg> */}
              </div>
              <div className="my-2">
                <p>
                  Only Cooks is a social platform where you can store your most
                  treasured recipes privately or share with friends. If you are
                  looking for a new and cool recipe to impress your loved ones,
                  you can explore our database of recipes from kitchens across
                  the globe! All are welcome to join this community of cooks and
                  creators!
                </p>
                <img
                  src={Illustration}
                  alt="two cooks"
                  className="justify-content-md-center"
                />
              </div>
            </div>
          </Col>
          <Col className="sm={4}">
            <LogInForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
