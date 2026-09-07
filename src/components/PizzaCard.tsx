"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);
import Image from "next/image";
import { useRef, useEffect } from "react"; 

export default function PizzaCard({ image, title, span }: {image:string, title:string, span:string}) {
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
        <div ref={cardRef} className=" pizza-card-item w-90 lg:w-[38vw] h-70 lg:h-[68vh] bg-[#f2f0e9] flex flex-col justify-center items-center rounded-lg">
            <div className=" w-86 lg:w-[35vw] h-50 lg:h-[47vh] relative rounded-lg overflow-hidden">
                <Image src={image} fill alt="" className="object-cover" />
            </div>
            <span className="font-bowlby text-[8px] lg:text-[11px] mt-4 lg:mt-8">{span}</span>
            <h3 className="font-bowlby text-3xl lg:text-5xl text-[#d93333]">{title}</h3>
        </div>
    )
}