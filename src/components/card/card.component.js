import React from 'react';
import { Button , Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class CarCard extends React.Component {
    render() {
        return(
            <div className="card">
                <Card>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CarCard;