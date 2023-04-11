import React from "react"
import "./projects.css"


function Card() {
    return (<div className="-translate-y-4 border-solid  w-[18%] h-[500px] grid place-items-center shadow-cardShadow bg-[#35292F] border-2 border-[#762493] rounded-3xl">
        
            <img className=" rounded-3xl h-[90%] w-[90%] border border-[#752390]" src="src/assets/ProjectsSection/card 01.jpg " />
            <span className="text-[#EEEBD0]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione deleniti beatae tenetur molestias in molestiae animi
            </span>
        </div>
    )
}






function MainProjects() {
    return (
        <div className="">
            <h1 className="text-center text-[#EEEBD0] text-[7vh] pt-5 pb-10 font-iceland">PROJECTS</h1>
            <div className="w-[100vw] flex  gap-10 justify-center ">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}





export default function ProjectsSection() {
    return (
        <div className="ProjectsSectionContainer h-[150vh]">
            {/* <img className="invisible" src="src/assets/ProjectsSection/bgImage.jpg" /> */}
            <MainProjects />

        </div>
    )
}










