import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../utils/SectionTitle'
import FilterBar from './FilterBar'
import PortfolioCard from './PortfolioCard'
import "./portfolio.scss"
import { catigories, portfolioItems } from '../../utils/dataSource'

const Portfolio = () => {

    const [selectCategory, setSelectCategory] = useState("all")

    const [active, setIsActive] = useState(catigories[0]?.key ?? '')

    const filterItems = useMemo(() => {
        if (selectCategory === "all") return portfolioItems
        return portfolioItems.filter(item => item.category === selectCategory)
    }, [selectCategory])

    const handleActive = (key) => {
        setSelectCategory(key)
    }

    const { t } = useTranslation()

    return (
        <section className='portfolio'>
            <div className="portfolio-top">
                <SectionTitle title="PORTFOLIO" />
            </div>
            <div className="portfolio-filter">
                <FilterBar handleActive={handleActive}
                    active={selectCategory} />
            </div>
            <div className="portfolio-images">
                <PortfolioCard portfolioItems={portfolioItems} filterItems={filterItems} />
            </div>
        </section>
    )
}

export default Portfolio