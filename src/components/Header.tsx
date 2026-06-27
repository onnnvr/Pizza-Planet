import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function Header() {

    return (
        <header className="fixed opacity-100 text-white top-2 w-[95vw] px-[2vw] mx-[2vw] h-[65px] z-50 bg-[#2e333a] flex justify-between items-center border border-white/80 rounded-md">
            <div className="text-3xl font-alex-brush italic">
                Planet
            </div>
            <div className="gap-8 text-xs font-bowlby items-center hidden lg:flex">
                <Link href="/menu">Menu</Link>
                <Link href="/offers">OFFERS</Link>
                <Link href="/our-story">OUR STORY</Link>
                <Link href="/categories">CATEGORIES</Link>
                <Link href="/order">ORDER</Link>
            </div>
            <div className="flex gap-1 flex-col justify-center items-end lg:hidden">
                <span className="w-6 h-[2px] bg-white"></span>
                <span className="w-4 h-[2px] bg-white/50"></span>
            </div>
        </header>
    )
}