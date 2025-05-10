import React, { useState } from 'react'
import { catigories } from '../../utils/dataSource'

const FilterBar = () => {

const [active, setIsActive] = useState(catigories[0]?.key ?? '')
// console.log(active);

  const handleActive = (key) => {
    setIsActive(key)
  }

  return (
    <div className='filter'>
        {catigories.map(item => (
            <button 
            className={`filter-btn ${active === item.key ? "active" : ""}`} 
            onClick={() => handleActive(item.key)}
            key={item.key}>{item.label}</button>
        ))}
    </div>
  )
}

export default FilterBar