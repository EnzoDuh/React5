import React, { Component } from "react";
import "./App.css";
import Quotes from "./Quotes.jsx";
import Data from "./DataAPI.jsx";

const quote = {
    character: "",
    image: "",
    quote: "",
    characterDirection: ""
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: quote
        };
    }
    getQuote() {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    quotes: data[0]
                });
            });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Data selectQuote={() => this.getQuote()} />
                    <Quotes quote={this.state.quotes} />
                </header>
            </div>
        );
    }
}

export default App;
