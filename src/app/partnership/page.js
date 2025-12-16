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
          Build Strategic Partnerships That Amplify Research Impact
        </h1>
        <p className="innovation-text">
          Strong collaborations that accelerate translation, funding success and
          real world application.
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
            Our Partnerships service helps universities develop strategic, high
            value relationships with industry, investors and global research
            institutions. Through opportunity mapping, engagement planning,
            value proposition shaping and collaboration structuring, we enable
            institutions to expand their influence, increase funding
            opportunities and translate research into real world solutions. Each
            partnership pathway is aligned to institutional strengths, sector
            priorities and long term innovation goals.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Partner Identification and Scouting</h3>
            <p>
              Targeted mapping of industry, investor and academic partners
              aligned with research capabilities and market relevance.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Engagement Strategy Design</h3>
            <p>
              Development of tailored engagement plans, value propositions and
              collaboration models that drive mutual benefit.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Collaboration Structuring</h3>
            <p>
              Support in designing governance, roles, IP arrangements and
              delivery plans for sustainable partnerships.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Relationship Management Support</h3>
            <p>
              Ongoing advisory to strengthen, grow and optimise established
              partnerships for long term impact.
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
            <h3>Industry Engagement Support</h3>
            <p>
              Connect research teams with relevant commercial partners for co
              development, validation and adoption.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Investor Network Access</h3>
            <p>
              Facilitate introductions to funders aligned with spinouts,
              technology development and research commercialisation.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Global Academic Partnerships</h3>
            <p>
              Build international collaborations that expand research capacity
              and enable multi country projects.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Advisory and Governance Frameworks</h3>
            <p>
              Create partnership structures, advisory boards and governance
              protocols that ensure clarity and alignment.
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
          Partnerships strengthen institutional reach, increase innovation
          adoption and open new funding and commercial pathways. Universities
          gain access to broader expertise, real world testing environments and
          global opportunities that enhance research credibility and societal
          impact. A strategic partnership approach amplifies visibility,
          accelerates translation and strengthens long term institutional
          competitiveness.
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
          Expand Your Research Influence <br /> Through Strategic{" "}
          <span>Partnerships</span>
        </h1>
        <p className="growth-subtext">
          Connect with industry, investors and global institutions to accelerate
          innovation and impact.
        </p>
        <a href="#" className="growth-btn">
          Speak to Our Partnerships Team
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
