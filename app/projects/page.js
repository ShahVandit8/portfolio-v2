import ProjectsWithFilter from '@/components/UI/ProjectsWithFilter';
import SectionHeader from '@/components/UI/SectionHeader';
import data from '@/data/data.json';

export const metadata = {
    title: 'Projects | Vandit Shah - Full-Stack Web Developer',
    description:
        'Explore all projects by Vandit Shah, a full-stack web developer. Categories include Full Stack, React, Next.js, Blockchain, and more.',
    openGraph: {
        title: 'Projects | Vandit Shah - Full-Stack Web Developer',
        description:
            'Explore all projects by Vandit Shah, a full-stack web developer. Categories include Full Stack, React, Next.js, Blockchain, and more.',
        url: 'https://vandit-shah.me/projects',
        images: [
            {
                url: 'https://vandit-shah.me/images/og-image-projects.jpg',
                width: 1200,
                height: 630,
                alt: 'Vandit Shah Projects Preview',
            },
        ],
    },
    alternates: {
        canonical: 'https://vandit-shah.me/projects',
    },
};

export default function ProjectsPage() {
    const { projects } = data.data;

    const categories = ['All', ...new Set(projects.map((project) => project.category))];

    return (
        <section className="bg-black text-white py-6 mt-22">
            <main className="mx-auto px-6 md:px-8 lg:px-16">

                <SectionHeader title={'projects'} description={'View all my latest projects here'} linkText={'back to home'} link={'/'} />

                {/* Projects Section with Categories */}
                <div className="mt-16">
                    <ProjectsWithFilter projects={projects} categories={categories} />
                </div>

            </main>
        </section>
    );
}