import React, {useState} from 'react';
import '../style/App.css';
import {NavBar} from './navBar'
import {UI, CardDetalle} from './ui-list'


export const  App = ()=> {
  const [itemResult, setResult] = useState([])
  const [itemSelect, setItemSelect] = useState(null)
  const canti = itemResult.length
  const handleSubmit = (worldRef) =>{
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${worldRef}`)
    .then(res =>res.json())
    .then(respuesta => {
      setResult(respuesta.drinks)})
  }

  const seeMore = (item)=>{
    setItemSelect(item)
  }
  const onBack = () =>{
    setItemSelect(null)
  }
  
  return (
    
      <div>
        
        <NavBar handle={handleSubmit}></NavBar>
        {itemSelect?<CardDetalle  item={itemSelect} onBack={onBack}></CardDetalle>:<UI itemResult={itemResult} onSeemore={seeMore} cant={canti}></UI>}
        

      </div>
    
    
    
  )
}



//
//