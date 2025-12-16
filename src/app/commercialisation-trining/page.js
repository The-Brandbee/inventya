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
          Equip Local Innovators for Real-World Success
        </h1>
        <p className="innovation-text">
          Practical skills that turn ideas into scalable commercial outcomes.
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
            Our Commercialisation Training Programme equips researchers,
            founders, and innovators with practical tools to move innovations
            from concept to market. Designed for public sector initiatives, the
            programme blends expert-led learning, hands-on exercises, and
            sector-specific insights to strengthen regional innovation
            capability.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Foundational Learning</h3>
            <p>
              {" "}
              Workshops covering commercial readiness, market understanding, and
              early commercial strategy development.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Applied Skills Development</h3>
            <p>
              Interactive sessions that translate complex innovation concepts
              into real commercial progress.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Mentoring Support</h3>
            <p>
              Guided advisory sessions tailored to participant needs and
              innovation maturity.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Outcome Mapping</h3>
            <p>
              Structured assessments that evaluate progress and define
              next-stage actions for commercial growth.
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
            <h3>IP and Value Proposition Development</h3>
            <p>
              Support for defining IP positioning, user needs, and unique
              innovation value.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Market Discovery and Validation</h3>
            <p>
              Methods to validate demand, segment audiences, and identify early
              adopters.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Business Model and Revenue Pathways</h3>
            <p>
              Practical tools to shape sustainable commercial models and
              monetisation strategies.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Route to Market Planning</h3>
            <p>
              Step-by-step frameworks for partnerships, pilots, procurement
              routes, and investor alignment.
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
          Commercialisation training builds long-term capability within regions,
          universities, and early-stage ecosystems. Participants gain the
          confidence and structure to progress ideas toward market entry,
          investment readiness, or public adoption. Government bodies benefit
          from stronger innovation pipelines, higher programme success rates,
          and greater economic and social return on public investment.
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
          Empower Innovators <br />
          Across Your <span>Region</span>
        </h1>
        <p className="growth-subtext">
          Equip emerging founders, researchers, and technologists with the
          commercial skills needed to create real economic impact.
        </p>
        <a href="#" className="growth-btn">
          Speak to Our Training Team
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
