import React from "react";
import DemoNavbar from "components/navbars/DemoNavbar.js";
import Footer from "components/footers/Footer";
import { Container, Row, Col } from "react-bootstrap";
import bg from "../assets/img/brand/quehacemos.png";
import Cimg from "../assets/img/brand/Comunicacion-image.png";
import icon1 from "../assets/img/brand/Comunicacon.svg";
function HacemosScreen() {
    return (
        <div>
            <DemoNavbar />
            <section className="pt-5">
                <Container className="pt-5" fluid>
                    <Row>
                        <Col className="py-5 px-0" lg="6">
                            <div
                                style={{
                                    backgroundColor: "#A6CE44",
                                    height: "30rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <h1 style={{ color: "white", width: "70%" }}>
                                    Fomentamos el crecimiento colectivo desde
                                    las fortalezas individuales
                                </h1>
                            </div>
                        </Col>
                        <Col lg="6" className="p-0">
                            <img
                                alt="..."
                                src={bg}
                                style={{ width: "100%" }}
                            ></img>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="mt-5 pt-5">
                <Container className="mb-5" fluid>
                    <Row className="justify-content-center text-center">
                        <Col lg="8">
                            <h2 style={{ color: "#0A81C4" }}>
                                Aportar desde diferentes frentes hace la
                                diferencia. Conóce nuestro portafolio de
                                proyectos
                            </h2>
                        </Col>
                    </Row>
                </Container>

                <div style={{ backgroundColor: "#CEE6F3" }} className="py-5">
                    <Row className="w-100 px-5">
                        <Col lg="6">
                            <img
                                alt="..."
                                src={Cimg}
                                style={{ width: "100%" }}
                            ></img>
                        </Col>
                        <Col
                            lg="6"
                            className="pl-5"
                            style={{ alignSelf: "center" }}
                        >
                            <div>
                                <img alt="..." src={icon1}></img>
                                <h3>Comunicación</h3>
                            </div>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem.
                            </p>
                        </Col>
                    </Row>
                </div>
                <div style={{ backgroundColor: "#fff" }} className="py-5">
                    <Row className="w-100 px-5">
                        <Col
                            lg="6"
                            className="pl-5"
                            style={{ alignSelf: "center" }}
                        >
                            <div>
                                <img alt="..." src={icon1}></img>
                                <h3>Medios de vida</h3>
                            </div>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem.
                            </p>
                        </Col>
                        <Col lg="6">
                            <img
                                alt="..."
                                src={Cimg}
                                style={{ width: "100%" }}
                            ></img>
                        </Col>
                    </Row>
                </div>
                <div style={{ backgroundColor: "#CEE6F3" }} className="py-5">
                    <Row className="w-100 px-5">
                        <Col lg="6">
                            <img
                                alt="..."
                                src={Cimg}
                                style={{ width: "100%" }}
                            ></img>
                        </Col>
                        <Col
                            lg="6"
                            className="pl-5"
                            style={{ alignSelf: "center" }}
                        >
                            <div>
                                <img alt="..." src={icon1}></img>
                                <h3>Comunicación</h3>
                            </div>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem.
                            </p>
                        </Col>
                    </Row>
                </div>
                <div style={{ backgroundColor: "#fff" }} className="py-5">
                    <Row className="w-100 px-5">
                        <Col
                            lg="6"
                            className="pl-5"
                            style={{ alignSelf: "center" }}
                        >
                            <div>
                                <img alt="..." src={icon1}></img>
                                <h3>Comunicación</h3>
                            </div>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem.
                            </p>
                        </Col>
                        <Col lg="6">
                            <img
                                alt="..."
                                src={Cimg}
                                style={{ width: "100%" }}
                            ></img>
                        </Col>
                    </Row>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default HacemosScreen;
