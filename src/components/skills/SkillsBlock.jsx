import React from 'react'

const SkillsBlock = ({icon}) => {
    
    return (
        <>
            <div className="skills-block">
                <img src={icon.icon} alt="" className="skills-img" />
                <span className='img-title'>{icon.name}</span>
            </div>
        </>
    )
}

export default SkillsBlock