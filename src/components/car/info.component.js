import React from 'react';
import { Card, Button } from 'react-bootstrap';
import InfoTitle from '../title/info.component';

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            card: JSON.parse(localStorage.getItem("details"))
         }
         this.goBack = this.goBack.bind(this); 
    }

    goBack(){
        this.props.history.goBack();
    }
    
    render() {
        console.log(this.state.card);
        return(
            <div className="App">
                <InfoTitle/>
                <Card className="borderNone">
                    <Card.Img variant="top" src={`http://localhost:8000/images/${this.state.card.image}`}/>
                        <Card.Body>
                                <Card.Header><Card.Title>{this.state.card.price} {this.state.card.currency}</Card.Title></Card.Header>
                                <Card.Header><Card.Title>{this.state.card.title}</Card.Title></Card.Header>
                            <Card.Text>
                                <Card.Title>Descriere</Card.Title>
                                {this.state.card.description}
                            </Card.Text>
                            <Button variant="primary" onClick={this.goBack}>Inapoi</Button>
                        </Card.Body>
                 </Card>
            </div>
        );
    }
}

export default InfoCard;