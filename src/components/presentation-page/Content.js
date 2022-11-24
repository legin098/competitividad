import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { useEffect, useState } from "react";

// Core Components

function Content() {
  const [state, setState] = useState({windowWidth: window.innerWidth,isDesiredWidth: false,})
  const [gradient, setGradient] = useState()
  const [padding, setPadding] = useState()
  const [fontSize, setFontSize] = useState()

  useEffect(() => {

    if (window.innerWidth<500){
      setGradient("linear-gradient(#0A81C4 100%, #ffff 0%)")
      setPadding("2rem")
      setFontSize("1.5rem")
    }else{
      setGradient("linear-gradient(#0A81C4 80%, #ffff 0%)")
      setPadding("0")
      setFontSize("2.1875rem")
    }

  }, [])
  console.log(state, padding, fontSize)
  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < 500;
      if (isDesiredWidth){
        setGradient("linear-gradient(#0A81C4 100%, #ffff 0%)")
        setPadding("2rem")
        setFontSize("1.5rem")
      }else{
        setGradient("linear-gradient(#0A81C4 80%, #ffff 0%)")
        setPadding("0")
        setFontSize("2.1875rem")
      }
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);

  }, [state.windowWidth])




  return (
    <>
      <section className="section-content" style={{ paddingTop: "6rem",backgroundImage:gradient}}>
        <Container>
          <Row>
            <Col className="mt-md-5 order-md-2 order-lg-1" lg="6">
              <div className="image-container">
                <img
                  alt="..."
                  className="img shadow rounded img-comments w-100"
                  src={require("assets/img/presentation-page/content-2.png")}
                ></img>
              </div>
            </Col>
            <Col className="mt-md-5 mx-auto order-md-1" lg="6">
              <div className="section-description" style={{padding:padding}}>
                <h1 className="display-3" style={{color:"white", fontSize: fontSize}}>
                  Mejoramos la calidad de vida de los más vulnerables
                </h1>
                <p className="lead" style={{color:"white"}}>
                  En base a nuestra experiencia generamos acciones y procesos
                  comunitarios participativos fomentando la contrucción de paz
                  con énfasis en grupos de especial protección.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Content;
