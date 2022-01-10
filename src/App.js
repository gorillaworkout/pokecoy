import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from './Pages/Home';
import Detail from './Pages/Detail/Detail.jsx'
import Catching from './Pages/Catch/Catch';
import Bag from './Pages/Bag/Bag';
import { getAllPokemon } from './Redux/Actions/ProductActions';
import {FullPageLoading} from './Components/Loading/Loading.jsx'

function App() {
  const dispatch = useDispatch()
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    dispatch(getAllPokemon())
    setLoading(false)
  })

  if(loading){
    // console.log('masih stuck di app page baru jalan')
    return (
      <div className='d-flex justify-content-center align-items-center' style={{height:"100vh", width:"100vw"}}>
          {FullPageLoading(loading,100,'#0095DA')}
      </div>
    )
  }
  return (
    <Routes>
      <Route exact path = '/' element={<Home new_params={"testing"}/>}/>
      <Route exact path = '/detail/:pokemon' element={<Detail new_params={"testing"}/>}/>
      <Route exact path = '/catching/:pokemon' element={<Catching new_params={"testing"}/>}/>
      <Route exact path = '/bag' element={<Bag new_params={"testing"}/>}/>
  </Routes>
  );
}

export default App;
