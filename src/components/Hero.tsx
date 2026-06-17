"use client"

import Image from "next/image";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP);


export default function Hero() {

    useGSAP(() => {
        gsap.to((".pizza-text-container"), {
            y: -500,
            duration: 5,
            ease: "none",
            repeat: -1
        })
    })



    return (
        <section className="h-dvh w-[70vw] overflow-hidden bg-[#2e333a] pt-18 flex justify-between gap-0">
            <div className="flex flex-col items-center pt-10 w-[90%]">
                <div className="font-bowlby font-normal text-[3.5vw] text-[#f2f0e9] ">
                    WE BAKE
                </div>
                <div className="font-bowlby font-normal text-[12vw] text-[#d93333] -mt-12">
                    PIZZAS
                </div>
                <div className="font-bowlby font-normal text-[3.5vw] leading-[1.2] text-[#f2f0e9] text-center -mt-15">
                    THAT TASTE<br />
                    INCREADIBLE
                </div>
                <div className="font-bowlby font-normal text-[15vw] text-[#f2f0e9] -mt-15 flex justify-center items-center">
                    <span>G</span>
                    <span>O</span>
                    <span><Image src="/imgs/pizza.png" alt="pizza" width={250} height={250} /></span>
                    <span>O</span>
                    <span>D</span>
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