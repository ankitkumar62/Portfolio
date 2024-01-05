import React, { useState } from "react";
export default function About() {
  const [under, setUnder] = useState(true);
  const [under2, setUnder2] = useState(false);
  const [under3, setUnder3] = useState(false);
  const toggleUnderline = () => {
    setUnder(true);
    setUnder2(false);
    setUnder3(false);
  };
  const toggleUnderline2 = () => {
    setUnder(false);
    setUnder2(true);
    setUnder3(false);
  };
  const toggleUnderline3 = () => {
    setUnder(false);
    setUnder2(false);
    setUnder3(true);
  };
  const show = {
    display: under ? "block" : "none",
  };
  const show2 = {
    display: under2 ? "block" : "none",
  };
  const underlineStyle = {
    textDecoration: under ? "underline" : "none",
    color: under ? "white" : "gray",
    fontSize: "22px",
  };
  const underlineStyle2 = {
    textDecoration: under2 ? "underline" : "none",
    fontSize: "22px",
    color: under2 ? "white" : "gray",
  };
  const underlineStyle3 = {
    textDecoration: under3 ? "underline" : "none",
    fontSize: "22px",
    color: under3 ? "white" : "gray",
   
  };
  const linkClasses = under
  ? `link  font-poppins font-semibold text-2xl select-none`
  : `link link-un font-poppins font-semibold text-2xl select-none`;
  const linkClasses2 = under2
  ? `link  font-poppins font-semibold text-2xl select-none`
  : `link link-un font-poppins font-semibold text-2xl select-none`;
  const linkClasses3 = under3
  ? `link  font-poppins font-semibold text-2xl select-none`
  : `link link-un font-poppins font-semibold text-2xl select-none`;
  return (
    <div className="xl:flex xl:flx-col relative top-[49px] gap-10">
      <div className="ml-[50px] xl:ml-[40px]">
        <img
          src="https://nextjs-portfolio-mu-swart.vercel.app/_next/image?url=%2Fimages%2Fabout-image.png&w=640&q=75"
          className="mt-5 w-[300px] xl:min-w-[500px] h-[300px] xl:min-h-[500px]"
        />
      </div>
      <div>
        <h1 className="font-bold text-4xl mr-36 xl:mt-3">About Me</h1>
        <h2 className="w-[320px] xl:w-[400px] mt-5 text-lg ml-12 text-left xl:text-left font-poppins xl:ml-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
          numquam unde debitis ex asperiores error culpa facilis vero, libero
          qui quia, quae velit laboriosam voluptatibus eum iure excepturi?
          Similique, est?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Itaque accusamus molestiae earum iusto!
        </h2>
        <div className="flex-col xl:flex-row mt-20 xl:mt-8">
          <div className="text-left flex gap-5 xl:gap-12 ml-10 xl:ml-0">
            <h5
              className={linkClasses}
              style={underlineStyle}
              onClick={toggleUnderline}
            >
              Skills
            </h5>

            <h5
              className={linkClasses2}
              style={underlineStyle2}
              onClick={toggleUnderline2}
            >
              Education
            </h5>
            <h5
              className={linkClasses3}
              style={underlineStyle3}
              onClick={toggleUnderline3}
            >
              Certifications
            </h5>
          </div>
        </div>
        <div className="mt-3 ml-3">
          <ul className="list-disc pl-2 text-lg text-left ml-10 mt-5 xl:ml-0 select-none" style={show}>
            <li>React Js</li>
            <li>Node js</li>
            <li>Tailwind Css</li>
            <li>Next.js</li>
            <li>Socket.io</li>
          </ul>

          <ul className="list-disc pl-2 text-lg text-left ml-10 mt-5 xl:ml-0 select-none" style={show2}>
            <li>10th: High School Ramghar</li>
            <li>12th: Suraj Mandal Collage</li>
            <li>Graduation: Uttrakhand technical University</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
