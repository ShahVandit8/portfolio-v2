'use client';
import { useState } from 'react';
import ProjectCard from '@/components/UI/ProjectCard2';

export default function ProjectsWithFilter({ projects, categories }) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filter projects based on selected category
    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    return (
        <>
            {/* Category Filters */}
            <div className="flex flex-wrap gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${selectedCategory === category
                            ? 'bg-purple-600 text-white border border-purple-500'
                            : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:text-white'
                            }`}
                    >
                        {category}{' '}
                        &#40;
                        {
                            category === 'All'
                                ? projects.length
                                : projects.filter((project) => project.category === category).length
                        }
                        &#41;
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card animate-fadeIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <ProjectCard project={project} id={index} />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400 font-mono col-span-full text-center">
                        No projects found in this category.
                    </p>
                )}
            </div>
        </>
    );
};