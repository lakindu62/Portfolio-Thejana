import React, { useState ,useEffect } from "react"
import "../App.css"


export default function About() {


    const [active, setActive] = useState(false)

    function handleClick() {
        setActive(!active)
    }



    /* =================== Intersection Observer ================= */

    useEffect( ()=>{

        const ballStyle = {
          margin: "0 5px"
          
        }

        const removeBallStyle = {
            margin:"0 10px"
        }

      

        const ballObserver = new IntersectionObserver(entries =>{
            entries.forEach(entry =>{
                if(entry.isIntersecting ){
                    Object.assign(entry.target.style , ballStyle) 
                    
                   
                
                }
                
                else{
                    Object.assign(entry.target.style , removeBallStyle )
                    
                }
               

                
            })
        }, 
        {
            threshold:1,
        })







        const ballEls  =  document.querySelectorAll("#ball--El")
        ballEls.forEach(ballEl =>{
            ballObserver.observe(ballEl)
        })


        const cardStyle = {
            transform: "translateX(0)",
            opacity:'1'
        }
        const removeCardStyle = {
            transform: "translateX(30vw)",
            opacity:'0'
            
        }

        const cardObserver  = new IntersectionObserver(entries =>{
            entries.forEach(entry =>{
                entry.isIntersecting ? 
                Object.assign(entry.target.style , cardStyle)
                
                :
                Object.assign(entry.target.style , removeCardStyle)

            })
        } ,
         {
            threshold:0.5,
         })


        const cardEls = document.querySelectorAll("#card--El")

        cardEls.forEach(cardEl =>{
            cardObserver.observe(cardEl)
        })

    } ,[])








    return (
        <div className=" overflow-hidden flex items-center flex-col relative">

            {/*======= About Section ======*/}

            <div className="flex items-center">
                <span className=" flex items-center">
                    <div id="ball--El" className="ball  left-side--ball-1 relative"></div>
                    <div id="ball--El" className="ball  left-side--ball-2 relative"></div>
                    <div id="ball--El" className="ball  left-side--ball-3 relative"></div>
                    <div id="ball--El" className="ball  left-side--ball-4 relative"></div>
                    <div id="ball--El" className="ball  left-side--ball-5 relative"></div>

                </span>
                <div id="about" className="mb-8 text-[#EEEBD0] text-4xl mt-8  font-iceland">ABOUT</div>
                <span className=" flex items-center">
                    <div id="ball--El" className="ball right-side--ball-1 relative"></div>
                    <div id="ball--El" className="ball right-side--ball-2 relative"></div>
                    <div id="ball--El" className="ball right-side--ball-3 relative"></div>
                    <div id="ball--El" className="ball right-side--ball-4 relative"></div>
                    <div id="ball--El" className="ball right-side--ball-5 relative"></div>

                </span>
            </div>
            <div className="flex flex-col w-[80%] justify-end items-center mb-10 milg:flex-row ">
                <span className=" z-10 w-[100%]   bg-[#21201F] border border-[#eeebd04d] rounded-2xl p-4 max-w-[600px]  ">
                    <span className=" text-[#EFBCD5] font-iceland  text-[17px] leading-5 tracking-wide  ">
                    If you are looking forward to enhancing your images and making them look more attractive you have come to the right place. My name is Thejana; I am well experienced real estate and fashion beauty photo retoucher and photo editor. I can help you enhance your low-quality images into high-quality images using the latest technology and best practices.
                    </span>
                </span>
                <span className="w-[80%]  -order-1 milg:order-1 flex justify-center max-w-[700px]">
                    <img className=" mimd:w-[70%] milg:w-[70%] mixl:w-[70%] milg:min-w-[300px] mi2xl:w-[60%] milg:ml-5   z-0 mb-5 " src="src/assets/AboutSection/DP.png" alt="" />
                </span>
            </div>


            {/*=======Skill Section ======*/}

            <div className="flex items-center">
                <span className=" flex items-center">
                    <div id="ball--El" className="ball left-side--ball-1 relative"></div>
                    <div id="ball--El" className="ball left-side--ball-2 relative"></div>
                    <div id="ball--El" className="ball left-side--ball-3 relative"></div>
                    <div id="ball--El" className="ball left-side--ball-4 relative"></div>
                    <div id="ball--El" className="ball left-side--ball-5 relative"></div>

                </span>
                <div className="mb-8 text-[#EEEBD0] text-4xl mt-8  font-iceland">SKILLS</div>
                <span className=" flex items-center">
                    <div id="ball--El" className="ball right-side--ball-1 relative"></div>
                    <div id="ball--El" className="ball right-side--ball-2 relative"></div>
                    <div id="ball--El" className="ball right-side--ball-3 relative"></div>
                    <div id="ball--El" className="ball right-side--ball-4 relative"></div>
                    <div id="ball--El" className="ball right-side--ball-5 relative"></div>

                </span>
            </div>
            <div className="w-[100%] grid grid-cols-2  justify-items-center relative  pb-[10vh] mt-8 milg:flex milg:justify-center">

                <span id="card--El" className=" skill--card min-w-[90px] min-h-[85px]  grid relative rounded-xl  justify-items-center  m-2 justify-self-end">
                    <img className="w-11" src="src/assets/AboutSection/photoshop.svg" />
                    <span className="card--font">Photoshop</span>
                </span>
                <span id="card--El" className=" skill--card min-w-[90px] min-h-[85px]  grid relative rounded-xl  justify-items-center  m-2 justify-self-start ">
                    <img className="w-11" src="src/assets/AboutSection/lightroom.svg" />
                    <span className="card--font">Lightroom</span>
                </span>


                <span id="card--El" className=" skill--card min-w-[90px] min-h-[85px]  grid relative rounded-xl  justify-items-center m-2 justify-self-end ">
                    <img className="w-11" src="src/assets/AboutSection/illustrator.svg" />
                    <span className="card--font">Illustrator</span>
                </span>
                <span id="card--El" className=" skill--card min-w-[90px] min-h-[85px]  grid relative rounded-xl  justify-items-center m-2 justify-self-start">
                    <img className="w-11" src="src/assets/AboutSection/indesign.svg" />
                    <span className="card--font">Indesign</span>
                </span>
                <img onClick={handleClick} className="absolute left-[-7%] bottom-[0%] milg:left-0 milg:max-w-[300px] w-[50%] max-w-[200px] " src="src/assets/AboutSection/Orge.png" alt="" />
                <img onClick={handleClick} className="absolute left-[-7%] bottom-[0%] milg:left-4 milg:max-w-[350px] w-[60%] max-w-[250px] -z-10 " src="src/assets/AboutSection/meteroite.png" alt="" />
                <img onClick={handleClick} className="absolute right-[-7%] bottom-[-10%] milg:right-20  h-[300%]  -z-10 " src="src/assets/AboutSection/pngwing 2.svg" alt="" />

            </div>

           
        </div>
    )
}