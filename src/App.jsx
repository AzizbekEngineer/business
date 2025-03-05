import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Layout>
    </Fragment>
  );
};

export default App;
