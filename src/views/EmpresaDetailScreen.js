import Map from "components/competitividad/Map";
import credentials from "components/competitividad/credentials";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "components/Loader";
import Message from "components/Message";
import { useEffect, useState } from "react";
import clienteAxios from "config/clienteAxios";
import Paginate from "components/Paginate";
import Oferta from "components/Oferta";

const EmpresaDetailScreen = () => {
  const dispatch = useDispatch()
  const { empresaDetail, loading, error } = useSelector(
    (state) => state.empresas
  );
  const [ofertas, setOfertas] = useState([])

  const [social, setSocial] = useState([]);

  const getMedia = async () => {
    try {
      const { data: dataSocial } = await clienteAxios.get(
        `empresas/social-urls/${empresaDetail.id}`
      );
      setSocial(dataSocial.Reviews);
    } catch (error) {
      console.log(error);
    }
  };

  const getOferta = async () => {
    try {
      const { data : dataOfertas } = await clienteAxios.get(`empresas/ofertas/empresa/${empresaDetail.id}`)
      console.log("dataOfertas", dataOfertas)
      setOfertas(dataOfertas)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMedia();
    getOferta()
  }, []);



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
              <Col md={6}>
                <Container className="p-0">
                  <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapKey}`}
                    containerElement={<div style={{ height: "500px" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                    loadingElement={<p>Cargando...</p>}
                    lat={Number(empresaDetail.lat)}
                    lon={Number(empresaDetail.lon)}
                  />
                </Container>
              </Col>
              <Col md={6}>
                <Container>
                  <h4 style={{ color: "#0A81C4" }}>{empresaDetail.nombre}</h4>
                  <p>
                    {empresaDetail.descripcion}
                  </p>
                  <Row>
                    {social.map((red) => (
                      <Col lg="4">
                        <a key={red.id} href={red.url}>
                          {red.nombre}
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row>
            <Container>
          <Row>
            {ofertas.ofertas?.map((oferta) => (
              <Col key={oferta._id} sm={12} md={6} lg={4}>
                <Oferta oferta={oferta} />
              </Col>
            ))}
          </Row>
        </Container>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};
export default EmpresaDetailScreen;
