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
  static from() {
    return new QiitaItem(new Title(""));
  }
  constructor(readonly title: Title) {}
}
export class QiitaItems extends Fcc<QiitaItem> {
  static from() {
    return new QiitaItems([QiitaItem.from()]);
  }
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
