import React from 'react'

const Info = ({ t }) => {
    return (
        <>
            <div className="info">
                <div className="container">
                    <h1 className="info-title">{t("itBerries.title")}</h1>
                    <p className="info-text">{t("itBerries.description")} </p>
                    <button className="info-btn">{t("itBerries.button")}</button>
                </div>
            </div>
        </>
    )
}

export default Info