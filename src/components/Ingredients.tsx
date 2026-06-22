import Image from "next/image";
import IngredientsCard from "./IngredientsCard";

export default function Ingredients() {
    return (
        <section className="h-dvh w-[95vw] overflow-hidden bg-[#2e333a]">
            <div className="w-full h-full flex flex-col gap-5 mt-35 mx-20">
                <div className="h-[40vh] flex gap-20">
                    <div className="w-[70%] flex flex-col justify-center items-start leading-[1.1]">
                        <div className="font-bowlby text-[5.5vw] text-[#f2f0e9]">HOT &</div>
                        <div className="font-bowlby text-[16vw] text-[#d93333]">FRESH</div>
                    </div>
                    <div className="size-[22vw] relative overflow-hidden mr-35 ">
                        <video src="/videos/v2.mp4" autoPlay loop muted className="size-full" />
                    </div>
                </div>
                <div className="h-[40vh] flex gap-3 ingredients-cards-container">
                    <IngredientsCard image="/imgs/p-8.png" recipe="INGREDIENTS" />
                    <IngredientsCard image="/imgs/p-4.png" recipe="INGREDIENTS" />
                    <IngredientsCard image="/imgs/p-9.png" recipe="INGREDIENTS" />
                    <IngredientsCard image="/imgs/p-11.png" recipe="INGREDIENTS" />
                    <IngredientsCard image="/imgs/p-10.png" recipe="INGREDIENTS" />
                    <IngredientsCard image="/imgs/p-5.png" recipe="INGREDIENTS" />
                </div>
            </div>
        </section>
    )
}