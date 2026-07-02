import React from "react";
import ThemeLogo from "@/components/common/ThemeLogo";

export default function Footer6() {
  return (
    <footer className="footer-style6">
      <div className="container">
        <div className="logo-box6">
          <ThemeLogo alt="AI Agency & Technology HTML Template" />
        </div>
        <div className="about-widget6">
          <h2 className="title">
            Embrace the future with our Atylus Artificial Intelligence HTML
            Template!
          </h2>
          <a
            href="https://themeforest.net/user/ib-themes/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="ibt-btn ibt-btn-outline-2"
          >
            <span>Purchase Atylus</span>
            <i className="icon-arrow-top" />
          </a>
          <p>
            <a href="#">© Atylus 2025.</a> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
