"use client";

import Image from "next/image";
import { useRef, useEffect } from "react"; // مش محتاجين useState
import gsap from "gsap";

export default function PizzaCard({ image, title, span }: {image:string, title:string, span:string}) {
    const cardRef = useRef<HTMLDivElement | null>(null);

    

    return(
        <div ref={cardRef} className=" pizza-card-item w-90 lg:w-[40vw] h-70 lg:h-[68vh] bg-[#f2f0e9] flex flex-col justify-center items-center rounded-lg">
            <div className=" w-86 lg:w-[37vw] h-50 lg:h-[47vh] relative rounded-lg overflow-hidden">
                <Image src={image} fill alt="" className="object-cover" />
            </div>
            <span className="font-bowlby text-[8px] lg:text-[11px] mt-4 lg:mt-8">{span}</span>
            <h3 className="font-bowlby text-3xl lg:text-5xl text-[#d93333]">{title}</h3>
        </div>
    )
}