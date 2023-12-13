import { shallowMount, enableAutoUnmount } from "@vue/test-utils"
import ForgotPass from "../../components/auth/ForgotPass"

let wrapper;

jest.mock("axios");

beforeEach(() => {
  wrapper = shallowMount(ForgotPass, {
    props: {
      val: {
        TEST: "test",
        RECAPTCHA_KEY: "test"
      }
    },
    data() {
      return {
        email: "email@test.com"
      }
    }
  });
});

enableAutoUnmount(afterEach)

/**
 * @jest-environment jsdom
 */
describe("ForgotPass", () => {
  test("wrapper", () => { 
    expect(wrapper.exists()).toBe(true)
  })

  test("components", () => { 
    expect(typeof wrapper.findComponent({ name: "BtnElt" })).toBe("object")
    expect(typeof wrapper.findComponent({ name: "FieldElt" })).toBe("object")
    expect(typeof wrapper.findComponent({ name: "VueRecaptcha" })).toBe("object")
  })

  test("props", () => { 
    expect(wrapper.props().val.TEST).toBe("test")
    expect(wrapper.props().val.RECAPTCHA_KEY).toBe("test")
  })

  test("data", () => { 
    expect(wrapper.vm.email).toBe("email@test.com")
  })

  test("methods", () => { 
    expect(typeof wrapper.vm.onVerify).toBe("function")
    expect(typeof wrapper.vm.forgotPass).toBe("function")
  })
})
