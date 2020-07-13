import React from 'react'
import {Form, FormControl, Navbar, Button} from 'react-bootstrap'
import '../style/Nabar.css'

export default class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {world:''}
        
    }
    
    
    handleChange=(e)=>{
        e.preventDefault()
        this.setState(
            {world: e.target.value}
        )
        
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const worldRef = this.state.world
        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${worldRef}`)
        .then(res =>res.json())
        .then(respuesta => {
          console.log(respuesta.drinks[0])
        })
    }
    render(){
        return(
          <Navbar className='bg-dark' > 
            <Form className='form' inline onSubmit={this.handleSubmit}> 
              <FormControl type="text" placeholder="Search" className=" mr-sm-2 search" onChange={this.handleChange} />
              <Button type="submit">Submit</Button>
            </Form>
          </Navbar>
        )

    }
}
