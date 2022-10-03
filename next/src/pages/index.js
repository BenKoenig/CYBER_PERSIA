import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import {checkout} from "@/checkout";
import GuestLayout from "@/components/Layouts/GuestLayout";

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <GuestLayout>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="h-screen w-full bg-red-400 flex justify-center items-center -mt-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <video src="/videos/temp.mp4" autoPlay muted loop>

                    </video>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
                <div className="absolute bottom-0 left-0 flex">
                    <div className="bg-blue-300 w-56 h-16"></div>
                    <div className="w-10 h-16 triangle-left bg-blue-300"></div>
                </div>

                <div className="absolute bottom-0 right-0 flex">
                    <div className="w-10 h-16 triangle-right bg-blue-300"></div>
                    <div className="w-10 bg-blue-300 w-56 h-16"></div>
                </div>


                <div className="text-center relative text-white">
                    <p className="tracking-widest uppercase pb-5">Lorem ipsum dolar set</p>
                    <h1 className="uppercase font-bold text-7xl pb-5">Cyber Persia</h1>
                    <h2 className="max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h2>
                </div>
            </div>
        </GuestLayout>
    )
}
