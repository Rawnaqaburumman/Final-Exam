import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Card, Button } from 'react-bootstrap';
class Fruit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }




    render() {
        return (
            <>
                <Row>
                    {this.props.fruitArray.map((item) => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        PRICE={item.price}
                                    </Card.Text>
                                    <Button onClick={() => this.props.addFav(item.name, item.image, item.price)} variant="primary">Add to favourite </Button>
                                </Card.Body>
                            </Card>
                        )
                    }

                    )}
                </Row>
            </>
        )
    }
}

export default Fruit;