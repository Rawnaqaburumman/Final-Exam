import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Modal, Button } from 'react-bootstrap';
class FavModelForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }




    render() {
        return (
            <>
            <Modal show ={this.props.showUpdateModel} onHide = {() =>{this.props.hansleDisplayUpdateModel(this.props.selectedFruits)}}>
            <Modal.Header closeButton>
    <Modal.Title>FRUIT</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form onSubmit= {this.props.handleUpdateModel }>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" name="name" defaultValue={this.props.selectedFruits.name}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>price</Form.Label>
    <Form.Control type="text" placeholder="Enter password" name="price" defaultValue={this.props.selectedFruits.price}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>image</Form.Label>
    <Form.Control type="text" placeholder="Enter image"  name="image"defaultValue={this.props.selectedFruits.image}/>
  </Form.Group>
  <Button variant="primary" type="submit">
UPDATE
  </Button>

</Form>
  </Modal.Body>

  <Modal.Footer>
  
  
  </Modal.Footer>
  </Modal>
            </>
        )
    }
}

export default FavModelForm;