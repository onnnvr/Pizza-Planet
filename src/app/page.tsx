"use client"

import Contact from "@/components/Contact";
import Header from "@/components/Header";
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
  const [containerAnimation, setContainerAnimation] = useState<any>(null);
  // const [animation, setAnimation] = useState<gsap.core.Tween | null>(null)

  useGSAP(() => {
    
    // 1. تعريف الـ Smoother الأول (ده بيشتغل على كل الشاشات عادي)
    ScrollSmoother.create({
      smooth: 5,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });

    // 2. استخدام matchMedia عشان نحدد الشاشات الكبيرة بس
    let mm = gsap.matchMedia();

    // هنا بنقوله: الكود ده هيشتغل بس لو الشاشة 1024 بيكسل أو أكبر (lg في Tailwind)
    mm.add("(min-width: 1024px)", () => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=4000", 
          scrub: 0.6,
          pin: true, 
          anticipatePin: 1,
        }
      });

      tl.to(sectionRef.current, {
        x: "-62vw",
        ease: "none",
      }, "text-animation");

      tl.to(".pizza-cards-container", {
        y: "-350vh",
        duration: 1,
        ease: "none",
      }, "verticalScroll");

      tl.from(".pizza-card-item:not(:first-child)", { 
        y: 200,
        rotate: 5,
        opacity: 0,
        duration: 0.5,     
        stagger: 0.2,        
        ease: "power1.out",
      }, "verticalScroll");   
      
      tl.to(sectionRef.current, {
        x: "-158vw",
        ease: "none",
      });
      
      tl.to(".ingredients-cards-container", {
        x: "-80vw",
        ease: "none"
      }, "ingredientsScroll" );
      
      tl.from(".ingredients-card-item:not(:nth-child(-n+3))", { 
        x: 200,
        rotate: 5,
        opacity: 0,
        duration: 0.5,     
        stagger: 0.2,        
        ease: "power1.out",
      }, "ingredientsScroll");  

      tl.to(sectionRef.current, {
        x: "-253vw",
        ease: "none",
      });

      // حفظ الـ Timeline في الـ State للشاشات الكبيرة
      setContainerAnimation(tl); 

      // الـ return هنا بيشتغل لما الشاشة تصغر عن 1024px (عشان ينظف الـ State)
      return () => {
        setContainerAnimation(null);
      };
      
    });

    // (اختياري) تقدر تعمل أنيميشن مختلف للموبايل لو حابب كده:
    /*
    mm.add("(max-width: 1023px)", () => {
       // أنيميشن الموبايل الرأسي هنا
    });
    */

  }, []);




  return (
    <main className="overflow-hidden">
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          
          {/* التعديل الجوهري الوحيد هنا: إعطاء الـ Trigger نفس مساحة الشاشة بالظبط */}
          <div ref={triggerRef} className="lg:h-dvh w-full overflow-hidden">
            
            <div ref={sectionRef} className="relative lg:h-dvh flex flex-col lg:flex-row items-center w-screen lg:w-[400vw]">
                <Hero />
                <Types containerAnimation={containerAnimation} />
                <Ingredients containerAnimation={containerAnimation} />
                <Contact containerAnimation={containerAnimation} />
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}