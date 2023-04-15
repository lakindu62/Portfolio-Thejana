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
    let styles = {
        width: width,
        height: height,
    }

    if (window.innerWidth >= 1514){
        
         styles = {
            
            width:"14vw",
            height:"20vw",
            
         }
     } else if (window.innerWidth >= 1000 ){
        styles = {
            width:"17vw",
            height:"26vw",
            
         }
     }

    console.log(styles)
    // console

    return (
        <a href="#">
            <div id={id} style={styles} className="   duration-500  hover:z-10 -translate-y-4 border-solid   flex  shadow-cardShadow bg-[#35292F] border rounded-2xl border-[#752390] hover:scale-[125%]">
                <img className="duration-500  hover:grayscale-0 filter   border border-[#752390] rounded-2xl" src={image} />
            </div>
        </a>
    )
}






function MainProjects() {

    const cardContainerRef = useRef(null)

    const w = "25vw"
    const h = "35vw"

    const [scrolldis, setScrolldis] = useState(0)


    //TESTING INFINITE SCROLL
    /*
        useEffect(() => {
            const cardEl = document.querySelector("#cardId")
            const cardWidth = cardEl.clientWidth
            
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
        <div className="pt-10  esm:w-[100vw] overflow-hidden">
            <h1 className="text-center text-[#EEEBD0] text-[6vw] pt-4  font-iceland ">PROJECTS</h1>
            {/* gallery */}
            <div className="flex  justify-center border-solid border-white items-center esm:w-[100vw]">
                {/* <img onClick={() => scroll(-240)} className=" duration-300    hover:scale-[105%] h-[4vw] w-[4vw] -translate-y-10 mr-10 esm:mr-5" src="src/assets/ProjectsSection/Vector-1.png" /> */}
                <div ref={cardContainerRef} className="scroll-smooth esm:h-[70vw] h-[500px] lg:w-[70vw] w-[850px]  overflow-x-scroll  grid grid-cols-8 items-center  lg:gap-[29vw] 2xl:gap-72 gap-[22vw]   flex-none  border-solid border-white " >
                    <Card id="cardId" width={w} height={h} image={image01} />
                    <Card id="cardId" width={w} height={h} image={image02} />
                    <Card id="cardId" width={w} height={h} image={image03} />
                    <Card id="cardId" width={w} height={h} image={image04} />
                    <Card id="cardId" width={w} height={h} image={image05} />
                    <Card id="cardId" width={w} height={h} image={image06} />
                    <Card id="cardId" width={w} height={h} image={image07} />
                    <Card id="cardId" width={w} height={h} image={image08} />
                </div>
                {/* <img onClick={() => scroll(+1)} className=" duration-300     hover:scale-[105%] h-[4vw] w-[4vw] -translate-y-10 ml-10 esm:ml-5" src="src/assets/ProjectsSection/Vector.png" /> */}

            </div>

        </div>
    )
}





export default function ProjectsSection() {
    return (
        <div className="ProjectsSectionContainer h-[100vh] overflow-hidden esm:h-[60vh]">
            {/* <img className="invisible" src="src/assets/ProjectsSection/bgImage.jpg" /> */}
            <MainProjects />

        </div>
    )
}










