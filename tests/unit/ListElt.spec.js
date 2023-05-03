import { enableAutoUnmount, mount } from "@vue/test-utils"
import ListElt from "../../src/lib-components/ListElt.vue"

let wrapper;

enableAutoUnmount(afterEach)

/**
 * ! DEFAULT LIST
 * @jest-environment jsdom
 */
describe("Default ListElt", () => {
  beforeEach(() => {
    wrapper = mount(ListElt, {
      props: {
        items: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" }
        ]
      }
    })
  })

  test("must create an ul element", () => {
    expect(wrapper.find("ul").exists()).toBe(true)
  })

  test("must have a props 'items' with 'Object' as type", () => {
    expect(typeof wrapper.props("items")).toBe("object")
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

  test("must have a props 'dynamic' with 'Boolean' as type & 'false' as default value", () => {
    expect(typeof wrapper.props("dynamic")).toBe("boolean")
    expect(wrapper.props("dynamic")).toBe(false)
  })
})


/**
 * ! NESTED LIST
 * @jest-environment jsdom
 */
describe("Nested ListElt", () => {
  beforeEach(() => {
    wrapper = mount(ListElt, {
      props: {
        items: [
          {
            id: 1,
            name: "Item 1",
            children: [
              { id: 2, name: "Item 2" },
              { id: 3, name: "Item 3" }
            ]
          }
        ]
      }
    })
  })

  test("must have a props 'items' with 'Object' as type", () => {
    expect(typeof wrapper.props("items")).toBe("object")
  })

  test("must have a props 'items' with 'Item 1' as name of first item", () => {
    expect(wrapper.props("items")[0].name).toBe("Item 1")
  })

  test("must have a props 'items' with 'Item 2' as name of second item", () => {
    expect(wrapper.props("items")[0].children[0].name).toBe("Item 2")
  })

  test("must have a props 'items' with 'Item 3' as name of third item", () => {
    expect(wrapper.props("items")[0].children[1].name).toBe("Item 3")
  })
})

/**
 * DYNAMIC LIST ELT
 * @jest-environment jsdom
 */
describe("Dynamic ListElt", () => {
  const wrapper = mount(ListElt, {
    props: {
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" }
      ],
      dynamic: true
    }
  })

  test("must have a props 'dynamic' with 'Boolean' as type & 'true' as default value", () => {
    expect(typeof wrapper.props("dynamic")).toBe("boolean")
    expect(wrapper.props("dynamic")).toBe(true)
  })

  test("must have a props 'dynamic' with 'true' as value", () => {
    expect(wrapper.props("dynamic")).toBe(true)
  })
})

/**
 * DYNAMIC NESTED LIST ELT
 * @jest-environment jsdom
 */
describe("Dynamic Nested ListElt", () => {
  const wrapper = mount(ListElt, {
    props: {
      items: [
        {
          id: 1,
          name: "Item 1",
          children: [
            { id: 2, name: "Item 2" },
            { id: 3, name: "Item 3" }
          ]
        }
      ],
      dynamic: true
    }
  })

  test("must have a props 'dynamic' with 'Boolean' as type & 'true' as default value", () => {
    expect(typeof wrapper.props("dynamic")).toBe("boolean")
    expect(wrapper.props("dynamic")).toBe(true)
  })

  test("must have a props 'dynamic' with 'true' as value", () => {
    expect(wrapper.props("dynamic")).toBe(true)
  })
})
