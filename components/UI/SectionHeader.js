import Link from 'next/link';

const SectionHeader = (props) => {

    const { title, description, linkText, link } = props;

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <div className="relative flex items-center w-full">
                    <h2 className="text-3xl md:text-[42px] font-mono">
                        <span className="text-[var(--accent)] font-light">#</span>{title}
                    </h2>
                    <div className="title-line flex-1 h-[0.5px] bg-gray-500 ml-4 block"></div>
                </div>
                {
                    linkText ?
                        <Link
                            href={link ? link : '#'}
                            className="text-white text-lg font-mono hover:text-[var(--accent)] transition-colors px-2"
                        >
                            <span className="flex items-center space-x-1 whitespace-nowrap">
                                <span className="text-sm md:text-lg font-mono">{linkText}</span>
                                <svg className="w-5 h-5 text-current" viewBox="0 0 37 37">
                                    <g clipPath="url(#clip0_35_137)">
                                        <path
                                            fill="currentColor"
                                            d="m9.234 29.627 15.9-15.9v11.54h3.084V8.462H11.414v3.083h11.54l-15.9 15.9z"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_35_137">
                                            <path fill="#fff" d="M0 0h37v37H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </Link>
                        :
                        null
                }
            </div>

            {/* Description */}
            <div className="flex justify-between items-center mb-4">
                <p className="text-sm md:text-[18px] font-mono">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default SectionHeader
