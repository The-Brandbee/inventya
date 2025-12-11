"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../app/common/Header.js";
import HeaderMobileIn from "../app/common/HeaderMobile.js";
import Footer from "../app/common/Footer.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import { GoogleTagManager } from "@next/third-parties/google";


export default function Home() {
  return (
       <div>     
        
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
      {/* hero banner sec */}
      <section className="home_main_hero_section">
        <div className="home_main_hero_video_box">
          <video autoPlay muted loop playsInline>
            <source src="/hero_banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="home_main_hero_video_overlay_box">
            <div className="container">
              <div className="row home_main_hero_video_overlay_row">
                <div className="col-lg-6 col-md-6 col-sm-12 home_main_hero_col">
                  <div className="home_main_hero_cont_box">
                    <h2>
                      Unlocking <span>Growth</span>
                    </h2>
                    <h5>& Impact for Businesses, Government & Academia</h5>

                    <div className="home_main_hero_arrow_parent_container">
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-4 col-2">
                          <img src="/arrow-up-right.svg" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-8 col-10">
                          <p>
                            Empowering innovation through strategic support, funding expertise, and global market access.
                          </p>
                          <a href="#" className="explore_btn">
                            Explore Our Services
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tailored solutions section */}
      <section className="tailer_solutions_main_sec">
        <div className="container">
          <div className="row tailer_solutions_main_head_row">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="tailerd_solutions_head_box">
                <h2>
                  Tailored Solutions <br /> for Every Stakeholder
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="tailerd_solutions_head_box">
                <p>
                  Whether you are an investor, government body, SME, or academic institution, Inventya
                  provides specialised support to unlock opportunities, drive growth and maximise impact.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {/** Box 1 */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="tailored_solution_cont_box tailored_solution_cont_box_first">
                <h6>For Investors</h6>
                <p>Discover high-impact opportunities and strategic partnerships.</p>
                <a href="#" className="learn_btn">Learn More</a>
              </div>
            </div>

            {/** Box 2 */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="tailored_solution_cont_box tailored_solution_cont_box_mob_no_brdr">
                <h6>For Investors</h6>
                <p>Discover high-impact opportunities and strategic partnerships.</p>
                <a href="#" className="learn_btn">Learn More</a>
              </div>
            </div>

            {/** Box 3 */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="tailored_solution_cont_box">
                <h6>For Investors</h6>
                <p>Discover high-impact opportunities and strategic partnerships.</p>
                <a href="#" className="learn_btn">Learn More</a>
              </div>
            </div>

            {/** Box 4 */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="tailored_solution_cont_box tailored_solution_cont_box_not_bordered">
                <h6>For Investors</h6>
                <p>Discover high-impact opportunities and strategic partnerships.</p>
                <a href="#" className="learn_btn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* driving innovation section */}
      <section className="driving_innovation_main_sec">
        <div className="container">
          <div className="row">
            {/* left */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="driving_innovation_main_head_box">
                <h2>Driving Innovation</h2>
                <h6>with Measurable Impact</h6>
              </div>
            </div>

            {/* right */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="driving_solution_number_main_box">
                <div className="driving_solution_number_box">
                  <h2>
                    £725M+ <span className="driving_solution_number_cont"> raised in funding</span>
                  </h2>
                </div>

                <div className="driving_solution_number_box">
                  <h2>
                    500+ <span className="driving_solution_number_cont"> projects delivered</span>
                  </h2>
                </div>

                <div className="driving_solution_number_box">
                  <h2>
                    65+ <span className="driving_solution_number_cont"> countries connected</span>
                  </h2>
                </div>

                <div className="driving_solution_number_box">
                  <h2>
                    12+ <span className="driving_solution_number_cont"> years of industry expertise</span>
                  </h2>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* global partner section */}
      <section className="global_partner_main_sec">
        <div className="container">
          <div className="row global_partner_main_row">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="globl_partner_main_head_box">
                <h3>A Global Partner</h3>
                <h2>for Innovation & Growth</h2>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="globl_partner_main_head_box globl_partner_main_head_box_para_cont">
                <p>
                  Inventya empowers innovators to turn ideas into market-ready solutions. With over a decade
                  of experience, a network spanning 65+ countries, and deep expertise in high-tech sectors,
                  we provide funding, strategic guidance, and market access to businesses, governments, and
                  academia worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* comprehensive support section */}
      <section className="comprehensive_support_video_section">
        <div className="comprehensive_support_video_box">
          <video autoPlay muted loop playsInline>
            <source src="/comp_support.mp4" type="video/mp4" />
          </video>

          <div className="comprehensive_support_video_overlay">
            <div className="container">
              <div className="row comprehensive_support_head_row">
                <div className="col-lg-6 col-md-6 col-ms-12">
                  <div className="comprehensive_support_head_box">
                    <h2>
                      Comprehensive Support <br /> <span>Across Innovation & Growth</span>
                    </h2>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-ms-12">
                  <div className="comprehensive_support_button_box">
                    <a href="#">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="row">

                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="coprehensive_support_slide_box">
                    <h3>Grant Funding & Bid Writing</h3>
                    <p>Discover high-impact opportunities and strategic partnerships.</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="coprehensive_support_slide_box">
                    <h3>R&D Tax Credits</h3>
                    <p>
                      Maximise research and development incentives to reduce costs and accelerate growth.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="coprehensive_support_slide_box">
                    <h3>Patent Box & IP Strategy</h3>
                    <p>
                      Optimise intellectual property management for financial efficiency and strategic advantage.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="coprehensive_support_slide_box">
                    <h3>Finance for Growth</h3>
                    <p>
                      Access equity, debt, and hybrid funding solutions to scale your business globally.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* driving innovation case studies */}
      <section className="driving_innovation_sec">
        <div className="container">
          <div className="row driving_innovation_head_row">
            <div className="col-lg-12">
              <div className="driving_innovation_head_box">
                <h2>
                  Driving Innovation <br /> Across Sectors: <br /> Real-World Impact
                </h2>
              </div>
            </div>
          </div>

          <div className="row">

            {/* Card 1 */}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="driving_innovation_main_parent_box">
                <h6>Manufacturing Made Smarte</h6>

                <div className="driving_innovation_main_box">
                  <img src="/portrait-engineer-job-site-work-hours.png" alt="" />

                  <div className="driving_innovation_main_cont_box">

                    <ul>
                      <li><b>Client</b>: Baxi Heating UK & Aston University</li>
                      <li><b>Sector</b>: Industrial Manufacturing</li>
                      <li><b>Service</b>: Consultancy</li>
                    </ul>

                    <p>
                      <b>Overview</b>: <br />
                      Inventya provided project management and financial compliance support for a £1.6M Innovate UK grant-funded project aimed at designing a digital servitization demonstrator.
                    </p>

                    <a href="#">
                      Learn More: Read Case Study
                      <img src="/chevron-right.png" className="chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */} 
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="driving_innovation_main_parent_box">
                <h6>Cold Wrap Technology Scale-Up</h6>

                <div className="driving_innovation_main_box">
                  <img src="/portrait-engineer-job-site-work-hours.png" alt="" />

                  <div className="driving_innovation_main_cont_box">

                    <ul>
                      <li><b>Client</b>: TrakRap</li>
                      <li><b>Sector</b>: Packaging Technology</li>
                      <li><b>Service</b>: Scaleup Programme</li>
                    </ul>

                    <p>
                      <b>Overview</b>: <br />
                      Inventya assisted TrakRap in refining their growth strategy through the Innovate UK and EEN Scaleup Programme.
                    </p>

                    <a href="#">
                      Learn More: Read Case Study
                      <img src="/chevron-right.png" className="chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="driving_innovation_main_parent_box">
                <h6>Innovative Medical Device Market Analysis</h6>

                <div className="driving_innovation_main_box">
                  <img src="/portrait-engineer-job-site-work-hours.png" alt="" />

                  <div className="driving_innovation_main_cont_box">

                    <ul>
                      <li><b>Client</b>: Liverpool John Moores University</li>
                      <li><b>Sector</b>: Healthcare Technology</li>
                      <li><b>Service</b>: Collaborative Partnerships</li>
                    </ul>

                    <p>
                      <b>Overview</b>: <br />
                      Inventya conducted proof-of-concept research and market analysis for an innovative medical device targeting UK Pain Centres.
                    </p>

                    <a href="#">
                      Learn More: Read Case Study
                      <img src="/chevron-right.png" className="chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* hear from clients section */}
      <section className="hear_from_our_client_sec">
        <div className="container">
          <div className="row hear_from_our_client_heading_row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <div className="hear_from_our_client_icon_box">
                <div className="hear_from_our_client_left_icon">
                  <img src="/quotes-left.svg" />
                </div>
                <div className="hear_from_our_client_right_icon">
                  <img src="/quotes-right.svg" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-ms-8 col-8">
              <div className="hear_from_our_client_head_box">
                <h2>
                  Hear from Our <br />
                  <span>Partners & Clients</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="hear_from_our_client_testimonial_box hear_from_our_client_testimonial_box_bordered">
                <p>
                  "The Inventya team provided a very knowledgeable and professional service from the word go…
                </p>
                <h6>
                  Siobhan Smedley-Wild, <br /> British Board of Film Classification
                </h6>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="hear_from_our_client_testimonial_box hear_from_our_client_testimonial_box_bordered">
                <p>
                  "Inventya’s business model allowed us to use their services in a way that was low risk for us…"
                </p>
                <h6>
                  Alec Anderson, <br /> MD, Koolmill
                </h6>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="hear_from_our_client_testimonial_box">
                <p>
                  "Inventya were at the heart of LIG’s R&D Tax Relief claim…"
                </p>
                <h6>
                  Alec Anderson, <br /> MD, Koolmill
                </h6>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* start your innovation journey section */}
      <section className="start_your_innovation_journey_sec">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="start_your_innovation_journey_head_box">

                <h2>
                  Start Your Innovation <br /> Journey with <span>Inventya</span>
                </h2>

                <div className="start_your_journey_main_icon_cont_box">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                      <div className="start_your_journey_main_icon_box">
                        <img src="/arrow-up-right.svg" alt="" />
                         </div>
                    </div> 

                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                      <div className="start_your_journey_main_cont_box">
                        <p>
                          Connect with our experts to explore how we can support your growth and innovation objectives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="start_your_innovation_journey_form_box">
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Organisation" />
                  <textarea placeholder="Message"></textarea>
                  <button>Learn More</button>
                </form>
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
