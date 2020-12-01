import { QiitaItems, SearchQuery } from "./Domain";

export abstract class Port {
  abstract getQiitaItems(tags: SearchQuery): Promise<QiitaItems>;
}
