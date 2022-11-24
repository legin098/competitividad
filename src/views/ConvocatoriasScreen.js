import React from "react";
import DemoNavbar from "components/navbars/DemoNavbar.js";
import Footer from "components/footers/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import bgimg from '../assets/img/brand/Vector.png'
function ConvocatoriasScreen() {
    return (
        <div>
            <DemoNavbar />
            <section className="mt-5 pt-5">
                <Container className="mt-5 pt-2">
                    <Row className="text-center">
                        <Col>
                            <h1>¡Haz parte del equipo!</h1>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col lg="6">
                            <Button variant="outline-success" type="submit">
                                Trabaja con nosotros
                            </Button>
                        </Col>
                        <Col lg="6">
                            <Button variant="primary" type="submit">
                                Licitaciones
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section style={{backgroundImage:{bgimg}, height:"65vh"}}>

            </section >
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <h3>Sed ut perspiciatis</h3>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est.
                            </p>
                        </Col>
                        <Col lg="6" >
                            <h3>Sed ut perspiciatis</h3>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <h3>Sed ut perspiciatis</h3>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est.
                            </p>
                        </Col>
                        <Col lg="6">
                            <h3>Sed ut perspiciatis</h3>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
}

export default ConvocatoriasScreen;
