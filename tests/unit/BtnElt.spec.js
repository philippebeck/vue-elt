import { mount, enableAutoUnmount } from "@vue/test-utils"
import BtnElt from "../../src/lib-components/base/BtnElt.vue"

/**
 * @jest-environment jsdom
 */
let wrapper;

beforeEach(() => {
  wrapper = mount(BtnElt);
});

enableAutoUnmount(afterEach)

describe("BtnElt", () => {
  test("name", () => { 
    expect(BtnElt.name).toBe("BtnElt") 
  })

  test("props", () => { 
    expect(typeof BtnElt.props).toBe("object") 
  })

  test("methods", () => { 
    expect(typeof BtnElt.methods).toBe("object") 
  })
})

describe("Mounted BtnElt", () => {
  test("wrapper", () => {
    expect(wrapper.exists()).toBe(true)
  })

  test("wrapper props", () => { 
    expect(wrapper.props("type")).toEqual("link")
  })

  test("wrapper methods", () => {
    expect(typeof wrapper.vm.getBtnType).toBe("function")
  })
})
