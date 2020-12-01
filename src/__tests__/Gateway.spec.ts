import { when } from "jest-when";
import { QiitaItem, QiitaItems, Tag, Title } from "../Domain";
import { Driver } from "../Driver";
import { Gateway } from "../Gateway";
import { mock } from "./Helper";

describe("Gateway", () => {
  describe("#getQiitaItems", () => {
    it("should return domains", async () => {
      const tag = mock<Tag>();
      const driver = mock<Driver>();
      const target = new Gateway(driver);

      const expected = new QiitaItems([
        new QiitaItem(new Title("hoge")),
        new QiitaItem(new Title("fuga")),
      ]);

      when(driver.getQiitaItems).expectCalledWith("tagValue").mockResolvedValueOnce([
        { body: "", title: "hoge" },
        { body: "", title: "fuga" },
      ]);
      when(tag.toQueryString).expectCalledWith().mockReturnValueOnce("tagValue");

      expect(await target.getQiitaItems(tag)).toEqual(expected);
    });
  });
})
