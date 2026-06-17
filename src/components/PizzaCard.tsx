import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTrigger from "gsap/all";
gsap.registerPlugin(scrollTrigger, useGSAP);
import Image from "next/image";
import { useRef } from "react";

export default function PizzaCard({ image, title, span } : {image:string, title:string, span:string}) {
    const ref = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        // gsap.from(ref.current, {
        //     y: 100,
        //     opacity: 0,
        //     duration: 1,
        //     scrollTrigger: {
        //         trigger: ref.current,
        //         start: "top bottom",
        //         end: "bottom top",
        //         scrub: true,
        //         markers: true,
        //     }
        // })
    })

    return(
        <div ref={ref} className="w-[40vw] h-[68vh] bg-[#f2f0e9] flex flex-col justify-center items-center rounded-lg pizza-card">
            <div className="w-[37vw] h-[47vh] relative rounded-lg overflow-hidden">
                <Image src={image} fill  alt="" className="object-cover" />
            </div>
            <span className="font-bowlby text-[11px] mt-8">{span}</span>
            <h3 className="font-bowlby text-5xl text-[#d93333]">{title}</h3>
        </div>
    )
}