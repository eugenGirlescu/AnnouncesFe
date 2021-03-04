import React from 'react';
import './app.style.css';
import Title from '../title/title.component'
import CarCard from '../card/card.component';

class App extends React.Component {

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

    displayCars = () => {
        return(
            this.state.carData.data.map( (object, index) => (
                <CarCard key={index} name = {object.title} description={object.description} img={object.image}/>
            ) )
        );
    }

    render() {
        console.log(this.state.carData);
        if(this.state.checkData){
            return(
                <div className="App">
                    <Title/>
                    {this.displayCars()}
                </div>
            );
        }else {
            return(
                <div>Loading..</div>
            );
        }
    }
}

export default App;