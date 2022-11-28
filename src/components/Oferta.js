import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { obtenerDetalleOfertaAction } from 'actions/ofertaAction';


function Oferta({ oferta }) {

    const dispatch = useDispatch();

    const obtenerDetalleOferta = (oferta) => {
        dispatch(obtenerDetalleOfertaAction(oferta));
    };

    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/oferta/${oferta._id}`} onClick={() => obtenerDetalleOferta(oferta)}>
                <Card.Img style={{height:"250px", objectFit:"cover"}} src={oferta.imagen} />
            </Link>

            <Card.Body>
                <Link to={`/oferta/${oferta._id}`} onClick={() => obtenerDetalleOferta(oferta)}>
                    <Card.Title style={{height:"35px"}} as="div">
                        <strong>{oferta.nombre}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={oferta.rating} text={`${oferta.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>


                <Card.Text as="h5">
                    Antes: $ <del>{oferta.precio}</del>
                </Card.Text>
                <Card.Text as="h5">
                    Ahora: $ {oferta.precio - (oferta.precio * oferta.descuento/100)}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Oferta