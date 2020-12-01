export class Fcc<T> {
  constructor(readonly values: T[]) {}
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
    return this.values.map(callbackfn);
  }
}

export class Title {
  constructor(readonly value: string) {}
}
export class QiitaItem {
  constructor(readonly title: Title) {}
}
export class QiitaItems extends Fcc<QiitaItem> {
  filterPopularItem(): QiitaItems {
    throw new Error("Method not implemented.");
  }
}

export abstract class SearchQuery {
  abstract toQueryString(): string;
}
export class Tag implements SearchQuery {
  constructor(readonly value: string) {}
  toQueryString() {
    return `tag:${this.value}`;
  }
}
