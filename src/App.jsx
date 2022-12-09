import { useState } from "react";
import "./App.css";

function App() {
  return (
    <header className="text-gray-500 border-b border-gray-200">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a href="#" className="font-medium text-gray-800 mb-4 md:mb-0">
          <span className="text-xl ml-3">Nona</span>
        </a>
        <nav className="md:ml-auto text-base">
          <a href="#Home" className="mr-5 hover:text-blue-400 duration-300">
            Home
          </a>
          <a href="#About" className="mr-5 hover:text-blue-400 duration-300">
            about
          </a>
          <a href="#Skills" className=" hover:text-blue-400 duration-300">
            skills
          </a>
        </nav>
      </div>
    </header>
  );
}

export default App;
