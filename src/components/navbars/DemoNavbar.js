import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import Logo from "../../static/img/logo-horizontal.png"
// reactstrap components
import {
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "actions/userAction";

function DemoNavbar(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [collapseOpen, toggleCollapse] = useState(false);
  useEffect(() => {
    let headroom = new Headroom(document.getElementById("dark-navbar-main"));
    // initialise
    headroom.init();
  });
  let navbarType = "";
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  switch (props.type) {
    case "dark":
      navbarType = "bg-default navbar-dark";
      break;
    case "transparent":
      navbarType = "navbar-transparent";
      break;
    case "primary":
      navbarType = "bg-primary navbar-dark";
      break;
    case "white":
      navbarType = "bg-white";
      break;
    default:
      navbarType = "bg-default navbar-dark";
      break;
  }
  return (
    <>
      <Navbar
        className={"navbar-main headroom " + navbarType}
        expand="lg"
        id="dark-navbar-main"
      >
        <Container>
          <NavbarBrand className="mr-lg-5" to="/index" tag={Link}>
            <img
              alt="..."
              style={{ height: "60px" }}
              src={Logo}
            ></img>
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => toggleCollapse(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Collapse
            id="navbar_global"
            navbar
            toggler="#navbar_global"
            isOpen={collapseOpen}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/index">
                    <img
                      alt="..."
                      src={require("assets/img/brand/LogoMakikunaTransparente-1.png")}
                    ></img>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    onClick={() => toggleCollapse(!collapseOpen)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav
              className="navbar-nav-hover align-items-lg-center ml-lg-auto"
              navbar
            >
              <UncontrolledDropdown nav>
                <Link to="/empresas/">
                  <span
                    className="nav-link-inner--text"
                    style={{ color: "#0A81C4" }}
                  >
                    Empresa
                  </span>
                </Link>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <Link to="/ofertas/">
                  <span
                    className="nav-link-inner--text"
                    style={{ color: "#0A81C4" }}
                  >
                    Ofertas
                  </span>
                </Link>
              </UncontrolledDropdown>

              {user.id ? (
                <UncontrolledDropdown nav>
                  <Link
                    to="/index"
                    onClick={() => dispatch(userLogoutAction())}
                  >
                    <span
                      className="nav-link-inner--text"
                      style={{ color: "#0A81C4" }}
                    >
                      Logout
                    </span>
                  </Link>
                </UncontrolledDropdown>
              ) : (
                <UncontrolledDropdown nav>
                  <Link to="/login">
                    <span
                      className="nav-link-inner--text"
                      style={{ color: "#0A81C4" }}
                    >
                      Login
                    </span>
                  </Link>
                </UncontrolledDropdown>
              )}

              <UncontrolledDropdown nav onClick={handleShow}>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <Button variant="outline-success">PQRS</Button>
                </DropdownToggle>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Formato de peticiones quejas y reclamos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action="https://formspree.io/f/mqkjnrbj" method="post">
            <Row>
              <Col md="6">
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresar Nombre"
                    name="Nombre"
                  />
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="mb-3" controlId="formid">
                  <Form.Label>Cedula</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Cedula"
                    name="Cedula"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Direccion</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresar Direccion"
                    name="Direccion"
                  />
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="mb-3" controlId="formid">
                  <Form.Label>Municipio</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Municipio"
                    name="Municipio"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresar Correo Electronico"
                    name="email"
                  />
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="mb-3" controlId="formid">
                  <Form.Label>Celular</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Celular"
                    name="Celular"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formid">
              <Form.Label>Descripcion PQR</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder=""
                name="PQR"
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="success" type="submit">
                Enviar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

DemoNavbar.defaultProps = {
  type: "white",
};

DemoNavbar.propTypes = {
  type: PropTypes.oneOf(["dark", "transparent", "primary", "white"]),
};

export default DemoNavbar;
