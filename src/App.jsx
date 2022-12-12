import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
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
      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center ">
          <div className="md:w-1/2 flex-grow mb-14 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-800 font-medium mb-4">
              Hi!
              <br />
              I'm Nona
              <br />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quam
              nulla quasi tenetur, animi, aliquid, iure natus veritatis tempora
              exercitationem sunt!
            </p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
              Contact
            </button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/icon.jpeg" alt="" />
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">
              About Me
            </h1>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sunt
              incidunt accusantium veniam qui minus cum labore voluptatibus!
              Temporibus, impedit.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              atque distinctio delectus quod autem optio nisi architecto et id
              consequatur deleniti in at ipsum est laboriosam sed cupiditate
              provident, quis molestiae explicabo? Ipsam porro labore nam! Eius,
              eligendi possimus veritatis reprehenderit officiis dignissimos
              labore quam nulla quisquam quos quia alias accusantium cupiditate
              eum provident enim praesentium ratione explicabo. Id rerum a rem
              nulla corporis numquam est officiis, praesentium necessitatibus
              totam, sapiente iusto doloremque optio? Iusto nam, consequatur
              veritatis illo architecto, veniam recusandae repudiandae
              voluptates tempore quidem possimus quam. Debitis quas ratione
              voluptates dolorem cumque ad officia voluptatum a assumenda est!
            </p>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default App;
