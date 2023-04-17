import React, { useState, useEffect, useRef } from "react"
import "./projects.css"





const cards = [
     {
        img:"src/assets/ProjectsSection/card 01.jpg",
    },
     {
        img:"src/assets/ProjectsSection/card 02.jpg",
    },
    {
        img:"src/assets/ProjectsSection/card 03.jpg",
    },
   {
        img:"src/assets/ProjectsSection/card 04.jpeg",
    },
    {
        img:"src/assets/ProjectsSection/card 05.jpeg",
    },
     {
        img:"src/assets/ProjectsSection/card 06.jpeg",
    },
    {
        img:"src/assets/ProjectsSection/card 07.jpeg",
    },
    {
        img:"src/assets/ProjectsSection/card 08.jpeg",
    }
]


/*   ============   CARD COMPONENT   ============   */
const cardEl = cards.map(card => {
    return(
        <div id="cardId" className=" mx-[4%]  w-[27%] flex-shrink-0               md:my-[7%] md:w-[200px] md:grayscale-0 ">
        <a href="#">
        <img className=" max-w-[90%] mx-auto " src={card.img} />
        </a>
    </div>
    )
})
   










function MainProjects() {

    const cardContainerRef = useRef(null)

    

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

        // if (window.innerWidth < 768) {
        //     // Disable the Intersection Observer if the screen size is less than 768 pixels
        //     observer.disconnect();
        //   } else {
        //     // Otherwise, start observing elements
        //     observer.observe(element);
        //   }



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
                
                <div ref={cardContainerRef} className=" flex overflow-scroll w-[70%] h-[500px] items-center      md:flex-col md:w-[50%] md:[]" >
                    {cardEl}
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










