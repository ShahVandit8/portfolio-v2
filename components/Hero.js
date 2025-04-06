import data from '@/data/data.json'
import Typewriter from './UI/Typewriter'
import DynamicButton from './UI/DynamicButton'
import VideoBG from './UI/VideoBG'

const Hero = () => {

    const { fullName, titleArray, resumeLink, socialLinks } = data.data;

    return (
        <section id="home" className="hero-section overflow-hidden relative flex items-center justify-center h-svh md:min-h-screen text-center text-white">

            <div className="absolute inset-0 z-0 ml-4 md:ml-6 mb-12 mr-4 md:mr-6">
                <VideoBG />
            </div>

            <div className="relative z-10 px-4 md:px-8 lg:px-16 mb-8">

                <h1 className='hidden'>{fullName} - Full Stack Web Developer</h1>

                <div className="flex flex-col">
                    <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 font-mono uppercase order-2">
                        {fullName}
                    </h2>
                    <h2 className="text-xl md:text-2xl lg:text-5xl font-bold mb-6 font-mono order-1">
                        Hello 👋 My Name is
                    </h2>
                </div>

                <Typewriter titleArray={titleArray} />

                <div className="flex justify-center gap-4">
                    <DynamicButton bgcolor={'white'} textcolor={'black'} text={'Resume'} link={resumeLink} />
                    <DynamicButton bgcolor={'black'} textcolor={'white'} text={'Github'} link={socialLinks.github} />
                </div>
            </div>
        </section>
    )
}

export default Hero
