import { shallowMount, enableAutoUnmount } from "@vue/test-utils"
import OrderSet from "../../components/setters/OrderSet"

let wrapper;

jest.mock("axios");

beforeEach(() => {
  wrapper = shallowMount(OrderSet, {
    props: {
      val: {
        TEST: "test"
      },
      orders: [{
        products: [{
          name: "Product name",
          price: "Product price",
          quantity: "Product quantity"
        }],
        total: "Order total",
        payment: "Order payment",
        status: "Order status"
      }],
      users: [{
        name: "User name",
        email: "User email",
        image: "User image",
        password: "User password",
        role: "User role"
      }]
    }
  });
});

enableAutoUnmount(afterEach)

/**
 * @jest-environment jsdom
 */
describe("OrderSet", () => {
  test("wrapper", () => {
    expect(wrapper.exists()).toBe(true)
  })

  test("components", () => { 
    expect(typeof wrapper.findComponent({ name: "BtnElt" })).toBe("object")
    expect(typeof wrapper.findComponent({ name: "CardElt" })).toBe("object")
    expect(typeof wrapper.findComponent({ name: "FieldElt" })).toBe("object")
    expect(typeof wrapper.findComponent({ name: "TableElt" })).toBe("object")
  })

  test("props", () => {
    expect(wrapper.props("val")).toStrictEqual({ TEST: "test" })
    expect(wrapper.props("orders")).toStrictEqual([{ 
      products: [{
        name: "Product name",
        price: "Product price",
        quantity: "Product quantity"
      }],
      total: "Order total",
      payment: "Order payment",
      status: "Order status"
    }])
    expect(wrapper.props("users")).toStrictEqual([{
      name: "User name",
      email: "User email",
      image: "User image",
      password: "User password",
      role: "User role"
    }])
  })

  test("methods", () => { 
    expect(typeof wrapper.vm.getOrders).toBe("function") 
    expect(typeof wrapper.vm.updateStatus).toBe("function") 
    expect(typeof wrapper.vm.deleteOrder).toBe("function") 
  })
})
