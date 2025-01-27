import React from "react";
import Navbar from "../components/Nav"; // Navbar component
import Sidebar from "../components/SidePannel"; // Sidebar component
import Footer from "../components/Footer"; // Footer component
import "../css/MainLayout.css"; // Main layout styling

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area with Sidebar */}
      <div className="flex flex-1 gap-3">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-100 rounded-md">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
