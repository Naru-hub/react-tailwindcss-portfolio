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
          {/* カードのdivタグ */}
          <div className="flex flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 15.2348L12 18.5681L18 15.2348V8.76521L12 5.43188L6 8.76521V15.2348ZM12 2L3 7V17L12 22L21 17V7L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore, officia modi sunt alias aliquid eaque eos ipsum
                    assumenda fugit debitis?
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 15.2348L12 18.5681L18 15.2348V8.76521L12 5.43188L6 8.76521V15.2348ZM12 2L3 7V17L12 22L21 17V7L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore, officia modi sunt alias aliquid eaque eos ipsum
                    assumenda fugit debitis?
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 15.2348L12 18.5681L18 15.2348V8.76521L12 5.43188L6 8.76521V15.2348ZM12 2L3 7V17L12 22L21 17V7L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore, officia modi sunt alias aliquid eaque eos ipsum
                    assumenda fugit debitis?
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
