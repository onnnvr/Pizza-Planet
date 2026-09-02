"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function IngredientsCard({ image, recipe, containerAnimation } : {image:string, recipe:string, containerAnimation: any}) {
    const cardRef = useRef<HTMLDivElement | null>(null);

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
    })

    return(
        <div ref={cardRef} className="w-[90%] h-90 lg:w-[25vw] shrink-0 lg:h-[100%] mx-auto relative overflow-hidden rounded-xl ingredients-card-item">
            <Image src={image} fill alt={recipe}  className="object-cover" />   
        </div>
    )
}