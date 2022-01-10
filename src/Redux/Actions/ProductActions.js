import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {Majoo} from '../../Helpers/apiUrl'
toast.configure()

export const getAllPokemon=()=>{
    return (dispatch)=>{
        var allDataPokemonArray = []
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=100&limit=100`)
        .then((res)=>{
            console.log(res.data.results)
            var allPokemon = res.data.results
            allPokemon.forEach((val,index,array)=>{
                axios.get(`${val.url}`)
                .then((res)=>{
                    allDataPokemonArray.push(res.data)
                    if(index === array.length - 1){
                        dispatch({type:'GETALLPOKEMON',allPokemon:allDataPokemonArray})
                    }
                }).catch((err)=>{
                    console.log(err)
                })
                
            })

        }).catch((err)=>{
            console.log(err)
        })
    }
}


// export const GetAllProduct=()=>{
//     return (dispatch)=>{
//         axios.get(`${Majoo}`)
//         .then((res)=>{
//             console.log(res.data)
//             var allData = res.data
//             var getAllProgress = []
//             var getAllSuccess  = []
//             allData.forEach((val,index,array)=>{
//                 if(val.status === 0){
//                     getAllProgress.push(val)
//                 }else {
//                     getAllSuccess.push(val)
//                 }

//                 if(index === array.length - 1){
//                     // console.log(index)
//                     // console.log(getAllProgress)
//                     // console.log(getAllSuccess)
//                     // console.log(allData)
//                     dispatch({type:'GETALLPRODUCT',
//                     allProduct:allData,
//                     allOnProgress:getAllProgress,
//                     allOnSuccess:getAllSuccess})
//                 }
//             })
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }
// }