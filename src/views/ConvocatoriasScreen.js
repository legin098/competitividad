import React from "react";

// reactstrap components
import { Container, Col } from "reactstrap";

// Core Components
import DemoFooter from "components/footers/Footer2";
import LoginCard1 from "components/cards/LoginCard1.js";

function LoginPage() {
  React.useEffect(() => {
    document.body.classList.add("login-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
    };
  });
  return (
    <>
      
      <div className="section-shaped my-0 skew-separator skew-mini">
        <div className="page-header page-header-small header-filter">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/sections/unsplashs.jpg") + ")",
            }}
          ></div>
        </div>
      </div>
      <section className="upper">
        <Container>
          <Col className="mx-auto" lg="5" md="8">
            <LoginCard1 />
          </Col>
        </Container>
      </section>
      <DemoFooter />
    </>
  );
}

export default LoginPage;
