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
          Turn Innovation Into Market Reality
        </h1>
        <p className="innovation-text">
          Structured pathways that guide your idea from concept to commercial
          success.
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
            Our Commercialisation Pathways service gives businesses a clear,
            structured route to bring innovations to market. Through market
            validation, IP strategy, business modelling and go to market
            planning, we help teams reduce uncertainty, accelerate adoption and
            secure commercial traction. Each pathway is tailored to the
            maturity, sector and ambition of the innovation.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Discovery and Assessment</h3>
            <p>
              {" "}
              Evaluation of technical readiness, commercial potential and
              resource requirements.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Market Validation</h3>
            <p>
              Real world testing of demand, user needs and competitive
              positioning.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Commercial Strategy Design</h3>
            <p>
              Development of revenue models, pricing logic and commercial
              assumptions.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Route to Market Planning</h3>
            <p>
              Guidance on partnerships, channels, pilots and early customer
              acquisition.
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
            <h3>Value Proposition Development</h3>
            <p>
              Clear articulation of user benefits and problem fit to strengthen
              commercial appeal.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Market and Competitor Mapping</h3>
            <p>
              Insight into market dynamics, customer priorities and competitor
              gaps.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Business Model and Revenue Planning</h3>
            <p>
              Detailed structuring of monetisation routes and long term
              commercial viability.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Go to Market Blueprint</h3>
            <p>
              Actionable roadmap for launching, scaling and establishing market
              presence.
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
          Commercialisation Pathways reduce risk by providing clarity at every
          stage of innovation development. Businesses benefit from faster
          decision making, stronger market understanding and more credible
          growth narratives for partners and investors. This structured approach
          accelerates time to market and increases the likelihood of sustainable
          commercial success.
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
          Build a Pathway That Accelerates <br /> Real Market{" "}
          <span>Success</span>
        </h1>
        <p className="growth-subtext">
          Transform your innovation into a viable product with a clear
          commercial route.
        </p>
        <a href="#" className="growth-btn">
          Talk to Our Commercialisation Team
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
