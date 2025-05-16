import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../utils/SectionTitle'
import FilterBar from './FilterBar'
import PortfolioCard from './PortfolioCard'
import "./portfolio.scss"
import { portfolioItems } from '../../utils/dataSource'

const Portfolio = () => {

   const [category, setCategory] = useState('all');  

    const filteredItems = useMemo(() => {
        return category === "all" 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === category)
    }, [category])

    const handleCategoryChange = (key) => setCategory(key);

    const { t } = useTranslation()

    return (
        <section className='portfolio'>
            <div className="portfolio-top">
                <SectionTitle title="PORTFOLIO" />
            </div>
            <div className="portfolio-filter">
                <FilterBar onCategoryChange={handleCategoryChange}
                    active={category} />
            </div>
            <div className="portfolio-images">
                <PortfolioCard items={filteredItems} />
            </div>
        </section>
    )
}

export default Portfolio
