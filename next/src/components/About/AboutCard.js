import Image from "next/image";


const AboutCard = ({title, desc}) => {
    return (
        <div className="group relative">
            <div className="absolute w-8 right-0 z-10 fill-white transition-colors group-hover:fill-gray-400">
                <svg className="translate-x-[50%] -translate-y-[50%]" viewBox="64 64 384 384"><path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z"></path></svg>
            </div>

            {/* Headline */}
            <div className="bg-dark-aqua flex justify-center font-bold py-4">
                <h4 className="text-3xl">{title}</h4>
            </div>

            {/* Image / Desc Text on Hover*/}
            <div className="relative overflow-hidden">
                <div className="absolute w-full h-full bg-black top-0 transition-all group-hover:top-full"> 
                    <Image src="/images/placeholder-1.png" width={400} height={450} layout="responsive" className="object-fill"  />
                </div>
                <div className="bg-light-beige text-center py-10 px-10 min-h-[400px]">
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}
export default AboutCard

