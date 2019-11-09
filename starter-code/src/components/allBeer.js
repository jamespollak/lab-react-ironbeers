import React, { Component } from "react";
import Service from "../API/Service";
import SingleBeer from "./singleBeer";
import Loader from "./loading";

// One BeerComponent that receives an object.
// a map function that renders x of BeerComponent

class allBeer extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: [],
      isLoading: true
    };
    this.BeerService = new Service();
  }

  componentDidMount = async () => {
    const allBeers = await this.BeerService.getAllBeers();
    this.setState({ allBeers, isLoading: false });
  };

  render() {
    return (
      <div>
        {this.state.isLoading && <Loader />}
        {this.state.allBeers.map((beer, i) => (
          <SingleBeer key={i} {...beer} />
        ))}
      </div>
    );
  }
}

export default allBeer;
