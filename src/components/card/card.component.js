import React from 'react';
import { Button , Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class CarCard extends React.Component {

    articleId = () => {
        this.props.onClick(this.props.object);
    }
    
    render() {
        return(
            <div className="card">
                <Card>
                    <Card.Img variant="top" src={`http://localhost:8000/images/${this.props.img}`}/>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Button variant="primary" onClick = {this.articleId}>Vezi anuntul</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CarCard;