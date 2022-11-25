import { ofertaAction } from "actions/ofertaAction";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import { Row, Col,Container  } from "react-bootstrap";
import Message from '../components/Message'
import Oferta from '../components/Oferta'
import Paginate from '../components/Paginate'

function OfertasScreen() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { error, ofertas, page, pages } = useSelector((state) => state.ofertas);
  
  let keyword = location.search;
  
  useEffect(() => {
    dispatch(ofertaAction(keyword));
  }, [dispatch, keyword]);
  console.log("asoidfjasoidj:", ofertas)
  return (
    <div style={{ paddingTop: "7rem" }}>
      <SearchBox />
      <h1>Latest Products</h1>
      {error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Row>
            {ofertas.ofertas?.map((oferta) => (
              <Col key={oferta._id} sm={12} md={6} lg={4}>
                <Oferta oferta={oferta} />
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} keyword={keyword} />
        </Container>
      )}
    </div>
  );
}

export default OfertasScreen;
