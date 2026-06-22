"use client";

import Image from "next/image";
import { useRef, useEffect } from "react"; // مش محتاجين useState
import gsap from "gsap";

export default function PizzaCard({ image, title, span }: {image:string, title:string, span:string}) {
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const thresholds = Array.from({ length: 100 }, (_, i) => i / 100);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 1. استخدم القيمة من الـ entry مباشرة بدل الـ state
                    const ratio = entry.intersectionRatio; 

                    // 2. تحريك GSAP بناءً على الـ ratio اللحظي
                    gsap.to(cardRef.current, {
                        y: 150 * (1 - ratio),
                        rotate: 1 * (1 - ratio),
                        opacity: ratio,
                        duration: 0.1, // خليه قليل جداً عشان الاستجابة تكون فورية
                        ease: "none",  // خليه none عشان يتبع حركة الماوس بدقة
                        overwrite: "auto"
                    });
                });
            },
            {
                threshold: thresholds,
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) observer.disconnect();
        };
    }, []); // الـ Array الفاضية هنا كفاية جداً

    return(
        <div ref={cardRef} className="w-[40vw] h-[68vh] bg-[#f2f0e9] flex flex-col justify-center items-center rounded-lg opacity-0">
            <div className="w-[37vw] h-[47vh] relative rounded-lg overflow-hidden">
                <Image src={image} fill alt="" className="object-cover" />
            </div>
            <span className="font-bowlby text-[11px] mt-8">{span}</span>
            <h3 className="font-bowlby text-5xl text-[#d93333]">{title}</h3>
        </div>
    )
}