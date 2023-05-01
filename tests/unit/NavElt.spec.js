import { mount } from "@vue/test-utils"
import NavElt from "../../src/lib-components/main/NavElt.vue"

/**
 * DEFAULT NAV ELT
 * @jest-environment jsdom
 */
describe("Default NavElt", () => {
  const wrapper = mount(NavElt, {
    slots: {
      brand: "Test Brand",
      admin: "Test Admin"
    }
  })

  test("must create a nav", () => {
    expect(wrapper.find("nav").exists()).toBe(true)
  })

  test("must have a props 'class' with 'navbar' as default value", () => {
    expect(wrapper.props("class")).toBe("navbar")
    expect(wrapper.find("nav").attributes("class")).toBe("navbar")
  })

  test("must have a slot 'brand' with 'Test Brand' as value", () => {
    expect(wrapper.find("a").text()).toBe("Test Brand")
  })

  test("must have a slot 'admin' with 'Test Admin' as value", () => {
    expect(wrapper.find("aside").text()).toBe("Test Admin")
  })
})

/**
 * NAV ELT AS A SIDEBAR
 * @jest-environment jsdom
 */
describe("NavElt as a sidebar", () => {
  const wrapper = mount(NavElt, {
    props: {
      class: "sidebar"
    },
    slots: {
      hide: "Test Hide",
      first: "Test First",
      top: "Test Top"
    }
  })

  test("must create a nav", () => {
    expect(wrapper.find("nav").exists()).toBe(true)
  })
  
  test("must have a props 'class' with 'sidebar' as value", () => {
    expect(wrapper.props("class")).toBe("sidebar")
    expect(wrapper.find("nav").attributes("class")).toBe("sidebar")
  })

  test("must have a slot 'hide' with 'Test Hide' as value", () => {
    expect(wrapper.find("button").text()).toBe("Test Hide")
  })
  
  test("must have a slot 'first' with 'Test First' as value", () => {
    expect(wrapper.find("li").text()).toBe("Test First")
  })

  test("must have a slot 'top' with 'Test Top' as value", () => {
    expect(wrapper.find("a").text()).toBe("Test Top")
    expect(wrapper.find("a").attributes("href")).toBe("#top")
  })
})