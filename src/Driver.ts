import { QiitaItems } from "./Domain";

interface QiitaItemJson {
  title: string;
  body: string;
}

export class Driver {
  getQiitaItems(query: string): Promise<QiitaItemJson[]> {
    return fetch(`https://qiita.com/api/v2/items?query=${query}`).then(it => it.json());
  }
}
