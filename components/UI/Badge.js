const Badge = (props) => {

    const {skill, index} = props

    return (
        <div key={index} className='bg-gray-900 text-white text-xs md:text-sm font-mono px-3 py-1 rounded-lg shadow-lg border border-[var(--accent)] mr-2 mb-2 md:mb-0'>
            <span className="text-[var(--accent)]">#</span>{skill}
        </div>
    )
}

export default Badge
