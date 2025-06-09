import React from "react";
import { SettingsIcon, HomeIcon } from "../icons/exporter";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="dock bottom-0 absolute w-full flex justify-center gap-4 items-center bg-primary">
      <NavLink
        to="/"
        className=" flex items-center gap-2 p-2 hover:bg-secondary text-textPrimary hover:"
      >
        <i className="pi pi-home"></i>
        <span className="dock-label">Home</span>
      </NavLink>

      <NavLink
        to="/settings"
        className="flex items-center gap-2 p-2 text-textPrimary hover:bg-secondary"
      >
        <i className="pi pi-cog"></i>
        <span className="dock-label">Settings</span>
      </NavLink>
    </div>
  );
}
