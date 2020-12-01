import { QiitaItems, SearchQuery } from "./Domain";
import { Port } from "./Port";

export class Usecase {
  constructor(readonly port: Port) {}
  async getQiitaPopularItems(query: SearchQuery): Promise<QiitaItems> {
    const items = await this.port.getQiitaItems(query);
    return items.filterPopularItem();
  }
}
