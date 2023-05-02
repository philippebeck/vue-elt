import { mount } from "@vue/test-utils"
import TableElt from "../../src/lib-components/TableElt.vue"

/**
 * @jest-environment jsdom
 */
describe("Default TableElt", () => {
  const wrapper = mount(TableElt, {
    props: {
      title: "Table Title",
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" }
      ]
    }
  });

  test("must create a table element", () => {
    expect(wrapper.find("table").exists()).toBe(true)
  })

  test("must have a props 'title' with 'String' as type & 'Table Title' as value", () => {
    expect(typeof wrapper.props("title")).toBe("string")
    expect(wrapper.props("title")).toBe("Table Title")
  })

  test("must have a props 'items' with 'Array' as type & 3 as length", () => {
    expect(Array.isArray(wrapper.props("items"))).toBe(true)
    expect(wrapper.props("items").length).toBe(3)
  })

  test("must have a props 'items' with 'Item 1' as name of first item", () => {
    expect(wrapper.props("items")[0].name).toBe("Item 1")
  })

  test("must have a props 'items' with 'Item 2' as name of second item", () => {
    expect(wrapper.props("items")[1].name).toBe("Item 2")
  })

  test("must have a props 'items' with 'Item 3' as name of third item", () => {
    expect(wrapper.props("items")[2].name).toBe("Item 3")
  })
})
