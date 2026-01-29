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
  <section className="innovation-section" style={{backgroundImage: "url('/Investment-Opportunities/banner.jpg')",}}>
    <div className="innovation-overlay" />
    <div className="innovation-container">
      <div className="max-w-lg">
        <h3 className="innovation-subheading">Discover the Future of</h3>
        <h1 className="innovation-title">
          Investable <br /> Innovation
        </h1>
        <p className="innovation-text">
          Access curated investment-ready companies, market insights, and
          strategic support to maximise returns and growth potential.
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
            Our Investment-Ready Pipeline is built to bridge the gap between
            innovation and investment. Through structured assessment and
            tailored support, we ensure every opportunity is market-validated,
            de-risked, and primed for scale.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Sourcing &amp; Screening</h3>
            <p>
              Rigorous selection of companies through partnerships with
              accelerators, universities, and innovation networks.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Market Validation</h3>
            <p>
              Each venture undergoes deep market analysis, customer validation,
              and technology assessment to confirm commercial potential.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Readiness Scoring</h3>
            <p>
              Businesses are evaluated across financial, operational, and
              scalability parameters to create a clear investment-readiness
              score.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Investor Matching</h3>
            <p>
              Tailored introductions to investors aligned with sector focus,
              investment thesis, and strategic goals.
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
              src="/Investment-Opportunities/1.jpg"
              alt=""
            />
            <h3>Deal Flow Curation</h3>
            <p>
              Access to pre-qualified companies with proven traction, validated
              IP, and robust business strategies.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/Investment-Opportunities/2.jpg"
              alt=""
            />
            <h3>Due Diligence Support</h3>
            <p>
              In-depth review of technology, market, and financials to
              streamline investment decisions and reduce risk.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/Investment-Opportunities/3.jpg"
              alt=""
            />
            <h3>Strategic Positioning</h3>
            <p>
              We refine each venture’s value proposition and investor pitch to
              maximise visibility and alignment with funding goals.
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
          Inventya’s Investment-Ready Pipeline offers more than deal flow, it
          provides strategic confidence. By combining market intelligence,
          innovation analytics, and decades of experience, we ensure that every
          opportunity presented is credible, scalable, and primed for success.
          Our investor network benefits from exclusive access to disruptive
          innovators shaping industries such as AI, HealthTech, Energy, and Deep
          Tech.
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
          Invest in Businesses <br />
          Built for <span>Growth</span>
        </h1>
        <p className="growth-subtext">
          Access a curated pipeline of innovation-driven companies ready to
          scale, attract funding, and deliver measurable impact.
        </p>
        <a href="#" className="growth-btn">
          Explore Investment-Ready Opportunities
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
