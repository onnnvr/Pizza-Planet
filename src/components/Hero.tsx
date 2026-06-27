"use client"

import Image from "next/image";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react";
gsap.registerPlugin(useGSAP);


export default function Hero() {

    const sectionRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        // أنيميشن حركة الـ Pizza الجانبية
        gsap.to((".pizza-text-container"), {
            y: -500,
            duration: 5,
            ease: "none",
            repeat: -1
        })

        const tl = gsap.timeline()

        // 1. الأنيميشنز الأساسية بتاعتك زي ما هي الأول
        tl.from(".char-animate", {
            y: 200,          
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.05, 
        })

        
        // 2. التعديل هنا: أنيميشن الـ Background Wipe من اليمين للشمال في الآخر
        // اللون الأصلي: #2e333a واللون الجديد: #f2f0e9
        tl.fromTo(sectionRef.current, {
            // البداية: الستارة البيج موجودة كلها ناحية اليمين (عند الـ 100%)
            backgroundImage: "linear-gradient(to left, #2e333a 0%, #f2f0e9 0%)"
        }, {
            // النهاية: الستارة البيج بتمسح الرمادي من اليمين للشمال (عند الـ 100%)
            backgroundImage: "linear-gradient(to left, #2e333a 100%, #f2f0e9 100%)",
            duration: 2, // مدة حركة الستارة
            ease: "power2.inOut",
        });

        
        tl.from(".text-wipe", {
            color: "#2e333a", // اللون الجديد اللي هيتحولوا ليه
            duration: 2,
            stagger: 0.01,
            ease: "power2.inOut"
        }, "<");
        
        tl.from(sectionRef.current, {
            width: "98vw",

            duration: 2,
            ease: "power2.inOut"
        }, "<")

        tl.from(".text-area", {
            marginLeft: "120px"
        }, "<")

        tl.from(".image-animate", {
            y: 200,
            width: "0vw",
            duration: 1,
            ease: "power4.out",
        }, "-=1")

        tl.from("header", {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
        })

    })
    


    return (
        <section ref={sectionRef} className="h-dvh w-[70vw] overflow-hidden bg-[#2e333a] pt-20 flex justify-between gap-0 relative">
            <div className="flex ml-0 flex-col items-center justify-center pt-10 w-[90%] text-area leading-[1] max-h-full">
                <div className="font-bowlby font-normal text-[3.5vw] text-[#f2f0e9] ">
                    {"WE BAKE".split(" ").map((word, i) => (
                        <span className="inline-block" key={i}>
                            {word.split("").map((char, y) => (
                                <span className="inline-block char-animate text-wipe" key={y}>{char}</span>
                            ))}
                            {"\u00A0"}
                        </span>
                    ))}
                </div>
                <div className="font-bowlby font-normal text-[12vw] text-[#d93333]">
                    {"PIZZAS".split("").map((char, y) => (
                        <span className="inline-block char-animate" key={y}>{char}</span>
                    ))}
                </div>
                <div className="font-bowlby font-normal text-[3.5vw] leading-[1.2] text-[#f2f0e9] text-center ">
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
                <div className="font-bowlby font-normal text-[15vw] text-[#f2f0e9] flex justify-center items-center">
                    <span className="char-animate text-wipe">G</span>
                    <span className="char-animate text-wipe">O</span>
                    <span className="relative w-[120px] h-[150px] image-animate"><Image src="/imgs/pizza.png" alt="pizza" fill className="object-cover" /></span>
                    <span className="char-animate text-wipe">O</span>
                    <span className="char-animate text-wipe">D</span>
                </div>
            </div>
            <div className="w-[3.5vw] h-full border border-white/70 px-2 rounded-l-md overflow-hidden relative">
                <div className="pizza-text-container flex flex-col justify-center gap-5 opacity-70">
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