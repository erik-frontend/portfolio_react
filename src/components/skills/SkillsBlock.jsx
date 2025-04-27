import React from 'react'

const SkillsBlock = ({icon, name}) => {
    
    return (
        <>
            <div className="skills-block">
                <img src={icon} alt="" className="skills-img" />
                <span className='img-title'>{name}</span>
            </div>
        </>
    )
}

export default SkillsBlock