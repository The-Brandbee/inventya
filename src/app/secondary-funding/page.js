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
          Expand Funding Reach with High-Integrity Distribution
        </h1>
        <p className="innovation-text">
          Efficient, transparent systems that channel public funds to the right
          innovators at the right time.
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
            Our Secondary or Cascade Funding Support enables government bodies,
            programme leads, and consortium partners to distribute large public
            grants to a wider network of beneficiaries with clarity and control.
            We design compliant processes, create beneficiary engagement
            pathways, and manage the operational flow to ensure funding is
            allocated fairly, transparently, and with measurable impact.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Fund Design and Architecture</h3>
            <p>
              {" "}
              Clear frameworks for eligibility, assessment, governance, and
              financial allocation.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Beneficiary Outreach and Communication</h3>
            <p>
              Targeted communication that increases programme visibility and
              supports applicant understanding.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Application Review and Selection</h3>
            <p>
              Structured evaluation processes that ensure consistency, fairness,
              and alignment with programme goals.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Impact Tracking and Programme Close-Out</h3>
            <p>
              End-to-end documentation of outcomes, lessons learned, and
              recommendations for future cycles.
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
            <h3>Funding Framework Development</h3>
            <p>
              Creation of transparent funding rules, operational structures, and
              compliance requirements.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Applicant Guidance and Support Materials</h3>
            <p>
              Toolkits, guidance documents, and FAQs that simplify participation
              for diverse beneficiary groups.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Risk and Eligibility Checks</h3>
            <p>
              Validation of beneficiary readiness, organisational capacity, and
              financial suitability.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Impact Reporting and Evidence Generation</h3>
            <p>
              Clear summaries of programme performance, economic outcomes, and
              policy-aligned value.
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
          Cascade funding enables government bodies and consortium leads to
          reach a wider pool of innovators while maintaining strict oversight
          and accountability. Beneficiaries gain access to clear processes,
          timely decisions, and structured support. For public sector
          programmes, this model accelerates fund deployment, strengthens
          ecosystem participation, and ensures that investment flows to
          high-potential innovations that deliver measurable regional, social,
          and economic value.
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
          Extend the Power <br /> of Public <span>Funding</span>
        </h1>
        <p className="growth-subtext">
          Design and manage cascade funding programmes that scale impact without
          increasing administrative burden.
        </p>
        <a href="#" className="growth-btn">
          Discuss Your Funding Goals
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
