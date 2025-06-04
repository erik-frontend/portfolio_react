import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";


const PortfolioCard = ({ items, classActive }) => {

        const { t } = useTranslation()

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
                        <h3>{t("portfolio.title")}</h3>
                        <p>{t("portfolio.eatsome.description")}</p>
                        <div className="portfolio-demo">
                            <a href="">DEMO</a>
                            <a href="">GIT</a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </>
    )
}

export default PortfolioCard
