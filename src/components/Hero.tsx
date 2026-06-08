import Image from "next/image";

export default function Hero() {
    return (
        <section className="h-dvh w-[70vw] overflow-hidden bg-[#2e333a] pt-20 flex justify-between gap-0">
            <div className="flex flex-col items-center pt-15">
                <div className="font-bowlby font-normal text-7xl text-[#f2f0e9] ">
                    WE BAKE
                </div>
                <div className="font-bowlby font-normal text-[220px] text-[#d93333] -mt-5">
                    PIZZAS
                </div>
                <div className="font-bowlby font-normal text-7xl text-[#f2f0e9] text-center -mt-15">
                    THAT TASTE<br />
                    INCREADIBLE
                </div>
                <div className="font-bowlby font-normal text-[300px] text-[#f2f0e9] -mt-10 flex justify-center items-center">
                    <span>G</span>
                    <span>O</span>
                    <span><Image src="/imgs/pizza.png" alt="pizza" width={250} height={250} /></span>
                    <span>O</span>
                    <span>D</span>
                </div>
            </div>
            <div className="w-[4vw] h-full border border-white mx-2 rounded-xl flex flex-col items-center justify-center gap-5 ">
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
        </section>
    )
}