import { shallowMount } from "@vue/test-utils";
import { booksWithChapters } from "@tests/unit/recipes";
import ListBooks from "@/components/ListBooks.vue";

describe("ListBooks", () => {
  const books = booksWithChapters();

  it("should display all books", () => {
    const wrapper = shallowMount(ListBooks, {
      props: { books, selectedBook: null },
    });
    expect(wrapper.findAll("li")).toHaveLength(books.length);
  });

  it("should contain active to selected book ", () => {
    const wrapper = shallowMount(ListBooks, {
      props: { books, selectedBook: books[0] },
    });

    expect(wrapper.findAll("li")[0].classes()).toContain("active");
    expect(wrapper.findAll("li")[1].classes()).not.toContain("active");
  });

  it("should update active book when change book", async () => {
    const wrapper = shallowMount(ListBooks, {
      props: { books, selectedBook: books[0] },
    });

    expect(wrapper.findAll("li")[0].classes()).toContain("active");
    expect(wrapper.findAll("li")[1].classes()).not.toContain("active");

    await wrapper.setProps({ selectedBook: books[1] });

    expect(wrapper.findAll("li")[0].classes()).not.toContain("active");
    expect(wrapper.findAll("li")[1].classes()).toContain("active");
  });

  it("should emit book when click", async () => {
    const selectedBook = books[0];

    const wrapper = shallowMount(ListBooks, {
      props: { books, selectedBook },
    });

    await wrapper.findAll("li")[0].trigger("click");

    expect(wrapper.emitted().change).toBeTruthy();
    expect(wrapper.emitted().change[0]).toEqual([selectedBook]);
  });
});
