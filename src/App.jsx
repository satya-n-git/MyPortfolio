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

    //Refer index.css for css classes
    <div className="portfolio-container">
      <header className="header">
        <div className="flex justify-between items-center px-10 mx-2 max-xl:px-1 max-xl:mx-2 w-3/4  ">
          <h1 className="portfolio-title">Satya's Portfolio</h1>
          <FontAwesomeIcon icon={faCircleNodes} className="logo" />
        </div>
        <div className="flex justify-end items-center w-1/4 px-10 max-xl:px-9 max-xl:w-1/2">
          <ThemeToggle/>
        </div>
      </header>
      <main className="mx-3">
        <section id="about" className="main-section">
          <div className="flex justify-center items-center">
            <h2 className="main-section-title">About Me</h2>
            <a href="https://www.linkedin.com/in/satya-n4/" target="__blank">
              <FontAwesomeIcon
                icon={faLink}
                className="main-section-title-icon rotate-45"
              />
            </a>
          </div>
          <p className="mt-4 sm:mt-2 text-lg dark:text-white font-medium">
            Hi, I'm Satya, a passionate developer with experience in React and
            Tailwind CSS. I love building beautiful and functional web
            application.
          </p>
        </section>

        <section id="projects" className="main-section">
          <div className="flex justify-center items-center">
            <h2 className="main-section-title">Projects</h2>
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="main-section-title-icon"
            />
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-md px-4 hover:bg-opacity-50 shadow-card dark:shadow-darkcard relative flex flex-col items-center justify-center  overflow-hidden transform transition-transform hover:scale-105 hover:duration-300 ease-in-out transition-colors duration-500 ease-in-out"
              >
                <div className="flex flex-col justify-center items-center h-full">
                  <div className="flex justify-center items-center mt-2 p-1 mb-3 w-72 sm:w-32 md:w-44 lg:w-56 xl:w-40 2xl:w-56 3xl:w-80 rounded-full bg-indigo-400 group-hover:bg-indigo-900 duration-300 shadow-lg shadow-black overflow-hidden">
                    <h3 className=" text-2xl  font-semibold  py-1 px-3 text-black group-hover:text-gray-200 duration-300 ease-in-out line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex justify-center items-center mb-2 p-4 overflow-hidden">
                    <p className="text-base dark:text-white font-medium group-hover:text-gray-200 dark:group-hover:text-gray-800  line-clamp-4">
                      {project.description}
                    </p>
                  </div>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="main-section">
          <div className="flex justify-center items-center">
            <h2 className="main-section-title">Contact</h2>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="main-section-title-icon"
            />
          </div>
          <ContactUs />
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Satya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
