import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import face from "../../assets/img/icons/Logo-FB.svg";
import Twitter from '../../assets/img/icons/Logo-Twitter.svg'
import wa from '../../assets/img/icons/Logo-WA.svg'
import Telefono from '../../assets/img/icons/Telefono.svg'
import Ubicacion from '../../assets/img/icons/Ubicacion.svg'
function Footer() {
  return (
    <section className="py-5" style={{backgroundColor:"#0A81C4"}} >
                <Container className="py-5" >
                    <Row>
                        <Col className="pr-5 pl-0" lg="4" style={{alignSelf:"center"}} >
                                        <img
                                            style={{width:"100%"}}
                                            alt="..."
                                            src={require("assets/img/brand/Logo-fondo-oscuro.png")}
                                        ></img>
                                        <p style={{color:"white"}}>Políticas de transparencia</p>
                        </Col>
                        <Col lg="4">
                            <Row>
                                <h3 style={{color:"white"}}>Siguenos:</h3>
                            </Row>
                            <Row className="align-items-center" style={{marginBottom:"1rem"}}>
                                <img alt="..." style={{ maxWidth:"15%"}} src={wa}></img>
                                <p style={{margin:"0",maxWidth:"85%",paddingLeft:"2rem", color:"white"}}>WhatsApp</p>
                            </Row>
                            <Row className="align-items-center" style={{marginBottom:"1rem"}}>
                                <img alt="..." style={{ maxWidth:"15%"}} src={face}></img>
                                <p style={{margin:"0",maxWidth:"85%",paddingLeft:"2rem", color:"white"}}>Facebook</p>
                            </Row>
                            <Row className="align-items-center">
                                <img alt="..." style={{ maxWidth:"15%"}} src={Twitter}></img>
                                <p style={{margin:"0",maxWidth:"85%",paddingLeft:"2rem", color:"white"}}>Twitter</p>
                            </Row>
                        </Col>
                        <Col lg="4">
                            <Row>
                                <h3 style={{color:"white"}}>Contáctanos:</h3>
                            </Row>
                            <Row className="align-items-center" style={{marginBottom:"1rem"}}>
                                <img alt="..." style={{ maxWidth:"15%"}} src={Telefono}></img>
                                <p style={{margin:"0",maxWidth:"85%",paddingLeft:"2rem" , color:"white"}}>(+57) 8 429 63 52 310 571 55 35</p>
                            </Row>
                            <Row className="align-items-center" style={{marginBottom:"1rem"}}>
                                <img alt="..." style={{ maxWidth:"15%"}}  src={Ubicacion}></img>
                                <p style={{margin:"0", maxWidth:"85%",paddingLeft:"2rem", color:"white"}}>Calle 6a No. 9 - 90, B/ Kennedy Mocoa - Putumayo</p>
                            </Row>
                            <Row className="align-items-center">
                                <img alt="..." style={{ maxWidth:"15%"}} src={Ubicacion}></img>
                                <p style={{margin:"0", maxWidth:"85%",paddingLeft:"2rem" , color:"white"}}>Carrera 8 # 27A - 136 Ipiales - Nariño</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
  )
}

export default Footer
