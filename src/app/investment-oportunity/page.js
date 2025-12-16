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
          Access Tomorrow’s Market Leaders Today
        </h1>
        <p className="innovation-text">
          Discover exclusive, high-potential ventures ready for strategic
          investment and growth.
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
            Inventya’s Investment Opportunities platform connects investors with
            breakthrough ventures across technology, health, energy, and
            manufacturing. Each opportunity is thoroughly assessed to ensure
            alignment with your investment goals, risk appetite, and portfolio
            strategy.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Curated Deal Flow</h3>
            <p>
              Gain access to handpicked ventures with verified innovation and
              market readiness.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Sector Diversity</h3>
            <p>
              Explore opportunities spanning deep tech, life sciences, clean
              energy, and digital transformation.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Early-Stage to Scale-Up</h3>
            <p>
              Invest at the right growth stage for optimal returns and strategic
              fit.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>End-to-End Support</h3>
            <p>
              {" "}
              From introduction to deal closure, Inventya ensures seamless
              facilitation and transparent engagement.
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
            <h3>Vetted Venture Access</h3>
            <p>
              Exclusive introductions to companies with proven traction and
              strong growth potential.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Portfolio Alignment</h3>
            <p>
              Identify ventures matching your strategic, sectoral, and
              geographical investment focus.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Investment Readiness Verification</h3>
            <p>
              Assurance that each opportunity meets technical, financial, and
              compliance benchmarks.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Ongoing Opportunity Alerts</h3>
            <p>
              Stay informed with regular updates on new and emerging high-value
              investment prospects.
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
          Inventya empowers investors to make confident, high-impact decisions.
          Our curated investment opportunities bridge innovation and capital,
          helping investors access scalable businesses, diversify intelligently,
          and drive measurable economic and technological progress.
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
          Invest in the <br />
          Future of <span>Innovation</span>
        </h1>
        <p className="growth-subtext">
          Access pre-vetted opportunities that redefine industries and drive
          real-world impact.
        </p>
        <a href="#" className="growth-btn">
          Explore Active Opportunities
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
