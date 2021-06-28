import React from "react";
import "../Card.css";

const Card = ({name, email, id}) => {

    //const {name, email, id} = props;
    return (
        <div  className= "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
           <img alt="img not found" src={`https://robohash.org/${id}?200X200`} /> 
           <div>
            <h2 className="card">{name}</h2>
            <p>{email}</p>
           </div>

        </div>
    );
}

export default Card;

/**
 * 
 * you can destructure props in the parameters as objects by passing the name of each property in {}
 * 
 * for <div>  className= "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
 */