import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function Header() {

    return (
        <header className="fixed opacity-100 text-white top-2 w-[95vw] px-[2vw] mx-[2vw] h-[65px] z-50 bg-[#2e333a] flex justify-between items-center border border-white/80 rounded-md">
            <div className="text-3xl font-alex-brush italic">
                Planet
            </div>
            <div className="flex gap-8 text-xs font-bowlby items-center">
                <Link href="/menu">Menu</Link>
                <Link href="/offers">OFFERS</Link>
                <Link href="/our-story">OUR STORY</Link>
                <Link href="/categories">CATEGORIES</Link>
                <Link href="/order">ORDER</Link>
            </div>
        </header>
    )
}