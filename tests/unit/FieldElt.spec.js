import { mount, enableAutoUnmount } from "@vue/test-utils"
import FieldElt from "../../src/lib-components/FieldElt.vue"

/**
 * DEFAULT FIELD ELT
 * @jest-environment jsdom
 */
describe("Default FieldElt", () => {
  const wrapper = mount(FieldElt)

  test("must create an input type text", () => {
    expect(wrapper.find("input[type='text']").exists()).toBe(true)
  })

  test("must have a props 'type' with 'String as type & 'text' as default value", () => {
    expect(typeof wrapper.props("type")).toBe("string")
    expect(wrapper.props("type")).toBe("text")
  })

  test("must have a props 'min' with 'Number' as type & '2' as default value", () => {
    expect(typeof wrapper.props("min")).toBe("number")
    expect(wrapper.props("min")).toBe(2)
  })

  test("must have a props 'max' with 'Number' as type & '50' as default value", () => {
    expect(typeof wrapper.props("max")).toBe("number")
    expect(wrapper.props("max")).toBe(50)
  })

  test("must have a props 'rows' with 'Number' as type & '5' as default value", () => {
    expect(typeof wrapper.props("rows")).toBe("number")
    expect(wrapper.props("rows")).toBe(5)
  })

  test("must have a props 'required' with 'String' as type & 'required' as default value", () => {
    expect(typeof wrapper.props("required")).toBe("string")
    expect(wrapper.props("required")).toBe("required")
  })
})

/**
 * FIELD ELT AS A TEXTAREA
 * @jest-environment jsdom
 */
describe("FieldElt as a textarea", () => {
  const wrapper = mount(FieldElt, {
    props: {
      type: "textarea"
    }
  })

  test("must create a textarea", () => {
    expect(wrapper.find("textarea").exists()).toBe(true)
  })

  test("must have a props 'type' with 'String' as type & 'textarea' as value", () => {
    expect(typeof wrapper.props("type")).toBe("string")
    expect(wrapper.props("type")).toBe("textarea")
  })
})

/**
 * FIELD ELT AS A NUMBER
 * @jest-environment jsdom
 */
describe("FieldElt as a number", () => {
  const wrapper = mount(FieldElt, {
    props: {
      type: "number"
    }
  })

  test("must create an input type number", () => {
    expect(wrapper.find("input[type='number']").exists()).toBe(true)
  })

  test("must have a props 'type' with 'String' as type & 'number' as value", () => {
    expect(typeof wrapper.props("type")).toBe("string")
    expect(wrapper.props("type")).toBe("number")
  })
})

/**
 * FIELD ELT AS A SELECT
 * @jest-environment jsdom
 */
describe("FieldElt as a select", () => {
  const wrapper = mount(FieldElt, {
    props: {
      type: "select",
      list: ["Test"]
    }
  })

  test("must create a select", () => {
    expect(wrapper.find("select").exists()).toBe(true)
  })

  test("must have a props 'type' with 'String' as type & 'select' as value", () => {
    expect(typeof wrapper.props("type")).toBe("string")
    expect(wrapper.props("type")).toBe("select")
  })
})

/**
 * FIELD ELT AS A CHECKBOX
 * @jest-environment jsdom
 */
describe("FieldElt as a checkbox", () => {
  const wrapper = mount(FieldElt, {
    props: {
      type: "checkbox"
    }
  })

  test("must create an input type checkbox", () => {
    expect(wrapper.find("input[type='checkbox']").exists()).toBe(true)
  })

  test("must have a props 'type' with 'String' as type & 'checkbox' as value", () => {
    expect(typeof wrapper.props("type")).toBe("string")
    expect(wrapper.props("type")).toBe("checkbox")
  })
})
