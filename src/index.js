import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Redirect, HashRouter, Routes } from "react-router-dom";

import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-design-system.scss?v1.0.0";

import Index from "views/Index.js";
import Sections from "views/Sections.js";
import Presentation from "views/Presentation.js";
import AboutUs from "views/examples/AboutUs.js";
import AccountSettings from "views/examples/AccountSettings.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ChatPage from "views/examples/ChatPage.js";
import CheckoutPage from "views/examples/CheckoutPage.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Error from "views/examples/Error.js";
import Error500 from "views/examples/Error500.js";
import InvoicePage from "views/examples/InvoicePage.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import PricingPage from "views/examples/PricingPage.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ResetPage from "views/examples/ResetPage.js";
import NosotrosScreen from "views/NosotrosScreen";
import ConvocatoriasScreen from "views/ConvocatoriasScreen";
import HacemosScreen from "views/HacemosScreen";
import EmpresaDetailScreen from "views/EmpresaDetailScreen";
import { Provider } from "react-redux";
import store from "store";
import DemoNavbar from "components/navbars/DemoNavbar";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HashRouter>
      <>
        <DemoNavbar type="white" />
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/nosotros" element={<NosotrosScreen />} />
          <Route path="/login" element={<ConvocatoriasScreen />} />
          <Route path="/hacemos" element={<HacemosScreen />} />
          <Route path="/empresa/:id" element={<EmpresaDetailScreen />} />

          <Route path="/sections" element={<Sections />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="/blog-posts" element={<BlogPosts />} />
          <Route path="/chat-page" element={<ChatPage />} />
          <Route path="/checkout-page" element={<CheckoutPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/error" element={<Error />} />
          <Route path="/error-500" element={<Error500 />} />
          <Route path="/invoice-page" element={<InvoicePage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/pricing-page" element={<PricingPage />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/reset-page" element={<ResetPage />} />
        </Routes>
      </>
    </HashRouter>
  </Provider>
);
