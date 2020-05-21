import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Heading() {

    const [menu, showMenu] = useState(false);

    const menuShow = () => {
        let show = !menu;
        showMenu(show);
    }

    return (
            <div>
                <nav>
                        <Link className="LOGO" to="/Odmamicky">Od mamičky</Link>
                    <ul className="navbar">
                        <li>
                            <Link className="link" to="/Odmamicky">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Recepty">Recepty</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Kontakt">Kontakt</Link>
                        </li>
                    </ul>
                    <button onClick={menuShow} className="mobile-menu-btn">{menu === false ? <i className="fas fa-hamburger"></i> :<i style={{color: "#ff7e5f"}} className="fas fa-hamburger"></i>}</button>
                </nav>
             {menu === false ? null :   
                <div className="mobile">
                    <Link className="link-mobile" onClick={menuShow} to="/Odmamicky">Home</Link>
                    <Link className="link-mobile" onClick={menuShow} to="/Recepty">Recepty</Link>
                    <Link className="link-mobile" onClick={menuShow} to="/Kontakt">Kontakt</Link>
                </div>}
            </div>
    )
}
