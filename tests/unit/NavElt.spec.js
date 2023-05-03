import { enableAutoUnmount, mount } from "@vue/test-utils"
import NavElt from "../../src/lib-components/NavElt.vue"

let wrapper;

enableAutoUnmount(afterEach)

/**
 * ! NAVBAR
 * @jest-environment jsdom
 */
describe("Default NavElt", () => {
  beforeEach(() => {
    wrapper = mount(NavElt, {
      slots: {
        brand: "Test Brand",
        admin: "Test Admin"
      }
    })
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
 * ! SIDEBAR
 * @jest-environment jsdom
 */
describe("NavElt as a sidebar", () => {
  beforeEach(() => {
    wrapper = mount(NavElt, {
      props: {
        class: "sidebar"
      },
      slots: {
        hide: "Test Hide",
        first: "Test First",
        top: "Test Top"
      }
    })
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

/**
 * ! GET NAV CLASS
 * @jest-environment jsdom
 */
describe("getNavClass() method", () => {
  beforeEach(() => {
    wrapper = mount(NavElt)
  })
  
  test("must return 'navbar' if 'class' props is not provided", () => {
    expect(wrapper.vm.getNavClass()).toBe("navbar")
  })

  test("must return 'navbar' if 'class' props is not 'sidebar'", () => {
    wrapper.setProps({ class: "test" })
    expect(wrapper.vm.getNavClass()).toBe("navbar")
  })

  test("must return 'sidebar' if 'class' props is 'sidebar'", () => {
    wrapper = mount(NavElt, {
      props: {
        class: "sidebar"
      }
    })
    expect(wrapper.vm.getNavClass()).toBe("sidebar")
  })
})

/**
 * ! HAS SLOT METHOD
 * @jest-environment jsdom
 */
describe("hasSlot(name) method", () => {
  beforeEach(() => {
    wrapper = mount(NavElt, {
      slots: {
        brand: "Test Brand",
        admin: "Test Admin"
      }
    })
  })

  test("must return true if the 3 slots exist", () => {
    expect(wrapper.vm.hasSlot("brand")).toBe(true)
    expect(wrapper.vm.hasSlot("admin")).toBe(true)
  })

  test("must return false if the test slot doesn't exist", () => {
    expect(wrapper.vm.hasSlot("test")).toBe(false)
  })
})
