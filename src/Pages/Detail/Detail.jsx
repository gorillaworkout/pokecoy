import React, { useEffect,useState } from 'react'
import '../../styles/Detail.scss'
import Header from '../../Components/Header/Header'
import BagPokemon from '../../Assets/bag.png'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { FullPageLoading } from '../../Components/Loading/Loading'
import Pokeball from '../../Assets/pokeball.png'
import {Link,NavLink} from 'react-router-dom'
import SmallCard from '../../Components/Card/SmallCard'
import TypeCard from '../../Components/Card/TypeCard'
export default function Detail(){
    const { pokemon } = useParams();
    const [isLoading,setIsLoading]=useState(true)
    const [dataPokemon,setDataPokemon]=useState([])
    console.log(dataPokemon)
    console.log(pokemon)

    useEffect(()=>{
        const fetchingData=()=>{
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((res)=>{
                console.log(res.data)
                setDataPokemon(res.data)
                setIsLoading(false)
            }).catch((err)=>{
                console.log(err)
            })
        }
        if(isLoading === true){
            fetchingData()
        }
    },[isLoading, pokemon])


    const renderType=()=>{
        return dataPokemon.types.map((val,index)=>{
            return (
                <TypeCard
                    arr={{
                        name:val.type.name
                    }}
                />
            )
        })
    }    

    const renderMoves=()=>{
        return dataPokemon.moves.map((val,index)=>{
            return (
                <SmallCard arr={{
                    name:val.move.name
                }}/>
            )
        })
    }
    const renderAbility=()=>{
        return dataPokemon.abilities.map((val,index)=>{
            return (
                <SmallCard arr={{
                    name:val.ability.name
                }}/>
              
            )
        })
    }
    if(isLoading){
        return (
            <>
                <div className='d-flex justify-content-center align-items-center' style={{height:"100vh", width:"100vw"}}>
                    {FullPageLoading(isLoading,100,'#0095DA')}
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container-detail">
                <Header/>
                <div className="body-detail-container">
                    <div className="body-left">
                        <div className="img-box-pokedex">
                            <img src={dataPokemon.sprites.front_default} alt="" />
                        </div>
                        <div className="pokedex-name">
                            <p>{pokemon}</p>
                        </div>
                        <div className="box-type-pokemon">
                           {renderType()}
                        </div>
                        <Link to={`/catching/${pokemon}`} className="btn-catching">
                            <div className="box-pokeball">
                                <img src={Pokeball} alt="" />
                            </div>
                            <p>CATCH</p>
                        </Link>
                    </div>
                    <div className="body-right">
                        <div className="body-abilities">
                            <p className="bold-item">ABILITIES</p>
                            <div className="box-card-moves">
                             {renderAbility()}
                            </div>
                        </div>
                        <div className="body-moves">
                            <p className='bold-item'>MOVES</p>
                            <div className="box-card-moves">
                                {renderMoves()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-catching-pokemon">
                        
                </div>
            </div>
        </>
    )
}