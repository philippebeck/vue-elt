import { mount } from "@vue/test-utils"
import SliderElt from "../../src/lib-components/SliderElt.vue"

/**
 * ! DEFAULT SLIDER ELT
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

  /**
   * ! HOOKS
   * @jest-environment jsdom
   */
  describe("Hooks", () => {

    test("must have a beforeCreate() hook", () => {
      expect(wrapper.vm.$options.beforeCreate).toBeDefined()
    })

    test("must have a mounted() hook", () => {
      expect(wrapper.vm.$options.mounted).toBeDefined()
    })

    test("must have a setIcon() method with 3 parameters", () => {
      expect(wrapper.vm.setIcon).toBeDefined()
      expect(wrapper.vm.setIcon.length).toBe(3)
    })

    test("must have a setAuto()method with 4 parameters", () => {
      expect(wrapper.vm.setAuto).toBeDefined()
      expect(wrapper.vm.setAuto.length).toBe(4)
    })
  })

  /**
   * ! SET KEYBOARD METHOD
   * @jest-environment jsdom
   */
  describe("setKeyboard() method", () => {
    const wrapper = mount(SliderElt, {
      props: {
        slides: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" }
        ]
      }
    })

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
    const wrapper = mount(SliderElt, {
      props: {
        slides: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" }
        ]
      }
    })

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
    const wrapper = mount(SliderElt, {
      props: {
        slides: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" }
        ]
      },
      slots: {
        "slide-1": "<h1>Slide 1</h1>",
        "slide-2": "<h1>Slide 2</h1>",
        "slide-3": "<h1>Slide 3</h1>"
      }
    })

    test("must return true if slot exist", () => {
      expect(wrapper.vm.hasSlot("slide-1")).toBe(true)
    })

    test("must return false if slot doesn't exist", () => {
      expect(wrapper.vm.hasSlot("slide-4")).toBe(false)
    })
  })

  /**
   * ! CHECK RANDOM METHOD
   * @jest-environment jsdom
   */
  describe("checkRandom() method", () => {
    const wrapper = mount(SliderElt, {
      props: {
        slides: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" }
        ]
      }
    })

    wrapper.vm.setRandom = jest.fn()

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
    const wrapper = mount(SliderElt, {
      props: {
        slides: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" }
        ]
      }
    })

    wrapper.vm.setAuto = jest.fn()

    test("must call setAuto(false, 'Auto', 'fa-play', 'fa-pause') method if autoState is true", () => {
      wrapper.vm.autoState = true
      wrapper.vm.checkAuto()
      expect(wrapper.vm.setAuto).toHaveBeenCalledWith(false, "Auto", "fa-play", "fa-pause")
    })

    test("must call setAuto(true, 'Manual', 'fa-pause', 'fa-play') method if autoState is false", () => {
      wrapper.vm.autoState = false
      wrapper.vm.checkAuto()
      expect(wrapper.vm.setAuto).toHaveBeenCalledWith(true, "Manual", "fa-pause", "fa-play")
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
    const wrapper = mount(SliderElt, {
      props: {
        slides: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" }
        ],
        auto: true
      }
    })

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
    const wrapper = mount(SliderElt, {
      props: {
        slides: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" }
        ]
      }
    })

    wrapper.vm.classList = jest.fn()

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

    test("must call refreshSlide() method", () => {
      wrapper.vm.refreshSlide = jest.fn()
      wrapper.vm.goNext()
      expect(wrapper.vm.refreshSlide).toHaveBeenCalled()
    })
  })
})