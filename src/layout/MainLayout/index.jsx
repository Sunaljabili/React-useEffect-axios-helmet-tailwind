import React from "react";
import Header from "../Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
