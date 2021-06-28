import React from "react";
import  "./Hello.css";

const Hello = (preps) => {

    return (
        <div className="f1 tc">  
            <h1 >Roy Is Making Bank This Year!</h1>
         <p > {preps.disclaimer}
         </p>
         <img  src="https://www.reipropertymanagement.net/wp-content/uploads/2019/11/bank-getty.jpg"></img>
         </div>
     );
}

export default Hello;

//default means the file only exports 1 component
//class="pa6"
//className > class in tags
//tachyons installed and imported in index.js
// this.props.propsName - pass inline, dynamic properties to 
//your component when you call  it, when component is build in a class form

// Components can be built as a const property equal to an arrow function () =>

/*
class Hello extends Component {

    render(){
        return (
           <div className="f1 tc">  
               <h1 >Roy Is Making Bank This Year!</h1>
            <p > {this.props.disclaimer}
            </p>
            <img  src="https://www.reipropertymanagement.net/wp-content/uploads/2019/11/bank-getty.jpg"></img>
            </div>
        );
    }
}

*/ 