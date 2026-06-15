import Image from "next/image";

export default function Ingredients() {
    return (
        <section className="h-dvh w-[95vw] overflow-hidden bg-[#2e333a]">
            <div className="w-full h-full flex flex-col gap-5 mt-35 mx-20">
                <div className="h-[40vh] flex gap-20">
                    <div className="w-[70%] flex flex-col justify-center items-start leading-[1.1]">
                        <div className="font-bowlby text-[5.5vw] text-[#f2f0e9]">HOT &</div>
                        <div className="font-bowlby text-[16vw] text-[#d93333]">FRESH</div>
                    </div>
                    <div className="w-[18vw] h-[20vw] relative overflow-hidden mr-35 ">
                        <Image src="/imgs/p-12.png" alt="" className="w-full h-full object-cover" fill />
                    </div>
                </div>
                <div className="h-[40vh] flex gap-3 overflow-hidden">
                    <div className="w-[25vw] h-[100%] relative overflow-hidden">
                        <Image src="/imgs/p-8.png" fill alt=""  className="object-cover" />   
                    </div>
                    <div className="w-[25vw] h-[100%] relative overflow-hidden">
                        <Image src="/imgs/p-4.png" fill alt=""  className="object-cover" />   
                    </div>
                    <div className="w-[25vw] h-[100%] relative overflow-hidden">
                        <Image src="/imgs/p-9.png" fill alt=""  className="object-cover" />   
                    </div>
                    <div className="w-[25vw] h-[100%] relative overflow-hidden">
                        <Image src="/imgs/p-11.png" fill alt=""  className="object-cover" />   
                    </div>
                </div>
            </div>
        </section>
    )
}