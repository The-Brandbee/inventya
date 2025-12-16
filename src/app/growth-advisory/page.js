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
          Unlock Growth Across Markets and Milestones
        </h1>
        <p className="innovation-text">
          Strategic advisory to help your business scale, secure funding, and
          expand globally with confidence.
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
            Our Growth Advisory service provides end-to-end strategic support
            for scale-ups and ambitious SMEs. From investment preparation to
            market expansion, we equip you with data-led insights, expert
            guidance, and actionable plans designed to accelerate growth at
            every stage of your journey.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Scale-Up Strategy Development</h3>
            <p>
              {" "}
              Tailored growth roadmaps that strengthen operations, position your
              business competitively, and enable sustainable scaling.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Funding and Investment Advisory</h3>
            <p>
              Guidance on grants, debt, and equity, ensuring you secure the
              right capital at the right time.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Export and International Expansion Support</h3>
            <p>
              Market selection, readiness assessment, and global route-to-market
              strategies for entering new geographies.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Operational and Commercial Readiness</h3>
            <p>
              Tools and frameworks that prepare your business to scale
              effectively without compromising quality or profitability.
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
            <h3>Scale-Up Readiness Assessment</h3>
            <p>
              Evaluate your business across capability, systems, and market
              strength to uncover growth bottlenecks and opportunities.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Funding Strategy and Bid Support</h3>
            <p>
              Build a structured funding roadmap and strengthen applications for
              grants, investors, and lenders.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Export Planning and Market Entry</h3>
            <p>
              Identify high-potential markets and create tailored international
              expansion strategies backed by data and insights.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Commercial Strategy and Revenue Acceleration</h3>
            <p>
              Refine value propositions, pricing models, revenue streams, and
              customer acquisition channels to drive predictable growth.
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
          Growth Advisory empowers businesses to move faster, smarter, and with
          greater clarity. With a combination of strategic insight and hands-on
          support, you gain a clear roadmap for scaling, access to new funding
          pathways, and the confidence to enter new markets. The result is
          stronger competitiveness, higher investor appeal, and a foundation for
          long-term, sustainable success.
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
          Scale with Strategy, <br />
          Confidence, and <span>Momentum</span>
        </h1>
        <p className="growth-subtext">
          Unlock tailored guidance to grow faster, secure funding, and expand
          globally.
        </p>
        <a href="#" className="growth-btn">
          Speak to Our Growth Advisory Team
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
