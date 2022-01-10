import React, { useState,useEffect } from 'react'
import '../../styles/Catch.scss'
import Header from '../../Components/Header/Header'
import { FullPageLoading } from '../../Components/Loading/Loading'
import Gotcha from '../../Assets/gotcha.png'
import Failed from '../../Assets/failed.png'
import {Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'


export default function Catching(){
    const Product = useSelector(state=>state.Product)
    const dispatch = useDispatch()
    // console.log(Product)
    // console.log(Product.isLoadingProduct)
    const {pokemon} = useParams()
    const [isLoading,setIsLoading]=useState(true)
    const [isCatching,setIsCatching]= useState(false)
    const [CartPokedex,setCartPokedex]=useState(JSON.parse(localStorage.getItem('pokebag')))
    const [allPokemonRedux,setAllPokemonRedux]=useState(Product.allPokemon)
    
    const [onCatching,setOnCatching]=useState(false)
    // console.log(Product.allPokemon)
    // console.log(allPokemonRedux)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const catchingPokemon=()=>{
        setOnCatching(true)
        var allPokemonArray = Product.allPokemon
        // console.log(allPokemonArray)
        // setAllPokemonRedux(Product.allPokemon)
        var cart = JSON.parse(localStorage.getItem('pokebag'))
        // console.log(cart)
        let result = Math.floor(Math.random() * 2) + 0; 
        setTimeout(()=>{
            if(result === 1) {
                var findIndex = allPokemonArray.findIndex((val)=>{
                    return val.name === pokemon
                })
                allPokemonArray[findIndex].catching = true

                console.log(allPokemonArray)
                console.log(findIndex)
                setIsCatching(true)
                setIsLoading(false)
                setOnCatching(false)
                dispatch({type:'GETALLPOKEMON',allPokemon:allPokemonArray})
            }else {
                // console.log('else 45')
                setIsCatching(false)
                setIsLoading(false)
                setOnCatching(false)
            }
        },1000)
        
    }

    
    useEffect(()=>{

        if(Product.isLoadingProduct === !true){
            console.log('60')
            catchingPokemon()
        }    

    },[Product.isLoadingProduct])

    const catchAgain=()=>{
        catchingPokemon()
    }

    if(onCatching){
        return (
            <>
                <div className='d-flex justify-content-center align-items-center' style={{height:"100vh", width:"100vw"}}>
                    {FullPageLoading(isLoading,100,'#0095DA')}
                </div>
            </>
        )
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
            <div className="box-container-catching">
                <Header/>

                {
                    isCatching ? 
                    <div className="box-catching">
                        <div className="box-gotcha">
                            <img  src={Gotcha} alt="" />
                        </div>
                        <p>SUCCESSFUL!</p>
                        <p>Gotta catch em'all</p>
                        <Link to="/" className="box-back-to-home">
                            <p>Back to Home</p>
                        </Link>
                    </div>
                    :
                    <div className="box-catching">
                        <div className="box-gotcha">
                            <img  src={Failed} alt="" />
                        </div>
                        <p>FAILED</p>
                        <p>THEY RUN! CATCH THEM AGAIN!</p>
                        <div className="catch-again" onClick={catchAgain}>
                            <p>CATCH!!</p>
                        </div>
                        <Link to="/" className="box-back-to-home">
                            <p>Back to Home</p>
                        </Link>
                    </div>
                }

            </div>
        </>
    )
}