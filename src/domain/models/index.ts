type OldTestament = "old";
type NewTestament = "new";
type Testament = OldTestament | NewTestament;

export interface Verse {
  number: number;
  text: string;
}

export interface Book {
  order: number;
  name: string;
  abbreviation: string;
  nameLong: string;
  testament: Testament;
  chapters: {
    [key: number]: Array<Verse>;
  };
}

export interface ChapterSearch {
  book: string;
  chapter: number;
  version: string;
}
