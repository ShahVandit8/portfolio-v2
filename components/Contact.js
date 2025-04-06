import data from '@/data/data.json'
import SectionHeader from './UI/SectionHeader'
import Image from 'next/image'

const Contact = () => {

    const { email, socialLinks } = data.data;

    return (
        <section id="contact" className="bg-black text-white py-8 min-h-[420px]">
            <div className="mx-auto px-6 md:px-8 lg:px-16">
                <SectionHeader title={'contact'} description={''} linkText={''} link={''} />

                <div className='mt-4 mb-6 w-full text-lg md:text-xl font-mono'>
                    <p className='mb-8'>
                        I'm currently open to work and get involved in new projects, so get in touch if you'd like to Hire me or work together.
                    </p>
                    <p>
                        Email me at <a href={'mailto:'+email} className='text-[var(--accent)] no-underline hover:underline decoration-inherit'>{email}</a> and let's connect!
                    </p>
                </div>
                <div className='mt-8'>
                    <div className="flex items-center justify-left space-x-10">
                        <a href={socialLinks.github} target='_blank'>
                            <Image
                                src='https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/github-dark.svg'
                                alt="Github Icon with Vandit Shah's Github Link"
                                height={37}
                                width={37}
                                className="object-contain"
                            />
                        </a>
                        <a href={socialLinks.linkedin} target='_blank'>
                            <Image
                                src='https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/linkedin-dark.svg'
                                alt="Linkedin Icon with Vandit Shah's Linkedin Link"
                                height={40}
                                width={40}
                                className="object-contain"
                            />
                        </a>
                        <a href={socialLinks.medium} target='_blank' >
                            <Image
                                src='https://raw.githubusercontent.com/ShahVandit8/profile-x/refs/heads/main/public/icons/socials/medium-dark.svg'
                                alt="Medium Icon with Vandit Shah's Medium Link"
                                height={40}
                                width={40}
                                className="object-contain"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
