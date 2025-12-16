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
          Secure Funding That Accelerates Research Excellence
        </h1>
        <p className="innovation-text">
          Strategic support to win competitive grants and secure long term
          funding for high impact research.
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
            Our Research Funding service helps universities identify, pursue and
            manage the right funding opportunities for their research
            priorities. Through tailored opportunity scouting, proposal
            development, budgeting support and compliance management, we
            strengthen success rates and reduce administrative burden. Each
            funding pathway is shaped around the discipline, consortium strength
            and strategic goals of the institution.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Funding Opportunity Identification</h3>
            <p>
              {" "}
              Targeted mapping of national, international and sector specific
              calls aligned with institutional priorities.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Proposal Development and Structuring</h3>
            <p>
              Support in crafting compelling narratives, project plans, impact
              pathways and multi partner frameworks.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Budgeting and Compliance Guidance</h3>
            <p>
              Assistance with cost modelling, eligibility checks and preparation
              of compliant financial structures.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Award Management and Reporting</h3>
            <p>
              Support with post award administration, monitoring, risk oversight
              and delivery of funder requirements.
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
            <h3>Funding Landscape Mapping</h3>
            <p>
              Systematic identification of grant and research opportunities that
              match institutional expertise.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Proposal Writing and Review</h3>
            <p>
              Development and refinement of competitive proposals with strong
              technical and impact narratives.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Project and Financial Structuring</h3>
            <p>
              Support in building work packages, budgets and delivery plans that
              align with funder criteria.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Grant Management Support</h3>
            <p>
              Coordination of reporting, documentation, compliance and
              performance tracking for awarded projects.
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
          Research Funding services help universities increase their win rates,
          diversify funding pipelines and strengthen long term research
          sustainability. Institutions benefit from reduced administrative
          pressure, stronger proposal competitiveness and clearer alignment
          between research direction and funding strategy. This structured
          approach accelerates research output and enhances institutional
          reputation.
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
          Strengthen Your Research <br /> Through Strategic <span>Funding</span>
        </h1>
        <p className="growth-subtext">
          Identify the right opportunities, craft winning proposals and manage
          awards with confidence.
        </p>
        <a href="#" className="growth-btn">
          Speak to Our Research Funding Team
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
