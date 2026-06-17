"use client"

import Contact from "@/components/Contact";
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
  // const [animation, setAnimation] = useState<gsap.core.Tween | null>(null)

  useGSAP(() => {
    
    // 1. تعريف الـ Smoother الأول
    ScrollSmoother.create({
      smooth: 2,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });

    // 2. حركة الـ Pinning

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=4000", // مسافة طويلة تكفي السكرول العرضي والرأسي مع بعض
        scrub: 0.6,
        pin: true, 
        anticipatePin: 1,
      }
    })

    tl.to(sectionRef.current, {
      x: "-62vw",
      ease: "none",
    })

    // tl.to(".pizza-card", {
    //   y: "-50vh",
    //   opacity: 0,
    //   duration: 1,
    //   // stagger: 0.2,
    //   ease: "none",

    // })

    

    tl.to(".pizza-cards-container", {
      y: "-350vh",
      ease: "none",
    })

    
    tl.to(sectionRef.current, {
      x: "-158vw",
      ease: "none",
    })

    tl.to(".ingredients-cards-container", {
      x: "-80vw",
      ease: "none"
    } )

    tl.to(sectionRef.current, {
      x: "-253vw",
      ease: "none",
    })


  }, []);

  return (
    <main className="overflow-hidden">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          
          {/* التعديل الجوهري الوحيد هنا: إعطاء الـ Trigger نفس مساحة الشاشة بالظبط */}
          <div ref={triggerRef} className="h-dvh w-full overflow-hidden">
            
            <div ref={sectionRef} className="relative h-dvh flex flex-row items-center w-[400vw]">
                <Hero />
                <Types />
                <Ingredients />
                <Contact />
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}