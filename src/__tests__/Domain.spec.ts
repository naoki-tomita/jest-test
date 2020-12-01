import { QiitaItem, QiitaItems, Title } from "../Domain";

describe("from", () => {
  it("should work.", () => {
    const expected = {} as QiitaItems;
    const spy = jest.spyOn(QiitaItems, "from");
    spy.mockReturnValue(expected);
    expect(QiitaItems.from()).toBe(expected);
    spy.mockRestore();

    expect(QiitaItems.from()).toEqual(new QiitaItems([new QiitaItem(new Title(""))]));
  });
});
