import Image from 'next/image';

const IconsRow = (props) => {

    const { skill, index, getSkillName } = props;

    return (
        <div key={`row1-${index}`} className="flex items-center justify-center p-1 md:p-0">
            <div className="relative group">
                <Image
                    src={skill}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%' }}
                    alt={`Vandit Shah's Skill - ${getSkillName(skill)}`}
                    className="w-18 h-18 object-contain"
                />
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-tooltip-pop bg-gray-900 text-white text-sm text-nowrap font-mono px-3 py-1 rounded-lg shadow-lg border border-[var(--accent)] transition-opacity duration-300 pointer-events-none">
                    <span className="text-[var(--accent)]">#</span>{getSkillName(skill)}
                    {/* Tooltip Arrow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-gray-900 border-b border-r border-[var(--accent)]"></div>
                </div>
            </div>
        </div>
    )
}

export default IconsRow
