import { shallowMount, enableAutoUnmount } from "@vue/test-utils"
import GallerySet from "../../components/setters/GallerySet"

let wrapper;

jest.mock("axios");

beforeEach(() => {
  wrapper = shallowMount(GallerySet, {
    props: {
      val: {
        TEST: "test"
      },
      galleries: [{
        name: "Gallery name",
        author: "Gallery author"
      }]
    }
  });
});

enableAutoUnmount(afterEach)

/**
 * @jest-environment jsdom
 */
describe("GallerySet", () => {
  test("wrapper", () => {
    expect(wrapper.exists()).toBe(true)
  })

  test("components", () => { 
    expect(typeof wrapper.findComponent({ name: "BtnElt" })).toBe("object")
    expect(typeof wrapper.findComponent({ name: "CardElt" })).toBe("object")
    expect(typeof wrapper.findComponent({ name: "FieldElt" })).toBe("object")
    expect(typeof wrapper.findComponent({ name: "TableElt" })).toBe("object")
  })

  test("props", () => {
    expect(wrapper.props("val")).toStrictEqual({ TEST: "test" })
    expect(wrapper.props("galleries")).toStrictEqual([{
      name: "Gallery name",
      author: "Gallery author"
    }])
  })

  test("methods", () => {
    expect(typeof wrapper.vm.getGalleries).toBe("function")
    expect(typeof wrapper.vm.updateGallery).toBe("function")
    expect(typeof wrapper.vm.deleteGallery).toBe("function")
  })
})
