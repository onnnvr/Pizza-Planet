"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function IngredientsCard({ image, recipe, date } : {image:string, recipe:string, date:string}) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
            mm.add("(max-width: 1023px)", () => {
                gsap.from(cardRef.current, {
                    y: 200,
                    rotate: 5,
                    opacity: 0,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    }
                })
            })
    }, {scope: cardRef});

    const handleMouseEnter = () => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
            gsap.to(overlayRef.current, {
                y: "0%",
                rotate: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out"
            });
        })
    };

    const handleMouseLeave = () => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
            gsap.to(overlayRef.current, {
                y: "100%",
                rotate: 5, 
                opacity: 0,
                duration: 0.5,
                ease: "power3.in"
            });
        })
    };

    return(
        <div ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-[90%] h-90 lg:w-[23vw] shrink-0 lg:h-[100%] mx-auto relative overflow-hidden rounded-xl ingredients-card-item">
            <Image src={image} fill alt={""}  className="object-cover" />
            <div ref={overlayRef} className="w-full h-[50%] lg:h-full lg:opacity-0 bg-white z-10 absolute left-0 bottom-0 lg:top-0 p-5 lg:p-5 flex flex-col justify-between items-center cursor-pointer lg:translate-y-full lg:rotate-5">
                <div className="font-bowlby text-[15px] lg:text-md 2xl:text-3xl text-black/85">{recipe}</div>
                <div className="font-bowlby text-[10px] lg:text-[12px] flex justify-between items-center w-full">
                    <span className="text-black/85">{date}</span>
                    <span className="text-red-500">READ MORE</span>
                </div>
            </div>
        </div>
    )
}