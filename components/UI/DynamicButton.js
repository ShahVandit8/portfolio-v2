const DynamicButton = (props) => {

  const { bgcolor, textcolor, text, link } = props

  return (
    <div className='bg-transparent cursor-pointer group border border-gray-500 hover:border-white border-opacity-5 p-1 rounded-lg transition-all duration-200 ease-in-out mb-[15px] md:mb-0'>
      <a className={`bg-${bgcolor} cursor-pointer flex w-full h-full px-6 md:px-12 py-3 md:py-4 text-${textcolor} font-mono tx-sm  md:text-xl font-medium rounded-md`}
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
                fill={textcolor}
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

export default DynamicButton
