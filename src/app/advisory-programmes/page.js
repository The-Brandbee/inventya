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
  <section className="prime-hero advisory-programmes">
  <div className="prime-content">
    <h1 className="prime-title animate-move">
      Advisory{" "}
      <span className="prime-highlight">
        <br />
        &amp; Programmes
      </span>
    </h1>
    <p className="prime-tagline">
      Accelerating growth through insight, strategy, and impact-driven programmes.
    </p>
  </div>
</section>

  <section className="funding-section">
  <div className="funding-container">
    {/* LEFT TEXT */}
    <div className="funding-left">
      <h2 className="funding-title">
        Empowering innovation-led
        <br />
        businesses to scale strategically
      </h2>
      <p className="funding-desc">
        At Inventya, we empower organisations to grow smarter, scale faster, and go
        global. Our advisory and programme services combine deep market insight
        with hands-on growth expertise — supporting innovative businesses,
        government initiatives, and regional ecosystems to achieve sustainable
        impact. Whether you’re scaling up, expanding internationally, or driving
        economic development through structured programmes, our advisors bring
        strategy, structure, and measurable outcomes to every engagement.
      </p>
    </div>

    {/* RIGHT SCROLL CARDS */}
    <div className="funding-right">
      <div className="funding-divider" />
      <div className="funding-scroll">
        <div className="fund-card active-card">
          <h4>Business Growth Advisory</h4>
          <p>
            Strategic support to unlock new opportunities and drive long-term
            value creation.
          </p>
        </div>

        <div className="fund-card">
          <h4>Scale-up Acceleration</h4>
          <p>
            Tailored growth acceleration frameworks to help ambitious businesses
            reach their next stage.
          </p>
        </div>

        <div className="fund-card">
          <h4>Export &amp; Global Expansion</h4>
          <p>
            Strategic guidance and market intelligence to take your innovation
            international.
          </p>
        </div>

        <div className="fund-card">
          <h4>Economic Development Programmes</h4>
          <p>
            Designing and delivering impactful programmes that strengthen
            regional innovation ecosystems.
          </p>
        </div>
      </div>

      {/* FIXED RIGHT SIDE WHITE BAR (NEEDS CSS I PROVIDED) */}
      <div className="fixed-scrollbar" />
    </div>
  </div>
</section>

  <section className="grant-section">
  <div className="grant-container">
    <h2 className="grant-title">Business Growth Advisory</h2>
    <p className="grant-desc">
      Our growth advisory experts work alongside leadership teams to refine
      strategy, strengthen operations, and accelerate growth across markets.
    </p>

    <div className="grant-scroll" id="grantScroll">
      <div className="grant-card">
        <p>
          <strong>Strategic Roadmapping:</strong> Define a clear path to
          sustainable and scalable growth.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Financial &amp; Commercial Planning:</strong> Align funding,
          cash flow, and commercial models with business objectives.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Leadership &amp; Team Development:</strong> Build the right
          governance and management capabilities for scale.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Operational Efficiency:</strong> Identify bottlenecks and
          implement systems for productivity and resilience.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Innovation Strategy:</strong> Bridge R&amp;D and commercial
          goals through actionable innovation plans.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Performance Tracking:</strong> Define KPIs and frameworks to
          monitor growth effectiveness.
        </p>
      </div>
    </div>
  </div>
</section>


  <section className="rd-section">
  <div className="rd-container">
    <h2 className="rd-title">Scale-up Acceleration</h2>
    <p className="rd-desc">
      Inventya’s acceleration support equips scale-ups with the strategic,
      financial, and operational expertise needed to grow with confidence.
    </p>

    <div className="finance-scroll">
      <div className="rd-card">
        <h4>Growth Diagnostics</h4>
        <p>Assess readiness, strengths, and growth barriers.</p>
      </div>

      <div className="rd-card">
        <h4>Business Model Optimisation</h4>
        <p>
          Refine and stress-test models for scalability and investor alignment.
        </p>
      </div>

      <div className="rd-card">
        <h4>Access to Capital</h4>
        <p>
          Identify suitable grants, investors, and funding sources for expansion.
        </p>
      </div>

      <div className="rd-card">
        <h4>Market Expansion Planning</h4>
        <p>
          Target and validate new markets using data-driven insights.
        </p>
      </div>

      <div className="rd-card">
        <h4>Sales &amp; Partnership Strategy</h4>
        <p>
          Build pipelines and networks for sustainable revenue growth.
        </p>
      </div>

      <div className="rd-card">
        <h4>Governance &amp; Advisory Support</h4>
        <p>
          Provide structured mentoring and board-level guidance.
        </p>
      </div>
    </div>
  </div>
