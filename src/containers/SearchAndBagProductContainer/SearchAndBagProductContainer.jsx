import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./SearchAndBagProductContainer.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import BagProduct from "../../components/BagProduct/BagProduct";

const SearchAndBagProductContainer = ({ isSearch }) => {
  const { cartList } = useSelector((state) => state.cartProducts);
  const { productsList } = useSelector((state) => state.products);
  const { cartTotalPrice } = useSelector((state) => state.cartProducts);
  const { cartCount } = useSelector((state) => state.cartProducts);

  return (
    <div className="searchAndBagProduct__container">
      {isSearch ? (
        <SearchBar productsList={productsList} />
      ) : (
        <>
          <div>
            {cartList.length ? (
              cartList.map((product, index) => {
                return (
                  <BagProduct
                    product={{ ...product }}
                    isSearch={false}
                    key={index}
                  />
                );
              })
            ) : (
              <div className="searchAndBagProduct__emptyBag">
                {" "}
                Sua sacola está vazia :/
              </div>
            )}
          </div>
          <div className="total-price__tag">
            <span className="total-price__text">Subtotal - </span>
            {cartCount === 0 ? (
              <span className="total-price__text" data-testid="total-price">
                R$ 0,00
              </span>
            ) : (
              <span className="total-price__text" data-testid="total-price">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(cartTotalPrice)}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchAndBagProductContainer;
