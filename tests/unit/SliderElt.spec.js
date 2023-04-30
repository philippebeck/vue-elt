import { mount, enableAutoUnmount } from "@vue/test-utils"
import SliderElt from "../../src/lib-components/data/SliderElt.vue"

/**
 * @jest-environment jsdom
 */
let wrapper;

beforeEach(() => {
  wrapper = mount(SliderElt, {
    props: {
      slides: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        { id: 4, name: "Item 4" }
      ]
    }
  });
});

enableAutoUnmount(afterEach)

describe("SliderElt", () => {
  test("name should be SliderElt", () => { 
    expect(SliderElt.name).toBe("SliderElt") 
  })

  test("props", () => { 
    expect(typeof SliderElt.props).toBe("object") 
    expect(SliderElt.props.slides.type).toBe(Array)
    expect(SliderElt.props.delay.type).toBe(Number)
    expect(SliderElt.props.delay.default).toBe(5000)
    expect(SliderElt.props.auto.type).toBe(Boolean)
    expect(SliderElt.props.auto.default).toBe(true)
    expect(SliderElt.props.random.type).toBe(Boolean)
    expect(SliderElt.props.random.default).toBe(false)
  })

  test("data", () => { 
    expect(typeof SliderElt.data).toBe("function") 
    expect(SliderElt.data().index).toBe(-1)
    expect(SliderElt.data().intervalId).toBe(0)
    expect(SliderElt.data().autoElt).toBe(null)
    expect(SliderElt.data().randomElt).toBe(null)
  })

  test("beforeCreate", () => { 
    expect(typeof SliderElt.beforeCreate).toBe("function") 
  })

  test("mounted", () => { 
    expect(typeof SliderElt.mounted).toBe("function") 
  })

  test("methods", () => { 
    expect(typeof SliderElt.methods).toBe("object") 
  })
})

describe("Mounted SliderElt", () => {
  test("wrapper", () => {
    expect(wrapper.exists()).toBe(true)
  })

  test("wrapper props", () => { 
    expect(wrapper.props("delay")).toEqual(5000)
    expect(wrapper.props("auto")).toEqual(true)
    expect(wrapper.props("random")).toEqual(false)
  })

  test("wrapper data", () => {
    expect(wrapper.vm.index).toBe(-1)
    //expect(wrapper.vm.intervalId).toBe(0)
    expect(wrapper.vm.autoElt).toBe(null)
    expect(wrapper.vm.randomElt).toBe(null)
    expect(wrapper.vm.autoState).toBe(true)
    expect(wrapper.vm.randomState).toBe(false)
  })

  test("wrapper methods", () => {
    expect(typeof wrapper.vm.setIcon).toBe("function")
    expect(typeof wrapper.vm.setAuto).toBe("function")
    expect(typeof wrapper.vm.setRandom).toBe("function")
    expect(typeof wrapper.vm.setSlide).toBe("function")
    expect(typeof wrapper.vm.setKeyboard).toBe("function")
    expect(typeof wrapper.vm.getRandomInteger).toBe("function")
    expect(typeof wrapper.vm.hasSlot).toBe("function")
    expect(typeof wrapper.vm.checkAuto).toBe("function")
    expect(typeof wrapper.vm.runSlider).toBe("function")
    expect(typeof wrapper.vm.checkRandom).toBe("function")
    expect(typeof wrapper.vm.refreshSlide).toBe("function")
    expect(typeof wrapper.vm.goNext).toBe("function")
    expect(typeof wrapper.vm.goPrevious).toBe("function")
  })
})
