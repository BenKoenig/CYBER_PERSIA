import Image from "next/image";


const Hero = () => {
    return (
        <section className="py-20 md:py-32 px-5">
            <div className="flex flex-col items-center pb-5">
                <h3 className="sub-title">Lorem ipsum dolar set</h3>
                <h2 className="main-title">About Cyber Persia</h2>
            </div>


            <div className="flex justify-center">
                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 max-w-[1200px]">
                    {/* Start of Card Item */}
                    <div>
                        {/* Headline */}
                        <div className="bg-light-50 flex justify-center font-bold py-3">
                            <h4 className="text-3xl">Origin</h4>
                        </div>
                        {/* Image / Desc Text on Hover*/}
                        <div className="relative overflow-hidden group">
                            <div className="absolute w-full h-full bg-black top-0 transition-all group-hover:top-full">
                                <Image src="/images/placeholder-1.png" width={400} height={450} layout="responsive" className="object-fill"  />
                            </div>
                            <div className="bg-light-100 text-center py-10 px-10 min-h-[400px]">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End of Card Item */}

                    {/* Start of Card Item */}
                    <div>
                        {/* Headline */}
                        <div className="bg-light-50 flex justify-center font-bold py-3">
                            <h4 className="text-3xl">Story</h4>
                        </div>
                        {/* Image / Desc Text on Hover*/}
                        <div className="relative overflow-hidden group">
                            <div className="absolute w-full h-full bg-black top-0 transition-all group-hover:top-full">
                                <Image src="/images/placeholder-1.png" width={400} height={450} layout="responsive" className="object-fill"  />
                            </div>
                            <div className="bg-light-100 text-center py-10 px-10 min-h-[400px]">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End of Card Item */}

                    {/* Start of Card Item */}
                    <div>
                        {/* Headline */}
                        <div className="bg-light-50 flex justify-center font-bold py-3">
                            <h4 className="text-3xl">Design</h4>
                        </div>
                        {/* Image / Desc Text on Hover*/}
                        <div className="relative overflow-hidden group">
                            <div className="absolute w-full h-full bg-black top-0 transition-all group-hover:top-full">
                                <Image src="/images/placeholder-1.png" width={400} height={450} layout="responsive" className="object-fill"  />
                            </div>
                            <div className="bg-light-100 text-center py-10 px-10 min-h-[400px]">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End of Card Item */}
                </div>
            </div>
        </section>
    )
}
export default Hero
