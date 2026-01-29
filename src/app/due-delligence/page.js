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
  <section className="innovation-section" style={{backgroundImage: "url('/Due-Diligence/banner.jpg')",}}>
    <div className="innovation-overlay" />
    <div className="innovation-container">
      <div className="max-w-lg">
        {/* <h3 class="innovation-subheading">Discover the Future of</h3> */}
        <h1 className="innovation-title">
          Informed Investments Begin with Insight
        </h1>
        <p className="innovation-text">
          Comprehensive due diligence to uncover value, mitigate risk, and
          ensure smarter investment decisions.
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
            Our due diligence framework combines commercial, technical,
            financial, and IP analysis to deliver a 360° understanding of every
            opportunity. We empower investors with clarity and confidence before
            committing capital.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Technical Evaluation</h3>
            <p>
              In-depth review of the innovation’s feasibility, scalability, and
              intellectual property position.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Financial Assessment</h3>
            <p>
              ERigorous examination of financial health, forecasts, and
              underlying business assumptions.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Market Validation</h3>
            <p>
              Validation of target markets, customer traction, and competitive
              positioning to assess true market potential.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Operational Readiness</h3>
            <p>
              Evaluation of leadership, governance, and execution capabilities
              to ensure sustainable growth.
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
              src="/Due-Diligence/1.jpg"
              alt=""
            />
            <h3>Technology &amp; IP Audits</h3>
            <p>
              Detailed evaluation of intellectual property assets, protection
              strategies, and innovation ownership to confirm technology
              uniqueness and safeguard investor interests.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/Due-Diligence/2.jpg"
              alt=""
            />
            <h3>Commercial &amp; Market Analysis</h3>
            <p>
              Comprehensive review of customer demand, competitive landscape,
              and market trends to identify growth potential and revenue
              opportunities.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/Due-Diligence/3.jpg"
              alt=""
            />
            <h3>Financial Modelling &amp; Stress Testing</h3>
            <p>
              Advanced modelling of business performance and financial
              resilience to predict outcomes and support accurate valuation
              assessments.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/Due-Diligence/3.jpg"
              alt=""
            />
            <h3>Risk Profiling &amp; Scoring</h3>
            <p>
              Systematic identification and rating of potential risks across
              commercial, technical, and regulatory areas to support informed
              investment choices.
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
          Inventya’s due diligence process transforms complex data into
          actionable insights that strengthen investor confidence. Our
          structured evaluations uncover hidden risks, highlight untapped
          opportunities, and deliver clarity for every investment decision. By
          combining expertise in innovation, finance, and markets, we help
          investors make informed choices that consistently drive returns and
          reduce uncertainty.
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
          Make Every <br /> Investment <span>Count</span>
        </h1>
        <p className="growth-subtext">
          Partner with Inventya for evidence-based, expert-led due diligence
          that safeguards your investment decisions.
        </p>
        <a href="#" className="growth-btn">
          Start Your Due Diligence Review
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
