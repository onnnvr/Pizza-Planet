"use client";

import { useRef } from "react";
import PizzaCard from "./PizzaCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Types({ containerAnimation } : { containerAnimation: any }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsContainer = useRef<HTMLDivElement>(null);
    const textContainer = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            if (!containerAnimation) return;

            gsap.from(".word-animate", {
                y: 200,
                rotate: 10,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "left right",
                    end: "left left",
                    scrub: 1,
                    containerAnimation,
                },
            });
        });

        mm.add("(max-width: 1023px)", () => {
            gsap.from(".word-animate", {
                y: 200,
                rotate: 10,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    // markers: true,
                    start: "top bottom",
                    end: "40% center",
                    scrub: 3,
                },
            });
        });

        return () => mm.revert();
    }, {
        scope: sectionRef,
        dependencies: [containerAnimation],
    });

    return (
        <section ref={sectionRef} className="lg:h-dvh w-screen lg:w-[92vw] overflow-hidden bg-[#2e333a] py-10 flex items-center">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start w-full h-full">
                
                <div className="lg:w-[50%] mx-10 h-full overflow-hidden relative flex justify-center items-start lg:pt-20">
                    <div ref={cardsContainer} className="flex flex-col gap-5 lg:gap-[22vh] will-change-transform pizza-cards-container">
                        <PizzaCard  image="/imgs/p-1.png" title="PEPPERONI" span="THE CLASSIC" />
                        <PizzaCard image="/imgs/p-6.png" title="VEGGIE" span="GARDEN" />
                        <PizzaCard image="/imgs/p-2.png" title="MARGHERITA" span="ITALIANO" />
                        <PizzaCard image="/imgs/p-7.png" title="BBQ CHICKEN" span="SMOKY" />
                        <PizzaCard image="/imgs/p-3.png" title="SUPREME" span="THE WORKS" />
                    </div>
                </div>

                <div className="w-full lg:w-[50%] h-full flex flex-col justify-center px-5 pb-5 items-center">
                    <div className="size-[13vw] lg:mt-15 relative">
                        <video src="/videos/v1.mp4" playsInline autoPlay loop muted className="size-full object-cover pointer-events-none" />
                    </div>
                    <div ref={textContainer} className="text-[#f2f0e9] font-bowlby text-2xl md:text-[2vw] text-center leading-relaxed">
                        <span className="inline-block word-animate">FOR</span>{" "}
                        <span className="font-georgia italic inline-block word-animate">thirty</span>{" "}
                        <span className="inline-block word-animate">YEARS,</span>{" "}
                        <span className="inline-block word-animate">WE’VE</span> {" "}
                        <span className="text-[#f2f0e9]/50 inline-block word-animate">BEEN </span>{" "}
                        <br/>
                        <span className="inline-block word-animate">KNEADING DOUGH </span>{" "}
                        <br />
                        <span className="inline-block word-animate">STORY </span>{" "}
                        <span className="inline-block word-animate">SAUCES, </span>{" "}
                        <span className="inline-block word-animate">TOPPING DETAILS, </span>{" "}
                        <span className="text-[#f2f0e9]/50 inline-block word-animate">SOLVING</span>{" "}
                        <br />
                        <span className="inline-block word-animate">RECIPES, </span>{" "}
                        <span className="text-[2.5vw] inline-block word-animate">AND</span> {" "}
                        <span className="inline-block word-animate">CRAFTING </span>{" "}
                        <span className="font-georgia italic inline-block word-animate">delicious</span> {" "}
                        <br />
                        <span className="inline-block word-animate">FLAVORS </span>{" "}
                        <span className="text-[2.5vw] inline-block word-animate">FOR</span> {" "}
                        <span className="inline-block word-animate">BIG </span>{" "}
                        <span className="text-[2.5vw] inline-block word-animate">(AND HUNGRY)</span> {" "}
                        <br />
                        <span className="inline-block word-animate">APPETITES.</span>{" "}
                    </div>
                </div>

            </div>
        </section>
    );
}