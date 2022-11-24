import React from "react";
import DemoNavbar from "components/navbars/DemoNavbar.js";
import Footer from "components/footers/Footer";
import { Container, Row, Col } from "react-bootstrap";
import bg from "../assets/img/brand/bg-nosotros.png";
import vision from '../assets/img/brand/Vision.png'
import mision from '../assets/img/brand/Mision.png'
function NosotrosScreen() {
    return (
        <div>
            <DemoNavbar />
            <section className="pt-5">
                <Container className="pt-5" fluid>
                    <Row className="justify-content-center">
                        <Col className="text-center" lg="8">
                            <h1 style={{ color: "#0A81C4" }}>
                                Somos una fundación que crée en el
                                empoderamiento
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-0">
                            <img
                                alt="..."
                                style={{
                                    height: "55vh",
                                    width: "100%",
                                    objectFit: "cover",
                                }}
                                src={bg}
                            ></img>
                        </Col>
                    </Row>
                    <Row
                        className="justify-content-center"
                        style={{ backgroundColor: "#0A81C4" }}
                    >
                        <Col className="py-5" lg="6">
                            <Container>
                                <p
                                    className="text-center"
                                    style={{ color: "white" }}
                                >
                                    La integración local y la generación de
                                    medios de vida, mediante el acceso a la
                                    oferta local y la formación específica
                                    requerida para el desarrollo personal y
                                    empresarial, aportando a la disminución de
                                    las brechas y barreras para el desarrollo
                                    social y económico.{" "}
                                </p>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className="justify-content-center">
                        <Col className="text-center" lg="8">
                            <h2 style={{fontWeight:"bold"}}>
                                Trabajamos fuertemente para asistir, proteger y
                                empoderar a comunidades vulnerables
                            </h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col lg="5">
                            <img  style={{width:"100%",objectFit:"cover"}} src={mision}></img>
                            <h3>Misión</h3>
                            <p>
                                La Fundación Makikuna es una ONG que reconoce e
                                interviene la transformación social mediante
                                acciones sostenibles para el mejoramiento de la
                                calidad de vida de las personas desplazadas y
                                vulnerables, respondiendo a las necesidades y
                                derechos sin distinción de su edad, género,
                                condición social, étnica, religiosa o
                                nacionalidad.
                            </p>
                        </Col>
                        <Col lg="5">
                            <img style={{width:"100%",objectFit:"cover"}} src={vision}></img>
                            <h3>Visión</h3>
                            <p>
                                En el 2025, la Fundación Makikuna será un
                                referente clave en el suroccidente y la amazonia
                                colombiana, con procesos inclusivos e integrales
                                para el desarrollo sustentable de las
                                comunidades en sus territorios. La Fundación
                                Makikuna, en nuestro compromiso con los
                                territorios y comunidades contempla como ejes
                                transversales; el enfoque de derechos humanos,
                                la equidad de género, la educación ambiental, la
                                gestión del riesgo, la política pública e
                                incidencia institucional, trabajando en 3 líneas
                                específicas:
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
}

export default NosotrosScreen;
