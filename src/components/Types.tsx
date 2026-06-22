"use client";

import { useRef } from "react";
import PizzaCard from "./PizzaCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// بنستقبل الـ horizontalTween هنا
export default function Types() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsContainer = useRef<HTMLDivElement>(null);

   

    return (
        <section ref={sectionRef} className="h-screen w-[92vw] overflow-hidden bg-[#2e333a] flex items-center">
            <div className="flex justify-between items-start w-full h-full">
                
                {/* الجزء الشمال: الكروت المتحركة رأسيًا */}
                <div className="w-[50%] h-full overflow-hidden relative flex justify-center items-start pt-20">
                    <div ref={cardsContainer} className="flex flex-col gap-[22vh] will-change-transform pizza-cards-container">
                        <PizzaCard  image="/imgs/p-1.png" title="PEPPERONI" span="THE CLASSIC" />
                        <PizzaCard image="/imgs/p-6.png" title="VEGGIE" span="GARDEN" />
                        <PizzaCard image="/imgs/p-2.png" title="MARGHERITA" span="ITALIANO" />
                        <PizzaCard image="/imgs/p-7.png" title="BBQ CHICKEN" span="SMOKY" />
                        <PizzaCard image="/imgs/p-3.png" title="SUPREME" span="THE WORKS" />
                    </div>
                </div>

                {/* الجزء اليمين: النص الثابت */}
                <div className="w-[50%] h-full flex flex-col justify-center items-center">
                    <div className="size-[13vw] mt-15 relative">
                        <video src="/videos/v1.mp4" autoPlay loop muted className="size-full" />
                    </div>
                    <div className="text-[#f2f0e9] font-bowlby text-2xl md:text-[2vw] text-center leading-relaxed">
                        FOR <span className="font-georgia italic">thirty</span> YEARS, WE’VE <span className="text-[#f2f0e9]/50">BEEN</span><br/>
                        KNEADING DOUGH <br />
                        STORY SAUCES, TOPPING DETAILS, <span className="text-[#f2f0e9]/50">SOLVING</span> <br />
                        RECIPES, <span className="text-[1.5vw]">AND</span> CRAFTING <span className="font-georgia italic">delicious</span> <br />
                        FLAVORS <span className="text-[1.5vw]">FOR</span> BIG <span className="text-[1.5vw]">(AND HUNGRY)</span> <br />
                        APPETITES.
                    </div>
                </div>

            </div>
        </section>
    );
}