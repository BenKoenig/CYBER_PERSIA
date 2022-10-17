const GameTrailer = () => {
    return (
        <>
            <section className="py-20 md:py-32 px-5 bg-light-100">
                <div className="flex flex-col items-center pb-5">
                    <h3 className="sub-title">Lorem ipsum dolar set</h3>
                    <h2 className="main-title">Game Trailer</h2>
                </div>

                <div className="flex justify-center">
                    <div className="flex justify-center pb w-full max-w-[1200px]">
                        <div class="relative pb-[56.25%] w-full">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full aspect-video"
                                src="https://www.youtube.com/embed/htzq7EEXQs8"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GameTrailer
