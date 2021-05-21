import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            page: 50,
            pokemons : []
        };
    }

    handleClick = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${this.state.page}`)
            .then((response) => response.json())
            .then((name) => {
                const newPokemons = [...this.state.pokemons, ...name.results ]
                this.setState({ ...this.state, page: this.state.page+50, pokemons: newPokemons });
            });
    }

    componentDidMount(){

        fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
        .then(response => response.json())
        .then(name => this.setState({pokemons:name.results}));
    }
    
    
    render(){
        const { pokemons } = this.state;

        return(

            <div className="App">
                <CardList pokemons={pokemons}></CardList>
                
                <button onClick={this.handleClick}> 
                +50</button>

            </div>
            
        );
    }
}

export default App;
