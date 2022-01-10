const INITIAL_STATE = {
    allPokemon          :[],
    isLoadingProduct    :true
} 


// eslint-disable-next-line import/no-anonymous-default-export
export default  (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'GETALLPOKEMON' :
            console.log()
            return {...state,
                allPokemon:action.allPokemon,
                isLoadingProduct : false
            }
        
        case 'UPDATEALLPOKEMON':
            return {...state,
                allPokemon:action.allPokemon,
                isLoadingProduct: false
            }
        case 'DELETEPRODUCT':
            return {
                ...state,
                allProduct:action.allProduct
            }
        case 'GETALLCATEGORY' :
            return {...state,allCategory:action.allCategory}
            
        default:
            return state
    }
}