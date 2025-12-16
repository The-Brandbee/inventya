"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import HeaderMobileIn from "../common/HeaderMobile.js";


import Footer from "../common/Footer.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";





export default function Arfactoring() {
  return (
    <div className="innner-page">       
             
              
      <main>                   
        <Head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="=" />
        </Head>

        <header>
          <Header />

       </header> 
  <>
  {/* ===== INVESTABLE INNOVATION SECTION ===== */}
  <section className="innovation-section">
    <div className="innovation-overlay" />
    <div className="innovation-container">
      <div className="max-w-lg">
        {/* <h3 class="innovation-subheading">Discover the Future of</h3> */}
        <h1 className="innovation-title">Reduce Tax and Scale Innovation</h1>
        <p className="innovation-text">
          Lower your corporation tax by commercialising patented technology
          strategically.
        </p>
      </div>
    </div>
  </section>
  <section className="programme-section">
    <div className="programme-container">
      <div className="programme-grid">
        {/* LEFT SIDE */}
        <div className="programme-left">
          <h2 className="programme-title">
            The Programme <br /> Structure
          </h2>
          <p className="programme-text">
            Our Patent Box service helps businesses leverage patented
            innovations to significantly reduce their corporation tax. We
            streamline the process by identifying qualifying IP, mapping revenue
            streams, and preparing robust documentation that aligns with HMRC
            requirements. The aim is to secure tax efficiencies that strengthen
            long-term innovation and growth.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Patent Eligibility Review</h3>
            <p>
              {" "}
              Assessment of your existing or pending patents to confirm
              qualifying IP and innovation scope.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Revenue Stream Mapping</h3>
            <p>
              Identification of income linked to patented products and
              technologies to calculate eligible relief.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Technical and Financial Alignment</h3>
            <p>
              Coordination between R&amp;D, finance, and commercial teams to
              ensure accurate and compliant claims.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Claim Submission Guidance</h3>
            <p>
              Support in preparing, framing, and submitting Patent Box claims
              with clarity and precision.
            </p>
            <div className="underline-line" id="extra-underline" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="keyservices-section">
    <div className="keyservices-container">
      {/* LEFT SIDE 3 CARDS WITH SCROLL */}
      <div className="services-scroll-area">
        <div className="services-cards">
          {/* CARD 1 */}
          <div className="service-card">
            <img
              src="/innovation/business-men-shaking-hands-with-collaboration-conference-room-deal-partnership-teamwork-woman-meeting-office-brainstorming-strategy-planning-project-n.png"
              alt=""
            />
            <h3>Qualifying IP Assessment</h3>
            <p>
              Evaluation of patents, applications, or exclusivity rights that
              can unlock tax relief.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Innovation Income Analysis</h3>
            <p>
              Structured review of sales, licensing, and IP-derived earnings for
              accurate benefit calculation.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Documentation and Compliance Support</h3>
            <p>
              Preparation of technical and financial evidence to meet HMRC rules
              and optimise tax outcomes.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Integration with R&amp;D Tax Strategy</h3>
            <p>
              Coordinated planning to align Patent Box with R&amp;D claims for
              maximum fiscal advantage.
            </p>
          </div>
        </div>
        {/* VERTICAL SCROLLBAR AREA */}
        <div className="services-scrollbar" />
      </div>
      {/* RIGHT SIDE TITLE */}
      <div className="services-title">
        <h2>
          <span>Key</span> <br />
          Services
        </h2>
      </div>
    </div>
  </section>
  <section className="impact-section">
    <div className="impact-overlay" />
    <div className="impact-container">
      <div className="impact-left">
        <h2 className="impact-title">Impact and Advantage</h2>
        <p className="impact-text">
          Patent Box provides substantial tax savings while encouraging
          continued innovation and investment. By accurately mapping IP-derived
          revenue and ensuring compliance, businesses secure long-term financial
          efficiencies that support scaling, product diversification and global
          competitiveness. This approach transforms patented technology into a
          sustainable strategic asset.
        </p>
      </div>
    </div>
  </section>
  <section className="growth-banner">
    <div className="growth-overlay" />
    <div className="growth-container">
      {/* LEFT CONTENT */}
      <div className="growth-left">
        <h1 className="growth-title">
          Turn Your Patents into <br />
          Lasting Financial <span>Advantage</span>
        </h1>
        <p className="growth-subtext">
          Unlock reduced tax rates and reinvest savings into innovation and
          growth.
        </p>
        <a href="#" className="growth-btn">
          Speak to Our Patent Box Experts
        </a>
      </div>
    </div>
  </section>
</>


        <Footer />                
      </main>          
    </div>
  );
}
