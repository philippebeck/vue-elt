import { shallowMount, enableAutoUnmount } from "@vue/test-utils"
import LinkCreator from "../../components/creators/LinkCreator"

let wrapper;

jest.mock("axios");

beforeEach(() => {
  wrapper = shallowMount(LinkCreator, {
    props: {
      val: {
        TEST: "test"
      }
    },
    data() {
      return {
        name: "Link name", 
        url: "Link url", 
        cat: "Link cat" 
      }
    }
  });
});

enableAutoUnmount(afterEach)

/**
 * @jest-environment jsdom
 */
describe("LinkCreator", () => {
  test("wrapper", () => { 
    expect(wrapper.exists()).toBe(true) 
  })

  test("components", () => { 
    expect(typeof wrapper.findComponent({ name: "BtnElt" })).toBe("object")
    expect(typeof wrapper.findComponent({ name: "CardElt" })).toBe("object")
    expect(typeof wrapper.findComponent({ name: "FieldElt" })).toBe("object")
    expect(typeof wrapper.findComponent({ name: "ListElt" })).toBe("object")
  })

  test("props", () => {
    expect(wrapper.props("val")).toStrictEqual({ TEST: "test" })
  })

  test("data", () => {
    expect(wrapper.vm.name).toBe("Link name")
    expect(wrapper.vm.url).toBe("Link url")
    expect(wrapper.vm.cat).toBe("Link cat")
  })

  test("methods", () => { 
    expect(typeof wrapper.vm.createLink).toBe("function") 
  })
});
