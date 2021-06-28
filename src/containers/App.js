import React, { Component } from "react";
//import robots from "./robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "../App.css";
import robots from "../robots";
import Scroll from "../components/Scroll";


class App extends Component{

    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            return res.json();
        })
        .then( users => {
            this.setState({robots: robots});
            //console.log(users);

            //robots: users
        });
        //this.setState({robots: robots});
    }

     onSearchChange = (event) => {        
        this.setState({ searchfield: event.target.value});
        //console.log(event.target);
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        if(robots.length === 0){

            return (<h1>Robots Loading</h1>);

        }else{ 
        return (
            <div className="tc">
                <h1 className="f1">ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots} />
                </Scroll>
            </div>);
        }
    }

    
}

export default App;

/*
        State >> props

        event - the parameter passed into a function (can be named anything)
        event.target - returns the html tag that is referenced 
            by the function (where the function is passed)
        event.target.value - reference the input received by the html tag
*/