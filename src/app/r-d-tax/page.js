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
          Recover Costs and Reinvest in Innovation
        </h1>
        <p className="innovation-text">
          Unlock financial relief through compliant and optimised R&amp;D tax
          credit claims.
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
            Our R&amp;D Tax Credits service helps businesses identify eligible
            innovation activities and recover a significant portion of
            development costs. Through a structured, compliant, and
            evidence-backed process, we ensure your claims are maximised while
            meeting all HMRC requirements.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Eligibility Scoping</h3>
            <p>
              {" "}
              Clear assessment of your projects to identify qualifying
              activities and technical advances.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Financial Review and Claim Build</h3>
            <p>
              Detailed evaluation of costs, time usage, and expenditure
              categories to shape an accurate and defensible claim.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Technical Narrative Development</h3>
            <p>
              Expert preparation of supporting documentation that explains the
              innovation, challenges, and advancements.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Compliance and Submission Support</h3>
            <p>
              Guidance to ensure HMRC alignment, reduce risk, and strengthen
              your long-term R&amp;D tax position
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
            <h3>Full R&amp;D Claim Preparation</h3>
            <p>
              End-to-end support to compile, justify, and submit claims with
              confidence and accuracy.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Technical Evidence Development</h3>
            <p>
              Creation of strong narratives that clearly demonstrate scientific
              or technological uncertainty and progress.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Financial Cost Mapping</h3>
            <p>
              Structured analysis of expenditure to ensure every eligible cost
              is captured and validated.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>HMRC Review Support</h3>
            <p>
              Assistance with enquiries or audits to protect your claim and
              maintain compliance.
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
          R&amp;D tax credits free up essential capital that can be reinvested
          into product development, hiring, or scaling operations. With expert
          preparation and accurate technical framing, businesses avoid common
          risks, unlock higher claim values, and maintain strong compliance. The
          result is a more resilient innovation engine backed by sustainable
          financial momentum.
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
          Maximise the Value <br /> of Your <span>R&amp;D Work</span>
        </h1>
        <p className="growth-subtext">
          Claim with confidence and reinvest recovered capital into future
          innovation.
        </p>
        <a href="#" className="growth-btn">
          Speak to Our R&amp;D Tax Specialists
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
