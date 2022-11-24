/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavLink, Container } from "reactstrap";

// Core Components

function Footer2() {
  return (
    <>
      <footer className="footer footer-simple">
        <Container className="text-center">
          <div className="copyright">
            © {new Date().getFullYear()}, Orgullosamente codificado por{" "}
            <a
              className="copyright-link"
              href="https://www.creative-tim.com?ref=adspr-footer2"
              target="_blank"
            >
              JDevRB & LgsusDev
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer2;
