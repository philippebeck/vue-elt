import { mount, enableAutoUnmount } from "@vue/test-utils"
import TableElt from "../../src/lib-components/data/TableElt.vue"

/**
 * @jest-environment jsdom
 */
let wrapper;

beforeEach(() => {
  wrapper = mount(TableElt, {
    props: {
      title: "Table Title",
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        { id: 4, name: "Item 4" }
      ]
    }
  });
});

enableAutoUnmount(afterEach)

describe("TableElt", () => {
  test("name", () => { 
    expect(TableElt.name).toBe("TableElt") 
  })

  test("props", () => { 
    expect(typeof TableElt.props).toBe("object") 
  })

  test("methods", () => { 
    expect(typeof TableElt.methods).toBe("object") 
  })
})

describe("Mounted TableElt", () => {
  test("wrapper", () => {
    expect(wrapper.exists()).toBe(true)
  })

  test("wrapper props", () => { 
    expect(typeof wrapper.props("title")).toBe("string")
    expect(typeof wrapper.props("items")).toBe("object")
  })

  test("wrapper methods", () => {
    expect(typeof wrapper.vm.hasSlot).toBe("function")
  })
})
