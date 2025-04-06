import data from '@/data/data.json'
import SectionHeader from './UI/SectionHeader'
import Image from 'next/image'

const AboutMe = () => {

    const { about } = data.data

    return (
        <section id="about-me" className="bg-black text-white py-8">
            <div className="mx-auto px-6 md:px-8 lg:px-16">
                <SectionHeader title={'about-me'} description={''} linkText={'read-more'} link={'/about'} />

                <div className="flex flex-col md:flex-row">
                    <div className="p-0 md:p-6 w-full xl:w-34/100">
                        <Image
                            src="/images/about/profile-picture.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%' }}
                            className='rounded-lg object-cover w-full lg:w-140 h-full hover:scale-101 transition duration-300 ease-in-out'
                            alt="Vandit Shah's Profile Picture"
                        />
                    </div>
                    <div className='p-0 md:p-6 mt-6 md:mt-0 w-full xl:w-66/100 align-middle items-center'>
                        <div className="space-y-6">

                            {/* Intro Card */}
                            <div className="p-4 rounded-lg border border-[var(--accent)]/20">
                                <p className="text-sm md:text-base font-mono text-gray-300">
                                    <span className="text-[var(--accent)]">Hello! </span>
                                    {about.main}
                                </p>
                            </div>

                            {/* Skills and Journey */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg border border-[var(--accent)]/20">
                                    <h3 className="text-xl font-mono text-[var(--accent)] mb-2">
                                        #skills
                                    </h3>
                                    <ul className="space-y-2 font-mono">
                                        {about.skills.map((skill, index) => (
                                            <li className="flex items-center text-gray-300" key={index}>
                                                <span className="text-[var(--accent)] mr-2">▸</span>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-4 rounded-lg border border-[var(--accent)]/20">
                                    <h3 className="text-xl font-mono text-[var(--accent)] mb-2">
                                        #journey
                                    </h3>
                                    <p className="text-gray-300 text-sm font-mono">
                                        {about.journey}
                                    </p>
                                </div>
                            </div>

                            {/* Projects and Passion */}
                            <div className="p-4 rounded-lg border border-[var(--accent)]/20">
                                <h3 className="text-xl font-mono text-[var(--accent)] mb-2">
                                    #passion
                                </h3>
                                <p className="text-gray-300 text-sm font-mono">
                                    {about.passion}
                                </p>
                            </div>

                            {/* Call to Action */}
                            <div className="p-4 rounded-lg border border-[var(--accent)]/20 flex justify-between items-center">
                                <p className="text-gray-300 text-sm font-mono">
                                    {about.connect}
                                </p>
                                <a
                                    href="#contact"
                                    className="bg-[var(--accent)] text-white px-4 py-2 rounded-md font-mono text-sm "
                                >
                                    ↓
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
