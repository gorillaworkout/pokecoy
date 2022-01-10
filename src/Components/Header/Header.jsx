import React, { Component } from 'react'
import '../../styles/Header.scss'
import LogoPokemon from '../../Assets/pokelogonew.png'
import BagPokemon from '../../Assets/bag.png'
import {Link,NavLink} from 'react-router-dom'



export default function Header(){

    return (
        <>
            <div className="header-home">
                <Link to='/' className="img-box-logo">
                    <img src={LogoPokemon} alt="" />
                </Link>
                <Link to='/bag' className="img-box-bag">
                    <img src={BagPokemon} alt="" />
                </Link>
            </div>
        </>
    )
}