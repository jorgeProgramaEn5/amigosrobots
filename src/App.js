import React from "react"
import ListCard from "./ListCard"
import SearchBox from "./SearchBox"
import Scroll from "./Scroll"
import "tachyons"
import './App.css';
// import {robots} from './users';


class App extends React.Component {
    constructor() {
        super()
        this.state= {
            robots: [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
           return response.json();
        })
        .then(user=>{
            this.setState({robots:user})
        })
    }
    onSearchChange = (event)=> {
        this.setState({ searchfield: event.target.value })
        

    }

    render () {
        const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="">Mis Amigos Robots Programadores</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ListCard robots={filterRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App