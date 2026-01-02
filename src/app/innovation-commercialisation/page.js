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
 <section className="prime-hero">
  <div className="prime-content">
    <h1 className="prime-title animate-move">
      Innovation{" "}
      <span className="prime-highlight">
        <br />
        &amp; Commercialisation
      </span>
    </h1>
    <p className="prime-tagline">
      Transforming research, ideas, and technology into real-world impact.
    </p>
  </div>
</section>


 <section className="funding-section">
  <div className="funding-container">
    {/* LEFT TEXT */}
    <div className="funding-left">
      <h2 className="funding-title">
        From intellectual property
        <br />
        to impactful innovation
      </h2>
      <p className="funding-desc">
        At Inventya, we bridge the gap between innovation and implementation. Our mission is to turn promising ideas and intellectual property into market-ready solutions, accelerating the journey from lab to launch. We work with universities, research organisations, and high-growth companies to commercialise innovation, build spinouts, and form strategic collaborations that drive both economic and societal value.
      </p>
    </div>

    {/* RIGHT SCROLL CARDS */}
    <div className="funding-right">
      <div className="funding-divider" />
      <div className="funding-scroll">
        <div className="fund-card active-card">
          <h4>IP Commercialisation</h4>
          <p>
            Unlocking the full potential of research and technology assets.
          </p>
        </div>

        <div className="fund-card">
          <h4>Spinouts & Knowledge Transfer</h4>
          <p>
            Supporting the journey from research idea to thriving business.
          </p>
        </div>

        <div className="fund-card">
          <h4>Research Collaboration</h4>
          <p>
            Connecting academia and industry to co-develop future-shaping innovation.
          </p>
        </div>

        <div className="fund-card">
          <h4>Innovation Ecosystem Partnerships</h4>
          <p>
            Building sustainable partnerships that drive collective growth.
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
    <h2 className="grant-title">IP Commercialisation</h2>
    <p className="grant-desc">
      Inventya supports research institutions and innovators to identify, protect, and commercialise their IP, helping them realise both financial and strategic value.
    </p>

    <div className="grant-scroll" id="grantScroll">
      <div className="grant-card">
        <p>
          <strong>IP Audit &amp; Evaluation:</strong> Review and assess existing IP portfolios to uncover hidden commercial opportunities.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Market Validation:</strong> Conduct detailed market analysis to confirm relevance, readiness, and demand.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Commercial Pathway Design:</strong> Develop business models and go-to-market plans tailored to each innovation.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Licensing Strategy:</strong> Identify, negotiate, and structure licensing agreements for long-term value.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Investor &amp; Partner Outreach:</strong> Connect with commercial partners, licensees, and potential acquirers.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>IP Training &amp; Advisory:</strong> Equip academic and research teams with the knowledge to manage IP strategically.
        </p>
      </div>
    </div>
  </div>
</section>



 <section className="rd-section">
  <div className="rd-container">
    <h2 className="rd-title">Spinouts & Knowledge Transfer</h2>
    <p className="rd-desc">
      Inventya works closely with universities and research groups to guide early-stage spinout creation, from concept validation to investment readiness.
    </p>

    <div className="finance-scroll">
      <div className="rd-card">
        <h4>Feasibility &amp; Business Planning</h4>
        <p>Assess commercial potential and design robust business plans.</p>
      </div>

      <div className="rd-card">
        <h4>Funding Strategy Development</h4>
        <p>Identify suitable grants, investors, and equity pathways.</p>
      </div>

      <div className="rd-card">
        <h4>Team &amp; Governance Structuring</h4>
        <p>Define leadership models and establish clear governance.</p>
      </div>

      <div className="rd-card">
        <h4>Market Entry Support</h4>
        <p>Build commercial strategies and connect spinouts with industry partners.</p>
      </div>

      <div className="rd-card">
        <h4>Mentoring &amp; Acceleration</h4>
        <p>Provide structured support through growth and investment phases.</p>
      </div>

      <div className="rd-card">
        <h4>Knowledge Transfer Support</h4>
        <p>Facilitate smooth IP transfer and stakeholder alignment between universities and new ventures.</p>
      </div>
    </div>
  </div>
