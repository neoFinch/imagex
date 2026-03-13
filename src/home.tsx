import React from 'react';
import { HashRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Settings from './components/Settings';
import { HomeIcon, SettingsIcon } from './icons/exporter';
import Navbar from './components/Navbar';


export default function Home() {


  return <div className='bg-gradient-to-r from-indigo-500 to-cyan-500 h-screen overflow-auto'>
    <HashRouter>
      <main className="relative h-screen w-screen dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </HashRouter>
  </div>;
}