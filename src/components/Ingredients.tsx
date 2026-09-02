import Image from "next/image";
import IngredientsCard from "./IngredientsCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Ingredients({containerAnimation}: {containerAnimation: any}) {

    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const mm = gsap.matchMedia();
        
        mm.add("(min-width: 1024px)", () => {
            gsap.fromTo(".char-animate-1", {
                rotate: 20,
                opacity: 0,
            }, {
                rotate: 0,
                opacity: 1,
                stagger: -0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "left right",
                    end: "-20% left",
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
                    start: "left right",
                    end: "-20% left",
                    // markers: true,
                    scrub: 1,
                    containerAnimation: containerAnimation,
                }
            })
        })


        mm.add("(max-width: 1023px)", () => {
            gsap.from(".char-animate-1", {
                y: 50,
                rotate: 20,
                opacity: 0,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "20% center",
                    scrub: 1,
                }
            })
            
            gsap.from(".char-animate-2", {
                y: 50,
                rotate: 20,
                opacity: 0,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "20% center",
                    scrub: 1,
                }
            })
        })

        
    }, {scope: sectionRef, dependencies: [containerAnimation]}); 

    return (
        <section ref={sectionRef} className="h-full py-10 lg:h-dvh w-screen lg:w-[95vw] overflow-hidden bg-[#2e333a]">
            <div className="w-full h-full flex flex-col gap-5 lg:mt-35 lg:mx-20">
                <div className="lg:h-[40%] flex flex-col items-center lg:flex-row gap-20">
                    <div className="w-[90%] flex flex-col justify-center items-center lg:items-start leading-[1.1]">
                        <div className="font-bowlby text-4xl lg:text-[5.5vw] text-[#f2f0e9]">{"HOT".split("").map((char, index) => (
                                <span key={index} className="inline-block char-animate-1 opacity-100">{char}</span>
                            ))}{" "}
                            <span className="inline-block char-animate-1 opacity-100">&</span>
                        </div>
                        <div className="font-bowlby text-8xl lg:text-[16vw] text-[#d93333]">{"FRESH".split("").map((char, index) => (
                                <span key={index} className="inline-block char-animate-2 opacity-100">{char}</span>
                            ))}
                        </div>
                    </div>
                    <div className=" size-65 lg:size-[22vw] relative overflow-hidden lg:mr-35 ">
                        <video src="/videos/v2.mp4" playsInline autoPlay loop muted className="size-full object-cover pointer-events-none" />
                    </div>
                </div>
                <div className="lg:h-[60%] h-full flex flex-col lg:flex-row gap-5 lg:gap-3 ingredients-cards-container mb-30">
                    <IngredientsCard image="/imgs/p-8.png" recipe="Wood-fired, hand-tossed, and cheesy: Planet Pizza's signature slice is back in town, better than ever." date="JULY 10, 2025" />
                    <IngredientsCard image="/imgs/p-4.png" recipe="The secret is in the sauce: 48-hour fermented dough meets vine-ripened San Marzano tomatoes." date="JUNE 28, 2025" />
                    <IngredientsCard image="/imgs/p-9.png" recipe="Piping hot and ready to roll: Our new delivery fleet ensures your crust stays crispy from oven to doorstep." date="MAY 15, 2025" />
                    <IngredientsCard image="/imgs/p-11.png" recipe="Farm to table, slice to soul: Locally sourced toppings that make every bite a galactic experience." date="APRIL 02, 2025" />
                    <IngredientsCard image="/imgs/p-10.png" recipe="Mastering the artisanal art of the stretch: Watch our dough doctors work their magic in the open kitchen." date="MARCH 20, 2025" />
                    <IngredientsCard image="/imgs/p-5.png" recipe="The moon is made of cheese, and so is our stuffed crust: A celestial blend of five mozzarella varieties." date="FEBRUARY 12, 2025" />
                </div>
            </div>
        </section>
    )
}