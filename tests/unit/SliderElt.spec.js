import { mount } from "@vue/test-utils"
import SliderElt from "../../src/lib-components/data/SliderElt.vue"

/**
 * @jest-environment jsdom
 */
describe("Default SliderElt", () => {
  const wrapper = mount(SliderElt, {
    props: {
      slides: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" }
      ]
    }
  })

  test("must create a figure element", () => {
    expect(wrapper.find("figure").exists()).toBe(true)
  })

  test("must have a props 'slides' with 'Array' as type & 3 as length", () => {
    expect(Array.isArray(wrapper.props("slides"))).toBe(true)
    expect(wrapper.props("slides").length).toBe(3)
  })

  test("must have a props 'slides' with 'Item 1' as name of first item", () => {
    expect(wrapper.props("slides")[0].name).toBe("Item 1")
  })

  test("must have a props 'slides' with 'Item 2' as name of second item", () => {
    expect(wrapper.props("slides")[1].name).toBe("Item 2")
  })

  test("must have a props 'slides' with 'Item 3' as name of third item", () => {
    expect(wrapper.props("slides")[2].name).toBe("Item 3")
  })

  test("must have a props delay with 'Number' as type & 5000 as default value", () => {
    expect(typeof wrapper.props("delay")).toBe("number")
    expect(wrapper.props("delay")).toBe(5000)
  })

  test("must have a props 'auto' with 'Boolean' as type & 'true' as default value", () => {
    expect(typeof wrapper.props("auto")).toBe("boolean")
    expect(wrapper.props("auto")).toBe(true)
  })

  test("must have a props 'random' with 'Boolean' as type & 'false' as default value", () => {
    expect(typeof wrapper.props("random")).toBe("boolean")
    expect(wrapper.props("random")).toBe(false)
  })

  test("must have a data 'index' with 'Number' as type & -1 as default value", () => {
    expect(typeof wrapper.vm.index).toBe("number")
    expect(wrapper.vm.index).toBe(-1)
  })

  test("must have a data 'intervalId' with 'Number' as type & 0 as default value", () => {
    expect(typeof wrapper.vm.intervalId).toBe("number")
    //expect(wrapper.vm.intervalId).toBe(0)
  })

  test("must have a data 'autoElt' with null as default value", () => {
    expect(wrapper.vm.autoElt).toBe(null)
  })

  test("must have a data 'randomElt' with null as default value", () => {
    expect(wrapper.vm.randomElt).toBe(null)
  })
})
