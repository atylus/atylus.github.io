"use client";

import { useCart } from "@/context/CartContext";
import type { AddToCartButtonProps } from "@/types/common";

export default function AddToCartButton({
  productId,
  className = "show-now",
  title = "",
}: AddToCartButtonProps) {
  const { items, addItem, removeItem } = useCart();
  const inCart = items.some((item) => item.productId === productId);

  const handleClick = () => {
    if (inCart) removeItem(productId);
    else addItem(productId, 1);
  };

  return (
    <button
      type="button"
      title={inCart ? "Remove from cart" : title || "Add to cart"}
      className={`${className}${inCart ? " in-cart" : ""}`}
      onClick={handleClick}
    >
      {inCart ? (
        <i className="fa fa-check" />
      ) : (
        <i className="fa fa-shopping-cart" />
      )}
    </button>
  );
}

