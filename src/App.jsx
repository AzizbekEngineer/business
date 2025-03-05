import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Service from "./pages/service/Service";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
        </Routes>
      </Layout>
    </Fragment>
  );
};

export default App;
