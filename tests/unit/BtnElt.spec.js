import { mount, enableAutoUnmount } from "@vue/test-utils"
import BtnElt from "../../src/lib-components/BtnElt.vue"

/**
 * DEFAULT BTN ELT AS A LINK
 * @jest-environment jsdom
 */
describe("Default BtnElt as a link", () => {
  const wrapper = mount(BtnElt, {
    props: {
      href: "https://www.test.com",
      title: "Test Title",
      content: "Test Content"
    }
  })

  test("must create a link", () => {
    expect(wrapper.find("a").exists()).toBe(true)
  })

  test("must have a props 'href' with 'String' as type & 'https://www.test.com' as default value", () => {
    expect(typeof wrapper.props("href")).toBe("string")
    expect(wrapper.props("href")).toBe("https://www.test.com")
    expect(wrapper.find("a").attributes("href")).toBe("https://www.test.com")
  })

  test("must have a props 'title' with 'String' as type & 'Test Title' as default value", () => {
    expect(typeof wrapper.props("title")).toBe("string")
    expect(wrapper.props("title")).toBe("Test Title")
    expect(wrapper.find("a").attributes("title")).toBe("Test Title")
  })

  test("must have a props 'content' with 'String' as type & 'Test Content' as default value", () => {
    expect(typeof wrapper.props("content")).toBe("string")
    expect(wrapper.props("content")).toBe("Test Content")
    expect(wrapper.find("a").text()).toBe("Test Content")
  })
})

/**
 * BTN ELT AS A BUTTON
 * @jest-environment jsdom
 */
describe("BtnElt as a button", () => {
  const wrapper = mount(BtnElt, {
    props: {
      type: "button",
      value: "Test Value",
      title: "Test Title",
      content: "Test Content"
    }
  })

  test("must create a button", () => {
    expect(wrapper.find("button").exists()).toBe(true)
  })

  test("must have a props 'type' with 'String' as type & 'button' as value", () => {
    expect(typeof wrapper.props("type")).toBe("string")
    expect(wrapper.props("type")).toBe("button")
    expect(wrapper.find("button").attributes("type")).toBe("button")
  })

  test("must have a props 'value' with 'String' as type & 'Test Value' as value", () => {
    expect(typeof wrapper.props("value")).toBe("string")
    expect(wrapper.props("value")).toBe("Test Value")
    expect(wrapper.find("button").attributes("value")).toBe("Test Value")
  })

  test("must have a props 'title' with 'String' as type & 'Test Title' as value", () => {
    expect(typeof wrapper.props("title")).toBe("string")
    expect(wrapper.props("title")).toBe("Test Title")
    expect(wrapper.find("button").attributes("title")).toBe("Test Title")
  })

  test("must have a props 'content' with 'String' as type & 'Test Content' as value", () => {
    expect(typeof wrapper.props("content")).toBe("string")
    expect(wrapper.props("content")).toBe("Test Content")
    expect(wrapper.find("button").text()).toBe("Test Content")
  })
})
