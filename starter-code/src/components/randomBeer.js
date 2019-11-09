import React, { Component } from "react";
import Service from "../API/Service";
import SingleBeer from "./singleBeer";

class randomBeer extends Component {
  constructor() {
    super();
    this.state = {
      randomBeer: []
    };
    this.BeerService = new Service();
  }

  componentDidMount = async () => {
    const randomBeer = await this.BeerService.getRandomBeer();
    this.setState({ randomBeer });
  };

  render() {
    return (
      <div>
        <SingleBeer {...this.state.beer} isDetailed={true} />
      </div>
    );
  }
}

export default randomBeer;
