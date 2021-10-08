import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Fruit from './fruit';
import { withAuth0 } from '@auth0/auth0-react';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fruitArray:[],
    }
  }


  addFav = async (name,image,price)=>{
    const email =this.props.auth0.user.email
    const body = {name,image,price,email}  
    
    console.log("Im body" ,body)
    const REACT_APP_SERVER = process.env.REACT_APP_SERVER
    await axios.post(`${REACT_APP_SERVER}/fruitfav`,body)
    console.log("body", body)
    
     }
    
//-----------------------------------------------------------------------------
  componentDidMount = async () => {
    const REACT_APP_SERVER = process.env.REACT_APP_SERVER
    await axios.get(`${REACT_APP_SERVER}/fruit`).then((result) => {

      this.setState({
        fruitArray:result.data

      })
    })
    console.log(this.state.fruitArray)
  }
//----------------------------------------------------------------------------

  render() {
    return (
      <>
        <h1>API Fruits</h1>
        <Fruit
        fruitArray={this.state.fruitArray}
        addFav={this.addFav}
        />
      </>
    )
  }
}




export default withAuth0(Home);
