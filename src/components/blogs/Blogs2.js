import React from "react";
import { useState, useEffect } from 'react'
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function Blogs2() {
    const [cardBodyHeight, setCardBodyHeight] = useState()
    const [fontSize, setFontSize] = useState()
    const [state, setState] = useState({
        windowWidth: window.innerWidth,
        isDesiredWidth: false,
    });
    useEffect(() => {
        if (window.innerWidth < 1024) {
            setFontSize("1.5rem")
            setCardBodyHeight("auto")
        } else {
            setFontSize("1rem")
            setCardBodyHeight("150px")
        }
    }, []);
    useEffect(() => {
        const resizeHandler = () => {
            const currentWindowWidth = window.innerWidth;
            const isDesiredWidth = currentWindowWidth < 1024;
            if (isDesiredWidth) {
                setFontSize("1.5rem")
                setCardBodyHeight("auto")
            } else {
                setFontSize("1rem")
                setCardBodyHeight("150px")
            }
            setState({ windowWidth: currentWindowWidth, isDesiredWidth });
        };
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, [state.windowWidth]);
  return (
    <>
      <section className="blogs-2 pt-5" style={{backgroundImage:"linear-gradient(#ffff 75%,#CEE6F3 25%)"}}>
        <Container fluid>
          <Row className="mb-md-5">
            <Col className="mx-auto" md="8">
              <h3
                className="display-3 text-center"
                style={{ color: "#0A81C4" }}
              >
                Nos guían los 4 principios humanitarios
              </h3>
            </Col>
          </Row>
          <Row>
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/presentation-page/sections/img-4-grid-1.png") +
                      ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom" style={{height:cardBodyHeight, maxWidth:"100%", paddingRight:"1.5rem"}}>
                      <CardTitle tag="h5" style={{fontSize:fontSize}}>HUMANIDAD</CardTitle>
                      <h6 className="card-category text-white opacity-8" style={{fontSize:fontSize}}>
                        El sufrimiento humano debe ser atendido dondequiera que
                        se encuentre
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/presentation-page/sections/img-4-grid-2.png") +
                      ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom" style={{height:cardBodyHeight, maxWidth:"100%", paddingRight:"1.5rem"}}>
                      <CardTitle tag="h5" style={{fontSize:fontSize}}>INDEPENDENCIA</CardTitle>
                      <h6 className="card-category text-white opacity-8" style={{fontSize:fontSize}}>
                        La acción humanitaria debe ser autónoma, independiente
                        de cualquier interés político económico o militar.{" "}
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="3">
              <Card
                className="card-blog card-background card-background-green"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/presentation-page/sections/img-4-grid-3.png") +
                      ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom" style={{height:cardBodyHeight, maxWidth:"100%", paddingRight:"1.5rem"}}>
                      <CardTitle tag="h5" style={{fontSize:fontSize}}>NEUTRALIDAD</CardTitle>
                      <h6 className="card-category text-white opacity-8" style={{fontSize:fontSize}}>
                        Los actores humanitarios no deben tomar partido en las
                        hostilidades y controversias.
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/presentation-page/sections/img-4-grid-4.png") +
                      ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom" style={{height:cardBodyHeight, maxWidth:"100%", paddingRight:"1.5rem"}}>
                      <CardTitle tag="h5" style={{fontSize:fontSize}}>IMPARCIALIDAD</CardTitle>
                      <h6 className="card-category text-white opacity-8" style={{fontSize:fontSize}}>
                        Las acciones humanitarias deden llevarse a cabo sin
                        hacer distinciones de ningún tipo.
                      </h6>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs2;
