import Image from "next/image";
import IngredientsCard from "./IngredientsCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import PizzaCard from "./PizzaCard";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Ingredients({containerAnimation}: {containerAnimation: any}) {

    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        if (!containerAnimation) return; 

        gsap.fromTo(".char-animate", {
            x: 100,
            rotate: 30,
            opacity: 0,
        }, {
            x: 0,
            rotate: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "left right",
                end: "left left",
                // markers: true,
                scrub: 1,
                containerAnimation: containerAnimation,
            }
        })

        
    }, {scope: sectionRef, dependencies: [containerAnimation]}); 

    return (
        <section ref={sectionRef} className="h-[2450px] py-10 lg:h-dvh w-screen lg:w-[95vw] overflow-hidden bg-[#2e333a]">
            <div className="w-full h-full flex flex-col gap-5 lg:mt-35 lg:mx-20">
                <div className="lg:h-[40vh] flex flex-col items-center lg:flex-row gap-20">
                    <div className="w-[70%] flex flex-col justify-center items-center lg:items-start leading-[1.1]">
                        <div className="font-bowlby text-4xl lg:text-[5.5vw] text-[#f2f0e9]">{"HOT".split("").map((char, index) => (
                                <span key={index} className="inline-block char-animate opacity-100">{char}</span>
                            ))}{" "}
                            <span className="inline-block char-animate opacity-100">&</span>
                        </div>
                        <div className="font-bowlby text-8xl lg:text-[16vw] text-[#d93333]">{"FRESH".split("").map((char, index) => (
                                <span key={index} className="inline-block char-animate opacity-100">{char}</span>
                            ))}
                        </div>
                    </div>
                    <div className=" size-65 lg:size-[22vw] relative overflow-hidden lg:mr-35 ">
                        <video src="/videos/v2.mp4" playsInline autoPlay loop muted className="size-full object-cover pointer-events-none" />
                    </div>
                </div>
                <div className="h-[40vh] flex flex-col lg:flex-row gap-3 ingredients-cards-container">
                    <IngredientsCard image="/imgs/p-8.png" recipe="INGREDIENTS" containerAnimation={containerAnimation} />
                    <IngredientsCard image="/imgs/p-4.png" recipe="INGREDIENTS" containerAnimation={containerAnimation} />
                    <IngredientsCard image="/imgs/p-9.png" recipe="INGREDIENTS" containerAnimation={containerAnimation} />
                    <IngredientsCard image="/imgs/p-11.png" recipe="INGREDIENTS" containerAnimation={containerAnimation} />
                    <IngredientsCard image="/imgs/p-10.png" recipe="INGREDIENTS" containerAnimation={containerAnimation} />
                    <IngredientsCard image="/imgs/p-5.png" recipe="INGREDIENTS" containerAnimation={containerAnimation} />
                </div>
            </div>
        </section>
    )
}