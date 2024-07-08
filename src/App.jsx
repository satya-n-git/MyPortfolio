import React from "react";
import "./index.css";
import { ContactUs } from "./ContactUs";

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
    <div className="font-poppins bg-slate-50 min-h-screen border-indigo-600 border border-opacity-10 rounded-md">
      <header className="bg-indigo-600 text-white p-6 rounded-tl-md rounded-tr-md">
        <h1 className="text-4xl font-bold">Satya's Portfolio</h1>
      </header>

      <section
        id="about"
        className="p-6 bg-white shadow-md mt-6 mx-4 rounded-md"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-indigo-600 to-purple-900 mb-4 pb-2">About Me</h2>
        <p className="mt-4 text-lg">
          Hi, I'm Satya, a passionate developer with experience in React and
          Tailwind CSS. I love building beautiful and functional web
          application.
        </p>
      </section>

      <section
        id="projects"
        className="p-6 bg-white shadow-md mt-6 mx-4 rounded-md"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-indigo-600 to-purple-900 mb-4 pb-4">Projects</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-md px-4 hover:bg-opacity-50  relative flex flex-col items-center justify-center overflow-hidden transform transition-transform hover:scale-105 hover:duration-250 ease-linear"
              style={{boxShadow: "8px 8px 20px rgba(0,0,0,.5)"}}
            >
              <h3 className="text-2xl font-semibold pt-4  group-hover:text-gray-200">
                {project.title}
              </h3>
              <p className="text-base font-normal py-4  group-hover:text-gray-200">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute flex items-center justify-center text-slate-950 text-3xl font-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
              >
                OPEN
              </a>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="p-6 bg-white shadow-md mt-6 mx-4 rounded-md"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-indigo-600 to-purple-900 mb-4 pb-2">Contact</h2>
        <ContactUs />
      </section>

      <footer className="bg-indigo-600 text-white p-6 mt-6 rounded-br-md rounded-bl-md">
        <p>&copy; 2024 Satya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
