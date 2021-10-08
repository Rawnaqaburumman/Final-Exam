import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Row, Card, Button } from 'react-bootstrap';
import FavModelForm from './favModelForm';
import { withAuth0 } from "@auth0/auth0-react";
class FavFruit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fruitFav: [],
      showUpdateModel: false,
      selectedFruits: {},

    }
  }

  hansleDisplayUpdateModel = (fruit) => {
    this.setState({
      showUpdateModel: !this.state.showUpdateModel,

      selectedFruits: fruit

    })


  }
  handleUpdateModel = async (e) => {
    e.preventDefault();
    console.log(e)
    const body = {
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value,


    }

    console.log(body)
    const REACT_APP_SERVER = process.env.REACT_APP_SERVER
    await axios.put(`${REACT_APP_SERVER}/fruitfav/${this.state.selectedFruits._id}`, body).then(updatefruit => {
      console.log(updatefruit)
      const newFruit = this.state.fruitFav.map(fruit => {
        if (fruit._id === this.state.selectedFruits._id) {

          fruit = updatefruit.data

          return fruit

        }
        return fruit

      })

      this.setState({
        fruitFav: newFruit,
        selectedFruits: {}

      })

    })
    this.hansleDisplayUpdateModel(this.state.selectedFruits);

  }

  deleteFav = async (_id) => {
    const REACT_APP_SERVER = process.env.REACT_APP_SERVER
    await axios.delete(`${REACT_APP_SERVER}/fruitfav/${_id}`).then(deletedData => {

      if (deletedData) {

        const newFruit = this.state.fruitFav.filter(
          (fruit) => fruit._id !== _id


        );
        this.setState({
          fruitFav: newFruit

        })
      }


    })


  }

  componentDidMount = async () => {
    const REACT_APP_SERVER = process.env.REACT_APP_SERVER
    console.log(this.props.auth0.user.email)
    await axios.get(`${REACT_APP_SERVER}/fruitfav?email=${this.props.auth0.user.email}`).then(resutle => {
      console.log(resutle.data)
      this.setState({
        fruitFav: resutle.data

      })


    })

  }



  render() {
    return (
      <>
        <Row>
          {this.state.fruitFav.map((item) => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    PRICE={item.price}
                  </Card.Text>
                  <Button onClick={() => this.deleteFav(item._id)} variant="primary">DELETE </Button>
                  <Button onClick={() => this.hansleDisplayUpdateModel(item)} variant="primary">UPDATE </Button>
                </Card.Body>
              </Card>
            )
          }

          )}
        </Row>
        <FavModelForm
          showUpdateModel={this.state.showUpdateModel}
          selectedFruits={this.state.selectedFruits}
          hansleDisplayUpdateModel={this.hansleDisplayUpdateModel}
          handleUpdateModel={this.handleUpdateModel}


        />

      </>
    )
  }
}

export default withAuth0(FavFruit);
