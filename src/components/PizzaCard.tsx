import Image from "next/image";

export default function PizzaCard({ image, title, span } : {image:string, title:string, span:string}) {
    return(
        <div className="w-[530px] h-[430px] bg-[#f2f0e9] flex flex-col justify-center items-center rounded-lg ">
            <div className="w-[500px] h-[280px] relative rounded-lg overflow-hidden">
                <Image src={image} fill  alt="" className="object-cover" />
            </div>
            <span className="font-bowlby text-[11px] mt-8">{span}</span>
            <h3 className="font-bowlby text-5xl text-[#d93333]">{title}</h3>
        </div>
    )
}