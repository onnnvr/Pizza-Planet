"use client";

import { useRef } from "react";
import PizzaCard from "./PizzaCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// بنستقبل الـ horizontalTween هنا
export default function Types({animation} : {animation: any}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsContainer = useRef<HTMLDivElement>(null);

//    useGSAP(() => {
//         if (!animation || !cardsContainer.current || !sectionRef.current) return;
//         const t = gsap.to(cardsContainer.current, {
//             y: -1000,
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 markers: true,
//                 start: "20% center",
//                 end: "bottom center",
//                 scrub: true,
//                 onEnter: () => animation.pause(),
//                 onLeave: () => animation.play(),
//                 containerAnimation: animation
//             }
//         })
//         return () => t.kill?.();
//    }, [animation])

    return (
        <section ref={sectionRef} className="h-screen w-screen overflow-hidden bg-[#2e333a] flex items-center">
            <div className="flex justify-between items-start px-10 w-full h-full">
                
                {/* الجزء الشمال: الكروت المتحركة رأسيًا */}
                <div className="w-[50%] h-full overflow-hidden relative flex justify-center items-start pt-16">
                    <div ref={cardsContainer} className="flex flex-col gap-10 will-change-transform">
                        <PizzaCard image="/imgs/p-1.png" title="PEPPERONI" span="THE CLASSIC" />
                        <PizzaCard image="/imgs/p-6.png" title="VEGGIE" span="GARDEN" />
                        <PizzaCard image="/imgs/p-2.png" title="MARGHERITA" span="ITALIANO" />
                        <PizzaCard image="/imgs/p-7.png" title="BBQ CHICKEN" span="SMOKY" />
                        <PizzaCard image="/imgs/p-3.png" title="SUPREME" span="THE WORKS" />
                    </div>
                </div>

                {/* الجزء اليمين: النص الثابت */}
                <div className="w-[50%] h-full flex flex-col justify-center items-center">
                    <div className="text-[4vw] my-5">🍕</div>
                    <div className="text-[#f2f0e9] font-bowlby text-2xl md:text-3xl text-center leading-relaxed">
                        FOR <span className="font-georgia italic">thirty</span> YEARS, WE’VE <span className="text-[#f2f0e9]/50">BEEN</span><br/>
                        KNEADING DOUGH <br />
                        STORY SAUCES, TOPPING DETAILS, <span className="text-[#f2f0e9]/50">SOLVING</span> <br />
                        RECIPES, <span className="text-xl">AND</span> CRAFTING <span className="font-georgia italic">delicious</span> <br />
                        FLAVORS <span className="text-xl">FOR</span> BIG <span className="text-xl">(AND HUNGRY)</span> <br />
                        APPETITES.
                    </div>
                </div>

            </div>
        </section>
    );
}