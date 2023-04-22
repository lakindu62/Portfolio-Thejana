import React , {useState , useEffect}from "react"





export default function HeroImage(){


    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
      }, []);
      
      const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };
      
      const imageMoveStyle = {
        transform: `translate(${
          (mousePosition.x  / 2) * 0.1
        }px, ${ 
          (mousePosition.y  / 2) * 0.1
        }px)`,
      }

      const imageMoveStyleSlow = {
        transform: `translate(${
          (mousePosition.x  / 5) * 0.1
        }px, ${ 
          (mousePosition.y  / 5) * 0.1
        }px)`,
      }

      const imageMoveStyleFast = {
        transform: `translate(${
          (mousePosition.x  / 1) * 0.1
        }px, ${ 
          (mousePosition.y  / 1) * 0.1
        }px)`,
      }
    
    return(
        <div id="HOME" className="h-90vh bg-black flex justify-between items-center w-[90%]">

            <img  className="z-10 h-[45%] w-[35%]  mt-20" src="/assets/HeroSection/heroS 1.png" alt="" />
            <div   className="text-center justify-center flex flex-col relative w-[80%] ">
                <div className="-m-[2.5vw] text-white text-[7vw] font-iceland">Hi, I'm Thejana</div>
                <span className=" shadow-heroShadow text-[#EEEBD0] text-xl font-iceland">Freelance Designer</span>
                <span className="  shadow-heroShadow text-[#EFBCD5] font-iceland flex justify-center text-base"><img src="/assets/HeroSection/location.png" alt="" />Sri Lanka</span>

                <img className="h-[5vw] translate-x-1vw z-0 absolute -top-[2.778vw] -left-[5.556vw]" src="/assets/HeroSection/Rectangle 01.svg" style={imageMoveStyle} />
                <img className="h-[3vw] translate-x-1vw z-0 absolute -top-[5.556vw] left-[40%]" src="/assets/HeroSection/Rectangle 02.svg" style={imageMoveStyleSlow}/>
                <img className="h-[4vw] translate-x-1vw z-0 absolute -top-[2.778vw] -right-[5.556vw]" src="/assets/HeroSection/Rectangle 03.svg" style={imageMoveStyleSlow}/>
                <img className="h-[5vw] translate-x-1vw z-0 absolute right-0" src="/assets/HeroSection/Rectangle 04.svg" style={imageMoveStyleFast}/>
                <img className="h-[5vw] translate-x-1vw z-0 absolute" src="/assets/HeroSection/Rectangle 05.svg" style={imageMoveStyle}/>
                <img className="h-[3vw] translate-x-1vw z-0 absolute -left-[13.333vw] top-[5.556vw]" src="/assets/HeroSection/Rectangle 06.svg" style={imageMoveStyleSlow}/>
                
            </div>



        </div>
    )
}