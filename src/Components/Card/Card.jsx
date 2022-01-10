import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Card.scss'

export default function Card({arr}){
    

    return (
        <>
            <Link to={`/detail/${arr.pokemon}`} className="card-pokedex">
                <div className="box-img-pokemon">
                    <img src={arr.img} alt="" />
                </div>
                <p>{arr.pokemon}</p>
                <div className="btn-catch-pokemon">
                    <p>OWNED : {arr.totalPokemon}</p>
                </div>
            </Link>
        </>
    )
}