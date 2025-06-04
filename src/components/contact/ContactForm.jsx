import React from 'react'
import { useTranslation } from 'react-i18next'

const ContactForm = () => {

    const { t } = useTranslation()

    return (
        <div className="container">
            <form className='contact-form' onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder={t("contact.name")} required />
                <input type="email" placeholder={t("contact.email")} required />
                <input type="text" placeholder={t("contact.phone")} required />
                <textarea placeholder={t("contact.message")} required />
                <button className='contact-form-btn'>{t("contact.submit")}</button>
            </form>
        </div>
    )
}

export default ContactForm