import LinkButton from './LinkButton';
import Badge from './Badge';
import Image from 'next/image';

const ProjectCard = (props) => {

    const { project, id } = props;

    return (
        <div className="bg-[var(--card-dark)] rounded-[1rem] overflow-hidden mb-14 border-[2px] border-gray-600" key={id}>
            <div
                className={`flex flex-col`}
            >
                <div className='p-4 w-full'>
                    <Image
                        src={project.image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%' }}
                        className='rounded-lg object-cover w-full lg:w-200 h-full hover:scale-101 transition duration-300 ease-in-out'
                        alt={`${project.title} by Vandit Shah - ${project.category} Project`}
                    />
                </div>
                <div className='p-6 w-full grid grid-cols items-center'>
                    <div>
                        <div className='w-fit px-2 bg-[var(--card-badge)] rounded-4xl font-mono text-[11px] md:text-[12px] font-light tracking-wide mt-0 lg:mt-4 mb-1'>
                            <h5 className="p-1 uppercase">{project.type}</h5>
                        </div>

                        <div className='w-fit'>
                            <h3 className="font-mono text-[26px] md:text-[34px] font-semibold tracking-tight">{project.title}</h3>
                            <div className="title-line h-[0.5px] w-[160px] md:w-[180px] bg-gray-500 block"></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-left p-1 mt-2">
                        {
                            project.techStack.map((skill, index) => (
                                <Badge skill={skill} index={index} key={index} />
                            ))
                        }
                    </div>

                    <div className="mt-2 md:mt-4">
                        <p className='font-mono font-light text-sm md:text-base'>{project.description}</p>
                    </div>

                    <div className='mt-4'>
                        <div className="inline md:flex justify-left gap-2">
                            {
                                project.githubLink ?
                                    <LinkButton bgcolor={'white'} textcolor={'black'} text={'Github'} link={project.githubLink} />
                                    :
                                    null
                            }
                            {
                                project.liveLink ?
                                    <LinkButton bgcolor={'transparent'} textcolor={'white'} text={'Live'} link={project.liveLink} />
                                    :
                                    null
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard
