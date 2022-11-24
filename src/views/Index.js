import { React, useEffect, useState } from "react";
import face from "../assets/img/icons/Logo-FB.svg";
import Twitter from '../assets/img/icons/Logo-Twitter.svg'
import wa from '../assets/img/icons/Logo-WA.svg'
import Telefono from '../assets/img/icons/Telefono.svg'
import Ubicacion from '../assets/img/icons/Ubicacion.svg'
// reactstrap components
import {
    Container,
    Row,
    CardHeader,
    CardTitle,
    Col,
    Card,
    CardBody,
    Button,
} from "reactstrap";
import Axios from "axios";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import Content from "components/presentation-page/Content.js";
import Blogs4 from "components/blogs/Blogs2.js";


function Index() {
    const [state, setState] = useState({
        windowWidth: window.innerWidth,
        isDesiredWidth: false,
    });
    const [gap, setGap] = useState();
    const [post, setPost] = useState();
    const [fontSize, setFontSize] = useState()
    const [imgWidth, setImgWidth] = useState()
    const [textWidthCenter, settextWidthCenter] = useState()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios({
                    url: "http://localhost:8000/api/posts/",
                });

                setPost(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    console.log(post);

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setGap("40px");
            setImgWidth("auto")
            settextWidthCenter("w-50 m-auto")
        } else {
            setGap("0px")
            setImgWidth("w-100")
            settextWidthCenter("")
        }
    }, []);
    console.log(state);
    useEffect(() => {
        const resizeHandler = () => {
            const currentWindowWidth = window.innerWidth;
            const isDesiredWidth = currentWindowWidth < 1024;
            if (isDesiredWidth) {
                setGap("40px")
                setFontSize("2rem")
                setImgWidth("auto")
            } else {
                setGap("0px")
                setImgWidth("w-100")
            }
            setState({ windowWidth: currentWindowWidth, isDesiredWidth });
        };
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, [state.windowWidth]);

    useEffect(() => {
        document.body.classList.add("index-page");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        var href = window.location.href.substring(
            window.location.href.lastIndexOf("#") + 1
        );
        if (
            window.location.href.lastIndexOf("#") > 0 &&
            document.getElementById(href)
        ) {
            document.getElementById(href).scrollIntoView();
        }
        return function cleanup() {
            document.body.classList.remove("index-page");
        };
    });
    const latestPosts = post?.posts?.slice(0, 4);

    return (
        <>
            
            <Content />
            <Blogs4 />
            <section className="pt-5" style={{ backgroundColor: "#CEE6F3" }}>
                <Container fluid>
                    <Row
                        className="mb-md-5"
                        style={{ justifyContent: "center" }}
                    >
                        <Col lg="3">
                            <div>
                                <div
                                    style={{ backgroundColor: "#CEE6F3" }}
                                    className="full-background text-center"
                                >
                                    <img
                                        alt="..."
                                        className="img rounded img-comments w-10"
                                        src={require("assets/img/presentation-page/sections/icon.png")}
                                    ></img>
                                </div>
                                <a
                                    style={{ backgroundColor: "#CEE6F3" }}
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <CardBody>
                                        <div className="content-bottom text-center">
                                            <h6 className={`card-category text-black opacity-8 ${textWidthCenter}`}>
                                                Creamos mecanismos de protección
                                                para el acceso a derechos
                                            </h6>
                                        </div>
                                    </CardBody>
                                </a>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div>
                                <div
                                    style={{ backgroundColor: "#CEE6F3" }}
                                    className="full-background text-center"
                                >
                                    <img
                                        alt="..."
                                        className="img rounded img-comments w-10"
                                        src={require("assets/img/presentation-page/sections/icon2.png")}
                                    ></img>
                                </div>
                                <a
                                    style={{ backgroundColor: "#CEE6F3" }}
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <CardBody>
                                        <div className="content-bottom text-center">
                                            <h6 className={`card-category text-black opacity-8 ${textWidthCenter}`}>
                                                Fomentamos escenarios de
                                                integración local para
                                                comunidades vulnerable
                                            </h6>
                                        </div>
                                    </CardBody>
                                </a>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div>
                                <div
                                    style={{ backgroundColor: "#CEE6F3" }}
                                    className="full-background text-center"
                                >
                                    <img
                                        alt="..."
                                        className="img rounded img-comments w-10 "
                                        src={require("assets/img/presentation-page/sections/icon3.png")}
                                    ></img>
                                </div>
                                <a
                                    style={{ backgroundColor: "#CEE6F3" }}
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <CardBody>
                                        <div className="content-bottom text-center">
                                            <h6 className={`card-category text-black opacity-8 ${textWidthCenter}`}>
                                                Generamos soluciones innovadoras
                                                y duraderas para el
                                                fortalecimiento comunitario
                                            </h6>
                                        </div>
                                    </CardBody>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="mb-5">
                <Container fluid>
                    <Row className="mb-md-5">
                        <Col className="mx-auto" md="8">
                            <h3
                                className="display-3 text-center"
                                style={{ color: "#0A81C4" }}
                            >
                                Conóce a quienes nos han aportado para
                                transformar vidas
                            </h3>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center">
                        <Col className="text-center mx-3" lg="2">
                            <img
                                alt="..."
                                className={`img rounded img-comments ${imgWidth}`}
                                src={require("assets/img/presentation-page/sections/grid5-1.png")}
                            ></img>
                        </Col>
                        <Col className="text-center mx-3" lg="2">
                            <img
                                alt="..."
                                className={`img rounded img-comments ${imgWidth}`}
                                src={require("assets/img/presentation-page/sections/grid5-2.png")}
                            ></img>
                        </Col>
                        <Col className="text-center mx-3" lg="2">
                            <img
                                alt="..."
                                className={`img rounded img-comments ${imgWidth}`}
                                src={require("assets/img/presentation-page/sections/grid5-3.png")}
                            ></img>
                        </Col>
                        <Col className="text-center mx-3" lg="2">
                            <img
                                alt="..."
                                className={`img rounded img-comments ${imgWidth}`}
                                src={require("assets/img/presentation-page/sections/grid5-4.png")}
                            ></img>
                        </Col>
                        <Col className="text-center mx-3" lg="2">
                            <img
                                alt="..."
                                className={`img rounded img-comments ${imgWidth}`}
                                src={require("assets/img/presentation-page/sections/grid5-5.png")}
                            ></img>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section style={{ backgroundColor: "#A6CE44" }}>
                <Container className="py-5">
                    <Row className="py-5  ">
                        <Col className="text-center">
                            <h2 style={{ color: "white" }}>
                                Los valores que caracterizan nuestra labor
                            </h2>
                            <p style={{ color: "white" }}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            className="d-flex align-items-stretch"
                            lg="4"
                            md="6"
                        >
                            <Card
                                className="card-profile"
                                data-image="profile-image"
                                style={{ backgroundColor: "#DBEAB3", gap: gap }}
                            >
                                <CardHeader
                                    className="h-50 mb-1"
                                    style={{ backgroundColor: "#DBEAB3" }}
                                >
                                    <div className="">
                                        <a
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <img
                                                alt="..."
                                                className="img rounded"
                                                src={require("assets/img/presentation-page/sections/grid3x3-1.png")}
                                            ></img>
                                        </a>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-0">
                                    <h4 className="display-4 mb-0">
                                        Adaptabilidad
                                    </h4>
                                    <p
                                        className="lead"
                                        style={{ fontSize: "1.15rem" }}
                                    >
                                        Nuestro trabajo está en la búsqueda
                                        permanente de nuevas estrategias para
                                        enfrentar los desafíos del contexto y el
                                        permanente cambio.{" "}
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col
                            className="d-flex align-items-stretch"
                            lg="4"
                            md="6"
                        >
                            <Card
                                className="card-profile"
                                data-image="profile-image"
                                style={{ backgroundColor: "#DBEAB3", gap: gap }}
                            >
                                <CardHeader
                                    className="h-50 mb-1"
                                    style={{ backgroundColor: "#DBEAB3" }}
                                >
                                    <div className="">
                                        <a
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <img
                                                alt="..."
                                                className="img rounded"
                                                src={require("assets/img/presentation-page/sections/grid3x3-2.png")}
                                            ></img>
                                        </a>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-0">
                                    <h4 className="display-4 mb-0">
                                        Reinvención
                                    </h4>
                                    <p
                                        className="lead"
                                        style={{ fontSize: "1.15rem" }}
                                    >
                                        Generamos cambios de alto impacto en
                                        nuestros propios procesos y los procesos
                                        que acompañamos
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col
                            className="d-flex align-items-stretch"
                            lg="4"
                            md="6"
                        >
                            <Card
                                className="card-profile"
                                data-image="profile-image"
                                style={{ backgroundColor: "#DBEAB3", gap: gap }}
                            >
                                <CardHeader
                                    className="h-50 mb-1"
                                    style={{ backgroundColor: "#DBEAB3" }}
                                >
                                    <div className="">
                                        <a
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <img
                                                alt="..."
                                                className="img rounded"
                                                src={require("assets/img/presentation-page/sections/grid3x3-3.png")}
                                            ></img>
                                        </a>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-0">
                                    <h4 className="display-4 mb-0">Calidez</h4>
                                    <p
                                        className="lead"
                                        style={{ fontSize: "1.15rem" }}
                                    >
                                        Una historia de trabajo y logros es
                                        posible con manos que suman y hacen
                                        desde el corazón.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col
                            className="d-flex align-items-stretch"
                            lg="4"
                            md="6"
                        >
                            <Card
                                className="card-profile"
                                data-image="profile-image"
                                style={{ backgroundColor: "#DBEAB3", gap: gap }}
                            >
                                <CardHeader
                                    className="h-50 mb-1"
                                    style={{ backgroundColor: "#DBEAB3" }}
                                >
                                    <div className="">
                                        <a
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <img
                                                alt="..."
                                                className="img rounded"
                                                src={require("assets/img/presentation-page/sections/grid3x3-4.png")}
                                            ></img>
                                        </a>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-0">
                                    <h4 className="display-4 mb-0">
                                        Disposición
                                    </h4>
                                    <p
                                        className="lead"
                                        style={{ fontSize: "1.15rem" }}
                                    >
                                        Un equipo de trabajo cualificado y
                                        comprometido para nuestras acciones en
                                        terreno.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col
                            className="d-flex align-items-stretch"
                            lg="4"
                            md="6"
                        >
                            <Card
                                className="card-profile"
                                data-image="profile-image"
                                style={{ backgroundColor: "#DBEAB3", gap: gap }}
                            >
                                <CardHeader
                                    className="h-50 mb-1"
                                    style={{ backgroundColor: "#DBEAB3" }}
                                >
                                    <div className="">
                                        <a
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <img
                                                alt="..."
                                                className="img rounded"
                                                src={require("assets/img/presentation-page/sections/grid3x3-5.png")}
                                            ></img>
                                        </a>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-0">
                                    <h4 className="display-4 mb-0">
                                        Articulación
                                    </h4>
                                    <p
                                        className="lead"
                                        style={{ fontSize: "1.15rem" }}
                                    >
                                        La participación en espacios de política
                                        pública y el reconocimiento del trabajo
                                        de las otras organizaciones en
                                        territorio nos ha permitido avanzar
                                        desde las sinergias institucionales y
                                        comunitarias.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col
                            className="d-flex align-items-stretch"
                            lg="4"
                            md="6"
                        >
                            <Card
                                className="card-profile"
                                data-image="profile-image"
                                style={{ backgroundColor: "#DBEAB3", gap: gap }}
                            >
                                <CardHeader
                                    className="h-50 mb-1"
                                    style={{ backgroundColor: "#DBEAB3" }}
                                >
                                    <div className="">
                                        <a
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <img
                                                alt="..."
                                                className="img rounded"
                                                src={require("assets/img/presentation-page/sections/grid3x3-6.png")}
                                            ></img>
                                        </a>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-0">
                                    <h4 className="display-4 mb-0">
                                        Transparencia
                                    </h4>
                                    <p
                                        className="lead"
                                        style={{ fontSize: "1.15rem" }}
                                    >
                                        Nuestros manuales y procedimientos
                                        permiten brindar la información
                                        requerida para donantes y comunidades
                                        participantes.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <h2>Noticias recientes</h2>
                    </Row>
                    <Row>
                        <Col lg="8">
                            <div>
                                <Col>
                                    <Row>
                                        <Row>
                                            <Col
                                                className="mx-auto"
                                                lg="10"
                                                md="8"
                                            >
                                                <Card className="card-blog card-plain blog-horizontal mb-5">
                                                    <Row>
                                                        <Col lg="4">
                                                            <div className="card-image shadow">
                                                                <a
                                                                    href="#pablo"
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        e.preventDefault()
                                                                    }
                                                                >
                                                                    <img
                                                                        alt="..."
                                                                        className="img rounded"
                                                                        src={
                                                                            post
                                                                                ?.posts[0]
                                                                                ?.image
                                                                        }
                                                                    ></img>
                                                                </a>
                                                            </div>
                                                        </Col>
                                                        <Col lg="8">
                                                            <CardBody>
                                                                <CardTitle tag="h3">
                                                                    <a
                                                                        href="#pablo"
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            e.preventDefault()
                                                                        }
                                                                    >
                                                                        Rover
                                                                        raised
                                                                        $65
                                                                        million
                                                                        for pet
                                                                        sitting
                                                                    </a>
                                                                </CardTitle>
                                                                <p className="card-description">
                                                                    Finding
                                                                    temporary
                                                                    housing for
                                                                    your dog
                                                                    should be as
                                                                    easy as
                                                                    renting an
                                                                    Airbnb.
                                                                    That’s the
                                                                    idea behind
                                                                    Rover, which
                                                                    raised $65
                                                                    million to
                                                                    expand its
                                                                    pet sitting
                                                                    and
                                                                    dog-walking
                                                                    businesses...{" "}
                                                                    <a
                                                                        href="#pablo"
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            e.preventDefault()
                                                                        }
                                                                    >
                                                                        Read
                                                                        More
                                                                    </a>
                                                                </p>
                                                            </CardBody>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                                <Card className="card-blog card-plain blog-horizontal mb-5">
                                                    <Row>
                                                        <Col lg="4">
                                                            <div className="card-image shadow">
                                                                <a
                                                                    href="#pablo"
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        e.preventDefault()
                                                                    }
                                                                >
                                                                    <img
                                                                        alt="..."
                                                                        className="img rounded"
                                                                        src={
                                                                            post
                                                                                ?.posts[1]
                                                                                ?.image
                                                                        }
                                                                    ></img>
                                                                </a>
                                                            </div>
                                                        </Col>
                                                        <Col lg="8">
                                                            <CardBody>
                                                                <CardTitle tag="h3">
                                                                    <a
                                                                        href="#pablo"
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            e.preventDefault()
                                                                        }
                                                                    >
                                                                        MateLabs
                                                                        mixes
                                                                        learning
                                                                        with
                                                                        IFTTT
                                                                    </a>
                                                                </CardTitle>
                                                                <p className="card-description">
                                                                    If you’ve
                                                                    ever wanted
                                                                    to train a
                                                                    machine
                                                                    learning
                                                                    model and
                                                                    integrate it
                                                                    with IFTTT,
                                                                    you now can
                                                                    with a new
                                                                    offering
                                                                    from
                                                                    MateLabs.
                                                                    MateVerse, a
                                                                    platform
                                                                    where
                                                                    novices can
                                                                    spin out
                                                                    machine...
                                                                    <a
                                                                        href="#pablo"
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            e.preventDefault()
                                                                        }
                                                                    >
                                                                        Read
                                                                        More
                                                                    </a>
                                                                </p>
                                                            </CardBody>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Row>
                                </Col>
                            </div>
                        </Col>
                        <Col lg="4 ">
                            {latestPosts?.map((post) => (
                                <div key={post._id}>
                                    <p>
                                        Fecha : {post.created_at.split("T")[0]}
                                    </p>
                                    <h2>{post.title}</h2>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        <Button
                                            style={{
                                                backgroundColor: "#18A0FB",
                                                color: "white",
                                            }}
                                        >
                                            {" "}
                                            Leer Mas{" "}
                                        </Button>
                                    </div>
                                </div>
                            ))}
                            :
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5" style={{backgroundColor:"#0A81C4"}} >
                <Container className="py-5" >
                    <Row className="px-5">
                        <Col className="pr-5 pl-0" lg="4" style={{alignSelf:"center"}} >
                                        <img
                                            style={{width:"100%"}}
                                            alt="..."
                                            src={require("assets/img/brand/Logo-fondo-oscuro.png")}
                                        ></img>
                                        <p style={{color:"white"}}>Políticas de transparencia</p>
                        </Col>
                        <Col lg="4">
                            <Row>
                                <h3 style={{color:"white"}}>Siguenos:</h3>
                            </Row>
                            <Row className="align-items-center" style={{marginBottom:"1rem"}}>
                                <img alt="..." style={{ maxWidth:"15%"}} src={wa}></img>
                                <p style={{margin:"0",maxWidth:"85%",paddingLeft:"2rem", color:"white"}}>WhatsApp</p>
                            </Row>
                            <Row className="align-items-center" style={{marginBottom:"1rem"}}>
                                <img alt="..." style={{ maxWidth:"15%"}} src={face}></img>
                                <p style={{margin:"0",maxWidth:"85%",paddingLeft:"2rem", color:"white"}}>Facebook</p>
                            </Row>
                            <Row className="align-items-center">
                                <img alt="..." style={{ maxWidth:"15%"}} src={Twitter}></img>
                                <p style={{margin:"0",maxWidth:"85%",paddingLeft:"2rem", color:"white"}}>Twitter</p>
                            </Row>
                        </Col>
                        <Col lg="4">
                            <Row>
                                <h3 style={{color:"white"}}>Contáctanos:</h3>
                            </Row>
                            <Row className="align-items-center" style={{marginBottom:"1rem"}}>
                                <img alt="..." style={{ maxWidth:"15%"}} src={Telefono}></img>
                                <p style={{margin:"0",maxWidth:"85%",paddingLeft:"2rem" , color:"white"}}>(+57) 8 429 63 52 310 571 55 35</p>
                            </Row>
                            <Row className="align-items-center" style={{marginBottom:"1rem"}}>
                                <img alt="..." style={{ maxWidth:"15%"}}  src={Ubicacion}></img>
                                <p style={{margin:"0", maxWidth:"85%",paddingLeft:"2rem", color:"white"}}>Calle 6a No. 9 - 90, B/ Kennedy Mocoa - Putumayo</p>
                            </Row>
                            <Row className="align-items-center">
                                <img alt="..." style={{ maxWidth:"15%"}} src={Ubicacion}></img>
                                <p style={{margin:"0", maxWidth:"85%",paddingLeft:"2rem" , color:"white"}}>Carrera 8 # 27A - 136 Ipiales - Nariño</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Index;
