import React from 'react';

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            card: JSON.parse(localStorage.getItem("details"))
         }
    }

    render() {
        return(
            <h2>{this.state.card.description}</h2>
        );
    }
}

export default InfoCard;