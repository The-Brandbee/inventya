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
  <section className="innovation-section" style={{backgroundImage: "url('/PE-VC-Collaborations/banner.jpg')",}}>
    <div className="innovation-overlay" />
    <div className="innovation-container">
      <div className="max-w-lg">
        {/* <h3 class="innovation-subheading">Discover the Future of</h3> */}
        <h1 className="innovation-title">
          Empowering Partnerships for Scalable Growth
        </h1>
        <p className="innovation-text">
          Connecting private equity and venture capital firms with
          innovation-driven opportunities worldwide.
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
            Inventya’s PE/VC Collaboration framework builds meaningful
            partnerships between investors and innovators. We enable smarter
            co-investment, strategic deal flow, and long-term value creation
            across diverse sectors.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Strategic Partner Matching</h3>
            <p>
              Connect with aligned investors, funds, and innovation-driven
              ventures for co-investment opportunities.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Deal Origination Support</h3>
            <p>
              Access a curated pipeline of high-quality, pre-vetted investment
              opportunities.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Collaborative Growth Platforms</h3>
            <p>
              Engage in structured programmes and syndicates that promote joint
              success and portfolio expansion.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Cross-Border Investment Facilitation</h3>
            <p>
              Streamline international collaboration with legal, financial, and
              operational advisory.
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
              src="/PE-VC-Collaborations/1.jpg"
              alt=""
            />
            <h3>Co-Investment Networks</h3>
            <p>
              Facilitate joint investments across sectors to diversify
              portfolios and amplify capital efficiency.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/PE-VC-Collaborations/2.jpg"
              alt=""
            />
            <h3>Strategic Syndication Advisory</h3>
            <p>
              Structure collaborative funding rounds that align with long-term
              investor interests.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/PE-VC-Collaborations/3.jpg"
              alt=""
            />
            <h3>Investor Intelligence Sharing</h3>
            <p>
              Leverage collective insights and data to improve investment
              evaluation and risk assessment.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/PE-VC-Collaborations/3.jpg"
              alt=""
            />
            <h3>Post-Investment Collaboration Support</h3>
            <p>
              Enable shared growth strategies, exit planning, and portfolio
              optimisation through continuous engagement.
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
          Inventya strengthens investor ecosystems by fostering collaboration,
          trust, and shared intelligence. Our partnerships enable higher success
          rates in funding rounds, access to emerging technologies, and
          sustained portfolio growth through joint expertise and diversified
          networks.
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
          Partner for Greater <br /> Investment <span>Impact</span>
        </h1>
        <p className="growth-subtext">
          Join a network of global investors shaping the future of
          innovation-driven investment.
        </p>
        <a href="#" className="growth-btn">
          Explore Collaboration Opportunities
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
