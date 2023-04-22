import React, { useState, useEffect, useRef } from "react"
import "./Projects.css"





const cards = [
     {
        img:"/assets/ProjectsSection/card 01.jpg",
    },
     {
        img:"/assets/ProjectsSection/card 02.jpg",
    },
    {
        img:"/assets/ProjectsSection/card 03.jpg",
    },
   {
        img:"/assets/ProjectsSection/card 04.jpeg",
    },
    {
        img:"/assets/ProjectsSection/card 05.jpeg",
    },
     {
        img:"/assets/ProjectsSection/card 06.jpeg",
    },
    {
        img:"/assets/ProjectsSection/card 07.jpeg",
    },
    {
        img:"/assets/ProjectsSection/card 08.jpeg",
    }
]


/*   ============   CARD COMPONENT   ============   */
const cardEl = cards.map(card => {
    return(
        <div id="cardId" className="duration-500 border-solid border rounded-2xl border-[#752390]  shadow-cardShadow bg-[#35292F]  mx-[3%]  w-[27%]  flex-shrink-0               md:my-[7%] md:w-[200px] md:grayscale-0 ">
        <a href="#">
        <img className=" max-w-[90%] mx-auto my-[5%]  rounded-2xl  " src={card.img} />
        </a>
    </div>
    )
})




function MainProjects() {

    const cardContainerRef = useRef(null)
    const [scrolldis, setScrolldis] = useState(0)
    function scroll(scrollOffset) {
        cardContainerRef.current.scrollLeft += scrollOffset
    }


/* ============ INTERSECTION OBSERVER FOR THE CARDS ============ */
    useEffect(() => {    //
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
                    if(window.innerWidth>768){
                        Object.assign(entry.target.style, styles);
                    }
                } else {
                    window.innerWidth > 768 && Object.assign(entry.target.style, ifNotIntersectingStyles)
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
        <div className="pt-10  esm:w-[100vw] overflow-hidden ">
            <h1 id="projects" className="text-center text-[#EEEBD0] text-3xl  pt-4  pb-4 font-iceland ">PROJECTS</h1>
            {/* gallery */}
            <div className="flex  justify-center border-solid border-white items-center esm:w-[100vw]">
                {/* <img onClick={() => scroll(-240)} className=" duration-300    hover:scale-[105%] h-[4vw] w-[4vw] -translate-y-10 mr-10 esm:mr-5" src="/assets/ProjectsSection/Vector-1.png" /> */}
                
                <div ref={cardContainerRef} className=" flex overflow-scroll w-[70%] h-[500px] miesm:h-[700px] mimd:h-[400px]  mixl:h-[600px] esm:h-[300px] esm:w-[300px] items-center      md:flex-col md:w-[50%] " >
                    {cardEl}
                </div>
                {/* <img onClick={() => scroll(+1)} className=" duration-300     hover:scale-[105%] h-[4vw] w-[4vw] -translate-y-10 ml-10 esm:ml-5" src="/assets/ProjectsSection/Vector.png" /> */}

            </div>

        </div>
    )
}





export default function ProjectsSection() {
    return (
        <div className="ProjectsSectionContainer h-[100vh] overflow-hidden miesm:h-[100vh] mimd:h-[70vh] mixl:h-[100vh]">
            {/* <img className="invisible" src="/assets/ProjectsSection/bgImage.jpg" /> */}
            <MainProjects />

        </div>
    )
}










