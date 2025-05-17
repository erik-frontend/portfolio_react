import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../utils/SectionTitle'
import FilterBar from './FilterBar'
import PortfolioCard from './PortfolioCard'
import "./portfolio.scss"
import { portfolioItems } from '../../utils/dataSource'
import { AnimatePresence } from 'framer-motion'

const Portfolio = () => {

    const [category, setCategory] = useState('all');

    const [classActive, setClassActive] = useState(true)

    const filteredItems = useMemo(() => {
        return category === "all"
            ? portfolioItems
            : portfolioItems.filter(item => item.category === category)
    }, [category])

    const handleCategoryChange = (key) => {
        setCategory(key)
        setClassActive(!classActive)
    };

    console.log(classActive);


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
                <AnimatePresence mode="popLayout">
                    <PortfolioCard items={filteredItems} classActive={classActive} />
                </AnimatePresence>
            </div>
            <span className="portfolio-more">And many more to come!</span>
        </section>
    )
}

export default Portfolio
