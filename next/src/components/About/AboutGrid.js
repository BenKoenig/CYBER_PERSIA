import AboutCard from "@/components/About/AboutCard";


const Hero = () => {
    return (
        <section className="py-20 md:py-32 px-5 bg-dark">
            <div className="flex flex-col items-center pb-5 text-white">
                <h3 className="sub-title">Lorem ipsum dolar set</h3>
                <h2 className="main-title">About Cyber Persia</h2>
            </div>
 
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 max-w-[1200px]">
                    <AboutCard title="Origin" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."/>
                    <AboutCard title="Story" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."/>
                    <AboutCard title="Design" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."/>
                </div>
            </div>
        </section>
    )
}
export default Hero
