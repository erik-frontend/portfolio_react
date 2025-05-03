import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../utils/SectionTitle'
import FilterBar from './FilterBar'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {

    const { t } = useTranslation()

    return (
        <section className='portfolio'>
            <div className="portfolio-top">
                <SectionTitle title="PORTFOLIO" />
            </div>
            <div className="portfolio-filter">
                <FilterBar/>
            </div>
            <div className="portfolio-images">
                <PortfolioCard/>
            </div>
        </section>
    )
}

export default Portfolio