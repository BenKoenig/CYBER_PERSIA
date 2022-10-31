const GameTrailer = () => {
    return (
        <>
            <section className="py-20 md:py-32 px-5 bg-dark">
                <div className="flex flex-col items-center pb-5 text-white">
                    <h3 className="sub-title">Lorem ipsum dolar set</h3>
                    <div className="title-line"></div>
                    <h2 className="main-title">Game Trailer</h2>
                </div>

                <div className="flex justify-center">
                    <div className="flex justify-center pb w-full max-w-[1200px] ">
                        <div className="relative w-full h-full">
                            
                            <div className="absolute top-0 left-0 w-10 h-10 z-10">
                                <div className="bg-white w-10 h-0.5"></div>
                                <div className="bg-white w-0.5 h-10"></div>
                            </div>

                            <div className="absolute bottom-0 right-0 w-10 h-10 z-10">

                                <div className="absolute right-0">
                                    <div className="bg-white w-0.5 h-10"></div>
                                </div>

                                <div className="absolute bottom-0 bg-white w-10 h-0.5"></div>

                            </div>
                            
                            <div className="m-5">
                                <div className="relative pb-[56.25%] w-full">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full aspect-video"
                                        src="https://www.youtube.com/embed/htzq7EEXQs8"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                                        allowFullScreen></iframe>
                                </div>
                            </div>

                            
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default GameTrailer
