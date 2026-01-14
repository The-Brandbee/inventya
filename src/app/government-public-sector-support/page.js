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
 <section className="prime-hero government-public-sector-support">
  <div className="prime-content">
    <h1 className="prime-title animate-move">
      Government &amp; <br />
      <span className="prime-highlight">Public Sector Support</span>
    </h1>
    <p className="prime-tagline">
      Empowering public institutions to design, fund, and deliver programmes that create measurable economic and societal impact.
    </p>
  </div>
</section>



 <section className="funding-section">
  <div className="funding-container">
    {/* LEFT TEXT */}
    <div className="funding-left">
      <h2 className="funding-title">
        From opportunity
        <br />
        to award, maximising public sector funding success
      </h2>
      <p className="funding-desc">
        Inventya partners with government bodies, local authorities, and public sector organisations to deliver strategic, evidence-based support for innovation-led growth. From developing successful tenders to evaluating programme outcomes, we help ensure every initiative is efficient, impactful, and aligned with policy priorities. Our multidisciplinary team combines deep expertise in innovation, funding, and economics to shape programmes that deliver real-world results, fostering stronger, more resilient communities and industries.
      </p>
    </div>

    {/* RIGHT SCROLL CARDS */}
    <div className="funding-right">
      <div className="funding-divider" />
      <div className="funding-scroll">
        <div className="fund-card active-card">
          <h4>Tender Development &amp; Capture</h4>
          <p>
            Crafting competitive, compliant, and compelling bids that win.
          </p>
        </div>

        <div className="fund-card">
          <h4>Programme Design &amp; Delivery</h4>
          <p>
            Building and executing high-impact development and innovation programmes.
          </p>
        </div>

        <div className="fund-card">
          <h4>Policy Alignment &amp; Impact Measurement</h4>
          <p>
            Ensuring every intervention delivers measurable and sustainable outcomes.
          </p>
        </div>

        <div className="fund-card">
          <h4>Stakeholder Engagement</h4>
          <p>
            Uniting partners and communities to co-create solutions that matter.
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
    <h2 className="grant-title">Tender Development &amp; Capture</h2>
    <p className="grant-desc">
      Inventya’s tender experts support government and public sector organisations through every stage of the bid lifecycle, from identification and positioning to submission and post-award compliance.
    </p>

    <div className="grant-scroll" id="grantScroll">
      <div className="grant-card">
        <p>
          <strong>Opportunity Scouting &amp; Assessment:</strong> Identify relevant national and European tenders aligned with strategic priorities.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Bid Strategy Development:</strong> Define win themes, differentiators, and value propositions for stronger bids.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Bid Writing &amp; Review:</strong> Craft clear, compelling, and compliant submissions that meet all technical and financial criteria.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Consortium Building:</strong> Facilitate partnerships across academia, industry, and policy for stronger, collaborative bids.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Budget &amp; Compliance Management:</strong> Ensure financial transparency, audit readiness, and adherence to all procurement requirements.
        </p>
      </div>

      <div className="grant-card">
        <p>
          <strong>Post-Award Support:</strong> Provide implementation and reporting support for successful tenders.
        </p>
      </div>
    </div>
  </div>
</section>



 <section className="rd-section">
  <div className="rd-container">
    <h2 className="rd-title">Programme Design &amp; Delivery</h2>
    <p className="rd-desc">
      Inventya collaborates with regional and national bodies to design innovation, skills, and growth programmes that deliver tangible impact.
    </p>

    <div className="finance-scroll">
      <div className="rd-card">
        <h4>Needs Assessment &amp; Scoping</h4>
        <p>Conduct regional and sectoral analysis to define programme priorities.</p>
      </div>

      <div className="rd-card">
        <h4>Funding Architecture Design</h4>
        <p>Build robust delivery and governance frameworks for effective rollout.</p>
      </div>

      <div className="rd-card">
        <h4>Pilot &amp; Scale Strategy</h4>
        <p>Design flexible models that evolve from pilot to large-scale implementation.</p>
      </div>

      <div className="rd-card">
        <h4>Monitoring &amp; Evaluation</h4>
        <p>Establish data-driven systems to measure performance and outcomes.</p>
      </div>

      <div className="rd-card">
        <h4>Stakeholder Coordination</h4>
        <p>Engage public, private, and academic partners for seamless execution.</p>
      </div>

      <div className="rd-card">
        <h4>Programme Communication</h4>
        <p>Develop outreach and engagement strategies for awareness and uptake.</p>
      </div>
    </div>
  </div>
