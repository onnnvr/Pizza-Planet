"use client"

import Hero from "@/components/Hero";
import Ingredients from "@/components/Ingredients";
import Types from "@/components/Types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<gsap.core.Tween | null>(null)

  useGSAP(() => {
    
    // 1. تعريف الـ Smoother الأول
    ScrollSmoother.create({
      smooth: 2,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });

    // 2. حركة الـ Pinning
    const pin = gsap.to(
      sectionRef.current,
      {
        x: "-300vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=1000", // استخدام += أفضل عشان يحسب مسافة سكرول صريحة بعد التثبيت
          scrub: 0.6,
          pin: true, 
          anticipatePin: 1,
          // markers: true
        },
      }
    );

    setAnimation(pin)


  }, []);

  return (
    <main className="overflow-hidden">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          
          {/* التعديل الجوهري الوحيد هنا: إعطاء الـ Trigger نفس مساحة الشاشة بالظبط */}
          <div ref={triggerRef} className="h-dvh w-full overflow-hidden">
            
            <div ref={sectionRef} className="relative h-dvh flex flex-row items-center w-[400vw]">
                <Hero />
                <Types animation={animation} />
                <Ingredients />
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}