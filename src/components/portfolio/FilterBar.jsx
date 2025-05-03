import React from 'react'
import { catigories } from '../../utils/dataSource'

const FilterBar = () => {
  return (
    <div className='filter'>
        {catigories.map(item => (
            <button className='filter-btn' key={item.key}>{item.label}</button>
        ))}
    </div>
  )
}

export default FilterBar