import { createChapterSearchFromParams } from "@/domain/logic/utils";

describe("createChapterSearchFromParamsTest", () => {
  it("should be create ChapterSearch with valid parameters", () => {
    const chapterQuery = "nth.gen.1";

    expect(createChapterSearchFromParams(chapterQuery)).toEqual({
      chapter: 1,
      book: "gen",
      version: "nth",
    });
  });
  it("shoul be create ChapterSerach with empty parameters", () => {
    const chapterQuery = "";

    expect(createChapterSearchFromParams(chapterQuery)).toEqual({
      chapter: 0,
      book: "",
      version: ""
    })
  });
});
