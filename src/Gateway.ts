import { SearchQuery, QiitaItems, QiitaItem, Title } from "./Domain";
import { Driver } from "./Driver";
import { Port } from "./Port";

export class Gateway extends Port {
  constructor(readonly driver: Driver) {
    super();
  }
  async getQiitaItems(tags: SearchQuery): Promise<QiitaItems> {
    return this.driver.getQiitaItems(tags.toQueryString()).then(r => new QiitaItems(r.map(it => new QiitaItem(new Title(it.title)))))
  }
}
