export const booksWithChapters = () => [
  {
    name: "Lorem",
    nameLong: "Lorem Ipsum",
    order: 1,
    abbreviation: "lorem",
    testament: "old",
    chapters: {
      1: [
        {
          number: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          number: 2,
          text: "Vivamus nisl velit, tempor quis cursus vel, commodo ut nisi.",
        },
      ],
      2: [
        {
          number: 1,
          text: "Mauris consectetur pharetra justo, a maximus lectus.",
        },
      ],
    },
  },
  {
    name: "Orci",
    nameLong: "Lorem Ipsum",
    order: 2,
    abbreviation: "orci",
    testament: "new",
    chapters: {
      1: [
        {
          number: 1,
          text: "Nam quam massa, faucibus vel tristique facilisis, laoreet at risus.",
        },
        { number: 2, text: "Morbi vel condimentum libero." },
        { number: 3, text: "Fusce efficitur faucibus sapien quis luctus." },
      ],
    },
  },
  {
    name: "Vivamus",
    nameLong: "Vivamus placerat",
    order: 3,
    abbreviation: "vivamus",
    testament: "new",
    chapters: {
      1: [{ number: 1, text: "Praesent pharetra ac mi sit amet mattis." }],
      2: [
        { number: 1, text: "Etiam eget metus in lorem accumsan volutpat." },
        { number: 2, text: "Praesent non congue massa." },
      ],
      3: [
        { number: 1, text: "Morbi eu justo non lacus lobortis rhoncus." },
        { number: 2, text: "Sed ac luctus turpis." },
        { number: 3, text: "Aenean in euismod purus." },
      ],
    },
  },
];
