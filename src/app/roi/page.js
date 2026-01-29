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
  <section className="innovation-section" style={{backgroundImage: "url('/ROI-Portfolio-Success/banner.jpg')",}}>
    <div className="innovation-overlay" />
    <div className="innovation-container">
      <div className="max-w-lg">
        {/* <h3 class="innovation-subheading">Discover the Future of</h3> */}
        <h1 className="innovation-title">
          Maximising Returns, Minimising Risk
        </h1>
        <p className="innovation-text">
          Data-driven strategies to enhance portfolio performance and long-term
          investment value.
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
            Inventya’s ROI &amp; Portfolio Success framework combines
            performance tracking, growth analysis, and data-backed strategy
            refinement to help investors optimise their returns and strengthen
            portfolio outcomes.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="programme-right">
          <div className="programme-box">
            <h3>Performance Benchmarking</h3>
            <p>
              Assess portfolio performance against industry standards to
              identify outperformers and underperformers.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Growth Strategy Alignment</h3>
            <p>
              Ensure portfolio companies’ strategies align with evolving market
              conditions and investor objectives.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Data-Driven Insights</h3>
            <p>
              Leverage predictive analytics to forecast trends and improve
              return potential.
            </p>
            <div className="underline-line" />
          </div>
          <div className="programme-box">
            <h3>Continuous Monitoring</h3>
            <p>
              Implement structured review cycles to maintain accountability and
              strategic direction.
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
              src="/ROI-Portfolio-Success/1.jpg"
              alt=""
            />
            <h3>Portfolio Health Analysis</h3>
            <p>
              Evaluate investment health, cash flow strength, and scalability
              potential for informed decision-making.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="service-card">
            <img
              src="/ROI-Portfolio-Success/2.jpg"
              alt=""
            />
            <h3>Return Optimisation Strategies</h3>
            <p>
              Design tailored growth and exit strategies to maximise ROI across
              the portfolio.
            </p>
          </div>
          {/* CARD 3 */}
          <div className="service-card">
            <img
              src="/ROI-Portfolio-Success/3.jpg"
              alt=""
            /> 
            <h3>Performance Reporting &amp; Visualisation</h3>
            <p>
              Deliver real-time insights through clear dashboards and
              performance analytics.
            </p>
          </div>
          <div className="service-card">
            <img
              src="/ROI-Portfolio-Success/3.jpg"
              alt=""
            />
            <h3>Sustainability &amp; Impact Metrics</h3>
            <p>
              Integrate ESG and long-term sustainability goals into portfolio
              evaluation and growth planning.
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
          Inventya empowers investors with transparency, precision, and
          actionable intelligence to optimise value creation. By integrating
          market data, operational insights, and predictive models, we help
          build stronger, future-ready portfolios that deliver sustainable
          financial and strategic returns.
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
          Transform Your <br /> Portfolio <span>Performance</span>
        </h1>
        <p className="growth-subtext">
          Harness insights that help you optimise returns, strengthen
          investments, and achieve sustainable growth.
        </p>
        <a href="#" className="growth-btn">
          Enhance Your Portfolio Today
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
