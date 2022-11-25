import { userLoginAction } from "actions/userAction";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

// Core Components

function LoginCard1() {
  const [emailFocus, setEmailFocus] = React.useState("");
  const [passwordFocus, setPasswordFocus] = React.useState("");
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(userLoginAction(email, pwd))

    
  }
  return (
    <>
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Inicie sesión con credenciales</small>
          </div>
          <Form role="form" onSubmit={ handleSubmit }>
            <FormGroup className={"mb-3 " + emailFocus}>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Correo eletronico"
                  type="email"
                  onChange = { e => setEmail(e.target.value)}
                ></Input>
              </InputGroup>
            </FormGroup>
            <FormGroup className={passwordFocus}>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Contraseña"
                  type="password"
                  onChange = { e => setPwd(e.target.value)}
                ></Input>
              </InputGroup>
            </FormGroup>
            <div className="custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id=" customCheckLogin2"
                type="checkbox"
              ></input>
              <label
                className="custom-control-label"
                htmlFor=" customCheckLogin2"
              >
                <span className="text-default opacity-5">Acuérdate de mí</span>
              </label>
            </div>
            <div className="text-center">
              <Button className="my-4 text-capitalize" color="primary" type="submit">
                Iniciar sesión
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}

export default LoginCard1;
