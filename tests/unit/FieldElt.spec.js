import { mount, enableAutoUnmount } from "@vue/test-utils"
import FieldElt from "../../src/lib-components/base/FieldElt.vue"

/**
 * @jest-environment jsdom
 */
let wrapper;

beforeEach(() => {
  wrapper = mount(FieldElt, {
    props: {
      type: "textarea",
      min: 5,
      max: 500,
      rows: 10,
    }
  });
});

enableAutoUnmount(afterEach)

describe("FieldElt", () => {
  test("name", () => { 
    expect(FieldElt.name).toBe("FieldElt") 
  })

  test("props", () => { 
    expect(typeof FieldElt.props).toBe("object")
    expect(FieldElt.props.model.prop).toBe("value")
    expect(FieldElt.props.model.event).toBe("update")
    expect(FieldElt.props.type.type).toBe(String)
    expect(FieldElt.props.type.default).toBe("text")
    expect(FieldElt.props.value).toEqual([String, Number, Array])
    expect(FieldElt.props.content).toEqual([String, Number])
    expect(FieldElt.props.id).toBe(String)
    expect(FieldElt.props.name).toBe(String)
    expect(FieldElt.props.list).toBe(Array)
    expect(FieldElt.props.info).toBe(String)
    expect(FieldElt.props.min.type).toBe(Number)
    expect(FieldElt.props.min.default).toBe(2)
    expect(FieldElt.props.max.type).toBe(Number)
    expect(FieldElt.props.max.default).toBe(50)
    expect(FieldElt.props.rows.type).toBe(Number)
    expect(FieldElt.props.rows.default).toBe(5)
    expect(FieldElt.props.itemprop).toBe(String)
    expect(FieldElt.props.required.type).toBe(String)
    expect(FieldElt.props.required.default).toBe("required")
  })

  test("methods", () => { 
    expect(typeof FieldElt.methods).toBe("object") 
  })
})

describe("Mounted FieldElt", () => {
  test("wrapper", () => {
    expect(wrapper.exists()).toBe(true)
  })

  test("wrapper props", () => { 
    expect(wrapper.props("type")).toBe("textarea")
    expect(wrapper.props("min")).toBe(5)
    expect(wrapper.props("max")).toBe(500)
    expect(wrapper.props("rows")).toBe(10)
    expect(wrapper.props("required")).toBe("required")

  })

  test("wrapper methods", () => {
    expect(typeof wrapper.vm.hasSlot).toBe("function")
    expect(typeof wrapper.vm.onInput).toBe("function")
    expect(typeof wrapper.vm.getFieldType).toBe("function")
  })
})
