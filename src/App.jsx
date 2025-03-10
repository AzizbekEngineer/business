import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Faq from "./pages/faq/Faq";
import News from "./pages/news/News";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="faq" element={<Faq />} />
          <Route path="news" element={<News />} />
        </Routes>
      </Layout>
    </Fragment>
  );
};

export default App;
