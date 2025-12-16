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
        <h1 className="innovation-title">Grant Management</h1>
        <p className="innovation-text">
          Delivering accountable, compliant, and high-impact funding programmes.
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
            Inventya works with government bodies, local authorities, and
            regional development agencies to create economic development
            strategies that unlock growth potential. Our programmes integrate
            data-driven insights, industry partnerships, and innovation
            ecosystems to deliver measurable regional impact.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Strategic Planning</h3>
            <p>
              {" "}
              Comprehensive strategies that align regional priorities with
              national growth agendas.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Innovation-Driven Growth</h3>
            <p>
              Encouraging entrepreneurship, R&amp;D investment, and high-value
              job creation.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Sectoral Development</h3>
            <p>
              Tailored interventions for key growth industries with long-term
              economic potential.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Inclusive Prosperity</h3>
            <p>
              Designing frameworks that ensure equitable growth across
              communities and demographics.
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
            <h3>Regional Growth Strategy</h3>
            <p>
              Data-backed plans to enhance competitiveness and attract
              sustainable investment.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-group-brainstorm-office-meeting.png"
              alt=""
            />
            <h3>Cluster Development</h3>
            <p>
              Strengthening innovation ecosystems through collaboration and
              sectoral partnerships.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Skills &amp; Workforce Alignment</h3>
            <p>
              Bridging talent gaps by aligning workforce capabilities with
              emerging market demands.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/innovation/business-people-working-with-ipad-high-angle.png"
              alt=""
            />
            <h3>Investment Promotion</h3>
            <p>
              Strategic initiatives to attract private investment and foster
              business expansion.
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
          Inventya’s economic development expertise empowers regions to thrive
          in dynamic markets. By combining economic modelling, innovation
          policy, and stakeholder collaboration, we create frameworks that not
          only attract capital but also generate long-term socio-economic value.
          The result is a future-ready economy with stronger industries, skilled
          talent, and sustainable growth.
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
          Build the Future of <br />
          Your Regional <span>Economy</span>
        </h1>
        <p className="growth-subtext">
          Partner with Inventya to design and deliver transformative economic
          development initiatives.
        </p>
        <a href="#" className="growth-btn">
          Discuss Your Development Goals
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
