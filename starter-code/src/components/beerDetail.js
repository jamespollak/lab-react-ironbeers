import React, { Component } from "react";
import Service from "../API/Service";
import SingleBeer from "./singleBeer";

class beerDetail extends Component {
  constructor() {
    super();
    this.state = {
      beer: null
    };
    this.BeerService = new Service();
  }

  componentDidMount = async () => {
    //extract id from param
    const { id } = this.props.match.params;
    //make API call
    const beer = await this.BeerService.getOneBeer(id);
    //set state
    this.setState({ beer });
  };

  render() {
    return (
      <div>
        <SingleBeer {...this.state.beer} isDetailed={true} />
      </div>
    );
  }
}

export default beerDetail;
