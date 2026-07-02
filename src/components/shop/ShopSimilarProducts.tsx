"use client";

import Image from "next/image";
import Link from "next/link";
import { shopProducts } from "@/data/shop";
import AddToCartButton from "@/components/shop/AddToCartButton";
import SubTitleWrapper from "../common/SubTitleWrapper";

const similarProducts = shopProducts.slice(0, 4);

function StarRating() {
  return (
    <ul className="rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <li key={i}>
          <i className="fa fa-star" />
        </li>
      ))}
    </ul>
  );
}

export default function ShopSimilarProducts() {
  return (
    <section className="shop-sec ibt-section-gapBottom">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>products</SubTitleWrapper>
          <h2 className="title animated-heading">Similar products</h2>
        </div>
        <div className="row">
          {similarProducts.map((product) => {
            const imgSrc = product.imageSrc.startsWith("/")
              ? product.imageSrc
              : `/${product.imageSrc}`;
            const contentClass = product.contentClassName ?? "shop-content";
            const cardClass = product.cardClassName ?? "shop-card";

            return (
              <div key={product.id} className="col-lg-3 col-md-6 col-sm-6">
                <div className={cardClass}>
                  <div className="shop-img">
                    <Link href="/shop-single">
                      <Image
                        alt={product.title}
                        src={imgSrc}
                        width={product.imageWidth}
                        height={product.imageHeight}
                      />
                    </Link>
                    {product.badgeText && (
                      <span className={product.badgeClassName ?? "tag"}>
                        {product.badgeText}
                      </span>
                    )}
                    <div className="shop-shap" />
                  </div>
                  <div className={contentClass}>
                    <AddToCartButton productId={product.id} />
                    <h4 className="title">
                      <Link href="/shop-single" title="">
                        {product.title}
                      </Link>
                    </h4>
                    <span className={product.oldPrice ? "price v2" : "price"}>
                      /{" "}
                      {product.oldPrice && (
                        <>
                          <del>$ {product.oldPrice} -</del>
                        </>
                      )}
                      <span>$ {product.price}</span> /
                    </span>
                    {product.rating !== undefined && product.rating > 0 && (
                      <StarRating />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
