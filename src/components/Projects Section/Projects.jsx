import React, { useState, useEffect, useRef } from "react"
import "./projects.css"


const image01 = "src/assets/ProjectsSection/card 01.jpg"
const image02 = "src/assets/ProjectsSection/card 02.jpg"
const image03 = "src/assets/ProjectsSection/card 03.jpg"
const image04 = "src/assets/ProjectsSection/card 04.jpeg"
const image05 = "src/assets/ProjectsSection/card 05.jpeg"
const image06 = "src/assets/ProjectsSection/card 06.jpeg"
const image07 = "src/assets/ProjectsSection/card 07.jpeg"
const image08 = "src/assets/ProjectsSection/card 08.jpeg"


//CARD COMPONENT
function Card({ width, height, image, id }) {
    const styles = {
        width: width,
        height: height,
    }

    return (
        <div id={id} style={styles} className="  duration-500  hover:z-10 -translate-y-4 border-solid   flex  shadow-cardShadow bg-[#35292F] border rounded-2xl border-[#752390] hover:scale-[125%]">

            <img className="duration-500  hover:grayscale-0 filter   border border-[#752390] rounded-2xl" src={image} />

        </div>
    )
}






function MainProjects() {

    const cardContainerRef = useRef(null)

    const w = "200px"
    const h = "300px"

    const [scrolldis, setScrolldis] = useState(0)


    //TESTING INFINITE SCROLL
    /*
        useEffect(() => {
            const cardEl = document.querySelector("#cardId")
            const cardWidth = cardEl.clientWidth
            console.log(cardWidth)
            cardContainerRef.current.addEventListener('scroll', handleScroll)

            function handleScroll() {
                setScrolldis(cardContainerRef.current.scrollLeft)
            }
            scrolldis >= cardContainerRef.current.clientWidth + cardWidth ? cardContainerRef.current.scrollLeft = 0 : ''
        }, [scrolldis])

    */



    function scroll(scrollOffset) {
        cardContainerRef.current.scrollLeft += scrollOffset

    }
    useEffect(() => {    //INTERSECTION OBSERVER FOR THE CARDS




        const styles = {
            transform: "scale(1.2)",
            filter: "grayscale(0)"
        }

        const ifNotIntersectingStyles = {
            transform: "scale(1)",
            filter: "grayscale(100%)"
        }

        const focusStyles = {
            transform: "scale(1.6)",
            zIndex: "10"

        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Object.assign(entry.target.style, styles);
                   
                } else {
                    
                    Object.assign(entry.target.style, ifNotIntersectingStyles)
                    
                }
            })
        }, {
            root: cardContainerRef.current,
            rootMargin: "0% -50% 0% -50%",
            threshold: "0"
        })



        const cardEls = document.querySelectorAll("#cardId")
        cardEls.forEach(cardEl => {
            observer.observe(cardEl)
        })


        return () => {
            cardEls.forEach(cardEl => {
                observer.unobserve(cardEl)
            })
        }



    }, [])



    return (
        <div className="pt-20">
            <h1 className="text-center text-[#EEEBD0] text-[7vh] pt-5  font-iceland">PROJECTS</h1>
            {/* gallery */}
            <div className="flex  justify-center border-solid border-white items-center">
                <img onClick={() => scroll(-240)} className=" duration-300    hover:scale-[105%] h-10 -translate-y-10 mr-10 " src="src/assets/ProjectsSection/Vector-1.png" />
                <div ref={cardContainerRef} className="scroll-smooth w-[690px] h-[500px]   overflow-x-scroll  grid grid-cols-8 items-center  gap-60  flex-none  border-solid border-white " >
                    <Card id="cardId" width={w} height={h} image={image01} />
                    <Card id="cardId" width={w} height={h} image={image02} />
                    <Card id="cardId" width={w} height={h} image={image03} />
                    <Card id="cardId" width={w} height={h} image={image04} />
                    <Card id="cardId" width={w} height={h} image={image05} />
                    <Card id="cardId" width={w} height={h} image={image06} />
                    <Card id="cardId" width={w} height={h} image={image07} />
                    <Card id="cardId" width={w} height={h} image={image08} />
                </div>
                <img onClick={() => scroll(+240)} className=" duration-300 focus:shadow-buttonFocusShadow hover:scale-[105%] h-10 -translate-y-10 ml-10" src="src/assets/ProjectsSection/Vector.png" />

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










