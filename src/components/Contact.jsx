import React , {useState , useEffect} from "react"
import "../App.css"





export default function Contact(){





    

    return(
        <div className="text-white h-[90vh] w-[100%] bg-[url('src/assets/ContactSection/contactBg.jpg')] bg-cover  bg-fixed flex flex-col justify-between  rounded-2xl ">
            <div className="flex flex-col items-center  w-[100%] h-[50vh]">
                <span className="bg-[rgba(0,0,0,0.2)] rounded-[70px] m-5  shadow-aboutTextShadow">
                    <h1 id="contact" className="mb-10 m-5   text-4xl font-IBMPlexSerif text-[#EEEBD0] font-bold mt-10">LETS START A PROJECT TOGETHER</h1>
                </span>
                <div className="relative w-[100%] flex flex-col items-center justify-center h-[50vh]">
                    <span className=" hover:scale-105 cursor-pointer duration-500 z-10 flex justify-center items-center     w-[143px] h-[143px] bg-[url('src/assets/ContactSection/getInTouch.jpg')] rounded-full bg-auto bg-center text-[#EEEBD0] font-iceland " > <a href="mailto:itsthejana@gmail.com">Get In Touch</a></span>
                   
                    
                </div> 

            </div>
            <div className="flex h-32 justify-between items-center bg-black p-5 rounded-t-[50px] mx-5 contact--shadow ">
                <div className=" flex items-center">
                    <span className="ml-5">
                        <span className="flex">
                            <img className="pr-2" src="src/assets/ContactSection/ic_outline-phone.svg" />
                            <p className=' text-gray-400'>+94 78 123 3726</p>
                        </span>
                        <span className="flex">
                            <img className="pr-2" src="src/assets/ContactSection/Vector.svg" />
                            <p className=" text-gray-400">Itsthejana@gmail.com</p>
                        </span>
                    </span>
                </div>
                <div>
                    <img src="src/assets/ContactSection/astro.svg" />
                </div>
               

            </div>
        </div>
    )
}