import { mount, enableAutoUnmount } from "@vue/test-utils"
import SliderElt from "../../src/lib-components/SliderElt.vue"

let wrapper;

beforeEach(() => {
  wrapper = mount(SliderElt, {
    props: {
      slides: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" }
      ]
    },
    slots: {
      "slide": "Test Slide",
      "info": "Test Info",
      "gallery": "Test Gallery"
    }
  })

  wrapper.vm.refreshSlide = jest.fn()
  wrapper.vm.setAuto = jest.fn()
  wrapper.vm.setRandom = jest.fn()
})

enableAutoUnmount(afterEach)

/**
 * ! DOM ELEMENTS
 * @jest-environment jsdom
 */
describe("DOM elements", () => {

  test("must create a figure element", () => {
    expect(wrapper.find("figure").exists()).toBe(true)
  })
})

/**
 * ! PROPS
 * @jest-environment jsdom
 */
describe("Props", () => {

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
})

/**
 * ! DATA
 * @jest-environment jsdom
 */
describe("Data", () => {

  test("must have a data 'index' with 'Number' as type & -1 as default value", () => {
    expect(typeof wrapper.vm.index).toBe("number")
    expect(wrapper.vm.index).toBe(-1)
  })

  test("must have a data 'intervalId' with 'Number' as type", () => {
    expect(typeof wrapper.vm.intervalId).toBe("number")
  })

  test("must have a data 'autoElt' with null as default value", () => {
    expect(wrapper.vm.autoElt).toBe(null)
  })

  test("must have a data 'randomElt' with null as default value", () => {
    expect(wrapper.vm.randomElt).toBe(null)
  })
})

/**
 * ! BEFORE CREATE HOOK
 * @jest-environment jsdom
 */
describe("beforeCreate() Hook", () => {

  test("must have a beforeCreate() hook", () => {
    expect(wrapper.vm.$options.beforeCreate).toBeDefined()
  })
})

/**
 * ! CREATED HOOK
 * @jest-environment jsdom
 */
describe("mounted() Hook", () => {

  test("must have a mounted() hook", () => {
    expect(wrapper.vm.$options.mounted).toBeDefined()
  })
})

/**
 * ! SET ICON METHOD
 * @jest-environment jsdom
 */
describe("setIcon() method", () => {

  test("must have a setIcon() method with 3 parameters", () => {
    expect(wrapper.vm.setIcon).toBeDefined()
    expect(wrapper.vm.setIcon.length).toBe(3)
  })
})

/**
 * ! SET AUTO METHOD
 * @jest-environment jsdom
 */
describe("setAuto() method", () => {

  test("must have a setAuto()method with 4 parameters", () => {
    expect(wrapper.vm.setAuto).toBeDefined()
  })
})

/**
 * ! SET RANDOM METHOD
 * @jest-environment jsdom
 */
describe("setRandom() method", () => {

  test("must have a setRandom() method with 4 parameters", () => {
    expect(wrapper.vm.setRandom).toBeDefined()
  })
})

/**
 * ! SET KEYBOARD METHOD
 * @jest-environment jsdom
 */
describe("setKeyboard() method", () => {

  test("must call checkRandom() method when keydown 'ArrowUp' is pressed", () => {
    wrapper.vm.checkRandom = jest.fn()
    wrapper.vm.setKeyboard({code: "ArrowUp"})
    expect(wrapper.vm.checkRandom).toHaveBeenCalled()
  })

  test("must call goNext() method when keydown 'ArrowRight' is pressed", () => {
    wrapper.vm.goNext = jest.fn()
    wrapper.vm.setKeyboard({code: "ArrowRight"})
    expect(wrapper.vm.goNext).toHaveBeenCalled()
  })

  test("must call checkAuto() method when keydown 'ArrowDown' is pressed", () => {
    wrapper.vm.checkAuto = jest.fn()
    wrapper.vm.setKeyboard({code: "ArrowDown"})
    expect(wrapper.vm.checkAuto).toHaveBeenCalled()
  })

  test("must call goPrevious() method when keydown 'ArrowLeft' is pressed", () => {
    wrapper.vm.goPrevious = jest.fn()
    wrapper.vm.setKeyboard({code: "ArrowLeft"})
    expect(wrapper.vm.goPrevious).toHaveBeenCalled()
  })
})

/**
 * ! GET RANDOM INTEGER METHOD
 * @jest-environment jsdom
 */
describe("getRandomInteger() method", () => {

  test("must return a random integer between 0 & 5", () => {
    const result = wrapper.vm.getRandomInteger(0, 5)
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(5)
  })

  test("must return a random integer between 0 & 100", () => {
    const result = wrapper.vm.getRandomInteger(0, 100)
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(100)
  })
})

/**
 * ! HAS SLOT METHOD
 * @jest-environment jsdom
 */
