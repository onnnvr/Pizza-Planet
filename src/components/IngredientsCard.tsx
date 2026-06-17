import Image from "next/image";

export default function IngredientsCard({ image, recipe} : {image:string, recipe:string}) {
    return(
        <div className="w-[25vw] shrink-0  h-[100%] relative overflow-hidden">
            <Image src={image} fill alt=""  className="object-cover" />   
        </div>
    )
}