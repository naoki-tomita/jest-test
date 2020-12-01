import { when } from "jest-when";
import { QiitaItems, SearchQuery, Tag } from "../Domain";
import { Port } from "../Port";
import { Usecase } from "../Usecase";
import { mock } from "./Helper";

describe("Usecase", () => {
  describe("#getQiitaPopularItems", () => {
    it("should get and filter by popular item.", async () => {
      const items = mock<QiitaItems>();
      const filteredItems = mock<QiitaItems>();
      const port = mock<Port>();
      const query = new Tag("tag");

      port.getQiitaItems.mockReturnValue(items);
      items.filterPopularItem.mockReturnValue(filteredItems);

      const target = new Usecase(port);

      expect(await target.getQiitaPopularItems(query)).toBe(filteredItems);
      expect(port.getQiitaItems).toBeCalledWith(query);
      expect(items.filterPopularItem).toBeCalledTimes(1);
    });
  });
});
