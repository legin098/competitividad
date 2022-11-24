import Map from "components/competitividad/Map";
import credentials from "components/competitividad/credentials";
import DemoNavbar from "components/navbars/DemoNavbar";
import { Container, Row, Col } from "react-bootstrap";
import bg from "../assets/img/brand/bg-nosotros.png";

const EmpresaDetailScreen = () => {
  return (
    <>
      <DemoNavbar type="white" />
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
                            {/* <img
                                alt="..."
                                style={{
                                    height: "55vh",
                                    width: "100%",
                                    objectFit: "cover",
                                }}
                                src={bg}
                            ></img> */}
                            <Map 
                              googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapKey}`}
                              containerElement = {<div style={{height: '500px'}} />}
                              mapElement = {<div style={{ height: '100%' }}/>}
                              loadingElement = {<p>Cargando...</p>}
                            />
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
    </>
  );
};
export default EmpresaDetailScreen;
