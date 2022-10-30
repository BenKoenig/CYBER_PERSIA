import Image from 'next/image'
import PrimaryLink from './Shared/PrimaryLink'

const ForumSection = () => {
    return (
        <>
            <section className="py-20 md:py-32 px-5 bg-dark text-white">
                <div className="text-center relative mx-4 ">
                    <div className="flex w-full flex-col items-center mb-10">
                        <h3 className="sub-title">Stay connected</h3>
                        <h2 className="main-title">Join our Forum</h2>
                        <h3 className="desc-title">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                        </h3>
                    </div>

                    
                    <div className="flex justify-center">
                        <div className="flex max-w-3xl w-full gap-x-3 items-center">
                                <img
                                    src="/images/placeholder-1.png"
        
                                    className="object-fill w-full h-full"
                                />
                            <PrimaryLink href="/" type="primary">Forum</PrimaryLink>

                            </div>
                        
                        </div>
                   

                </div>
            </section>
        </>
    )
}

export default ForumSection
