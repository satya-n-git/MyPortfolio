import React from "react";
import "./index.css";
import { ContactUs } from "./ContactUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLaptopCode,
  faCircleNodes,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ThemeToggle from "./ThemeToggle";
function App() {
  const projects = [
    {
      title: "Personal blog",
      description:
        "A platform for sharing thoughts, experiences, and expertise, fostering community engagement through insightful articles and discussions.",
      url: "https://github.com/satya-n-git/",
    },
    {
      title: "E-Commerce store",
      description:
        "An online marketplace offering a curated selection of products, providing seamless shopping experiences, secure transactions, and personalized customer support.",
      url: "https://github.com/satya-n-git/",
    },
    {
      title: "Task Management System",
      description:
        "A robust application facilitating efficient task allocation, progress tracking, and collaboration among teams, enhancing productivity through intuitive workflow management tools.",
      url: "https://github.com/satya-n-git/",
    },
  ];
  return (
    <div className="font-poppins bg-gradient-to-br from-indigo-800 to-purple-700 shadow-lg shadow-indigo-900 rounded-[10px] mx-auto max-w-7xl">
      <header className="bg-gradient-to-l from-indigo-800 to-purple-900 text-white p-6 mx-0 rounded-tl-lg rounded-tr-lg flex justify-around items-center">
        
        <div className="flex justify-between items-center w-3/4 px-10 mx-2">
          <h1 className="text-4xl font-extrabold  hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-indigo-950 hover:to-purple-950 dark:text-transparent dark:bg-gradient-to-r dark:bg-clip-text dark:from-indigo-950 dark:to-purple-950 dark:hover:text-white transition-colors duration-300 ease-linear">
            Satya's Portfolio
          </h1>
          <FontAwesomeIcon
            icon={faCircleNodes}
            className=" text-4xl pb-2 size-11 rotate-45 hover:hue-rotate-180 hover:rotate-180 hover:text-indigo-900 dark:text-indigo-950 dark:hover:-rotate-180 dark:hover:text-white duration-300 ease-linear"
          />
        </div>
        <div className="flex justify-end items-center w-1/4 px-10">
          <ThemeToggle/>
        </div>
      </header>
      <main className="mx-3">
        <section
          id="about"
          className="p-6 bg-blue-50 dark:bg-gray-900 shadow-main mt-6 mx-4 rounded-lg transition-colors duration-300 ease-in-out"
        >
          <div className="flex justify-center items-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-indigo-600 to-purple-900 mb-2 pb-2">
              About Me
            </h2>
            <a href="https://www.linkedin.com/in/satya-n4/" target="__blank">
              <FontAwesomeIcon
                icon={faLink}
                className="ml-2 mb-2 pb-2 h-7 rotate-45 text-indigo-900 hover:text-indigo-950"
              />
            </a>
          </div>
          <p className="mt-4 text-lg dark:text-white font-medium">
            Hi, I'm Satya, a passionate developer with experience in React and
            Tailwind CSS. I love building beautiful and functional web
            application.
          </p>
        </section>

        <section
          id="projects"
          className="p-6 bg-blue-50 dark:bg-gray-900 shadow-main mt-6 mx-4 rounded-lg transition-colors duration-300 ease-in-out"
        >
          <div className="flex justify-center items-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-indigo-600 to-purple-900 mb-2 pb-4">
              Projects
            </h2>
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="mb-2 ml-2 pb-4 h-9 text-indigo-900"
            />
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-md px-4 hover:bg-opacity-50 shadow-card dark:shadow-darkcard relative flex flex-col items-center justify-center  overflow-hidden transform transition-transform hover:scale-105 hover:duration-300 ease-in-out transition-colors duration-400 ease-in-out"
              >
                <div className="flex flex-col justify-center items-center h-full">
                  <div className="flex justify-center items-center mt-2  p-1 mb-3 w-full rounded-full bg-indigo-400 group-hover:bg-indigo-900 duration-300 shadow-lg shadow-black overflow-hidden">
                    <h3 className=" text-2xl font-semibold  py-1 px-3  text-black group-hover:text-gray-200 duration-300 ease-in-out line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex justify-center items-center mb-2 p-3 overflow-hidden">
                    <p className="text-base dark:text-white font-medium group-hover:text-gray-200 dark:group-hover:text-gray-800  line-clamp-4">
                      {project.description}
                    </p>
                  </div>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute flex items-center justify-center text-5xl font-bold rounded-3xl shadow-md hover:shadow-sm hover:shadow-black text-indigo-950 dark:text-gray-50  opacity-0 group-hover:opacity-100 dark:hover:shadow-sm dark:shadow-slate-400 transition-all duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="p-6 bg-blue-50 dark:bg-gray-900 shadow-main mt-6 mx-4 rounded-lg transition-colors duration-300 ease-in-out"
        >
          <div className="flex justify-center items-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-indigo-600 to-purple-900 mb-4 pb-2">
              Contact
            </h2>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mb-4 ml-2 pb-2 h-9 text-indigo-900"
            />
          </div>
          <ContactUs />
        </section>
      </main>

      <footer className="bg-gradient-to-tl from-purple-800 to-indigo-900 text-white p-6 mt-6 rounded-br-lg rounded-bl-lg">
        <p>&copy; 2024 Satya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
