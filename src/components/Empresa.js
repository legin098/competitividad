import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { obtenerDetalleEmpresaAction } from "actions/empresaAction";
import { useDispatch } from "react-redux";

function Empresa({ empresa }) {
  const dispatch = useDispatch();

  const obtenerDetalleEmpresa = (empresa) => {
    dispatch(obtenerDetalleEmpresaAction(empresa));
  };

  return (
    <Card className="my-3 p-3 rounded">
      <Link
        to={`/empresa/${empresa.id}`}
        onClick={() => obtenerDetalleEmpresa(empresa)}
      >
        <Card.Img
          style={{ height: "250px", objectFit: "cover" }}
          src={empresa.logo}
        />
      </Link>

      <Card.Body>
        <Link
          to={`/empresa/${empresa.id}`}
          onClick={() => obtenerDetalleEmpresa(empresa)}
        >
          <Card.Title style={{ height: "35px" }} as="div">
            <strong>{empresa.nombre}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Empresa;
