import React, { Component } from "react";

class addBeer extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="name" name="name" />
          <input type="text" placeholder="tagline" name="tagline" />
          <input type="text" placeholder="descripton" name="descripton" />
          <input type="text" placeholder="first brewed" name="first_brewed" />
          <input type="text" placeholder="brewers tips" name="brewers_tips" />
          <input
            type="number"
            placeholder="attenuation level"
            name="attenuation_level"
          />
          <input
            type="text"
            placeholder="contributed by"
            name="contributed_by"
          />
          <input type="file" placeholder="picture" name="picture" />
        </form>
      </div>
    );
  }
}

export default addBeer;
