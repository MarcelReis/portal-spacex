import { LaunchesResponse, RocketsResponse } from "./types";

class SpaceX {
  private url: string;

  constructor() {
    this.url = "https://api.spacexdata.com/v4";
  }

  async getLaunches(): Promise<LaunchesResponse[]> {
    const response = await fetch(`${this.url}/launches`, {
      method: "GET",
    });

    return await response.json();
  }

  async getRockets(): Promise<RocketsResponse[]> {
    const response = await fetch(`${this.url}/launches`, {
      method: "GET",
    });

    return await response.json();
  }
}

export default new SpaceX();
