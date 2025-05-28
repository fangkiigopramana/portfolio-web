import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Blocks, FolderCode, Smartphone } from 'lucide-react'
import { ReactNode } from 'react'

export default function Services() {
    return (
        <section className="py-8 md:py-16 dark:bg-transparent" id='services'>
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">What I Offer</h2>
                    <p className="mt-4 text-wrap">Offering responsive web design and development services, specializing in creating intuitive user interfaces with HTML, CSS, PHP, JavaScript, ReactJs, NodeJs, Bootstrap, TailwindCSS, and UI/UX designing in Web Development using Laravel/NextJS</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Blocks className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-bold underline decoration-pink-500">Multiple Tech Stack</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">I have worked with multiple technologies and frameworks to build scalable and efficient applications.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <FolderCode className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-bold underline decoration-amber-500">Develop & Design</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Excels in both development and design to create a seamless and intuitive user experience.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Smartphone className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-bold underline decoration-sky-500">Web & Mobile Dev</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Elements to functionality, you have complete control to create a unique experience.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
