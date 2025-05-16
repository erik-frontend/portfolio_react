import { categories } from '../../utils/dataSource';

const FilterBar = ({ onCategoryChange, active }) => {
  return (
    <div className='filter'>
      {categories.map(item => (
        <button 
          className={`filter-btn ${active === item.key ? "active" : ""}`} 
          onClick={() => onCategoryChange(item.key)}
          key={item.key}>
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
