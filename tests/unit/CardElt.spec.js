import { mount, enableAutoUnmount } from "@vue/test-utils"
import CardElt from "../../src/lib-components/main/CardElt.vue"

/**
 * @jest-environment jsdom
 */
let wrapper;

beforeEach(() => {
  wrapper = mount(CardElt);
});

enableAutoUnmount(afterEach)

describe("CardElt", () => {
  test("name", () => { 
    expect(CardElt.name).toBe("CardElt") 
  })

  test("props", () => { 
    expect(typeof CardElt.props).toBe("object") 
  })

  test("methods", () => { 
    expect(typeof CardElt.methods).toBe("object") 
  })
})

describe("Mounted CardElt", () => {
  test("wrapper", () => {
    expect(wrapper.exists()).toBe(true)
  })

  test("wrapper props", () => { 
    expect(wrapper.props("isArticle")).toBe(false)
  })

  test("wrapper methods", () => {
    expect(typeof wrapper.vm.hasSlot).toBe("function")
  })
})