describe("hasSlot(name) method", () => {

  test("must return true if the 3 slots exist", () => {
    expect(wrapper.vm.hasSlot("slide")).toBe(true)
    expect(wrapper.vm.hasSlot("info")).toBe(true)
    expect(wrapper.vm.hasSlot("gallery")).toBe(true)
  })

  test("must return false if the test slot doesn't exist", () => {
    expect(wrapper.vm.hasSlot("test")).toBe(false)
  })
})

/**
 * ! CHECK RANDOM METHOD
 * @jest-environment jsdom
 */
describe("checkRandom() method", () => {

  test("must call setRandom(false, 'Random', 'fa-random', 'fa-long-arrow-alt-right') method if randomState is true", () => {
    wrapper.vm.randomState = true
    wrapper.vm.checkRandom()
    expect(wrapper.vm.setRandom).toHaveBeenCalledWith(false, "Random", "fa-random", "fa-long-arrow-alt-right")
  })

  test("must call setRandom(true, 'Normal', 'fa-long-arrow-alt-right', 'fa-random') method if randomState is false", () => {
    wrapper.vm.randomState = false
    wrapper.vm.checkRandom()
    expect(wrapper.vm.setRandom).toHaveBeenCalledWith(true, "Normal", "fa-long-arrow-alt-right", "fa-random")
  })

  test("must call refreshSlide() method", () => {
    wrapper.vm.refreshSlide = jest.fn()
    wrapper.vm.checkRandom()
    expect(wrapper.vm.refreshSlide).toHaveBeenCalled()
  })
})

/**
 * ! CHECK AUTO METHOD
 * @jest-environment jsdom
 */
describe("checkAuto() method", () => {

  test("must call setAuto(false, 'Auto', 'fa-play', 'fa-pause') method if autoState is true", () => {
    wrapper.vm.autoState = true
    wrapper.vm.checkAuto()
    expect(wrapper.vm.setAuto).toHaveBeenCalledWith(false, "Play", "fa-play", "fa-pause")
  })

  test("must call setAuto(true, 'Manual', 'fa-pause', 'fa-play') method if autoState is false", () => {
    wrapper.vm.autoState = false
    wrapper.vm.checkAuto()
    expect(wrapper.vm.setAuto).toHaveBeenCalledWith(true, "Pause", "fa-pause", "fa-play")
  })

  test("must call refreshSlide() method", () => {
    wrapper.vm.refreshSlide = jest.fn()
    wrapper.vm.checkAuto()
    expect(wrapper.vm.refreshSlide).toHaveBeenCalled()
  })
})

/**
 * ! RUN SLIDER METHOD
 * @jest-environment jsdom
 */
describe("runSlider() method", () => {

  test("must define intervalId with setInterval() if autoState is true", () => {
    wrapper.vm.autoState = true
    wrapper.vm.runSlider()
    expect(wrapper.vm.intervalId).not.toBe(null)
  })

  test("must call goNext() method if autoState is false", () => {
    wrapper.vm.autoState = false
    wrapper.vm.goNext = jest.fn()
    wrapper.vm.runSlider()
    expect(wrapper.vm.goNext).toHaveBeenCalled()
  })
})

/**
 * ! GO NEXT METHOD
 * @jest-environment jsdom
 */
describe("goNext() method", () => {

  test("must call getRandomInteger() method & give the value to index when randomState is true", () => {
    wrapper.vm.randomState = true
    wrapper.vm.getRandomInteger = jest.fn().mockReturnValue(1)
    wrapper.vm.goNext()
    expect(wrapper.vm.index).toBe(1)
    expect(wrapper.vm.getRandomInteger).toHaveBeenCalled()
  })

  test("must increment index when randomState is false", () => {
    wrapper.vm.randomState = false
    wrapper.vm.index = 0
    wrapper.vm.goNext()
    expect(wrapper.vm.index).toBe(1)
  })

  test("must initialize index to 0 if index is equal to slides.length", () => {
    wrapper.vm.index = 2
    wrapper.vm.goNext()
    expect(wrapper.vm.index).toBe(0)
  })

  test("must call refreshSlide() method", () => {
    wrapper.vm.refreshSlide = jest.fn()
    wrapper.vm.goNext()
    expect(wrapper.vm.refreshSlide).toHaveBeenCalled()
  })
})

/**
 * ! GO PREVIOUS METHOD
 * @jest-environment jsdom
 */
describe("goPrevious() method", () => {

  test("must call getRandomInteger() method & give the value to index when randomState is true", () => {
    wrapper.vm.randomState = true
    wrapper.vm.getRandomInteger = jest.fn().mockReturnValue(1)
    wrapper.vm.goPrevious()
    expect(wrapper.vm.index).toBe(1)
    expect(wrapper.vm.getRandomInteger).toHaveBeenCalled()
  })

  test("must decrement index when randomState is false", () => {
    wrapper.vm.randomState = false
    wrapper.vm.index = 1
    wrapper.vm.goPrevious()
    expect(wrapper.vm.index).toBe(0)
  })

  test("must call refreshSlide() method", () => {
    wrapper.vm.refreshSlide = jest.fn()
    wrapper.vm.goPrevious()
    expect(wrapper.vm.refreshSlide).toHaveBeenCalled()
  })
})
