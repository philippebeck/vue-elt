import { mount, enableAutoUnmount } from "@vue/test-utils"
import MediaElt from "../../src/lib-components/base/MediaElt.vue"

/**
 * @jest-environment jsdom
 */
let wrapper;

beforeEach(() => {
  wrapper = mount(MediaElt);
});

enableAutoUnmount(afterEach)

describe("MediaElt", () => {
  test("name", () => { 
    expect(MediaElt.name).toBe("MediaElt") 
  })

  test("props", () => { 
    expect(typeof MediaElt.props).toBe("object") 
  })

  test("methods", () => { 
    expect(typeof MediaElt.methods).toBe("object") 
  })
})

describe("Mounted MediaElt", () => {
  test("wrapper", () => {
    expect(wrapper.exists()).toBe(true)
  })

  test("wrapper props", () => { 
    expect(wrapper.props("type")).toEqual("img")
    expect(wrapper.props("width")).toEqual(300)
    expect(wrapper.props("loop")).toEqual(false)

  })

  test("wrapper methods", () => {
    expect(typeof wrapper.vm.hasSlot).toBe("function")
  })
})
