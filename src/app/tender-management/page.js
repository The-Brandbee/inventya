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
          Win the Right Partners, Deliver the Right Outcomes
        </h1>
        <p className="innovation-text">
          Strategic tender management that drives competition, value, and
          programme excellence.
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
            Effective tender management goes beyond publishing a specification.
            Inventya supports government bodies in designing, administering, and
            evaluating tender processes that are transparent, competitive, and
            aligned with strategic priorities. Our structured, compliant
            approach ensures high-quality supplier selection, reduced delivery
            risk, and optimised value for public investment.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Clear, outcome-driven tender frameworks</h3>
            <p>
              {" "}
              Structured documentation that reflects policy priorities, delivery
              requirements, and impact expectations.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Fair and transparent evaluation processes</h3>
            <p>
              Objective scoring systems that ensure credibility, consistency,
              and robust supplier assessment.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Efficient tender administration workflows</h3>
            <p>
              End-to-end support from notice publication to clarification
              handling and bid compliance checks.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Optimised supplier engagement</h3>
            <p>
              Market-warming and supplier communication strategies to attract
              qualified, capable bidders.
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
            <h3>Specification &amp; Documentation Development</h3>
            <p>
              Well-defined scopes, criteria, and delivery expectations that
              ensure suppliers understand requirements and can submit strong,
              compliant bids.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Market Engagement &amp; Supplier Outreach</h3>
            <p>
              Targeted communication and pre-market activity to attract
              high-quality suppliers and stimulate competitive responses.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Bid Evaluation &amp; Scoring Support</h3>
            <p>
              Structured mechanisms for assessing value, feasibility, delivery
              capability, and risk, ensuring impartial and evidence-based
              selection.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Contract Award &amp; Mobilisation Assistance</h3>
            <p>
              Support through clarification, moderation, award decisions, and
              early delivery mobilisation to ensure programmes start smoothly
              and confidently.
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
          Inventya strengthens public procurement outcomes by combining
          strategic insight with meticulous operational delivery. Our approach
          improves competition, reduces procurement risk, and ensures that
          selected suppliers are capable of delivering measurable impact.
          Governments benefit from transparent processes, smoother
          administration, and stronger alignment between procurement decisions
          and long-term policy outcomes—ultimately maximising public value
          through every contract awarded.
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
          Strengthen Your <br />
          Procurement <span>Outcomes</span>
        </h1>
        <p className="growth-subtext">
          Work with Inventya to run efficient, transparent, and high-value
          tender processes that unlock better public delivery.
        </p>
        <a href="#" className="growth-btn">
          Speak to Our Tender Specialists
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
