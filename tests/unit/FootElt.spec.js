import { mount, enableAutoUnmount } from "@vue/test-utils"
import FootElt from "../../src/lib-components/main/FootElt.vue"

/**
 * @jest-environment jsdom
 */
let wrapper;

beforeEach(() => {
  wrapper = mount(FootElt);
});

enableAutoUnmount(afterEach)

describe("FootElt", () => {
  test("name", () => { 
    expect(FootElt.name).toBe("FootElt") 
  })

  test("props", () => { 
    expect(typeof FootElt.props).toBe("object") 
  })

  test("methods", () => { 
    expect(typeof FootElt.methods).toBe("object") 
  })
})

describe("Mounted FootElt", () => {
  test("wrapper", () => {
    expect(wrapper.exists()).toBe(true)
  })

  test("wrapper props", () => { 
    expect(typeof wrapper.props("title1")).toBe("string")
    expect(typeof wrapper.props("title2")).toBe("string")
    expect(typeof wrapper.props("title3")).toBe("string")
  })

  test("wrapper methods", () => {
    expect(typeof wrapper.vm.hasSlot).toBe("function")
  })
})
