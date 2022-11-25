import { empresasAction } from "actions/empresaAction";
import Empresa from "components/Empresa";
import Message from "components/Message";
import Paginate from "components/Paginate";
import SearchBox from "components/SearchBox";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function EmpresasScreen() {
  const dispatch = useDispatch();
  const {
    empresas,
    error,
    page = 1,
    pages = 1,
  } = useSelector((state) => state.empresas);

  useEffect(() => {
    dispatch(empresasAction());
  }, []);

  return (
    <div style={{ paddingTop: "7rem" }}>
      <Container>
        <SearchBox />
        <h1>Empresas</h1>
        {error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              {empresas.map((empresa) => (
                <Col key={empresa.id} sm={12} md={6} lg={4}>
                  <Empresa empresa={empresa} />
                </Col>
              ))}
            </Row>
            <Paginate page={page} pages={pages} />
          </>
        )}
      </Container>
    </div>
  );
}

export default EmpresasScreen;
