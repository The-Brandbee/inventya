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
          Turn Research Ventures Into Scalable Enterprises
        </h1>
        <p className="innovation-text">
          Structured support to build high potential spinouts and create strong,
          investment ready licensing pathways.
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
            Our Spinouts and Licensing service provides universities with a
            clear and guided route to transform research into commercial
            ventures. Through feasibility assessment, business modelling,
            investor preparation and licensing strategy development, we help
            institutions build credible spinouts and secure impactful technology
            transfer agreements. Each pathway is shaped to match the maturity,
            sector and ambitions of the research team.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Opportunity Assessment</h3>
            <p>
              {" "}
              Evaluation of commercial potential, market readiness, team
              capability and spinout suitability.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Spinout Strategy and Structuring</h3>
            <p>
              Guidance on business models, equity structures, operational
              planning and early governance.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Investor and Partner Preparation</h3>
            <p>
              Support in creating pitch materials, establishing data rooms and
              engaging investors or licensees.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Licensing Pathway Development</h3>
            <p>
              Structuring agreements, defining terms and aligning stakeholders
              for successful technology transfer.
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
            <h3>Feasibility and Commercial Assessment</h3>
            <p>
              Early stage analysis of market opportunity, competitive landscape
              and venture viability.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Business Modelling and Planning</h3>
            <p>
              Development of scalable, investor ready business models and
              strategic growth pathways.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Investor Engagement Support</h3>
            <p>
              Preparation of pitch assets, financial narratives and outreach for
              early stage capital.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Licensing Strategy and Negotiation</h3>
            <p>
              Support in framing licensing terms, assessing partner fit and
              strengthening technology transfer outcomes.
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
          Spinouts and Licensing unlock new commercial routes for universities
          by supporting strong venture creation and effective technology
          transfer. Institutions benefit from increased revenue potential,
          stronger industry visibility, reduced risk in decision making and
          improved pathways for researchers aiming to commercialise their work.
          This structured approach elevates both academic and economic impact.
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
          Build Successful Spinouts and <br /> High Value Licensing{" "}
          <span>Partnerships</span>
        </h1>
        <p className="growth-subtext">
          Create ventures and agreements that maximise the commercial potential
          of your research.
        </p>
        <a href="#" className="growth-btn">
          Talk to Our Spinout and Licensing Team
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
