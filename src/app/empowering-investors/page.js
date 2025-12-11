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
  <section className="hero-section">
    <div className="content-box">
      <h1 className="hero-title hover-animate">
        Empowering <br />
        <span className="text-highlight">Investors</span>
      </h1>
      <h3 className="hero-subheading hover-animate">
        with Global Innovation <br /> Opportunities
      </h3>
      <p className="hero-desc">
        Access curated investment-ready companies, market insights, and
        strategic support to maximise returns and growth potential.
      </p>
    </div>
  </section>
  <section className="services-section py-5">
    <div className="container">
      <h2 className="section-title">
        Your Strategic Partner in High-Impact Investments
      </h2>
      <p className="section-subtext mb-4">
        Inventya connects investors with high-potential innovators and
        disruptive technologies across sectors, including AI, Health Tech,
        Energy, Robotics, and Quantum Computing. Our end-to-end services ensure
        informed decision-making, risk mitigation, and portfolio growth.
      </p>
      {/* Horizontal Scroll Wrapper */}
      <div className="scroll-container">
        <div className="service-card">
          <img src="/second-page/stack-coins-with-graph-chart-growth-up-business-marketing.png" />
          <h5>Investment-Ready Pipeline</h5>
          <p>
            Curated companies with validated business models and market-ready
            innovations.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
        <div className="service-card">
          <img src="/second-page/business-people-group-brainstorm-office-meeting.png" />
          <h5>Due Diligence</h5>
          <p>
            Comprehensive evaluation of technology, financials, and operational
            risk.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
        <div className="service-card">
          <img src="/second-page/business-people-group-brainstorm-office-meeting.png" />
          <h5>Market Insights</h5>
          <p>
            Sector-specific research and trends for informed investment
            decisions.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
        <div className="service-card">
          <img src="/second-page/business-team-meeting.png" />
          <h5>ROI &amp; Portfolio Success</h5>
          <p>
            Optimisation strategies to maximise returns and monitor portfolio
            performance.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
        <div className="service-card">
          <img src="/second-page/handshake-businessmen.png" />
          <h5>PE/VC Collaborations</h5>
          <p>
            Partnerships with private equity and venture capital networks for
            co-investment.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
        <div className="service-card">
          <img src="/second-page/paper-clipboard-with-text-case-study-magnifying-glass-books-table.png" />
          <h5>Case Studies</h5>
          <p>Real-world success stories demonstrating impact and growth.</p>
          <button className="learn-btn">Learn More</button>
        </div>
        <div className="service-card">
          <img src="/second-page/businessman-holding-coin-with-graph-tree-growing-money-coin@2x.png" />
          <h5>Investment Opportunities</h5>
          <p>Exclusive access to pre-vetted, high-potential ventures.</p>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>
    </div>
  </section>
  <section className="why-scroll-section">
    <div className="overlay" />
    <div className="container why-scroll-container">
      <h2 className="why-title">
        Why Choose <span>Inventya?</span>
      </h2>
      {/* FIXED DIVIDER WRAPPER (required) */}
      <div className="why-scroll-box-wrapper">
        {/* SCROLLABLE BOX */}
        <div className="why-scroll-box">
          <div className="why-item">
            <h4>Global Reach</h4>
            <p>
              Connections across 65+ countries for diverse investment
              opportunities.
            </p>
          </div>
          <div className="why-item">
            <h4>Sector Expertise</h4>
            <p>
              Deep knowledge of AI, Health, Energy, Robotics, and Quantum
              Computing.
            </p>
          </div>
          <div className="why-item">
            <h4>End-to-End Support</h4>
            <p>
              From deal sourcing to portfolio management and ROI optimisation.
            </p>
          </div>
          <div className="why-item">
            <h4>Trusted Partner</h4>
            <p>
              Proven track record with investors, SMEs, and government-backed
              initiatives.
            </p>
          </div>
          <div className="why-item">
            <h4>Data-Driven Insights</h4>
            <p>
              Informed decisions based on research, analysis, and due diligence.
            </p>
          </div>
          <div className="why-item">
            <h4>Collaborative Network</h4>
            <p>
              PE/VC partnerships, co-investment opportunities, and strategic
              alliances.
            </p>
          </div>
        </div>
        {/* END SCROLL BOX */}
      </div>
      {/* END WRAPPER */}
    </div>
  </section>
  <section className="impact-section">
    <div className="container impact-wrap">
      <div className="impact-left">
        <h2 className="impact-title">Real-World Impact:</h2>
        <h3 className="impact-subtitle">
          Transforming Investment Opportunities
          <br />
          into Success
        </h3> 
        <div className="impact-row">
          <img
            src="/second-page/arrow-up-right.svg"
            className="impact-arrow"
          />
          <p className="impact-text">
            Discover how Inventya has enabled investors to capitalise on
            high-potential ventures, secure funding, and achieve measurable
            growth. Our case studies highlight success across sectors,
            geographies, and stages of innovation.
          </p>
        </div>
      </div>
      <div className="impact-right">
        <img
          src="/second-page/Layer 1.png"
          className="impact-circle"
        />
      </div>
    </div>
  </section>
  <section className="case-section">
    <div className="case-inner">
      <div className="scroll-container">
        <div className="case-card">
          <h4>Case Study 1:</h4>
          <h5>AI Healthcare Startup – Series B Success</h5>
          <p>
            <strong>Overview:</strong> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            <strong>Impact:</strong> Lorem ipsum dolour sit amet, consectetur
            adipiscing elit
          </p>
        </div>
        <div className="case-card">
          <h4>Case Study 2:</h4>
          <h5>Renewable Energy Scale-Up</h5>
          <p>
            <strong>Overview:</strong> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            <strong>Impact:</strong> Lorem ipsum dolour sit amet, consectetur
            adipiscing elit
          </p>
        </div>
        <div className="case-card">
          <h4>Case Study 3:</h4>
          <h5>University Spin-Off Commercialisation</h5>
          <p>
            <strong>Overview:</strong> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            <strong>Impact:</strong> Lorem ipsum dolour sit amet, consectetur
            adipiscing elit
          </p>
        </div>
        <div className="case-card">
          <h4>Case Study 4:</h4>
          <h5>EdTech Expansion</h5>
          <p>
            <strong>Overview:</strong> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            <strong>Impact:</strong> Lorem ipsum dolour sit amet, consectetur
            adipiscing elit
          </p>
        </div>
        <div className="case-card">
          <h4>Case Study 5:</h4>
          <h5>Supply Chain Technology Growth</h5>
          <p>
            <strong>Overview:</strong> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            <strong>Impact:</strong> Lorem ipsum dolour sit amet, consectetur
            adipiscing elit
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="invest-banner">
    <div className="invest-overlay" />
    <div className="invest-container">
      {/* LEFT CONTENT */}
      <div className="invest-left">
        <h1 className="invest-title">
          Start Your <br />
          Investment Journey <br />
          with <span>Inventya</span>
        </h1>
        <p className="invest-subtext">
          Discover high-potential ventures, gain actionable insights, and
          maximise returns with a trusted innovation partner.
        </p>
        <a href="#" className="invest-btn">
          Connect with Our Investor Team
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
