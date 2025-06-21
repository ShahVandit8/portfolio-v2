'use client'
import React, { useState } from 'react';
import data from '@/data/data.json'
import ProjectCard from './UI/ProjectCard';
import SectionHeader from './UI/SectionHeader';
import Link from 'next/link';

const ProjectsSection = () => {

    const { projects } = data.data;

    // State for number of projects to display
    const [visibleProjects, setVisibleProjects] = useState(5);

    // Function to load more projects
    const loadMoreProjects = () => {
        setVisibleProjects((prev) => prev + 2);
    };

    return (
        <section id="projects" className="bg-black text-white py-8">
            <div className="mx-auto px-6 md:px-8 lg:px-16">
                <SectionHeader title={'projects'} description={'View my latest projects'} linkText={'view all'} link={'/projects'} />

                {/* Project Cards */}
                <div className="project-cards-container px-0 xl:px-10 mt-12">
                    {
                        projects.slice(0, visibleProjects).map((project, id) => (
                            <ProjectCard project={project} id={id} key={id} />
                        ))
                    }
                </div>

                {visibleProjects < projects.length && (
                    <div>
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={loadMoreProjects}
                                className="bg-white text-black px-6 py-3 mr-2 rounded-md text-sm font-mono hover:bg-gray-200 hover:text-black transition-colors"
                            >
                                Load More ({projects.length - visibleProjects})
                            </button>
                            <Link
                                href='/projects'
                                className="border border-white text-white px-6 py-3 rounded-md text-sm font-mono hover:bg-white hover:text-black transition-colors"
                            >
                                View All
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default ProjectsSection;