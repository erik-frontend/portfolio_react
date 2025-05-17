import { motion } from "framer-motion"

const PortfolioCard = ({ items, classActive }) => {

    const cardAnim = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
        transition: { duration: 0.35, ease: 'easeOut' },
    };

    return (
        <>
            {items.map(item => (
                <motion.div
                    className="portfolio-card"
                    key={item.id}
                    layout
                    {...cardAnim}
                >
                    <img src={item.image} alt={item.title} />
                    <div className="portfolio-card-text">
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                        <a href="">DEMO</a>
                        <a href="">GIT</a>
                    </div>
                </motion.div>
            ))}
        </>
    )
}

export default PortfolioCard
