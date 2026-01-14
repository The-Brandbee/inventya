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
  <section className="prime-hero funding-investment">
    <div className="prime-content">
      <h1 className="prime-title animate-move">
        Funding{" "}
        <span className="prime-highlight">
          <br />
          &amp; Investment
        </span>
      </h1>
      <p className="prime-tagline">
        Empowering innovation with the right funding, at the right time.
      </p>
    </div>
  </section>
  <section className="funding-section">
    <div className="funding-container">
      {/* LEFT TEXT */}
      <div className="funding-left">
        <h2 className="funding-title">
          Turning Innovative
          <br />
          Ideas into Funded Realities
        </h2>
        <p className="funding-desc">
          At Inventya, we bridge the gap between innovative potential and
          financial reality. Our team helps ambitious businesses, research
          groups, and innovators identify, secure, and manage the right funding
          to fuel their growth journey. From competitive grants and tax
          incentives to investor readiness and growth finance, our experts
          ensure you're equipped with the strategy, structure, and storytelling
          to attract capital confidently.
        </p>
      </div>
      {/* RIGHT SCROLL CARDS */}
      <div className="funding-right">
        <div className="funding-divider" />
        <div className="funding-scroll">
          <div className="fund-card active-card">
            <h4>Grant Writing &amp; Funding Support</h4>
            <p>
              End-to-end support to identify, prepare, and win innovation grants
              across UK and EU programmes.
            </p>
          </div>
          <div className="fund-card">
            <h4>R&amp;D Tax Credits &amp; Patent Box</h4>
            <p>
              Maximise your return on innovation with expert-led R&amp;D and
              IP-based tax relief claims.
            </p>
          </div>
          <div className="fund-card">
            <h4>Growth Finance Solutions</h4>
            <p>
              Secure capital to scale through loans, equity, or alternative
              finance aligned to your business goals.
            </p>
          </div>
          <div className="fund-card">
            <h4>Investor Readiness</h4>
            <p>
              Prepare your business to attract and engage investors with
              strategic positioning and data-driven insights.
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
      <h2 className="grant-title">Grant Writing &amp; Funding Support</h2>
      <p className="grant-desc">
        Our team brings deep experience in preparing winning grant applications
        that align with funders' strategic priorities and innovation impact
        goals.
      </p>
      <div className="grant-scroll" id="grantScroll">
        <div className="grant-card">
          <p>
            <strong>Funding Landscape Mapping:</strong> Identify the most
            suitable national and international programmes for your innovation.
          </p>
        </div>
        <div className="grant-card">
          <p>
            <strong>Proposal Development:</strong> Craft technically sound,
            strategically positioned proposals that stand out in competitive
            calls.
          </p>
        </div>
        <div className="grant-card">
          <p>
            <strong>Budget &amp; Compliance Guidance:</strong> Build compliant,
            transparent, and funder-aligned budgets.
          </p>
        </div>
        <div className="grant-card">
          <p>
            <strong>Impact &amp; Exploitation Planning:</strong> Define clear
            pathways to impact and exploitation for your technology.
          </p>
        </div>
        <div className="grant-card">
          <p>
            <strong>Consortium Building:</strong> Connect with the right
            academic, industrial, and public partners across the UK and EU.
          </p>
        </div>
        <div className="grant-card">
          <p>
            <strong>Submission &amp; Review:</strong> Ensure your proposal meets
            funder requirements and maximises success potential.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="rd-section">
    <div className="rd-container">
      <h2 className="rd-title">R&amp;D Tax Credits &amp; Patent Box</h2>
      <p className="rd-desc">
        We help businesses leverage government-backed incentives that reward
        innovation and protect long-term competitiveness.
      </p>
      <div className="finance-scroll">
        <div className="rd-card">
          <h4>Eligibility Assessment</h4>
          <p>Identify qualifying activities and eligible expenditure.</p>
        </div>
        <div className="rd-card">
          <h4>Technical Documentation</h4>
          <p>
            Translate R&amp;D activity into clear, evidence-based technical
            reports.
          </p>
        </div>
        <div className="rd-card">
          <h4>Patent Box Strategy</h4>
          <p>
            Support with IP audits, structuring, and claims to reduce corporate
            tax.
          </p>
        </div>
        <div className="rd-card">
          <h4>Compliance Assurance</h4>
          <p>
            Ensure full adherence to evolving HMRC guidelines and legislative
            updates.
          </p>
        </div>
        <div className="rd-card">
          <h4>R&amp;D Planning</h4>
          <p>
            Align your innovation roadmap with future funding and tax benefits.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="finance-section">
    <div className="finance-container">
      <h2 className="finance-title">Growth Finance Solutions</h2>
      <p className="finance-desc">
        Beyond grants and incentives, Inventya connects you with commercial
        finance opportunities to accelerate business growth.
      </p>
      <div className="finance-scroll">
        <div className="finance-card">
          <h4>Financial Health Assessment</h4>
          <p>Analyse capital structure, cash flow, and funding readiness.</p>
        </div>
        <div className="finance-card">
          <h4>Funding Strategy Design</h4>
          <p>
            Develop tailored financial plans aligned with your growth goals.
          </p>
        </div>
        <div className="finance-card">
          <h4>Equity &amp; Debt Advisory</h4>
          <p>
            Guidance on venture capital, private equity, and loan financing.
          </p>
        </div>
        <div className="finance-card">
          <h4>Investor Introductions</h4>
          <p>Access our network of investors across sectors and geographies.</p>
        </div>
        <div className="finance-card">
          <h4>Pitch &amp; Collateral Support</h4>
          <p>
            Develop business plans, financial models, and investor
            presentations.
          </p>
        </div>
        <div className="finance-card">
          <h4>Ongoing Funding Management</h4>
          <p>
            Strategic support for follow-on rounds and capital optimisation.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="investor-section">
    <div className="investor-container">
      <h2 className="investor-title">Investor Readiness</h2>
      <p className="investor-desc">
        Inventya equips businesses with the tools, insight, and confidence to
        attract investors and secure capital on optimal terms.
      </p>
      <div className="investor-scroll">
        <div className="investor-card">
          <h4>Business Model Review</h4>
          <p>Evaluate and refine your commercial strategy for scalability.</p>
        </div>
        <div className="investor-card">
          <h4>Market Validation</h4>
          <p>
            Provide evidence-based insights into market potential and
            competitive advantage.
          </p>
        </div>
        <div className="investor-card">
          <h4>Financial Modelling</h4>
          <p>Build robust projections aligned with investor expectations.</p>
        </div>
        <div className="investor-card">
          <h4>Pitch Deck Development</h4>
          <p>Craft compelling, investor-focused presentations and materials.</p>
        </div>
        <div className="investor-card">
          <h4>Due Diligence Preparation</h4>
          <p>Structure data rooms and documentation for investor scrutiny.</p>
        </div>
        <div className="investor-card">
          <h4>Investment Strategy &amp; Support</h4>
          <p>Guide negotiation, term sheets, and closing.</p>
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
              <strong>15+ years</strong>of innovation finance expertise across
              <br /> grants, tax, and investment.
            </span>
          </li>
          <li>
            <img
              src="/fifthpage/arrow-up-right.svg"
              alt="icon"
            />
            <span>
              Proven success rate in securing competitive
              <br />
              <strong>UK and EU funding.</strong>
            </span>
          </li>
          <li>
            <img
              src="/fifthpage/arrow-up-right.svg"
              alt="icon"
            />
            <span>
              <strong>Interdisciplinary experts</strong>in science, finance,
              <br /> and commercialisation.
            </span>
          </li>
          <li>
            <img
              src="/fifthpage/arrow-up-right.svg"
              alt="icon"
            />
            <span>
              <strong>Strategic partner ecosystem</strong>with investors,
              <br /> accelerators, and research institutions.
            </span>
          </li>
          <li>
            <img
              src="/fifthpage/arrow-up-right.svg"
              alt="icon"
            />
            <span>
              <strong>End-to-end support</strong>from identifying funding
              <br /> to achieving financial close.
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
          Ready to fund your <br /> 
          next <span>breakthrough?</span>
        </h1>
        <p className="cta-subtext">
          Unlock growth with Inventya’s funding and <br />
          investment expertise.
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
