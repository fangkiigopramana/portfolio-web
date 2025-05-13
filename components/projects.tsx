"use client"

import Link from 'next/link'
import * as React from 'react'
import { projects } from '@/lib/data'
import IntegrationCard from './card'

export default function Projects() {
    const [visibleCount, setVisibleCount] = React.useState(3)

    const filteredIntegrations = projects

    const visibleIntegrations = filteredIntegrations.slice(0, visibleCount)

    return (
        <section id='projects'>
            <div className="py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">My Latest Projects</h2>
                        <p className="text-muted-foreground mt-6">Explore some of my recent projects showcasing seamless integrations with popular platforms and tools.</p>
                    </div>

                    <div className="mt-12">
                        <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-3">
                            {visibleIntegrations.map((integration, index) => (
                                <IntegrationCard
                                    key={index}
                                    name={integration.name}
                                    category={integration.category}
                                    link={integration.link}
                                    description={integration.description}>
                                    {/* {integration.component} */}
                                </IntegrationCard>
                            ))}
                        </div>
                        {visibleCount < filteredIntegrations.length && (
                            <div className="mt-6 text-center">
                                <Link href={'projects'} className="inline-flex items-center justify-center rounded-md border border-transparent bg-balance font-bold px-4 py-2 text-sm shadow-sm hover:bg-balance/80 focus:outline-none focus:ring-2 focus:ring-balance focus:ring-offset-2">
                                    View More
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}