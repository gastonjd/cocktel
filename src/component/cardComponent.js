import React from 'react'
import {Card} from 'react-bootstrap'
import '../style/box-list.css'
import {Container, Row, Col} from 'react-bootstrap'


export const CardCoctel = (props) =>{
    var result='';
    var cont = 1;
    for (var name in props.item) {
      if((`${name}` === `strIngredient${cont}`) && (`${props.item[name]}` !== 'null')){
        result += `${props.item[name]}` + ',' ;
        cont = cont + 1;
      }
      
    
    }
    cont = 0;
    return(
      <Container>
        <Row>
          <Col md={10}>
            <Card>
              <Card.Img variant='left' src={props.item.strDrinkThumb}></Card.Img>
              <Card.Body>
                <Card.Title>{props.item.strDrink}</Card.Title>
                <Card.Text>Ingrendients: {result}</Card.Text>
                <Card.Link  variant='right' href="#" onClick={()=>{props.onSeemore(props.item)}}>See more</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    )
}


