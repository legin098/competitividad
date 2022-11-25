import React from "react";
import ReactDOM from "react-dom/client";
import { Route, HashRouter, Routes } from "react-router-dom";
import "./styles.css"
import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-design-system.scss?v1.0.0";

import Index from "views/Index.js";
import EmpresasScreen from 'views/EmpresasScreen'
import OfertasScreen from 'views/OfertasScreen'
import ConvocatoriasScreen from "views/ConvocatoriasScreen";
import HacemosScreen from "views/HacemosScreen";
import EmpresaDetailScreen from "views/EmpresaDetailScreen";
import { Provider } from "react-redux";
import store from "store";
import DemoNavbar from "components/navbars/DemoNavbar";
import OfertaDetailScreen from "views/OfertaDetailScreen";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HashRouter>
      <>
        <DemoNavbar type="white" />
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/empresas" element ={<EmpresasScreen/>} />
          <Route path="/ofertas/" element={<OfertasScreen/>} />
          <Route path="/login" element={<ConvocatoriasScreen />} />
          <Route path="/hacemos" element={<HacemosScreen />} />
          <Route path="/empresa/:id" element={<EmpresaDetailScreen />} />
          <Route path="/oferta/:id" element={<OfertaDetailScreen />} />
        </Routes>
      </>
    </HashRouter>
  </Provider>
);
