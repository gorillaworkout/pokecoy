import React, { Component } from 'react'
import '../../styles/Bag.scss'
import Header from '../../Components/Header/Header'
import Card from '../../Components/Card/Card'
import {useDispatch,useSelector} from 'react-redux'
import { FullPageLoading } from '../../Components/Loading/Loading'
import {useParams} from 'react-router-dom'


export default function Bag(){
    const Product = useSelector(state=>state.Product)
    const {pokemon} = useParams()
    const renderPokemon=()=>{
        var allPokemon = Product.allPokemon

        return allPokemon.map((val,index)=>{
            console.log(val)
            if(val.catching === true){
                // console.log(pokemon)
                return (
                    <Card
                        arr={{
                            pokemon:val.name,
                            img:val.sprites.front_default,
                            totalPokemon:1
                        }}
                    />
                )

            }
        })
    }

    return (
        <>
            <div className="container-bag">
                <Header/>
                <div className="box-body-bag">
                    {renderPokemon()}
                </div>
            </div>
        </>
    )
}