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
          Turn Research Into Commercial Value
        </h1>
        <p className="innovation-text">
          Structured support that transforms academic discoveries into
          protected, market-ready intellectual property.
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
            Our IP Commercialisation service provides universities with a clear
            and systematic pathway to convert research outputs into valuable
            intellectual property. Through IP assessment, protection strategy,
            valuation and commercial planning, we help institutions strengthen
            research impact, attract industry interest and create long term
            revenue streams. Each pathway is tailored to the discipline,
            technology readiness and strategic goals of the university.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>IP Discovery and Assessment</h3>
            <p>
              {" "}
              Identification and evaluation of research outcomes for novelty,
              protectability and commercial relevance.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Protection and Filing Strategy</h3>
            <p>
              Strategic guidance on patents, copyrights, designs and trademarks
              to strengthen defensibility.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>IP Valuation and Positioning</h3>
            <p>
              Assessment of financial value, market potential and strategic
              positioning for investors and partners.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Commercial Route Planning</h3>
            <p>
              Support in defining licensing paths, spinout suitability and
              partnership-based commercialisation options.
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
            <h3>IP Audit and Mapping</h3>
            <p>
              Comprehensive review of research outputs to identify and
              prioritise high-value IP assets.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Patentability and Protection Strategy</h3>
            <p>
              Guidance on protection frameworks that enhance commercial strength
              and align with long-term institutional goals.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Market and Application Scouting</h3>
            <p>
              Insight into market demand, industry use cases and sectors with
              the strongest adoption potential.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Licensing and Spinout Readiness</h3>
            <p>
              Support in designing licensing models, preparing data rooms and
              evaluating suitability for spinout formation.
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
          IP Commercialisation enhances research translation by giving
          universities a structured route to protect, develop and monetise their
          innovations. Institutions benefit from stronger negotiation power,
          increased licensing revenue, higher visibility with industry and
          clearer decision-making on commercial pathways. This approach helps
          maximise long-term impact and elevates the value of institutional
          research portfolios.
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
          Turn Your Research Into a <br /> High-Value{" "}
          <span>Intellectual Asset</span>
        </h1>
        <p className="growth-subtext">
          Unlock the commercial and societal potential of your university’s
          innovations.
        </p>
        <a href="#" className="growth-btn">
          Talk to Our IP Commercialisation Team
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
