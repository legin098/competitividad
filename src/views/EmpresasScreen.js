import { obtenerDetalleEmpresaAction } from "actions/empresaAction";
import { empresasAction } from "actions/empresaAction";
import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function EmpresasScreen() {
  const dispatch = useDispatch();
  const { empresas } = useSelector((state) => state.empresas);

  useEffect(() => {
    dispatch(empresasAction());
  }, []);

  const obtenerDetalleEmpresa = (empresa) => {
    dispatch(obtenerDetalleEmpresaAction(empresa))
  }

  return (
    <div style={{ paddingTop: "7rem" }}>
      <div>
        <Row>
          {empresas.map((empresa) => (
            <Col>
              <Card className="my-3 p-3 rounded">
                <Link to={`/empresa/${empresa.id}`} onClick={() => obtenerDetalleEmpresa(empresa)}>
                  <Card.Img src={empresa.logo} style={{width: "200px", height: "200px"}} />
                </Link>

                <Card.Body>
                  <Link to={`/empresa/${empresa.id}`} onClick={() => obtenerDetalleEmpresa(empresa)}>
                    <Card.Title as="div">
                      <strong>{empresa.nombre}</strong>
                    </Card.Title>
                  </Link>
                  <Card.Title as="div">
                    <strong>Posible descripcion o acceso a redes sociales</strong>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default EmpresasScreen;
