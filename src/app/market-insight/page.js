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
        <h1 className="innovation-title">
          Turning Market Intelligence into Investment Advantage
        </h1>
        <p className="innovation-text">
          Empowering investors with data-driven insights for smarter decisions
          and sustained portfolio growth.
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
            Our Market Insights programme delivers actionable intelligence that
            supports informed investment decisions across industries and stages.
            By combining sector expertise with deep analytics, we help investors
            uncover trends, assess emerging opportunities, and anticipate shifts
            before they occur.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Sector Research</h3>
            <p>
              In-depth study of high-growth industries to identify investment
              opportunities and competitive advantages.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Trend Forecasting</h3>
            <p>
              Continuous monitoring of technology and market shifts to
              anticipate future investment directions.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Competitive Benchmarking</h3>
            <p>
              Comparative analysis of market players to determine relative
              positioning and differentiation.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Investment Mapping</h3>
            <p>
              Data-backed alignment of market signals with strategic investment
              goals and portfolio priorities.
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
            <h3>Sector Intelligence Reports</h3>
            <p>
              Detailed analysis of market trends, innovation clusters, and
              sector dynamics to guide investment targeting and diversification
              strategies.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Competitive Landscape Assessment</h3>
            <p>
              Evaluation of emerging and established competitors to reveal
              market positioning, barriers to entry, and growth opportunities.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Technology and Trend Forecasting</h3>
            <p>
              Identification of disruptive technologies and early-stage
              innovation patterns to help investors stay ahead of market
              evolution.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Market Opportunity Sizing</h3>
            <p>
              Quantitative measurement of addressable market potential to assess
              scalability and long-term commercial viability.
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
          Inventya’s Market Insights empower investors to act decisively in
          dynamic industries. Our evidence-based intelligence reveals where
          innovation is heading and which opportunities align with evolving
          market needs. Through our strategic research and forecasting
          capabilities, investors gain clarity, reduce uncertainty, and position
          their portfolios for sustained performance and competitive growth.
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
          Invest with <br /> Market <span>Clarity</span>
        </h1>
        <p className="growth-subtext">
          Access deep sector insights and data-driven foresight that sharpen
          your investment edge.
        </p>
        <a href="#" className="growth-btn">
          Explore Market Insights
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
