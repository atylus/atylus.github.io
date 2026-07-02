"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

function formatPrice(value: number): string {
  return value.toFixed(2);
}

export default function CartSection() {
  const { populatedItems, updateQuantity, removeItem, subtotal } = useCart();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement cart section functionality
  };
  if (populatedItems.length === 0) {
    return (
      <section className="cart-sec ibt-section-gap">
        <div className="container">
          <h4 className="title">Your cart is empty</h4>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-sec ibt-section-gap">
      <div className="container">
        <div className="cart-table-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {populatedItems.map(({ product, quantity, lineTotal }) => {
                const imgSrc = product.imageSrc.startsWith("/")
                  ? product.imageSrc
                  : `/${product.imageSrc}`;
                const priceNumber = Number.parseFloat(product.price);
                const unitPrice = Number.isFinite(priceNumber)
                  ? priceNumber
                  : 0;

                return (
                  <tr key={product.id}>
                    <td>
                      <div className="product-block">
                        <Link href="/shop-single">
                          <Image
                            alt={product.title}
                            src={imgSrc}
                            width={product.imageWidth}
                            height={product.imageHeight}
                          />
                        </Link>
                        <h4 className="title">
                          <Link href="/shop-single" title="">
                            {product.title}
                          </Link>
                        </h4>
                        {"rating" in product && product.rating ? (
                          <ul className="rating">
                            {Array.from({ length: product.rating }).map(
                              (_, index) => (
                                <li key={index}>
                                  <i className="fa fa-star" />
                                </li>
                              ),
                            )}
                          </ul>
                        ) : null}
                      </div>
                    </td>
                    <td>
                      <span className="price2 v2">
                        / $ {formatPrice(unitPrice)} /
                      </span>
                    </td>
                    <td>
                      <div className="quantity-filter m-0">
                        <div className="qty-box">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(product.id, quantity + 1)
                            }
                          >
                            +
                          </button>
                          <input
                            type="number"
                            value={quantity}
                            min={0}
                            onChange={(e) =>
                              updateQuantity(
                                product.id,
                                Number.parseInt(e.target.value, 10) || 0,
                              )
                            }
                          />
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(product.id, quantity - 1)
                            }
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="price2">
                        / $ {formatPrice(lineTotal)} /
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        title=""
                        className="close-btn2"
                        onClick={() => removeItem(product.id)}
                      >
                        <Image
                          alt="Remove item"
                          src="/assets/images/icon/cross.svg"
                          width={16}
                          height={16}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="cart-footer">
          <form onSubmit={handleSubmit} className="footer-left">
            <input type="text" placeholder="Coupon" required />
            <button type="submit" className="ibt-btn ibt-btn-outline">
              <span>Send message</span>
              <i className="icon-arrow-top" />
            </button>
          </form>
          <div className="footer-right">
            <button type="button" title="" className="ibt-btn ibt-btn-outline">
              <span>Update cart</span>
              <i className="icon-arrow-top" />
            </button>
          </div>
        </div>
        <div className="cart-table2">
          <h4 className="title">Cart</h4>
          <table>
            <thead>
              <tr>
                <th>Subtotal:</th>
                <th>$ {formatPrice(subtotal)}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sale:</td>
                <td>$ 0.00</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>$ {formatPrice(subtotal)}</td>
              </tr>
            </tbody>
          </table>
          <Link href="/checkout" title="" className="ibt-btn ibt-btn-dark">
            <span>Proceed to checkout</span>
            <i className="icon-arrow-top" />
          </Link>
        </div>
      </div>
    </section>
  );
}
