import { mount, enableAutoUnmount } from "@vue/test-utils"
import ListElt from "../../src/lib-components/data/ListElt.vue"

/**
 * @jest-environment jsdom
 */
let wrapper;

beforeEach(() => {
  wrapper = mount(ListElt, {
    props: {
      dynamic: true,
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" }
      ]
    }
  });
});

enableAutoUnmount(afterEach)

describe("ListElt", () => {
  test("name", () => { 
    expect(ListElt.name).toBe("ListElt") 
  })

  test("props", () => { 
    expect(typeof ListElt.props).toBe("object") 
  })

  test("methods", () => { 
    expect(typeof ListElt.methods).toBe("object") 
  })
})

describe("Mounted ListElt", () => {
  test("wrapper", () => {
    expect(wrapper.exists()).toBe(true)
  })

  test("wrapper props", () => { 
    expect(typeof wrapper.props("items")).toBe("object")
    expect(wrapper.props("items").length).toBe(3)
    expect(wrapper.props("items")[0].id).toBe(1)
    expect(wrapper.props("items")[0].name).toBe("Item 1")
    expect(wrapper.props("items")[1].id).toBe(2)
    expect(wrapper.props("items")[1].name).toBe("Item 2")
    expect(wrapper.props("items")[2].id).toBe(3)
    expect(wrapper.props("items")[2].name).toBe("Item 3")
    expect(typeof wrapper.props("dynamic")).toBe("boolean")
    expect(wrapper.props("dynamic")).toEqual(true)
  })

  test("wrapper methods", () => {
    expect(typeof wrapper.vm.hasSlot).toBe("function")
  })
})
