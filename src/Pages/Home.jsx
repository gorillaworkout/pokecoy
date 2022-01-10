import React, { useEffect ,useState} from 'react'
import '../styles/Home.scss'
import {useSelector} from 'react-redux'
import { FullPageLoading } from '../Components/Loading/Loading'
import Header from '../Components/Header/Header'
import ReactPaginate from 'react-paginate';
import Card from '../Components/Card/Card'
export default function Home(){
    const Product = useSelector(state=>state.Product)
    // console.log(Product)
    const [isLoading,setIsLoading]=useState(true)
    const [allDataPokemon,setAllDataPokemon]=useState([])

        // PAGINATION
     // We start with an empty list of items.
    
     const [offset,setOffset]=useState(0)
     const [perPage,setPerPage]=useState(10)
    //  const [currentPage,setCurrentPage]=useState(0)
     const [slicePokemon,setSlicePokemon]=useState([])
     const [pageCount,setPageCount]=useState(0)
    //  const [dataRenderSlice,setDataRenderSlice]=useState([])


    
    // PAGINATION
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const pagination=()=>{
       var data = allDataPokemon
       let slice = data.slice(offset,offset+perPage)
       var pageCount = (Math.ceil(data.length / perPage))
       setSlicePokemon(slice)
       setPageCount(pageCount)
   }
   useEffect(()=>{
       pagination()
       console.log('jalan sekali')
   },[])

    useEffect(()=>{
        // fetchingData()
        if(Product.isLoadingProduct === !true){
            setAllDataPokemon(Product.allPokemon)
            setIsLoading(false)
            // pagination()
        }    
        if(slicePokemon.length > 1){

        }else {
            pagination()
        }
    },[Product.allPokemon, Product.isLoadingProduct, allDataPokemon, isLoading, offset, perPage, slicePokemon.length])    
    
    
    const handlePageClick=(e)=>{
        // setOnRenderItem(true)
        const selectedPage= e.selected
        const offset = selectedPage * perPage
        console.log(selectedPage)
        // setCurrentPage(selectedPage)
        setOffset(offset)
        pagination()
        setTimeout(()=>{
            // setOnRenderItem(false)
        },1000)
     }   


    const renderPokemon=()=>{
        return slicePokemon.map((val,index)=>{
            return (
                <>
                    <Card
                        arr={{
                            pokemon:val.name,
                            img:val.sprites.front_default,
                            totalPokemon: val.catching ? 1 : 0
                        }}
                    />
                </>
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
            <div className="box-container-home">
                <Header/>
                <div className="body-home">
                    <div className="box-render-card-pokedex"> 
                        {renderPokemon()}
                    </div>  
                </div>
                <div className="body-pagination">
                    <ReactPaginate
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={(e)=>handlePageClick(e)}
                        containerClassName={"pagination"}
                        subContainerClassName={"page pagination"}
                        activeClassName={"active"}
                    />
                </div>
            </div>
        </>
    )
}