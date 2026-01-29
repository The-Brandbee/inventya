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
  <section className="innovation-section" style={{backgroundImage: "url('/Economic-Development-Support/banner.jpg')",}}>
    <div className="innovation-overlay" />
    <div className="innovation-container">
      <div className="max-w-lg">
        {/* <h3 class="innovation-subheading">Discover the Future of</h3> */}
        <h1 className="innovation-title">
          Funding Delivered with Clarity and Confidence
        </h1>
        <p className="innovation-text">
          Precision-led grant management for accountable, high-impact public
          programmes.
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
            Effective grant management requires precision, transparency, and
            consistent oversight. Inventya supports government bodies across the
            full lifecycle of funding delivery, ensuring that grants reach the
            right beneficiaries, remain compliant, and generate measurable
            impact. Our structured approach strengthens programme efficiency,
            reduces administrative burden, and aligns every activity with your
            strategic outcomes.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>End-to-end lifecycle management</h3>
            <p>
              Structured support covering programme setup, administration,
              applicant handling, monitoring, and completion reporting.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Robust compliance oversight</h3>
            <p>
              Continuous evaluation ensuring all beneficiaries meet financial,
              operational, and eligibility requirements.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Transparent performance tracking</h3>
            <p>
              Real-time progress monitoring supported by data, documentation,
              and beneficiary reporting.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Optimised resource allocation</h3>
            <p>
              {" "}
              Efficient systems that minimise manual workload and streamline
              decision-making across departments.
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
            <h3>Grant Design &amp; Framework Development</h3>
            <p>
              Clear guidance, eligibility criteria, and delivery structures
              aligned to policy objectives, ensuring strong governance and
              consistent programme outcomes.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Application Processing &amp; Beneficiary Evaluation</h3>
            <p>
              Structured review and scoring workflows that assess applicant
              readiness, capability, and alignment with grant priorities for
              fair and transparent selection.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Monitoring, Compliance &amp; Reporting</h3>
            <p>
              Systematic tracking of milestones, expenditure, and outputs to
              maintain full accountability and meet regional, national, or EU
              audit requirements.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Impact Validation &amp; Outcome Measurement</h3>
            <p>
              Evidence-based assessment of economic, social, and innovation
              outcomes to demonstrate value and inform future programme
              improvements.
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
          Inventya strengthens the integrity and effectiveness of public funding
          by combining rigorous processes with innovation-driven expertise. Our
          grant management support reduces administrative load, enhances
          transparency, and ensures that funding achieves measurable outcomes.
          Government teams benefit from cleaner data, clearer oversight, and
          improved beneficiary performance, helping programmes deliver long-term
          economic and societal value while remaining fully compliant with UK
          and EU standards.
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
          Build the Future of <br /> Your Regional <span>Economy</span>
        </h1>
        <p className="growth-subtext">
          Partner with Inventya to manage grants with clarity, compliance, and
          measurable impact.
        </p>
        <a href="#" className="growth-btn">
          Discuss Your Grant Delivery Needs
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
