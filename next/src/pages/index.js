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

            <div className="h-screen w-full bg-red-400 flex justify-center items-center -mt-16">
                <div className="text-center">
                    <h1 className="widest uppercase pb-4">Lorem ipsum dolar set</h1>
                    <h2 className="uppercase font-bold text-6xl pb-4">Cyber Persia</h2>
                    <p className="max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
        </GuestLayout>
    )
}
