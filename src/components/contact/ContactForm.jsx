import React from 'react'

const ContactForm = () => {
    return (
        <div className="container">
            <form className='contact-form' onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder='ENTER YOUR NAME*' required />
                <input type="email" placeholder='ENTER YOUR EMAIL*' required />
                <input type="text" placeholder='PHONE NUMBER*' required />
                <textarea placeholder='YOUR MESSAGE*' required />
                <button className='contact-form-btn'>SUBMIT</button>
            </form>
        </div>
    )
}

export default ContactForm