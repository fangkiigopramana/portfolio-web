import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import photo from '@/public/photo.png'

export default function HeroSection() {
    return (
        <section id='home'>
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-32 md:pb-16 lg:pb-16 lg:pt-16">
                        <div className="relative mx-auto flex max-w-6xl flex-col-reverse px-6 lg:flex-row lg:items-center">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-6xl">Hello Im <span className="underline decoration-pink-500">Fangki.dev</span></h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">Crafting modern and elegant web solutions tailored to your vision and goals.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Grab My CV</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base">
                                        <Link href="#footer">
                                            <span className="text-nowrap">Get Contacts</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <Image
                                className="ml-auto h-75 w-full object-cover sm:h-96 lg:h-auto lg:w-1/2 lg:object-contain"
                                src={photo}
                                alt="Abstract Object"
                                height="400"
                                width="300"
                                unoptimized
                            />
                        </div>
                    </div>
                </section>
            </main>
        </section>
    )
}
