import Map from "components/competitividad/Map";
import credentials from "components/competitividad/credentials";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loader from "components/Loader";
import Message from "components/Message";

const EmpresaDetailScreen = () => {
  const { empresaDetail, loading, error } = useSelector(
    (state) => state.empresas
  );

  return (
    <div style={{ paddingTop: "7rem" }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Container>
            <Row>
              <Col md={4}>
                <Container className="p-0">
                  <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapKey}`}
                    containerElement={<div style={{ height: "500px" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                    loadingElement={<p>Cargando...</p>}
                    lat={Number(empresaDetail.lat)}
                    lon={Number(empresaDetail.lon)}
                  />
                  <h3 className="mt-3" style={{ color: "#0A81C4" }}>{empresaDetail.nombre}</h3>
                </Container>
              </Col>
              <Col md={4}>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};
export default EmpresaDetailScreen;
