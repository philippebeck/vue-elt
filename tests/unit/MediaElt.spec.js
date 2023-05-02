import { mount } from "@vue/test-utils"
import MediaElt from "../../src/lib-components/MediaElt.vue"

/**
 * DEFAULT MEDIA ELT AS AN IMAGE
 * @jest-environment jsdom
 */
describe("Default MediaElt as an image", () => {
  const wrapper = mount(MediaElt)

  test("must create an img", () => {
    expect(wrapper.find("img").exists()).toBe(true)
  })

  test("must have a props 'type' with 'img' as default value", () => {
    expect(wrapper.props("type")).toBe("img")
  })

  test("must have a props 'width' with '300' as default value", () => {
    expect(wrapper.props("width")).toBe(300)
  })

  test("must have a props 'loop' with 'false' as default value", () => {
    expect(wrapper.props("loop")).toBe(false)
  })

  test("must not have a figcaption", () => {
    expect(wrapper.find("figcaption").exists()).toBe(false)
  })
})

/**
 * MEDIA ELT AS A VIDEO WITH SLOTS
 * @jest-environment jsdom
 */
describe("MediaElt as a video with slots", () => {
  const wrapper = mount(MediaElt, {
    props: {
      type: "video",
      width: 500,
      loop: false,
    },
    slots: {
      figcaption: "<p>Test Figcaption</p>"
    }
  })
  
  test("must create a video", () => {
    expect(wrapper.find("video").exists()).toBe(true)
  })

  test("must have a props 'type' with 'video' as value", () => {
    expect(wrapper.props("type")).toBe("video")
  })

  test("must have a props 'width' with '500' as value", () => {
    expect(wrapper.props("width")).toBe(500)
    expect(wrapper.find("video").attributes("width")).toBe("500")
  })

  test("must have a props 'loop' with 'true' as value", () => {
    expect(wrapper.props("loop")).toBe(false)
  })

  test("must have a slot figcaption", () => {
    expect(wrapper.find("figcaption").exists()).toBe(true)
  })
})

/**
 * MEDIA ELT AS AN AUDIO WITH SLOTS
 * @jest-environment jsdom
 */
describe("MediaElt as an audio with slots", () => {
  const wrapper = mount(MediaElt, {
    props: {
      type: "audio",
      loop: true,
    },
    slots: {
      figcaption: "<p>Test Figcaption</p>"
    }
  })
  
  test("must create an audio", () => {
    expect(wrapper.find("audio").exists()).toBe(true)
  })

  test("must have a props 'type' with 'audio' as value", () => {
    expect(wrapper.props("type")).toBe("audio")
  })

  test("must have a props 'loop' with 'true' as value", () => {
    expect(wrapper.props("loop")).toBe(true)
  })

  test("must have a slot figcaption", () => {
    expect(wrapper.find("figcaption").exists()).toBe(true)
  })
})

/**
 * MEDIA ELT AS A PICTURE WITH SLOTS
 * @jest-environment jsdom
 */
describe("MediaElt as a picture with slots", () => {
  const wrapper = mount(MediaElt, {
    props: {
      type: "picture",
      loop: true,
    },
    slots: {
      figcaption: "<p>Test Figcaption</p>"
    }
  })
  
  test("must create a picture", () => {
    expect(wrapper.find("picture").exists()).toBe(true)
  })

  test("must have a props 'type' with 'picture' as value", () => {
    expect(wrapper.props("type")).toBe("picture")
  })

  test("must have a props 'loop' with 'true' as value", () => {
    expect(wrapper.props("loop")).toBe(true)
  })

  test("must have a slot figcaption", () => {
    expect(wrapper.find("figcaption").exists()).toBe(true)
  })
})

/**
 * MEDIA ELT AS A BLOCKQUOTE WITH SLOTS
 * @jest-environment jsdom
 */
describe("MediaElt as a blockquote with slots", () => {
  const wrapper = mount(MediaElt, {
    props: {
      type: "quote",
      loop: true,
    },
    slots: {
      figcaption: "<p>Test Figcaption</p>"
    }
  })
  
  test("must create a blockquote", () => {
    expect(wrapper.find("blockquote").exists()).toBe(true)
  })

  test("must have a props 'type' with 'quote' as value", () => {
    expect(wrapper.props("type")).toBe("quote")
  })

  test("must have a props 'loop' with 'true' as value", () => {
    expect(wrapper.props("loop")).toBe(true)
  })

  test("must have a slot figcaption", () => {
    expect(wrapper.find("figcaption").exists()).toBe(true)
  })
})
