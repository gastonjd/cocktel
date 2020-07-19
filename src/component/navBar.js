import React from 'react'
import {Form, FormControl, Navbar, Button} from 'react-bootstrap'
import '../style/Nabar.css'


export class NavBar extends React.Component{
    constructor(props){
      super(props);
      this.state={world:''}
    }
    handleChange = (e)=>{
      
      this.setState(
        {world: e.target.value}
      )
    }
    onSearch = () =>{
      this.props.handle(this.state.world)
    }
    render(){
        return(
          <Navbar className='bg-dark' > 
            <Form className='form' inline> 
              <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={this.handleChange}/>
              <Button onClick={this.onSearch}>Submit</Button>
            </Form>
          </Navbar>
          
        )

    }
}
