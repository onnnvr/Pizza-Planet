"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function IngredientsCard({ image, recipe, containerAnimation } : {image:string, recipe:string, containerAnimation: any}) {
    const cardRef = useRef<HTMLDivElement | null>(null);

    // gsap.fromTo(cardRef.current, {
    //         x: 300,
    //         rotate: 20,
    //         opacity: 0,
    //     }, {
    //         x: 0,
    //         rotate: 0,
    //         opacity: 1,
    //         duration: 0.5,
    //         stagger: 0.2,
    //         ease: "power1.out",
    //         scrollTrigger: {
    //             trigger: cardRef.current,
    //             start: "left right",
    //             end: "left left",
    //             // markers: true,
    //             scrub: 1,
    //             containerAnimation: containerAnimation,
    //         }
    // })

    // useEffect(() => {
    //     // 1. بنصنع مصفوفة فيها 100 رقم (من 0.00 لحد 1.00) 
    //     // عشان نخلي المراقب يشتغل 100 مرة طول ما الكارت بيدخل الشاشة
    //     const thresholds = Array.from({ length: 100 }, (_, i) => i / 100);

    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 // entry.intersectionRatio بيدينا نسبة ظهور الكارت من 0 لـ 1
    //                 const ratio = entry.intersectionRatio; 

    //                 // 2. بنربط نسبة الظهور بالأنميشن مباشرة (Scrub يدوي)
    //                 gsap.to(cardRef.current, {
    //                     // لما النسبة تكون 0 (مخفي)، الـ x هتكون 100
    //                     // ولما النسبة توصل 1 (ظاهر بالكامل)، الـ x هتبقى 0
    //                     x: 150 * (1 - ratio), 
    //                     rotate: 5 * (1 - ratio),
                        
    //                     // الشفافية هتكون هي هي نفس نسبة الظهور بالظبط
    //                     opacity: ratio,       
                        
    //                     // بنخلي الوقت قصير جداً عشان يلحق يتحدث مع كل فريم من السكرول
    //                     duration: 0.1,        
    //                     ease: "none", // بنلغي النعومة التلقائية عشان حركتك بالماوس هي اللي تتحكم
    //                     overwrite: "auto", // عشان الأوامر متتخانقش مع بعض
    //                 });
    //             });
    //         },
    //         {
    //             threshold: thresholds, // بنركب الـ 100 لقطة هنا
    //         }
    //     );

    //     if (cardRef.current) {
    //         observer.observe(cardRef.current);
    //     }

    //     // Cleanup: لاحظ هنا إننا شيلنا الـ unobserve عشان إحنا عايزينه يفضل يراقب رايح جاي!
    //     return () => {
    //         if (cardRef.current) observer.disconnect();
    //     };
    // }, []);

    return(
        <div ref={cardRef} className="w-[90%] h-90 lg:w-[25vw] shrink-0 lg:h-[100%] mx-auto relative overflow-hidden rounded-xl ingredients-card-item">
            <Image src={image} fill alt={recipe}  className="object-cover" />   
        </div>
    )
}