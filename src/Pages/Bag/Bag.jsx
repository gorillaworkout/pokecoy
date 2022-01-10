import React from 'react'
import '../../styles/Bag.scss'
import Header from '../../Components/Header/Header'
import Card from '../../Components/Card/Card'
import {useSelector} from 'react-redux'


export default function Bag(){
    const Product = useSelector(state=>state.Product)

    const renderPokemon=()=>{
        var allPokemon = Product.allPokemon

        return allPokemon.map((val,index)=>{
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