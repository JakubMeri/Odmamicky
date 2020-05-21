import React from 'react'
import './recepty.css'

export default function otvorenyRecept(props) {

    const BG = {
        background: `url(${props.obrazok}) center no-repeat`,
        backgroundSize: "cover"
    }

    const render = () => {
    if(props.titul === null){

    }
    else{
        return(
        <div className="receptBox" style={BG}>
            <div className="bottom"></div>
            <h1>{props.titul}</h1>
                <a target="_blank" href={props.link}><img className="img" src={props.obrazok} alt=""/></a>
        </div>)
    }
}
    return (
        <div>
        {render()}
        </div>
    )
}
