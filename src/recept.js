import React from 'react'

export default function recept(props) {
    return (
        <>
            <li value={props.hodnota} onClick={props.kliknutie} key={props.id}><img className="rec-img" src={props.img} alt=""/> {props.titul}</li>
        </>
    )
}
