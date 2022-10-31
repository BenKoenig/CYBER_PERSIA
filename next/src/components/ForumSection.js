import Image from 'next/image'
import PrimaryLink from './Shared/PrimaryLink'

const ForumSection = () => {
    return (
        <>
            <section className="bg-dark text-white">
                <div className="text-center relative ">
                    <div className="flex w-full flex-col items-center mb-10">
                        <h3 className="sub-title">Stay connected</h3>
                        <div className="title-line"></div>
                        <h2 className="main-title">Join our Forum</h2>
                        <h3 className="desc-title">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                        </h3>
                    </div>

                    
                    <div className="flex justify-center relative">

                       
                        <div className="absolute bottom-2/4 w-full h-full z-10 ">
                            <div className="absolute bottom-0 left-0  hidden xl:flex">
                                <div className="bg-light-gray w-56 h-16"></div>
                                <div className="w-10 h-16 triangle-left bg-light-gray"></div>
                            </div>

                            <div className="absolute bottom-0 right-0  hidden xl:flex">
                                <div className="w-10 h-16 triangle-right bg-light-gray"></div>
                                <div className="bg-light-gray w-56 h-16"></div>
                            </div>
                            <div className="bottom-0 left-0 w-full ">

                            </div>
                        </div>

                            
                        <div className="max-w-xl w-full gap-x-3 items-center">
                            <Image
                                width={768}
                                height={910}
                                layout='responsive'
                                src="/images/placeholder-1.png"
                                className="object-fill"
                            />

                            <div className="inline-block mt-5">
                                <PrimaryLink href="/" type="primary">Forum</PrimaryLink>
                            </div>

                            </div>
                        
                        </div>
                   

                </div>
            </section>
        </>
    )
}

export default ForumSection
