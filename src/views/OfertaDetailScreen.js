import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OFERTA_CREATE_REVIEW_RESET } from "../types/ofertaTypes";
import { createOfertaReview } from "../actions/ofertaAction";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";
import ExpiredNotice from "../components/ExpiredNotice";
import ShowCounter from "../components/ShowCounter";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCountdown } from "../hook/useContdown";
import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Image,
} from "react-bootstrap";

function OfertaDetailScreen() {
  const [comment, setComment] = useState("");
  const params = useParams();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user);
  const { userInfo } = userLogin;
  const { loading, error, ofertaDetail } = useSelector(
    (state) => state.ofertas
  );
  const ofertaReviewCreate = useSelector((state) => state.review);

  const {
    loading: loadingOfertaReview,
    error: errorOfertaReview,
    success: successOfertaReview,
  } = ofertaReviewCreate;
  useEffect(() => {
    if (successOfertaReview) {
      setComment("");
      dispatch({ type: OFERTA_CREATE_REVIEW_RESET });
    }
  }, [dispatch, params, successOfertaReview]);
  console.log(ofertaDetail);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createOfertaReview(params.id, {
        comment,
      })
    );
  };

  const [days, hours, minutes, seconds] = useCountdown(ofertaDetail.end_date);

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
                <Image
                  src={ofertaDetail.imagen}
                  alt={ofertaDetail.nombre}
                  fluid
                />
              </Col>
              <Col md={4}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{ofertaDetail.name}</h3>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Rating
                      value={ofertaDetail.rating}
                      text={`${ofertaDetail.numReviews} reviews`}
                      color={"#f8e825"}
                    />
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Precio: ${ofertaDetail.precio}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Description: {ofertaDetail.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg="4">
                {days + hours + minutes + seconds <= 0 ? (
                  <ExpiredNotice />
                ) : (
                  <ShowCounter
                    days={days}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                  />
                )}
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md={6}>
                <h4>Reviews</h4>
                {ofertaDetail.reviews?.length === 0 && (
                  <Message variant="info">No Reviews</Message>
                )}

                <ListGroup variant="flush">
                  {ofertaDetail.reviews?.map((review) => (
                    <ListGroup.Item key={review._id}>
                      <strong>{review.name}</strong>
                      <p>{review.createdAt.substring(0, 10)}</p>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  ))}

                  <ListGroup.Item>
                    <h4>Write a review</h4>

                    {loadingOfertaReview && <Loader />}
                    {successOfertaReview && (
                      <Message variant="success">Review Submitted</Message>
                    )}
                    {errorOfertaReview && (
                      <Message variant="danger">{errorOfertaReview}</Message>
                    )}

                    {userInfo ? (
                      <Form onSubmit={submitHandler}>
                        <Form.Group controlId="comment">
                          <Form.Label>Review</Form.Label>
                          <Form.Control
                            as="textarea"
                            row="5"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></Form.Control>
                        </Form.Group>

                        <Button
                          disabled={loadingOfertaReview}
                          type="submit"
                          variant="primary"
                        >
                          Submit
                        </Button>
                      </Form>
                    ) : (
                      <Message variant="info">
                        Please <Link to="/login">login</Link> to write a review
                      </Message>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}

export default OfertaDetailScreen;
