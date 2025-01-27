import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../css/MainLayout.css";

const MyLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <div className="flex flex-1 gap-3">
        <div className="m-2 ml-4">
          <Sidebar />
        </div>

        <main className="my-layout-main">hello</main>
      </div>

      <Footer />
    </div>
  );
};

export default MyLayout;
