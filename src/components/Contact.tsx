import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <section className="h-dvh w-[95vw] overflow-hidden bg-[white] pt-[20vh]">
            <div className="flex flex-col">
                <div className="flex justify-between px-[4vw] ">
                    <div className="font-bowlby text-[6vw] flex flex-col leading-[13vh] "><span className="text-black">ORDER</span> <span className="text-[#d93333]">NOW</span></div>
                    <div className="w-[30vw] h-[35.5vh] relative overflow-hidden -mr-[3vw] -mt-[3vh]">
                        <video src="/videos/v3.mp4" autoPlay loop muted className="" />
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-4 grid-rows-1 gap-[2vw] px-[4vw]">
                    <div className="col-span-3 flex flex-col gap-[3vh] py-[2vh] border-r-gray-500 border-r-2 pr-[2vw]">
                        <div className="flex justify-between items-center">
                            <div className="font-bowlby text-[4vw] text-black">
                                PIZZA PLANET
                                <span className="block text-[1.3vw] -mt-[2vh] font-bowlby">NEW YORK, NY</span>
                            </div>
                            <div className="flex justify-between gap-3">
                                <div className="size-[3vw] rounded-lg bg-black text-white flex justify-center items-center p-1 text-[0.8vw] font-bowlby">IG</div>
                                <div className="size-[3vw] rounded-lg bg-black text-white flex justify-center items-center p-1 text-[0.8vw] font-bowlby">IN</div>
                                <div className="size-[3vw] rounded-lg bg-black text-white flex justify-center items-center p-1 text-[0.8vw] font-bowlby">SP</div>
                                <div className="size-[3vw] rounded-lg bg-black text-white flex justify-center items-center p-1 text-[0.8vw] font-bowlby">FB</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[3vh]">
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
                        <hr className="mt-[10vh]" />
                    </div>
                    <div className="col-span-1">
                        <div className="w-[15vw] h-[40vh] mt-[8vh] ml-[3.5vw]   relative overflow-hidden">
                            <video src="/videos/v4.mp4" autoPlay loop muted className="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}