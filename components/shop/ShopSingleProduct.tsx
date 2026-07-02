"use client";

import Image from "next/image";
import { useState } from "react";

import QuantityBox from "./QuantityBox";
import ShopReviewForm from "./ShopReviewForm";

export default function ShopSingleProduct() {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description",
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="shop-sec2 ibt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="shop-img2">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/event/shop2-1.png"
                width={574}
                height={591}
              />
              <span className="tag">SALE</span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="shop-content2">
              <p>
                The development of neural networks is a specialized task that
                requires expertise and experience. Our team of skilled
                professionals excels in designing and implementing neural
                network architectures tailored to your specific business needs.
              </p>
              <ul className="ser-detail-list">
                <li>
                  <i className="fontello icon-button-arrow-down" />
                  Cotton
                </li>
                <li>
                  <i className="fontello icon-button-arrow-down" />
                  Polyester
                </li>
                <li>
                  <i className="fontello icon-button-arrow-down" />
                  Wool
                </li>
                <li>
                  <i className="fontello icon-button-arrow-down" />
                  Blends
                </li>
              </ul>
              <span className="price">
                / <del>$ 180.99 -</del>
                <span>$ 130.39</span> /
              </span>
              <ul className="rating">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
              <div className="quantity-filter">
                <QuantityBox value={quantity} onChange={setQuantity} />
                <button type="button" className="cart-btn">
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </button>
              </div>
              <ul className="tag-list2">
                <li>
                  <span>SKU:</span>12564789-11
                </li>
                <li>
                  <span>Category:</span>Clothes
                </li>
                <li>
                  <span>Tags:</span>/ hoody / clothes / red /
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="review-tabs ibt-section-gapTop">
          <div className="shop-tabs">
            <ul className="nav nav-tabs2" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  className={`nav-link${activeTab === "description" ? " active" : ""}`}
                  id="home-tab"
                  role="tab"
                  aria-controls="home"
                  aria-selected={activeTab === "description"}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  className={`nav-link${activeTab === "reviews" ? " active" : ""}`}
                  id="profile-tab"
                  role="tab"
                  aria-controls="profile"
                  aria-selected={activeTab === "reviews"}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className={`tab-pane fade ibt-tab-fade${
                activeTab === "description" ? " show active" : ""
              }`}
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="review-content">
                <div className="shop-content2">
                  <p>
                    Data lies at the heart of neural networks, and our services
                    start with understanding your unique data landscape. We work
                    closely with you to identify and collect relevant data
                    sources, ensuring that your neural network models are built
                    on a solid foundation. Our data scientists employ
                    cutting-edge techniques to preprocess and clean the data,
                    making it ready for training the neural network models.
                  </p>
                  <ul className="ser-detail-list v2">
                    <li>
                      <i className="fontello icon-button-arrow-down" />
                      Cotton
                    </li>
                    <li>
                      <i className="fontello icon-button-arrow-down" />
                      Polyester
                    </li>
                    <li>
                      <i className="fontello icon-button-arrow-down" />
                      Wool
                    </li>
                    <li>
                      <i className="fontello icon-button-arrow-down" />
                      Blends
                    </li>
                  </ul>
                  <ul className="tag-list3">
                    <li>
                      <span>Weight:</span>1kg
                    </li>
                    <li>
                      <span>Dimensions:</span>10 × 11 × 22 cm
                    </li>
                    <li>
                      <span>Color:</span>Black, Blue, Red, White
                    </li>
                    <li>
                      <span>Sizes:</span>EU40, EU41, EU42, EU42.5
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`tab-pane fade ibt-tab-fade${
                activeTab === "reviews" ? " show active" : ""
              }`}
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="review-content2">
                <h4 className="title">Reviews</h4>
                <div className="comment-block">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/team/team2-3.png"
                    width={119}
                    height={122}
                  />
                  <h4 className="name">Sam Collins</h4>
                  <span className="date">15 Apr. 2023</span>
                  <ul className="rating">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <p>
                    Striped bass yellowtail kingfish angler catfish angelfish
                    longjaw mudsucker, codlet Ragfish Cherubfish. Ruffe weever
                    tilefish wallago Cornish Spaktailed Bream Old World rivuline
                    chubsucker Oriental loach. Indian mul char spotted dogfish
                    Largemouth bass alewife cichlid ladyfish lizardfish
                  </p>
                </div>
                <div className="contact-form3">
                  <ShopReviewForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
