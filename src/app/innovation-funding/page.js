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
          Fuel Innovation With the Right Funding
        </h1>
        <p className="innovation-text">
          Secure grants, equity, and strategic financial support to accelerate
          your innovation journey.
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
            Our Innovation Funding service helps businesses access the capital
            required to develop, validate, and commercialise breakthrough ideas.
            Through expert guidance, strategic positioning, and end-to-end bid
            support, we connect innovators with the most suitable funding routes
            across grants, equity, and blended finance.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Grant Scoping and Strategy</h3>
            <p>
              {" "}
              Identification of aligned opportunities and guidance to strengthen
              eligibility and competitiveness.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Bid Development and Submission</h3>
            <p>
              Expert-led proposal creation that clearly communicates innovation
              value and commercial potential.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Equity and Investment Positioning</h3>
            <p>
              Preparation for conversations with investors by refining your
              pitch, readiness narrative, and financial story.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Commercial and Technical Alignment</h3>
            <p>
              Ensuring your innovation proposal is matched with credible
              evidence, market logic, and a viable development plan.
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
            <h3>Innovation Grant Writing</h3>
            <p>
              End-to-end support for crafting compelling, high-scoring proposals
              that demonstrate impact, feasibility, and market fit.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Funding Roadmapping</h3>
            <p>
              A structured plan that sequences grants, equity, and other capital
              options to support long-term development.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Investor Readiness for Innovators</h3>
            <p>
              Preparation across pitch decks, storytelling, business cases, and
              due diligence expectations.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Project Planning and Budget Structuring</h3>
            <p>
              Assistance in shaping realistic timelines, work packages,
              financials, and resource requirements.
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
          Innovation Funding accelerates your ability to bring new solutions to
          market, reduce financial risk, and strengthen your competitive edge.
          With the right capital at the right time, your business gains the
          momentum to validate technology, enter markets faster, and attract
          future investment. Our approach ensures that every submission, pitch,
          or funding strategy is rooted in strong evidence and compelling
          commercial logic.
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
          Secure Funding That Moves <br /> Your Innovation <span>Forward</span>
        </h1>
        <p className="growth-subtext">
          Access expert support for grants, equity, and investment readiness.
        </p>
        <a href="#" className="growth-btn">
          Speak to Our Innovation Funding Team
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
