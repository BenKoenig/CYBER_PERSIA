import Image from "next/image";


const Hero = () => {
    return (
        <section className="py-20 md:py-32 px-5">
            <div className="flex flex-col items-center pb-5">
                <h3 className="sub-title">Lorem ipsum dolar set</h3>
                <h2 className="main-title">About Cyber Persia</h2>
            </div>


            <div className="flex justify-center">
                <canvas className="max-w-[636px] w-full ">
                </canvas>
            </div>
        </section>
    )
}
export default Hero
