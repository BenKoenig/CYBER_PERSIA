import Image from "next/image";


const AboutCard = ({title, desc}) => {
    return (
        <div>
            {/* Headline */}
            <div className="bg-light-50 flex justify-center font-bold py-4">
                <h4 className="text-3xl">{title}</h4>
            </div>
            {/* Image / Desc Text on Hover*/}
            <div className="relative overflow-hidden group">
                <div className="absolute w-full h-full bg-black top-0 transition-all group-hover:top-full">
                    <Image src="/images/placeholder-1.png" width={400} height={450} layout="responsive" className="object-fill"  />
                </div>
                <div className="bg-light-100 text-center py-10 px-10 min-h-[400px]">
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}
export default AboutCard
