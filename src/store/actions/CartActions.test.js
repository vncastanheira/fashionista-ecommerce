import {
  cartAddProduct,
  cartRemoveProduct,
  cartRemoveAllProduct,
  CART,
} from "./cartActions";

describe("Cart Actions", () => {
  const product = {
    name: "VESTIDO TRANSPASSE BOW",
    style: "20002605",
    code_color: "20002605_613",
    color_slug: "tapecaria",
    color: "TAPEÇARIA",
    on_sale: false,
    regular_price: "R$ 199,90",
    actual_price: "R$ 199,90",
    discount_percentage: "",
    installments: "3x R$ 66,63",
    image:
      "https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912",
    sizes: [
      {
        available: false,
        size: "PP",
        sku: "5807_343_0_PP",
      },
      {
        available: true,
        size: "P",
        sku: "5807_343_0_P",
      },
      {
        available: true,
        size: "M",
        sku: "5807_343_0_M",
      },
      {
        available: true,
        size: "G",
        sku: "5807_343_0_G",
      },
      {
        available: false,
        size: "GG",
        sku: "5807_343_0_GG",
      },
    ],
  };

  it("Add Product", () => {
    const size = "G";
    const expectedAction = {
      type: CART.CART_ADD_PRODUCT,
      product,
      size,
    };

    expect(cartAddProduct(product, size)).toEqual(expectedAction);
  });

  it("Remove Product", () => {
    const size = "G";
    const expectedAction = {
      type: CART.CART_REMOVE_PRODUCT,
      product,
      size,
    };

    expect(cartRemoveProduct(product, size)).toEqual(expectedAction);
  });

  it("Remove All Product", () => {
    const size = "M";
    const expectedAction = {
      type: CART.CART_REMOVE_ALL_PRODUCT,
      product,
      size,
    };

    expect(cartRemoveAllProduct(product, size)).toEqual(expectedAction);
  });
});
