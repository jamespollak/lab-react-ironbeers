import axios from "axios";

export default class Service {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BEER_API_URL,
      withCredentials: true
    });
  }
  getAllBeers = async () => {
    const { data } = await this.service.get("beers");
    return data;
  };
  getOneBeer = async id => {
    const { data } = await this.service.get(`beers/${id}`);
    return data;
  };
  getRandomBeer = async id => {
    const { data } = await this.service.get(`beers/random`);
    return data;
  };
}
