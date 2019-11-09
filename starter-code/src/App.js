import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import allBeer from "./components/allBeer";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import beerDetail from "./components/beerDetail";
import randomBeer from "./components/beerDetail";
import addBeer from "./components/addBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/beers" component={allBeer} />
          <Route exact path="/beer-detail/:id" component={beerDetail} />
          <Route exact path="/random-beer" component={randomBeer} />
          <Route exact path="/add-beer" component={addBeer} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
