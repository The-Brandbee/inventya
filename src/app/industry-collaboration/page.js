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
          Connect Research with Real-World Industry Needs
        </h1>
        <p className="innovation-text">
          Strategic partnerships that accelerate validation, adoption and
          commercial impact.
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
            Our Industry Collaboration service helps universities build
            meaningful, mutually beneficial relationships with commercial
            partners. Through opportunity mapping, engagement strategy,
            partnership structuring and pilot design, we ensure that research
            outputs align with market needs and have clear routes to adoption.
            Each engagement is crafted to strengthen innovation translation,
            visibility and long term commercial value.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Opportunity and Market Mapping</h3>
            <p>
              Identification of industry challenges, technology needs and
              collaboration opportunities across priority sectors.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Engagement Strategy Development</h3>
            <p>
              Tailored partner outreach plans designed around research
              capabilities, commercial relevance and innovation maturity.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Partnership Structuring</h3>
            <p>
              Creation of agreements covering roles, contributions, commercial
              rights, and project governance.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Pilot and Deployment Planning</h3>
            <p>
              Support to design real world pilots, validation studies, and
              pathways for early product adoption.
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
            <h3>Industry Needs Assessment</h3>
            <p>
              Mapping industry trends, technology demands and partnership
              opportunities relevant to university research.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Partner Outreach and Engagement</h3>
            <p>
              Targeted introductions, pitch preparation and relationship
              development with commercial organisations.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Collaboration and IP Agreements</h3>
            <p>
              Structuring licensing, co-development, revenue sharing and IP
              ownership arrangements.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Pilot and Proof of Concept Support</h3>
            <p>
              Facilitating pilots, user testing, and deployment activities to
              accelerate technology readiness.
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
          Industry collaboration strengthens the relevance, visibility and real
          world adoption of university research. These partnerships provide
          access to market insight, testing environments and commercial pathways
          while creating opportunities for revenue generation, investment and
          long term strategic alliances. Universities gain enhanced impact,
          stronger translational outcomes and greater attractiveness to funders
          and stakeholders.
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
          Turn Research into <br />
          Industry-Ready <span>Innovation</span>
        </h1>
        <p className="growth-subtext">
          Build partnerships that validate your research, unlock commercial
          pathways and accelerate adoption.
        </p>
        <a href="#" className="growth-btn">
          Speak to Our Collaboration Team
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
