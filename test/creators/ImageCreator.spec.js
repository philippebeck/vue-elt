import { shallowMount, enableAutoUnmount } from "@vue/test-utils"
import ImageCreator from "../../components/creators/ImageCreator"

let wrapper;

jest.mock("axios");

beforeEach(() => {
  wrapper = shallowMount(ImageCreator, {
    props: {
      val: {
        TEST: "test"
      }
    },
    data() {
      return {
        description: "Image description", 
        gallery: "Image gallery"
      }
    }
  });
});

enableAutoUnmount(afterEach)

/**
 * @jest-environment jsdom
 */
describe("ImageCreator", () => {
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
    expect(wrapper.vm.description).toBe("Image description")
    expect(wrapper.vm.gallery).toBe("Image gallery")
  })

  test("methods", () => {
    expect(typeof wrapper.vm.createImage).toBe("function")
  })
});
