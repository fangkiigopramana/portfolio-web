import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import photo from '@/public/photo.png'

export default function HeroSection() {
    return (
        <section id="home" className="w-full">
            <main className="overflow-x-hidden">
            <section>
                <div className="pb-16 pt-24 md:pb-20 md:pt-32 lg:pb-16 lg:pt-16">
                <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 md:gap-16 md:px-8 lg:flex-row lg:items-center">
                    <div className="w-full max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                    <h1 className="mt-8 max-w-2xl text-balance text-4xl font-semibold md:text-5xl lg:mt-16 xl:text-6xl">
                        Hello I&apos;m <span className="underline decoration-pink-500">Fangki.dev</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-pretty text-base md:text-lg">
                        Crafting modern and elegant web solutions tailored to your vision and goals.
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                        <Button
                        asChild
                        size="lg"
                        className="px-5 text-base"
                        >
                        <Link href="#link">
                            <span className="whitespace-nowrap">Grab My CV</span>
                        </Link>
                        </Button>
                        <Button
                        asChild
                        size="lg"
                        variant="ghost"
                        className="px-5 text-base"
                        >
                        <Link href="#footer">
                            <span className="whitespace-nowrap">Get Contacts</span>
                        </Link>
                        </Button>
                    </div>
                    </div>
                    <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
                    <Image
                        className="h-60 w-60 rounded-xl object-cover shadow-lg sm:h-80 sm:w-80 lg:h-96 lg:w-full lg:max-w-md lg:object-contain"
                        src={photo}
                        alt="Abstract Object"
                        height={400}
                        width={300}
                        priority
                    />
                    </div>
                </div>
                </div>
            </section>
            </main>
        </section>
    )
}
