import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Oferta({ oferta }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/oferta/${oferta._id}`}>
                <Card.Img style={{height:"250px", objectFit:"cover"}} src={oferta.imagen} />
            </Link>

            <Card.Body>
                <Link to={`/oferta/${oferta._id}`}>
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
                    Ahora: $ {oferta.precio*oferta.descuento/100}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Oferta