</section>


 <section className="finance-section">
  <div className="finance-container">
    <h2 className="finance-title">Policy Alignment &amp; Impact Measurement</h2>
    <p className="finance-desc">
      Inventya helps align programmes and interventions with broader policy frameworks, providing analytical insight to evaluate their true impact.
    </p>

    <div className="finance-scroll">
      <div className="finance-card">
        <h4>Policy Mapping &amp; Benchmarking</h4>
        <p>Analyse alignment with regional, national, and international priorities.</p>
      </div>

      <div className="finance-card">
        <h4>Logic Model &amp; Theory of Change Design</h4>
        <p>Define clear pathways from inputs to measurable outcomes.</p>
      </div>

      <div className="finance-card">
        <h4>KPI Development &amp; Tracking</h4>
        <p>Establish robust performance metrics and impact frameworks.</p>
      </div>

      <div className="finance-card">
        <h4>Socioeconomic Impact Analysis</h4>
        <p>Quantify economic, environmental, and societal benefits.</p>
      </div>

      <div className="finance-card">
        <h4>Data Collection &amp; Evaluation</h4>
        <p>Use qualitative and quantitative methods to evidence impact.</p>
      </div>

      <div className="finance-card">
        <h4>Reporting &amp; Recommendations</h4>
        <p>Deliver actionable insights to inform future policy and funding decisions.</p>
      </div>
    </div>
  </div>
</section>


  <section className="investor-section">
  <div className="investor-container">
    <h2 className="investor-title">Stakeholder Engagement</h2>
    <p className="investor-desc">
      Effective stakeholder engagement is key to sustainable policy and programme success. Inventya facilitates meaningful dialogue and collaboration among diverse partners to ensure alignment and shared ownership.
    </p>

    <div className="investor-scroll">
      <div className="investor-card">
        <h4>Stakeholder Mapping &amp; Analysis</h4>
        <p>Identify key influencers, beneficiaries, and delivery partners.</p>
      </div>

      <div className="investor-card">
        <h4>Consultation &amp; Co-creation Workshops</h4>
        <p>Facilitate structured sessions to gather insight and build consensus.</p>
      </div>

      <div className="investor-card">
        <h4>Communications Strategy Development</h4>
        <p>Design messaging and outreach tailored to specific audiences.</p>
      </div>

      <div className="investor-card">
        <h4>Partnership Building</h4>
        <p>Strengthen connections across academia, industry, and government.</p>
      </div>

      <div className="investor-card">
        <h4>Community Engagement</h4>
        <p>Involve local stakeholders to ensure inclusive design and delivery.</p>
      </div>

      <div className="investor-card">
        <h4>Public Reporting &amp; Dissemination</h4>
        <p>Ensure transparency through data-driven storytelling and reporting.</p>
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
            Trusted partner to UK and European government bodies,
            <br />
            <strong>regional authorities, and innovation agencies.</strong>
          </span>
        </li>

        <li>
          <img
            src="/fifthpage/arrow-up-right.svg"
            alt="icon"
          />
          <span>
            Proven track record in designing and delivering
            <br />
            <strong>impactful public programmes.</strong>
          </span>
        </li>

        <li>
          <img
            src="/fifthpage/arrow-up-right.svg"
            alt="icon"
          />
          <span>
            Cross-disciplinary expertise in economics, innovation,
            <br />
            <strong>policy, and funding strategy.</strong>
          </span>
        </li>

        <li>
          <img
            src="/fifthpage/arrow-up-right.svg"
            alt="icon"
          />
          <span>
            Deep experience in public-private partnerships
            <br />
            <strong>and multi-stakeholder collaboration.</strong>
          </span>
        </li>

        <li>
          <img
            src="/fifthpage/arrow-up-right.svg"
            alt="icon"
          />
          <span>
            Evidence-led approach to ensure every public pound
            <br />
            <strong>delivers maximum measurable value.</strong>
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
        Partner with Inventya to <br />
        <span>shape the future of public innovation.</span>
      </h1>

      <p className="cta-subtext">
        Collaborate with us to design, deliver, and evaluate programmes
        <br />
        that make a lasting impact.
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
