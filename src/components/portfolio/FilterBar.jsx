import { useTranslation } from 'react-i18next';
import { categories } from '../../utils/dataSource';

const FilterBar = ({ onCategoryChange, active }) => {

  const { t } = useTranslation()

  return (
    <div className='filter'>
      {categories.map(item => (
        <button
          className={`filter-btn ${active === item.key ? "active" : ""}`}
          onClick={() => onCategoryChange(item.key)}
          key={item.key}>
          {t(`portfolio.${item.key}`)}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
