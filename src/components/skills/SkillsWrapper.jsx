import React from 'react'
import SkillsBlock from './SkillsBlock'

const SkillsWrapper = ({icons}) => {

    return (
        <>
            <div className="skills-container">
                {icons.length ? (
                    icons.map((icon, index) => (
                        <SkillsBlock {...icon} key={index} />
                    ))
                ) : (
                    <p>no display icon</p>
                )}
            </div>
        </>
    )
}

export default SkillsWrapper