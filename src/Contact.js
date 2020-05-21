import React from 'react'
import './contact.css'

export default function contact() {
    return (
        <div className="contact">
            <form className="contact-form" action="">
                <label htmlFor="">Predmet</label>
                <input type="text" placeholder="Predmet správy..."/>
                <label htmlFor="">Správa</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Správa..."></textarea>
                <button type="submit">Odoslať</button>
            </form>
        </div>
    )
}
