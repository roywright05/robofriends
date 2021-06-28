import React from "react";
import Card from "./Card";
//import robots from './robots';


const CardList = ({robots}) => {

    const cardsArrays = robots.map( (user, index) => {
        return <Card 
            id={robots[index].id} 
            name={robots[index].name} 
            email={robots[index].email} 
            key={index}
            />;
    });
    return (<div>
        {cardsArrays}
        </div>);
}

export default CardList;

/*

*/