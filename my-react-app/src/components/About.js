import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, my name is Dennis.
            <br className="hidden lg:inline-block" />
            I'm an aspiring Full-Stack Web Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am currently enrolled in a Full-Stack Web Development program
            through the Univeristy of Irvine. My goals are to become a web
            developer and focus on helping clients improve the accessibility of
            their web pages and applications. I have always enjoyed working with
            individuals with disabilites, and before beginning my journey in web
            development I worked as a special education teacher. I look forward
            to working with you to help create a more accessible and easier
            experience for a diverse user base!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              View My Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded shadow-lg w-8/12 h-10/12"
            alt="hero"
            src={require("../assets/me.JPG")}
          />
        </div>
      </div>
    </section>
  );
}
