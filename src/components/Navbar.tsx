import React, { useEffect } from "react";
import { SettingsIcon, HomeIcon } from "../icons/exporter";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {

  // const location = useLocation();

  // useEffect(() => {
  //   console.log('location changed', location)
  // }, [location])

  return (
    <div
      className="dock w-full flex justify-center gap-4 items-center bg-gradient-to-r from-indigo-500 to-cyan-500 bg-opacity-5 p-2">
      <NavLink
        to="/"
        className="flex items-center gap-2 p-2 hover:bg-black hover:bg-opacity-30 text-white rounded-full"
      >
        <i className="pi pi-home"></i>
        <span className="dock-label">Home</span>
      </NavLink>

      <NavLink
        to="/settings"
        className="flex items-center gap-2 p-2 text-white hover:bg-black hover:bg-opacity-30 rounded-full"
      >
        <i className="pi pi-cog"></i>
        <span className="dock-label">Settings</span>
      </NavLink>
    </div>
  );
}
