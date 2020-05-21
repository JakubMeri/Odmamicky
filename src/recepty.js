import React, { useState, useEffect } from 'react'
import './recepty.css'
import axios from 'axios'
import uuid from 'react-uuid'
import Recept from './recept.js'
import { render } from '@testing-library/react'
import OtvorenyRecept from './otvorenyRecept.js'

export default function Recepty() {

const [ najdeny, Hladane ] = useState("");
const [ recepty, novyRecept ] = useState([]);
const [ query, setQuery ] = useState("");
const [ id, noveID ] = useState(0);

const novy = (e) => {
    Hladane(e.target.value)
}
useEffect( ()=> {
    getRecepies();
},[query]);

const getRecepies = async () => {
    try{
        if(query === ""){

        }
        else{
        const data = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
        novyRecept(data.data.recipes);
    }
    }
    catch(error){
        console.log(error);
    }
}

const clickEvent = (e) =>{
    e.preventDefault();
    noveID(e.target.value);
}

const renderData = () => {
    recepty.forEach( recept => {
        if(recept.recipe_id == id){
            return {
                receptTitul: recept.title,
                receptImg: recept.image_url
            }
        }
        else{
            
        }
    })
}

const onSubmit = (e)=>{
    e.preventDefault();
    setQuery(najdeny);
    Hladane("");
}
const regEx = /[\s-]/;
    return (
        <div className="body">
            <div className="wrapper">
                <h1 className="nadpis-strany">Recepty</h1>
                <main>
                    <div className="hladaj"><form onSubmit={onSubmit}><input type="text" placeholder="Čo hľadáš...?" value={najdeny} onChange={novy} /><button type="submit">Hľadaj</button></form></div>
                    <div className="nadpis"><h3>Zoznam receptov</h3></div>
                <aside>
                    <ul>
                        { recepty.map( recept => (
                            <Recept key={uuid()} kliknutie={clickEvent} hodnota={recept.recipe_id} img={recept.image_url} titul={recept.title.length > 18 ? `${recept.title.split(regEx).splice(0,2).join(" ")}...`  : recept.title}/>
                        ))}
                    </ul>
                </aside>
                <div className="zobraz">
                 {recepty.length === 0 ? <h1 className="empty">Zadaj názov potraviny v angličtine</h1> : recepty.map(recept => ( <OtvorenyRecept key={uuid()} titul={Number(recept.recipe_id) === Number(id) ? recept.title : null} obrazok={recept.recipe_id == id ? recept.image_url : null} link={recept.recipe_id == id ? recept.source_url : null}/>))}
                </div>
                </main>
            </div>
        </div>
    )
}
