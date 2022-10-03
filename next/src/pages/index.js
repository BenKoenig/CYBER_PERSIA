import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import {checkout} from "@/checkout";
import GuestLayout from "@/components/Layouts/GuestLayout";
import Hero from "@/components/Hero";

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <GuestLayout>
            <Head>
                <title>Laravel</title>
            </Head>

            <Hero />
        </GuestLayout>
    )
}
