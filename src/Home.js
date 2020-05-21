import React from 'react'
import './home.css'
import Ikony from './Ikony.js'
import {
    BrowserRouter as Router, Link
  } from "react-router-dom";


export default function home(props) {


    return (
        <div className="body">
            <div className="home">

                <div className="overlay">
                    <h1 className="home-text">Recepty ako od mamičky.</h1>
                    <Ikony />
                    <Link to="/Recepty" className="btn-More"><span></span><span></span>Šup na recepty</Link>
                </div>
            </div>
        </div>
    )
}
