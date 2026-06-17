import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <section className="h-dvh w-[95vw] overflow-hidden bg-[white] pt-[20vh]">
            <div className="flex flex-col">
                <div className="flex justify-between px-[4vw] ">
                    <div className="font-bowlby text-[7vw] flex flex-col leading-[15vh] "><span className="text-black">ORDER</span> <span className="text-[#d93333]">NOW</span></div>
                    <div className="w-[35vw] h-[35vh] relative overflow-hidden -mr-[3vw]">
                        <Image src="/imgs/p-13.png" fill alt="" className="object-contain" />
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-4 grid-rows-1 gap-[2vw] px-[4vw]">
                    <div className="col-span-3 flex flex-col gap-5 py-[5vh] border-r-gray-500 border-r-2 pr-[2vw]">
                        <div className="flex justify-between items-center">
                            <div className="font-bowlby text-[4vw] text-black">
                                PIZZA PLANET
                                <span className="block text-[1.3vw] -mt-[2vh] font-bowlby">NEW YORK, NY</span>
                            </div>
                            <div className="flex justify-between gap-3">
                                <div className="size-[2.5vw] rounded-lg bg-black text-white flex justify-center items-center p-1 text-[0.5vw] font-bowlby">IG</div>
                                <div className="size-[2.5vw] rounded-lg bg-black text-white flex justify-center items-center p-1 text-[0.5vw] font-bowlby">IN</div>
                                <div className="size-[2.5vw] rounded-lg bg-black text-white flex justify-center items-center p-1 text-[0.5vw] font-bowlby">SP</div>
                                <div className="size-[2.5vw] rounded-lg bg-black text-white flex justify-center items-center p-1 text-[0.5vw] font-bowlby">FB</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between items-center border-b-2 border-black pb-2">
                                <div className="text-[0.9vw] text-black font-bowlby">CHEF MARIO</div>
                                <div className="text-gray-400 font-bowlby text-[0.7vw]">HEAD OF DOUGH</div>
                            </div>
                            <div className="flex justify-between items-center border-b-2 border-black pb-2">
                                <div className="text-[0.9vw] text-black font-bowlby">CHEF LUIGI</div>
                                <div className="text-gray-400 font-bowlby text-[0.7vw]">SAUCE SPECIALIST</div>
                            </div>
                            <div className="flex justify-between items-center border-b-2 border-black pb-2">
                                <div className="text-[0.9vw] text-black font-bowlby">PRINCESS PEACH</div>
                                <div className="text-gray-400 font-bowlby text-[0.7vw]">TOPPING CURATOR</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <Link className="font-bowlby text-[0.9vw] text-black" href="mailto:orders@pizzaplanet.com">
                                ORDERS@PIZZAPLANET.COM
                            </Link>
                            <div className="font-bowlby text-[0.9vw] text-black">800.PIZZA.NOW</div>
                        </div>
                        <hr className="w-[0.08vw] h-[40vh] inline-block border-none bg-gray-700" />
                    </div>
                    <div className="col-span-1">
                        <div className="w-[23vw] h-[30vh] mt-[8vh]   relative overflow-hidden">
                            <Image src="/imgs/p-14.png" alt="" fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}