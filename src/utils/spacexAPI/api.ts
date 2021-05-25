import { LaunchesResponse, RocketsResponse } from "./types";

type RequestOptions = {
  endpoint: string;
  method?: string;
};

class SpaceX {
  private url: string;

  constructor() {
    this.url = "https://api.spacexdata.com/v4";
  }

  async request<T>({ endpoint, method = "GET" }: RequestOptions): Promise<T> {
    const response = await fetch(`${this.url}/${endpoint}`, {
      method,
      cache: "force-cache",
    });

    const body = await response.json();
    if (response.status !== 200) {
      throw new Error(body);
    }

    return body;
  }

  async getLaunches(): Promise<LaunchesResponse[]> {
    return await this.request({ endpoint: "launches" });
  }

  async getRockets(): Promise<RocketsResponse[]> {
    return await this.request({ endpoint: "rockets" });
  }
}

export default new SpaceX();
