import Image from 'next/image'
import Button from './Button'

const ForumSection = () => {
    return (
        <>
            <section className="py-20 md:py-32 px-5 ">
                <div className="text-center relative mx-4 ">
                    <div className="flex w-full flex-col items-center ">
                        <h3 className="sub-title">Stay connected</h3>
                        <h2 className="main-title">Join our Forum</h2>
                        <h3 className="desc-title">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                        </h3>
                    </div>

                    <div className="max-w-md mx-auto p-5">
                        <Image
                            src="/images/placeholder-1.png"
                            width={400}
                            height={450}
                            layout="responsive"
                            className="object-fill"
                        />
                    </div>
                    <Button className="bg-light-100">Forum</Button>
                </div>
            </section>
        </>
    )
}

export default ForumSection
