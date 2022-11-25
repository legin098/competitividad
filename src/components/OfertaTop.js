import { useCountdown } from 'hook/useContdown';
import React from 'react'
import { Row,Col ,Container, CardTitle, Badge} from 'reactstrap'
import ExpiredNotice from './ExpiredNotice'
import ShowCounter from './ShowCounter'

function OfertaTop({oferta}) {
    const [days, hours, minutes, seconds] = useCountdown(oferta.end_date);

  return (
    <Container >
                      <Row>
                        <Col className="p-5" md="5">
                          <div className="p-4">
                            <img
                              alt="..."
                              className="rounded shadow transform-perspective-left"
                              src={oferta.imagen}
                            ></img>
                          </div>
                        </Col>
                        <Col md="7">
                          <div className="wrapper p-md-0">
                            <CardTitle className="display-3" tag="h3">
                              {oferta.nombre}
                            </CardTitle>
                            <div className="lead">{oferta.description}</div>
                            <ul className="list-unstyled mb-0">
                              <li className="py-1">
                                <div className="d-flex align-items-center">
                                  <div>
                                    <Badge
                                      className="badge-circle mr-3"
                                      color="info"
                                    >
                                      <i className="ni ni-atom"></i>
                                    </Badge>
                                  </div>
                                  <div>
                                    <p className="mb-1">
                                      Antes: <del>{oferta.precio}</del>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li className="py-1">
                                <div className="d-flex align-items-center">
                                  <div>
                                    <Badge
                                      className="badge-circle mr-3"
                                      color="success"
                                    >
                                      <i className="ni ni-user-run"></i>
                                    </Badge>
                                  </div>
                                  <div>
                                    <p className="mb-1">
                                      Despues:{" "}
                                      {(oferta.precio -(oferta.precio *oferta.descuento) / 100)}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="">
                              <Col lg="12">
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
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
  )
}

export default OfertaTop