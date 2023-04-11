import React, { useEffect, useRef } from "react"
import "./projects.css"


const image01 = "src/assets/ProjectsSection/card 01.jpg"
const image02 = "src/assets/ProjectsSection/card 02.jpg"
const image03 = "src/assets/ProjectsSection/card 03.jpg"
const image04 = "src/assets/ProjectsSection/card 04.jpeg"
const image05 = "src/assets/ProjectsSection/card 05.jpeg"
const image06 = "src/assets/ProjectsSection/card 06.jpeg"
const image07 = "src/assets/ProjectsSection/card 07.jpeg"
const image08 = "src/assets/ProjectsSection/card 08.jpeg"


function Card({ width, height, image }) {

    const styles = {
        width: width,
        height: height,
    }

    return (<div style={styles} className="  duration-500 hover:scale-[105%] hover:z-10 -translate-y-4 border-solid   flex  shadow-cardShadow bg-[#35292F] border rounded-2xl border-[#752390]">

        <img className="duration-500 grayscale hover:grayscale-0 filter   border border-[#752390] rounded-2xl" src={image} />

    </div>
    )
}






function MainProjects() {


    const w = "200px"
    const h = "300px"



    const scrollRef = useRef()


    function scroll(scrollOffset) {
        scrollRef.current.scrollLeft += scrollOffset
        console.log(scrollRef.current.scrollLeft)
        console.log(scrollRef.current.clientWidth)
    }


    return (
        <div className="pt-20">
            <h1 className="text-center text-[#EEEBD0] text-[7vh] pt-5  font-iceland">PROJECTS</h1>
            {/* gallery */}
            <div className="flex  justify-center border-solid border-white items-center">
                <img onClick={() => scroll(-240)} className="h-10 -translate-y-10 mr-10 " src="src/assets/ProjectsSection/Vector-1.png" />
                <div ref={scrollRef} className="scroll-smooth w-[690px] h-[500px]   overflow-x-scroll  grid grid-cols-8 items-center  gap-60  flex-none  border-solid border-white " >
                    <Card width={w} height={h} image={image01} />
                    <Card width={w} height={h} image={image02} />
                    <Card width={w} height={h} image={image03} />
                    <Card width={w} height={h} image={image04} />
                    <Card width={w} height={h} image={image05} />
                    <Card width={w} height={h} image={image06} />
                    <Card width={w} height={h} image={image07} />
                    <Card width={w} height={h} image={image08} />
                </div>
                <img onClick={() => scroll(+240)} className="h-10 -translate-y-10 ml-10" src="src/assets/ProjectsSection/Vector.png" />

            </div>

        </div>
    )
}





export default function ProjectsSection() {
    return (
        <div className="ProjectsSectionContainer h-[100vh]">
            {/* <img className="invisible" src="src/assets/ProjectsSection/bgImage.jpg" /> */}
            <MainProjects />

        </div>
    )
}










