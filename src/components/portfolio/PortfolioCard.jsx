import React from 'react'

const PortfolioCard = ({portfolioItems, filterItems}) => {
    return (
        <>
            {portfolioItems.map(item => (
                <div className='portfolio-card' key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div className="portfolio-card-text">
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                        <a href="">DEMO</a>
                        <a href="">GIT</a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PortfolioCard