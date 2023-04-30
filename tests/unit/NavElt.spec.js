import { mount, enableAutoUnmount } from "@vue/test-utils"
import NavElt from "../../src/lib-components/main/NavElt.vue"

/**
 * @jest-environment jsdom
 */
let wrapper;

beforeEach(() => {
  wrapper = mount(NavElt);
});

enableAutoUnmount(afterEach)

describe("NavElt", () => {
  test("name", () => { 
    expect(NavElt.name).toBe("NavElt") 
  })

  test("props", () => { 
    expect(typeof NavElt.props).toBe("object") 
  })

  test("methods", () => { 
    expect(typeof NavElt.methods).toBe("object") 
  })
})

describe("Mounted NavElt", () => {
  test("wrapper", () => {
    expect(wrapper.exists()).toBe(true)
  })

  test("wrapper props", () => { 
    expect(wrapper.props("class")).toEqual("navbar")
  })

  test("wrapper methods", () => {
    expect(typeof wrapper.vm.getNavClass).toBe("function")
    expect(typeof wrapper.vm.hasSlot).toBe("function")
    expect(typeof wrapper.vm.toggleSide).toBe("function")
  })
})