</section>


 <section className="finance-section">
  <div className="finance-container">
    <h2 className="finance-title">Research Collaboration</h2>
    <p className="finance-desc">
      We design and facilitate collaborations that combine research excellence with real-world market potential, driving innovation, competitiveness, and sustainability.
    </p>

    <div className="finance-scroll">
      <div className="finance-card">
        <h4>Consortium Building</h4>
        <p>Identify and connect research partners, corporates, and SMEs.</p>
      </div>

      <div className="finance-card">
        <h4>Bid &amp; Proposal Development</h4>
        <p>Co-develop winning proposals for Horizon Europe, Innovate UK, and other calls.</p>
      </div>

      <div className="finance-card">
        <h4>Technical-Commercial Alignment</h4>
        <p>Translate research outputs into viable, market-facing opportunities.</p>
      </div>

      <div className="finance-card">
        <h4>Stakeholder Management</h4>
        <p>Coordinate engagement and communication among diverse project partners.</p>
      </div>

      <div className="finance-card">
        <h4>Impact Planning</h4>
        <p>Define measurable economic, societal, and environmental outcomes.</p>
      </div>

      <div className="finance-card">
        <h4>Project Dissemination</h4>
        <p>Ensure visibility and uptake of project outputs through effective communication channels.</p>
      </div>
    </div>
  </div>
</section>


  <section className="investor-section">
  <div className="investor-container">
    <h2 className="investor-title">Innovation Ecosystem Partnerships</h2>
    <p className="investor-desc">
      Inventya supports the development of innovation ecosystems — connecting universities, industry, investors, and public bodies to create shared success.
    </p>

    <div className="investor-scroll">
      <div className="investor-card">
        <h4>Ecosystem Design</h4>
        <p>Develop and implement frameworks for regional or sector-based collaboration.</p>
      </div>

      <div className="investor-card">
        <h4>Cluster &amp; Network Facilitation</h4>
        <p>Support innovation clusters and communities through engagement and events.</p>
      </div>

      <div className="investor-card">
        <h4>Programme Delivery</h4>
        <p>Manage collaborative innovation and commercialisation programmes end-to-end.</p>
      </div>

      <div className="investor-card">
        <h4>Cross-Sector Partnerships</h4>
        <p>Connect complementary industries to foster new applications and technologies.</p>
      </div>

      <div className="investor-card">
        <h4>Innovation Infrastructure Support</h4>
        <p>Advise on science parks, accelerators, and innovation hubs.</p>
      </div>

      <div className="investor-card">
        <h4>Impact Measurement</h4>
        <p>Track and report ecosystem growth, outcomes, and sustainability.</p>
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
            Over a decade of experience bridging academia,
            <br />
            <strong>business, and investment.</strong>
          </span>
        </li>

        <li>
          <img
            src="/fifthpage/arrow-up-right.svg"
            alt="icon"
          />
          <span>
            Proven track record in commercialising IP
            <br />
            <strong>and supporting spinouts across sectors.</strong>
          </span>
        </li>

        <li>
          <img
            src="/fifthpage/arrow-up-right.svg"
            alt="icon"
          />
          <span>
            Extensive participation in European R&amp;D
            <br />
            <strong>and commercialisation programmes.</strong>
          </span>
        </li>

        <li>
          <img
            src="/fifthpage/arrow-up-right.svg"
            alt="icon"
          />
          <span>
            A multi-disciplinary team of market analysts,
            <br />
            <strong>IP specialists, and innovation strategists.</strong>
          </span>
        </li>

        <li>
          <img
            src="/fifthpage/arrow-up-right.svg"
            alt="icon"
          />
          <span>
            Commitment to delivering measurable impact,
            <br />
            <strong>turning research excellence into economic growth.</strong>
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
        Let’s turn your <br />
        <span>innovation into impact.</span>
      </h1>

      <p className="cta-subtext">
        Collaborate with Inventya to commercialise research, create spinouts,
        <br />
        and build partnerships for the future.
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
