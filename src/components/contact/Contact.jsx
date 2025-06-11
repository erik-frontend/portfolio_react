import React from 'react'
import "./contact.scss"
import SectionTitle from '../../utils/SectionTitle'
import { useTranslation } from 'react-i18next';
import SubtitleText from '../../utils/SubtitleText';
import Separation from '../../utils/Separation';
import ContactForm from './ContactForm';

const Contact = () => {

  const { t } = useTranslation()

  return (
    <section className='contact'>
      <div className="container">
        <SectionTitle title={t("contact.title")} />
        <SubtitleText>{t("contact.description")}</SubtitleText>
        <Separation />
      </div>
      <ContactForm />
    </section>
  )
}

export default Contact