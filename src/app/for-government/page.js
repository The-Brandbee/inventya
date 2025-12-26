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
  {/* empowering government sec */}
  <section className="empowering_government_banner_sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="empowering_government_banner_cont_box">
            <h2>
              Empowering <br />
              <span>Governments</span>
            </h2>
            <h5>to Accelerate Innovation and Economic Growth Subheading</h5>
            <p>
              Inventya partners with national and regional authorities to
              design, deliver, and scale high-impact programmes that strengthen
              innovation ecosystems and drive measurable economic outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* strategic innoation sec */}
  <section className="strategic_innovation_sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-12">
          <div className="strategic_innovation_head_box">
            <h2>Strategic Innovation Support for Public Sector Growth</h2>
            <p>
              Inventya collaborates with governments, funding agencies, and
              local authorities to deliver data-driven innovation and
              commercialisation programmes. From managing grant portfolios to
              supporting SMEs and research institutions, we provide end-to-end
              services that amplify national competitiveness and societal
              impact.
            </p>
          </div>
        </div>
      </div>
      <div className="strategic_slide_row"> 
        <div className="strategic_slide_cols">
          <div className="strategic_slide_box">
            <img src="/startegic_innovation_1.png" alt="" />
            <h5>High-Impact Programmes</h5>
            <p>
              Designing and managing national and regional innovation
              programmes.
            </p>
          </div>
        </div>
        <div className="strategic_slide_cols">
          <div className="strategic_slide_box">
            <img src="/startegic_innovation_2.png" alt="" />
            <h5>Economic Development Support</h5>
            <p>
              Empowering local economies through strategic innovation
              initiatives.
            </p>
          </div>
        </div>
        <div className="strategic_slide_cols">
          <div className="strategic_slide_box">
            <img src="/startegic_innovation_3.png" alt="" />
            <h5>Grant Management</h5>
            <p>
              Comprehensive grant administration, compliance, and impact
              evaluation.
            </p>
          </div>
        </div>
        <div className="strategic_slide_cols">
          <div className="strategic_slide_box">
            <img src="/startegic_innovation_4.png" alt="" />
            <h5>Tender Management</h5>
            <p>Expertise in public procurement and funding tender delivery.</p>
          </div>
        </div>
        <div className="strategic_slide_cols">
          <div className="strategic_slide_box">
            <img src="/startegic_innovation_5.png" alt="" />
            <h5>Local Authority Success Stories</h5>
            <p>
              Proven record of supporting local innovation and sustainability
              programmes.
            </p>
          </div>
        </div>
        <div className="strategic_slide_cols">
          <div className="strategic_slide_box">
            <img src="/startegic_innovation_6.png" alt="" />
            <h5>Commercialisation Training</h5>
            <p>
              Equipping organisations with tools to transform ideas into
              market-ready solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* high impact programmers */}
  <section className="high_impact_programmers_sec high_impact_programmers_dark_sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-10 col-10">
          <div className="high_impact_programmers_head_box">
            <h2>High-Impact Programmes</h2>
            <p>
              Inventya works with governments to design and execute innovation
              and business support programmes that create measurable outcomes in
              job creation, funding leverage, and technology adoption.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Programme Design</h6>
            <p>
              Develop tailored frameworks aligned with regional and national
              innovation strategies.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Stakeholder Engagement</h6>
            <p>
              Coordinate across industry, academia, and public institutions.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Implementation Support</h6>
            <p>
              Oversee programme execution, delivery, and performance tracking.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Impact Measurement</h6>
            <p>Quantify economic, social, and technological outcomes.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Innovation Ecosystem Development</h6>
            <p>
              Strengthen links between public, private, and academic sectors.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Reporting &amp; Transparency</h6>
            <p>Provide comprehensive impact reporting to stakeholders.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* high impact programmers */}
  <section className="high_impact_programmers_sec high_impact_programmers_light_sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-10 col-10">
          <div className="high_impact_programmers_head_box">
            <h2>Economic Development Support</h2>
            <p>
              We partner with regional and local authorities to stimulate
              innovation-led growth and attract inward investment.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Policy Alignment</h6>
            <p>
              Ensure initiatives align with government priorities and funding
              policies.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>SME Enablement</h6>
            <p>Support SMEs through capacity-building and innovation grants.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Regional Growth</h6>
            <p>
              Identify high-value clusters and opportunities for development.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Investment Readiness</h6>
            <p>
              Prepare local businesses for national and international funding.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Innovation Infrastructure</h6>
            <p>Guide establishment of research and innovation hubs.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Sustainability Integration</h6>
            <p>Embed green and sustainable growth practices.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* high impact programmers */}
  <section className="high_impact_programmers_sec high_impact_programmers_dark_sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-10 col-10">
          <div className="high_impact_programmers_head_box">
            <h2>Grant Management</h2>
            <p>
              End-to-end grant management for public programmes — ensuring
              transparency, accountability, and measurable impact.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Application Support</h6>
            <p>Assist in proposal evaluation and shortlisting.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Funding Allocation</h6>
            <p>Manage disbursement and utilisation of funds efficiently.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Compliance Monitoring</h6>
            <p>Ensure all activities adhere to funding regulations.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Impact Assessment</h6>
            <p>Track outputs, outcomes, and performance metrics.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Audit &amp; Reporting</h6>
            <p>Maintain transparent reporting and audit readiness.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Programme Improvement</h6>
            <p>Offer recommendations based on monitoring insights.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* high impact programmers */}
  <section className="high_impact_programmers_sec high_impact_programmers_light_sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-10 col-10">
          <div className="high_impact_programmers_head_box">
            <h2>Tender Management</h2>
            <p>
              Expert support for public tenders — from opportunity
              identification to bid management and compliance oversight.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Tender Scouting</h6>
            <p>Identify relevant national and EU-level tenders.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Bid Development</h6>
            <p>Support with technical and financial documentation.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Partner Identification</h6>
            <p>Build strong consortia and stakeholder partnerships.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Compliance Oversight</h6>
            <p>Ensure adherence to tender and procurement regulations.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Evaluation Support</h6>
            <p>Assist in reviewing and scoring submitted tenders.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Project Implementation</h6>
            <p>
              Support awarded projects through delivery and reporting stages.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* high impact programmers */}
  <section className="high_impact_programmers_sec high_impact_programmers_dark_sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-10 col-10">
          <div className="high_impact_programmers_head_box">
            <h2>Local Authority Success Stories</h2>
            <p>
              Proven experience in enabling local councils to drive innovation,
              sustainability, and SME growth through structured support
              programmes.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Regional Innovation Programmes</h6>
            <p>
              Supported multiple authorities in designing innovation
              initiatives.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>SME Acceleration</h6>
            <p>Helped local businesses secure funding and expand operations.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Green Transition Projects</h6>
            <p>Delivered sustainability-focused funding programmes.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Capacity Building</h6>
            <p>
              Trained government staff and local organisations in funding
              readiness.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Strategic Advisory</h6>
            <p>Guided policy and decision-making to enhance impact.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Proven Outcomes</h6>
            <p>Delivered measurable economic growth and employment creation.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* high impact programmers */}
  <section className="high_impact_programmers_sec high_impact_programmers_light_sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-10 col-10">
          <div className="high_impact_programmers_head_box">
            <h2>Commercialisation Training</h2>
            <p>
              Practical and strategic training for government agencies,
              accelerators, and SMEs to transform ideas into investable
              propositions.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Curriculum Development</h6>
            <p>
              Create tailored commercialisation and innovation training modules.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Workshops &amp; Mentorship</h6>
            <p>Deliver hands-on sessions and expert mentoring.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Innovation Tools</h6>
            <p>
              Introduce proven frameworks such as Lean Canvas and TRL
              assessment.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Investment Readiness</h6>
            <p>Equip teams to attract public and private funding.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Capability Building</h6>
            <p>
              Strengthen internal innovation management within institutions.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Impact Measurement</h6>
            <p>Evaluate learning outcomes and innovation adoption.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* high impact programmers */}
  <section className="high_impact_programmers_sec high_impact_programmers_dark_sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-10 col-10">
          <div className="high_impact_programmers_head_box">
            <h2>Secondary/Cascade Funding</h2>
            <p>
              Comprehensive management of cascade funding to distribute
              resources effectively across innovation ecosystems.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Fund Structuring</h6>
            <p>Design frameworks for cascade funding mechanisms.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Application Management</h6>
            <p>Oversee submission, review, and selection processes.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Disbursement Oversight</h6>
            <p>Ensure timely and compliant fund allocation</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Impact Evaluation</h6>
            <p>Measure funding outcomes and economic leverage.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Stakeholder Coordination</h6>
            <p>Manage engagement between funders and recipients.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="progrmm_design_box">
            <h6>Transparency &amp; Reporting</h6>
            <p>Deliver complete financial and impact reporting.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =======  why choose inventya ===== */}
  <section className="why_choose_inventya_sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="why_choose_inventys_head_box">
            <h2>
              Why Choose <span>Inventya?</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row why_choose_inventya_cont_row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="why_proven_expertise">
            <h5>Proven Expertise</h5>
            <p>
              Over a decade of experience delivering national innovation
              programmes.
            </p>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="why_proven_expertise">
            <h5>Policy Alignment</h5>
            <p>
              Deep understanding of UK, EU, and international funding
              frameworks.
            </p>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="why_proven_expertise">
            <h5>Data-Driven Decision Making</h5>
            <p>Insights from market and innovation intelligence.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* public sector partnership */}
  <section className="public_sector_partnership_sec">
    <div className="container">
      <div className="row public_sector_main_head_row">
        <div className="col-lg-7 col-md-7 col-sm-12">
          <div className="public_sector_partnership_head_box">
            <h2>Public Sector Partnerships Delivering Lasting Impact</h2>
            <div className="public_sector_partnership_cont_box">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                  <div className="public_sector_partnership_arrow_box">
                    <img src="/arrow-up-right.svg" alt="" />
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                  <div className="public_sector_partnership_main_cont_box">
                    <p>
                      Explore how Inventya has collaborated with government and
                      local authorities to strengthen innovation ecosystems,
                      enable SME growth, and deliver tangible economic outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="public_sector_case_study_row">
        <div className="public_sector_case_study_cols ">
          <div className="public_sector_case_study_box public_sector_case_study_box_first">
            <p className="case_study_head">Case Study 1: </p>
            <h6 className="case_study_name">
              AI Healthcare Startup – Series B Success
            </h6>
            <p className="case_study_cont">
              <b>Overview:</b> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="case_study_cont">
              <b>Impact:</b> Lorem ipsum dolour sit amet, consectetur adipiscing
              elit
            </p>
          </div>
        </div>
        <div className="public_sector_case_study_cols">
          <div className="public_sector_case_study_box">
            <p className="case_study_head">Case Study 2: </p>
            <h6 className="case_study_name">Renewable Energy Scale-Up</h6>
            <p className="case_study_cont">
              <b>Overview:</b> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="case_study_cont">
              <b>Impact:</b> Lorem ipsum dolour sit amet, consectetur adipiscing
              elit
            </p>
          </div>
        </div>
        <div className="public_sector_case_study_cols">
          <div className="public_sector_case_study_box">
            <p className="case_study_head">Case Study 3: </p>
            <h6 className="case_study_name">
              University Spin-Off Commercialisation
            </h6>
            <p className="case_study_cont">
              <b>Overview:</b> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="case_study_cont">
              <b>Impact:</b> Lorem ipsum dolour sit amet, consectetur adipiscing
              elit
            </p>
          </div>
        </div>
        <div className="public_sector_case_study_cols">
          <div className="public_sector_case_study_box">
            <p className="case_study_head">Case Study 4: </p>
            <h6 className="case_study_name">EdTech Expansion</h6>
            <p className="case_study_cont">
              <b>Overview:</b> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="case_study_cont">
              <b>Impact:</b> Lorem ipsum dolour sit amet, consectetur adipiscing
              elit
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* start your investment journey */}
  <section className="start_your_invest_journey_sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="start_your_investmernt_head_box">
            <h2>
              Start Your Investment Journey with <span>Inventya</span>
            </h2>
            <p>
              Discover high-potential ventures, gain actionable insights, and
              maximise returns with a trusted innovation partner.
            </p>
            <a href="#">Connect with Our Investor Team</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</>


        <Footer />                
      </main>          
    </div>
  );
}
