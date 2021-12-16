import { shallowMount } from "@vue/test-utils";
import Verse from "@/components/Verse.vue";

describe("Verse", () => {
  it("shoulbe verse text", () => {
    const verse = {
      number: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu.",
    };

    const wrapper = shallowMount(Verse, { props: { verse } });

    expect(wrapper.find("p").text()).toMatch(verse.text);
    expect(wrapper.find("span").text()).toMatch(verse.number.toString());
  });
});
