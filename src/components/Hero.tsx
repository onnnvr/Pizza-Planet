"use client"

import Image from "next/image";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react";
gsap.registerPlugin(useGSAP);


export default function Hero() {

    const sectionRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            gsap.to(".pizza-text-container", {
                y: -500,
                duration: 5,
                ease: "none",
                repeat: -1,
            });

            const tl = gsap.timeline();

            tl.from(".char-animate", {
                y: 200,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                stagger: 0.05,
            });

            tl.fromTo(
                sectionRef.current,
                {
                    backgroundImage: "linear-gradient(to left, #2e333a 0%, #f2f0e9 0%)",
                },
                {
                    backgroundImage: "linear-gradient(to left, #2e333a 100%, #f2f0e9 100%)",
                    duration: 2,
                    ease: "power2.inOut",
                }
            );

            tl.from(
                ".text-wipe",
                {
                    color: "#2e333a",
                    duration: 2,
                    stagger: 0.01,
                    ease: "power2.inOut",
                },
                "<"
            );

            tl.from(
                sectionRef.current,
                {
                    width: "98vw",
                    duration: 2,
                    ease: "power2.inOut",
                },
                "<"
            );

            tl.from(
                ".text-area",
                {
                    marginLeft: "10vw",
                },
                "<"
            );

            tl.from(
                ".image-animate",
                {
                    y: 200,
                    width: "0vw",
                    duration: 1,
                    ease: "power4.out",
                },
                "-=1"
            );

            tl.from("header", {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
            });
        });

        mm.add("(max-width: 1023px)", () => {
            gsap.to(".pizza-text-container", {
                x: -500,
                duration: 5,
                ease: "none",
                repeat: -1,
            });

            const tl = gsap.timeline();

            tl.from(".char-animate", {
                y: 200,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.04,
            });

            tl.fromTo(
                sectionRef.current,
                {
                    backgroundImage: "linear-gradient(to top, #2e333a 0%, #f2f0e9 0%)",
                },
                {
                    backgroundImage: "linear-gradient(to top, #2e333a 100%, #f2f0e9 100%)",
                    duration: 2,
                    ease: "power2.inOut",
                }
            );

            tl.from(
                ".text-wipe",
                {
                    color: "#2e333a",
                    duration: 2,
                    stagger: 0.01,
                    ease: "power2.inOut",
                },
                "<"
            );

            tl.from(
                sectionRef.current,
                {
                    height: "98vh",
                    duration: 2,
                    ease: "power2.inOut",
                },
                "<"
            );

            tl.from(
                ".text-area",
                {
                    marginTop: "10vh",
                },
                "<"
            );

            tl.from(
                ".image-animate",
                {
                    y: 200,
                    height: "0vh",
                    duration: 1,
                    ease: "power4.out",
                },
                "-=1"
            );
        });
    });
    


    return (
        <section ref={sectionRef} className="h-dvh w-screen lg:w-[70vw] overflow-hidden bg-[#2e333a] pt-20 flex flex-col lg:flex-row justify-between items-center relative">
            <div className="flex ml-0 flex-col items-center justify-center h-full lg:pt-10 w-[90%] text-area leading-[1] max-h-full">
                <div className="font-bowlby font-normal text-[8vw] lg:text-[3.5vw] text-[#f2f0e9] ">
                    {"WE BAKE".split(" ").map((word, i) => (
                        <span className="inline-block" key={i}>
                            {word.split("").map((char, y) => (
                                <span className="inline-block char-animate text-wipe" key={y}>{char}</span>
                            ))}
                            {"\u00A0"}
                        </span>
                    ))}
                </div>
                <div className="font-bowlby font-normal text-[20vw] lg:text-[12vw] text-[#d93333]">
                    {"PIZZAS".split("").map((char, y) => (
                        <span className="inline-block char-animate" key={y}>{char}</span>
                    ))}
                </div>
                <div className="font-bowlby font-normal text-[8vw] lg:text-[3.5vw] leading-[1.2] text-[#f2f0e9] text-center ">
                    {"THAT TASTE".split(" ").map((word, i) => (
                        <span className="inline-block" key={i}>
                            {word.split("").map((char, y) => (
                                <span className="inline-block char-animate text-wipe" key={y}>{char}</span>
                            ))}
                            {"\u00A0"}
                        </span>
                    ))}<br />
                    {"INCREDIBLE".split("").map((char, y) => (
                        <span className="inline-block char-animate text-wipe" key={y}>{char}</span>
                    ))}
                </div>
                <div className="font-bowlby font-normal text-[24vw] lg:text-[15vw] text-[#f2f0e9] flex justify-center items-center">
                    <span className="char-animate text-wipe">G</span>
                    <span className="char-animate text-wipe">O</span>
                    <span className="relative w-[15vw] h-[9vw] image-animate"><Image src="/imgs/pizza.png" alt="pizza" fill className="object-cover" /></span>
                    <span className="char-animate text-wipe">O</span>
                    <span className="char-animate text-wipe">D</span>
                </div>
            </div>
            <div className="w-full lg:w-[3.5vw] h-12 lg:h-full border border-white/70 px-2 rounded-l-md overflow-hidden relative">
                <div className="pizza-text-container flex flex-row lg:flex-col justify-center absolute top-1/2 -translate-y-1/2 gap-5 opacity-70">
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                    <span className="font-bowlby text-[#f2f0e9] flipped-text">PIZZA</span>
                </div>
            </div>
        </section>
    )
}