</section>

  <section className="finance-section">
  <div className="finance-container">
    <h2 className="finance-title">Export &amp; Global Expansion</h2>
    <p className="finance-desc">
      From market validation to strategic partnerships, we support businesses
      ready to expand internationally, connecting them with new customers,
      collaborators, and funding opportunities.
    </p>

    <div className="finance-scroll">
      <div className="finance-card">
        <h4>Market Research &amp; Entry Strategy</h4>
        <p>
          Identify and assess priority international markets.
        </p>
      </div>

      <div className="finance-card">
        <h4>Cultural &amp; Regulatory Guidance</h4>
        <p>
          Navigate local compliance, business culture, and trading regulations.
        </p>
      </div>

      <div className="finance-card">
        <h4>Partner &amp; Distributor Search</h4>
        <p>
          Connect with relevant partners and channels abroad.
        </p>
      </div>

      <div className="finance-card">
        <h4>Trade Mission Support</h4>
        <p>
          Prepare and represent businesses for UK and international trade
          delegations.
        </p>
      </div>

      <div className="finance-card">
        <h4>Export Readiness Assessment</h4>
        <p>
          Evaluate internal capabilities and resource requirements.
        </p>
      </div>

      <div className="finance-card">
        <h4>Global Growth Advisory</h4>
        <p>
          Ongoing guidance to maintain competitiveness in global markets.
        </p>
      </div>
    </div>
  </div>
</section>

  <section className="investor-section">
  <div className="investor-container">
    <h2 className="investor-title">Economic Development Programmes</h2>
    <p className="investor-desc">
      Inventya collaborates with government bodies, local authorities, and
      innovation agencies to design, manage, and deliver high-impact business
      support programmes that strengthen the innovation economy.
    </p>

    <div className="investor-scroll">
      <div className="investor-card">
        <h4>Programme Design &amp; Delivery</h4>
        <p>
          Develop bespoke frameworks that align with regional growth priorities.
        </p>
      </div>

      <div className="investor-card">
        <h4>Stakeholder Engagement</h4>
        <p>
          Coordinate academia, business, and government collaboration.
        </p>
      </div>

      <div className="investor-card">
        <h4>Grant &amp; Funding Management</h4>
        <p>
          Manage applications, reporting, and fund allocation.
        </p>
      </div>

      <div className="investor-card">
        <h4>Impact Evaluation</h4>
        <p>
          Measure success against economic and innovation KPIs.
        </p>
      </div>

      <div className="investor-card">
        <h4>Capacity Building</h4>
        <p>
          Equip regional teams and businesses with the skills to sustain growth.
        </p>
      </div>

      <div className="investor-card">
        <h4>Communication &amp; Dissemination</h4>
        <p>
          Ensure visibility and stakeholder awareness of programme outcomes.
        </p>
      </div>
    </div>
  </div>
</section>

 <section className="choose-section">
  <div className="choose-container">
    <div className="choose-left">
      <h2 className="choose-title">
        Why Choose
        <br />
        Inventya
      </h2>
    </div>

    <div className="choose-right">
      <ul className="choose-list">
        <li>
          <img
            src="/fifthpage/arrow-up-right.svg"
            alt="icon"
          />
          <span>
            Proven experience delivering
            <br />
            <strong>UK and EU business support programmes.</strong>
          </span>
        </li>

        <li>
          <img
            src="/fifthpage/arrow-up-right.svg"
            alt="icon"
          />
          <span>
            Cross-sector expertise spanning technology,
            <br />
            <strong>life sciences, sustainability, and advanced manufacturing.</strong>
          </span>
        </li>

        <li>
          <img
            src="/fifthpage/arrow-up-right.svg"
            alt="icon"
          />
          <span>
            <strong>Integrated advisory model</strong> from market intelligence
            <br />
            to funding and growth execution.
          </span>
        </li>

        <li>
          <img
            src="/fifthpage/arrow-up-right.svg"
            alt="icon"
          />
          <span>
            Trusted by governments, accelerators,
            <br />
            <strong>and universities across Europe.</strong>
          </span>
        </li>

        <li>
          <img
            src="/fifthpage/arrow-up-right.svg"
            alt="icon"
          />
          <span>
            Commitment to measurable outcomes through
            <br />
            <strong>data-driven insights and impact frameworks.</strong>
          </span>
        </li>
      </ul>
    </div>
  </div>
</section>

  <section className="cta-banner">
  <div className="cta-overlay" />
  <div className="cta-container">
    <div className="cta-left">
      <h1 className="cta-title">
        Let’s accelerate your <br />
        <span>growth together.</span>
      </h1>

      <p className="cta-subtext">
        Partner with Inventya to design strategies and programmes
        <br />
        that deliver impact.
      </p>

      <p className="cta-discuss">Let’s discuss your project.</p>

      <a href="#" className="cta-btn">
        Contact Us
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
