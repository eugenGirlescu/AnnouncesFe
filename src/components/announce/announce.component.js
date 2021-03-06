import React from 'react';
import './announce.style.css';
import Title from '../title/title.component'
import CarCard from '../card/card.component';
  

class Announce extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            carData: null,
            checkData: false
        }
    }

    getData = () => {
        fetch('http://localhost:8000/api/all-articles')
        .then( (response) => response.json() )
        .then( (response) => {this.setState({
            carData : response,
            checkData : true
        })});
    }

    componentDidMount = () => {
        this.getData();
    }

    goToCardInfo = (cardInfo) => {
        localStorage.setItem("details", JSON.stringify(cardInfo));
        this.props.history.push(`/article/${cardInfo.id}`); 
    }

    displayCars = () => {
        return(
            this.state.carData.data.map( (object, index) => (
                <CarCard key= {index} name = {object.title} 
                description= {object.description} 
                img= {object.image} 
                id= {object.id} 
                onClick = {() => this.goToCardInfo(object)}/>
            ) )
        );
    }

    render() {
        if(this.state.checkData){
            return(
                <div className="App">
                    <Title/>
                    <div className="cars">
                        {this.displayCars()}
                    </div>
                </div>
            );
        }else {
            return(
                <div>Loading..</div>
            );
        }
    }
}

export default Announce;