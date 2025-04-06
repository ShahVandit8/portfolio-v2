const LinkButton = (props) => {

    const {bgcolor, textcolor, text, link } = props;

    return (
        <div className='bg-transparent cursor-pointer group pt-2 pb-2 pr-2 pl-0 rounded-lg transition-all duration-200 ease-in-out'>
            <a className={`bg-${bgcolor} cursor-pointer flex w-full h-full px-6 py-3 text-${textcolor} ${bgcolor == 'white' ? "hover:bg-gray-200" : "border border-gray-500 hover:border-gray-400"} font-mono text-md font-medium rounded-md`}
                href={link}
                target='_blank'
            >
                <div className="relative flex items-center justify-center gap-2 mx-auto">
                    <span className="relative inline-block overflow-hidden">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                            {text}
                        </span>
                        <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                            Link
                        </span>
                    </span>
                    <svg
                        className="w-5 h-5 transition-transform duration-200 group-hover:rotate-45"
                        viewBox="0 0 37 37"
                    >
                        <g clipPath="url(#clip0_35_137)">
                            <path
                                fill={bgcolor == 'white' ? '#000' : '#fff'}
                                d="m9.234 29.627 15.9-15.9v11.54h3.084V8.462H11.414v3.083h11.54l-15.9 15.9z"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_35_137">
                                <path fill="#fff" d="M0 0h37v37H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </a>
        </div>
    )
}

export default LinkButton
