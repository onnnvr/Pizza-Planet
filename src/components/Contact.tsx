import Image from "next/image";
import IngredientsCard from "./IngredientsCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import PizzaCard from "./PizzaCard";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

export default function Contact({containerAnimation}: {containerAnimation: any}) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        if (!containerAnimation) return; 

        gsap.fromTo(".char-animate-1", {
            rotate: 20,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
            stagger: -0.1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "20% right",
                end: "-25% left",
                // markers: true,
                scrub: 1,
                containerAnimation: containerAnimation,
            }
        })

        gsap.fromTo(".char-animate-2", {
            rotate: 20,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
            stagger: -0.1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "20% right",
                end: "-25% left",
                // markers: true,
                scrub: 1,
                containerAnimation: containerAnimation,
            }
        })

        
    }, {scope: sectionRef, dependencies: [containerAnimation]});


    return (
        <section ref={sectionRef} className="lg:h-dvh w-screen lg:w-[95vw] overflow-hidden bg-[white] pt-10 lg:pt-[20vh]">
            <div className="flex flex-col">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between px-[4vw] ">
                    <div className="font-bowlby text-7xl lg:text-[6.5vw] flex flex-col lg:text-start text-center leading-20 lg:leading-[13vh] ">
                        <span className="text-black">{"ORDER".split("").map((char, index) => (
                                <span key={index} className="inline-block char-animate-1 opacity-100">{char}</span>
                            ))}
                        </span>
                        <span className="text-[#d93333] inline-block">{"NOW".split("").map((char, index) => (
                                <span key={index} className="inline-block char-animate-2 opacity-100">{char}</span>
                            ))}
                        </span>
                    </div>
                    <div className="w-96 h-75 lg:w-[30vw] lg:h-[35.5vh] relative overflow-hidden lg:-mr-[3vw] lg:-mt-[5vh]">
                        <video src="/videos/v3.mp4" playsInline autoPlay loop muted className="size-full object-cover pointer-events-none" />
                    </div>
                </div>
                <hr />
                <div className=" flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-1 gap-[2vw] pt-10 lg:pt-0 ">
                    <div className="flex flex-col gap-[3vh] lg:py-[2vh] border-r-gray-500 lg:border-r-2 px-[4vw] lg:col-span-3">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-3 lg:items-center">
                            <div className="font-bowlby text-4xl lg:text-[4vw] text-black">
                                PIZZA PLANET
                                <span className="block text-lg lg:text-[1.3vw] mt-1 lg:-mt-[2vh] font-bowlby">NEW YORK, NY</span>
                            </div>
                            <div className="flex justify-between gap-3">
                                <div className=" size-12 lg:size-[3vw] rounded-lg bg-black text-white flex justify-center items-center p-1 text-[10px] lg:text-[0.8vw] font-bowlby">IG</div>
                                <div className=" size-12 lg:size-[3vw] rounded-lg bg-black text-white flex justify-center items-center p-1 text-[10px] lg:text-[0.8vw] font-bowlby">IN</div>
                                <div className=" size-12 lg:size-[3vw] rounded-lg bg-black text-white flex justify-center items-center p-1 text-[10px] lg:text-[0.8vw] font-bowlby">SP</div>
                                <div className=" size-12 lg:size-[3vw] rounded-lg bg-black text-white flex justify-center items-center p-1 text-[10px] lg:text-[0.8vw] font-bowlby">FB</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[3vh]">
                            <div className="flex justify-between items-center border-b-2 border-black pb-2">
                                <div className=" text-md lg:text-[0.9vw] text-black font-bowlby">CHEF MARIO</div>
                                <div className="text-gray-400 font-bowlby text-[12px] lg:text-[0.7vw]">HEAD OF DOUGH</div>
                            </div>
                            <div className="flex justify-between items-center border-b-2 border-black pb-2">
                                <div className=" text-md lg:text-[0.9vw] text-black font-bowlby">CHEF LUIGI</div>
                                <div className="text-gray-400 font-bowlby text-[12px] lg:text-[0.7vw]">SAUCE SPECIALIST</div>
                            </div>
                            <div className="flex justify-between items-center border-b-2 border-black pb-2">
                                <div className=" text-md lg:text-[0.9vw] text-black font-bowlby">PRINCESS PEACH</div>
                                <div className="text-gray-400 font-bowlby text-[12px] lg:text-[0.7vw]">TOPPING CURATOR</div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center text-md  lg:text-[0.9vw]">
                            <Link className="font-bowlby text-black border-b-2 mb-3" href="mailto:orders@pizzaplanet.com">
                                ORDERS@PIZZAPLANET.COM
                            </Link>
                            <div className="font-bowlby text-black">800.PIZZA.NOW</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center lg:col-span-1">
                        <div className=" w-20 h-20 lg:w-[15vw] lg:h-[30vh] my-5 lg:mt-[8vh] lg:ml-[3.5vw] relative overflow-hidden">
                            <video src="/videos/v4.mp4" playsInline autoPlay loop muted className="size-full object-cover pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}