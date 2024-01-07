import React from "react";
import github from "./assets/github.png";
import linkedIn from "./assets/linkedin.png";
import sheild from "./assets/shield.png";
import star from "./assets/star.png";

export default function Cv() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-7  ">
        <div>
          <p className="text-3xl ml-2 font-thin">Sajjad Zaidi</p>
        </div>
        <div className="ml-2 lg:ml-0 ">
          <ul className="flex text-xl lg:text-3xl font-thin justify-between">
            <li className="mr-5 lg:mr-10 cursor-pointer  border-b-white border-b-[1px] hover:border-b-gray-400">
              About
            </li>
            <li className="mr-5 lg:mr-10 cursor-pointer  border-b-white border-b-[1px] hover:border-b-gray-400">
              Skills
            </li>
            <li className="mr-5 lg:mr-10 cursor-pointer  border-b-white border-b-[1px] hover:border-b-gray-400">
              Experience
            </li>
            <li className="mr-5 lg:mr-10 cursor-pointer  border-b-white border-b-[1px] hover:border-b-gray-400">
              Education
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  mt-10">
        <div className=" flex justify-center">
          <img
            className="w-[250x] h-[250px] rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl9_3YCSiY8j8pJEeK5P9PG2ZPBFrRk5PVw&usqp=CAU"
            alt=""
          />
        </div>
        <div className="flex items-center lg:mr-[200px]  justify-center">
          <div className="text-center">
            <p className="font-medium">Hello I'm</p>
            <p className="text-3xl font-bold">Sajjad Zaidi</p>
            <p className="text-2xl font-semibold">
              Front End Engineer | React JS Web developer
            </p>
            <div className="flex justify-center mt-5">
              <p className="border border-black rounded-full mr-5 px-10 py-3 hover:bg-black hover:text-white cursor-pointer">
                Download CV
              </p>
              <p className="border border-black rounded-full px-10 py-3  hover:bg-black hover:text-white cursor-pointer">
                Contact info
              </p>
            </div>
            <div className="flex justify-center mt-5 ">
              <a
                href="https://www.linkedin.com/in/sajjad-zaidi-a564682a7/ "
                target="_blank"
              >
                <img
                  className="w-[60x] h-[60px] rounded-full mr-5"
                  src={linkedIn}
                  alt=""
                />
              </a>
              <a href="https://github.com/SajjadZd" target="_blank">
                <img
                  className="w-[50x] h-[50px] rounded-full ml-3 mt-1"
                  src={github}
                  alt="..."
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <p className="text-5xl font-bold">About Me</p>
      </div>
      <div className="mt-5 text-center p-5 text-gray-400">
        <p>
          As a seasoned front-end web developer with a passion for blending
          design and functionality, I bring over six years of hands-on
          experience in creating immersive digital experiences. My journey in
          the ever-evolving realm of web development has been marked by a
          commitment to staying at the forefront of industry trends, mastering
          cutting-edge technologies, and contributing to the success of diverse
          projects.My journey as a front-end web developer is characterized by a
          commitment to excellence, a thirst for knowledge, and a genuine
          passion for creating visually stunning and functionally robust
          websites. I look forward to leveraging my skills and experience to
          contribute to innovative projects, pushing the boundaries of what's
          possible in the dynamic landscape of web development.
        </p>
      </div>
      <div className="lg:flex justify-center mt-10 mb-10">
        <div className="border border-black w-[full] mx-5 lg:w-[30%] lg:mr-5 text-center py-5 rounded-[30px]">
          <div className="flex justify-center">
            <img className="w-[50px] h-[50px]" src={sheild} alt="..." />
          </div>
          <p className="text-3xl font-bold">Experience</p>
          <p className="mt-5 font-thin text-gray-500">
            1 years <br />
            React Front-End Web Developer
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <p className="text-5xl font-bold">Technical Skills</p>
      </div>
      <div className="px-10 py-5 lg:flex lg:flex-wrap ">
        <div className="border border-black w-[full] lg:w-[30%] h-[auto] mr-5 p-5 rounded-[30px] mt-5">
          <div className="flex justify-between">
            <p className="text-lg">React JS</p>
            <div className="flex mr-[120px]">
              <img className="w-[30px] h-[30px]" src={star} alt="" />
              <img className="w-[30px] h-[30px]" src={star} alt="" />
              <img className="w-[30px] h-[30px]" src={star} alt="" />
              <img className="w-[30px] h-[30px]" src={star} alt="" />
              <img className="w-[30px] h-[30px]" src={star} alt="" />
            </div>
          </div>
          <p className="font-thin text-gray-500">
            Proficiency in developing dynamic and responsive user interfaces
            using React.js, a popular JavaScript library for building user
            interfaces.
          </p>
        </div>
        <div className="border border-black w-[full] lg:w-[30%] h-[auto] mr-5 p-5 rounded-[30px] mt-5">
          <div className="flex justify-between">
            <p className="text-lg">JavaScript</p>
            <div className="flex mr-[120px]">
              <img className="w-[30px] h-[30px]" src={star} alt="" />
              <img className="w-[30px] h-[30px]" src={star} alt="" />
              <img className="w-[30px] h-[30px]" src={star} alt="" />
              <img className="w-[30px] h-[30px]" src={star} alt="" />
              <img className="w-[30px] h-[30px]" src={star} alt="" />
            </div>
          </div>
          <p className="font-thin text-gray-500">
            I have honed my JavaScript skills to craft visually stunning and
            responsive user interfaces, ensuring an engaging and seamless
            browsing experience.
          </p>
        </div>
        <div className="border border-black w-[full] lg:w-[30%] h-[auto] mr-5 p-5 rounded-[30px] mt-5">
          <div className="flex justify-between">
            <p className="text-lg">HTML, CSS & Tailwind CSS</p>
            <div className="flex mr-[120px]">
              <img className="w-[30px] h-[30px]" src={star} alt="" />
              <img className="w-[30px] h-[30px]" src={star} alt="" />
              <img className="w-[30px] h-[30px]" src={star} alt="" />
              <img className="w-[30px] h-[30px]" src={star} alt="" />
              <img className="w-[30px] h-[30px]" src={star} alt="" />
            </div>
          </div>
          <p className="font-thin text-gray-500">
            Solid understanding of Tailwind CSS, HTML5 and CSS3 to create
            well-structured and visually appealing web pages.
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <p className=" text-3xl lg:text-5xl font-bold">Working Experience</p>
      </div>
      <div className="px-10 py-5 ">
        <div className="border border-black w-[full] h-[auto] rounded-[30px] mt-5 p-5">
          <p className="text-lg font-bold">
            Front End Engineer | React JS Web developer
          </p>
          <p className="text-lg font-bold py-5 ">Projects:</p>
          <p className="flex">
            <span className="text-blue-400 ">WhatsApp-clone:</span>
            <a href="https://codingwithzain.com/demo/whats-app-clone/" target="_blank">
              <p className=" border border-transparent hover:border-b-black">https://codingwithzain.com/demo/whats-app-clone/</p>
            </a>
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <p className="text-5xl font-bold">Education</p>
      </div>{" "}
      <div className="py-5 px-10">
        {" "}
        <div className="border border-black w-[full] h-[auto] rounded-[30px] mt-5 p-5">
          <div>
            <p className="text-lg font-bold">Matric | 2020 - 2022</p>
            <p className="mt-5">
              <span className="text-blue-400 ">School:</span> Saint John's High
              School Narowal.
            </p>
          </div>{" "}
          <div className="mt-5">
            <p className="text-lg font-bold">Intermediate | 2022 - 2024</p>
            <p className="mt-5">
              <span className="text-blue-400 ">College:</span> Punjab College ,
              Lahore.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
