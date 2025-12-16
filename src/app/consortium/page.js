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
          Build High Performing Consortia for Funding and Research Excellence
        </h1>
        <p className="innovation-text">
          Structured collaboration frameworks that strengthen proposals,
          delivery and impact.
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
            Our Consortium Building service helps universities assemble,
            structure and manage multi partner research collaborations. Through
            strategic partner mapping, alignment workshops, governance design
            and delivery planning, we create strong consortia that secure
            competitive funding and deliver high impact outcomes. Each
            consortium is built around the project vision, capability needs and
            funder expectations.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Partner Scouting and Alignment</h3>
            <p>
              Identification of complementary partners across academia,
              industry, government and research organisations aligned with
              project goals.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Collaboration Design Workshops</h3>
            <p>
              Facilitated sessions to define shared objectives, value exchange,
              roles and technical contributions.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Consortium Governance Setup</h3>
            <p>
              Creation of clear frameworks covering decision making, reporting,
              IP management and risk ownership.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Proposal and Delivery Support</h3>
            <p>
              Assistance with funding proposal structuring, work package design
              and operational planning for smooth execution.
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
            <h3>Partner Mapping and Selection</h3>
            <p>
              Systematic identification of collaborators with the technical,
              commercial or policy expertise needed for project success.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>IP and Agreement Structuring</h3>
            <p>
              Support with IP arrangements, data sharing rules, NDAs, MOUs and
              collaboration contracts.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Work Package Development</h3>
            <p>
              Clear definition of tasks, responsibilities, timelines and
              deliverables aligned with funder guidelines.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Programme Coordination</h3>
            <p>
              Ongoing support for meetings, reporting, milestone tracking and
              cross partner communication.
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
          A well structured consortium improves funding competitiveness,
          strengthens project delivery and accelerates innovation outcomes. By
          aligning capabilities across multiple partners, universities gain
          broader expertise, higher research quality and increased international
          visibility. Effective consortia drive stronger proposals, smoother
          collaboration and more impactful long term research programmes.
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
          Build Strong Consortia That Win <br /> Funding and Deliver{" "}
          <span>Impact</span>
        </h1>
        <p className="growth-subtext">
          Create collaborative research programmes with the partners, structure
          and governance needed for success.
        </p>
        <a href="#" className="growth-btn">
          Speak to Our Consortium Team
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
