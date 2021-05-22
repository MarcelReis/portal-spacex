import { LauchesResponse } from "./types";

class SpaceX {
  private url: string;

  constructor() {
    this.url = "https://api.spacexdata.com/v4";
  }

  async getLauches(): Promise<LauchesResponse> {
    const response = await fetch(`${this.url}/launches`, {
      method: "GET",
    });

    return await response.json();
  }
}

export default new SpaceX();
