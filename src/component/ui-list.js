import React from 'react'
import {Alert} from 'react-bootstrap'
import {CardCoctel} from './cardComponent'
import {Container, Row, Col} from 'react-bootstrap'
import '../style/box-list.css'


export const UI = (props)=>{
        
        let ban = false
        if(props.cant>0){ban=true}
        return(
            
            <div className='box-list'>
                {ban?<h3>Cantidad resultados:{props.cant}</h3>:<h3></h3>}
                { props.itemResult?
                props.itemResult.map((i)=>{
                return(
                    <CardCoctel key={i.idDrink} item={i} onSeemore = {(i)=>{props.onSeemore(i)}}></CardCoctel>
                )
              }):<Alert variant='warning'>No se encuentra la bebida que usted intenta buscar.</Alert>}

            </div>
            
        )
}

export const CardDetalle = (props) => {
    let alc = '';
    if(props.item.strAlcoholic === 'Alcoholic'){alc='Yes'}else{alc='No'}
    var result='';
    var cont = 1;
    for (var name in props.item) {
      if((name === `strIngredient${cont}`) && (props.item[name] !== 'null')){
        result += `${props.item[name]}` + ',' ;
        cont = cont + 1;
      }
      
    
    }
    cont=0
    return(
        <Container className='detalle'>
            <Row>
                <a href='#' onClick={()=>{props.onBack()}}>Back</a>
            </Row>
            <Row>
                <Col>
                    <h3><b>{props.item.strDrink}</b></h3>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                    <img style={{height:'100px', width: '100px'}} src={props.item.strDrinkThumb}></img>
                </Col>
                <Col md={6}>
                    <ul className='list'>
                        <li><b>Ingredients:</b>{result}</li>
                        <li><b>Glass:</b>{props.item.strGlass}</li>
                        <li><b>Category:</b>{props.item.strCategory}</li>
                        <li><b>Alcohol:</b>{alc}</li>

                    </ul>
                </Col>
            </Row>
            <Row>
                <p><b>Instruction:</b>{props.item.strInstructions}</p>
            </Row>
        </Container>
    )

}
