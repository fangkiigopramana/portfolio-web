"use client"

import * as React from 'react'
import Image from 'next/image'
import NotFoundImage from '@/public/not-available.gif'
import { projects } from '@/lib/data'
import IntegrationCard from '@/components/card'

export default function Projects() {
    const [searchQuery, setSearchQuery] = React.useState('')

    const filteredIntegrations = projects.filter(integration =>
        integration.name.toLowerCase().includes(searchQuery.toLowerCase())
    )


    return (
        <section id='projects'>
            <div className="py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">My Latest Projects</h2>
                        <p className="text-muted-foreground mt-6">Explore some of my recent projects showcasing seamless integrations with popular platforms and tools.</p>
                    </div>

                    <div className="mt-12">
                        <input
                            type="text"
                            placeholder="Search by title..."
                            className="mb-6 w-full rounded-md border border-gray-300 p-2"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                            {filteredIntegrations.length > 0 ? (
                                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
                                    {filteredIntegrations.map((integration, index) => (
                                        <IntegrationCard
                                            key={index}
                                            name={integration.name}
                                            category={integration.category}
                                            link={integration.link}
                                            description={integration.description}>
                                        </IntegrationCard>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center mt-6">
                                    <Image src={NotFoundImage} alt='Not Found Image' width={200} unoptimized />
                                    <p className="text-center text-muted-foreground">No Projects Found.</p>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </section>
    )
}