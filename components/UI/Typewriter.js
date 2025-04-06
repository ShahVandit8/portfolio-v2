'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypewriterText = ({titleArray}) => {

    return (
        <p className="text-lg md:text-xl lg:text-[38px] mb-16 font-bold font-mono tracking-[-0.3px]">
            <Typewriter
                words={titleArray}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={40}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </p>
    )
}

export default TypewriterText
