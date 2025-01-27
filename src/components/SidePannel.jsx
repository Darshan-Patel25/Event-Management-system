import React from "react";
import { PanelMenu } from "primereact/panelmenu";
import { useNavigate } from "react-router-dom";
import "primereact/resources/themes/lara-light-blue/theme.css"; // Example theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../css/sidebar.css"; // Custom styling for sidebar

const SidePannel = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Dashboard",
      icon: "pi pi-th-large",
      command: () => navigate("/"),
    },
    {
      label: "My Events",
      icon: "pi pi-folder-plus",
      command: () => navigate("/events"),
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      command: () => navigate("/profile"),
    },
    {
      label: "Settings",
      icon: "pi pi-cog",
      command: () => navigate("/settings"),
    },
  ];

  return (
    <div className="sidebar w-72 bg-gray-100 border-r rounded-md">
      <PanelMenu model={items} />
    </div>
  );
};

export default SidePannel;
