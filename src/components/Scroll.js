import React from "react";

const Scroll = (props) => {

    //console.log(props);
    return (
    <div style={ { overflow: 'scroll' , border: '1px solid black', height: '500px' }}>
       {props.children}

    </div>
    );
}

export default Scroll;

/**
 * We often return a compoent as a self-closing tag
 * 
 * Here, we want to wrap this tag around another tag as
 * a parent to a child tag
 * 
 * 
 * Every component comes with a children property (an object) linked to properties
 * passed in 
 */