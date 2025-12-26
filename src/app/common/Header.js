import Head from "next/head";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";




function IndexPage() {
    // State to track whether the content is visible
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle visibility
    const toggleVisibility = () => {
      setIsVisible((prev) => !prev);
    };
  
     
  return (
 <section className="header_main_sec">
      <div className="container">
        <div className="row header_main_top_bar_row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="header_main_top_bar">
              <ul>
              <ul className="header_social_list">
                <li>
                  <a href="#">
                    <Image src="/fb.svg" alt="facebook" width={16} height={16} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src="/twitter.svg" alt="twitter" width={16} height={16} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src="/linkedin.svg" alt="linkedin" width={16} height={16} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src="/youtube.svg" alt="youtube" width={16} height={16} />
                  </a>
                </li>
              </ul>

             
                <li><a href="#">info@inventya.com</a></li>
                <li><a href="#"><b>+44 (0)1925 506 100</b></a></li>
                <li>
                  <a href="#" className="head_partner_login_link">
                    <b>Partner login</b>{" "}
                    <Image src="/chevron-right.png" alt="arrow" width={10} height={10} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logo + Menu */}
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="header_main_logo_box">
              <Link href="/">
              <Image
                src="/inventya-negative-RGB.png"
                alt="Inventya Logo"
                width={180}
                height={60}
              />
              </Link>
            </div>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-6 col-6">

            {/* Mobile Toggler */}
            <button
              className="header_nav_toggler d-inline-block d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainHeaderNav"
            >
              <Image src="/menu.png" alt="menu" width={22} height={22} />
            </button>

            {/* Menu */}
<div className="collapse d-lg-block" id="mainHeaderNav">
  <ul className="header_main_nav_list">

    {/* For Investors */}
    <li className="nav_item dropdown">
      <Link href="https://inventya.vercel.app/empowering-investors">For Investors</Link>

      <ul className="dropdown_menu">
        <li><Link href="https://inventya.vercel.app/investable-innovation">Investment-ready Pipeline</Link></li>
        <li><Link href="https://inventya.vercel.app/due-delligence">Due Diligence</Link></li>
        <li><Link href="https://inventya.vercel.app/market-insight">Market Insights</Link></li>
        <li><Link href="https://inventya.vercel.app/roi">ROI & Portfolio Success</Link></li>
        <li><Link href="https://inventya.vercel.app/pe-vc-collaboration">PE/VC Collaborations</Link></li>
        <li><Link href="https://inventya.vercel.app/investment-oportunity">Investment Opportunities</Link></li>
        <li><Link href="#">Case Studies</Link></li>
      </ul>
    </li>

    {/* For Government */}
    <li className="nav_item dropdown">
      <Link href="https://inventya.vercel.app/empowering-governments">For Government</Link>

      <ul className="dropdown_menu">
        <li><Link href="https://inventya.vercel.app/high-impact">High Impact Programmes</Link></li>
        <li><Link href="https://inventya.vercel.app/economic-development">Economic Development Support</Link></li>
        <li><Link href="https://inventya.vercel.app/grant-management">Grant Management</Link></li>
        <li><Link href="https://inventya.vercel.app/tender-management">Tender Management</Link></li>
        <li><Link href="https://inventya.vercel.app/commercialisation-trining">Commercialisation Training</Link></li>
        <li><Link href="https://inventya.vercel.app/secondary-funding">Secondary/Cascade Funding</Link></li>
      </ul>
    </li>

    <li className="nav_item dropdown"><Link href="#">For Businesses</Link>

      <ul className="dropdown_menu">
        <li><Link href="https://inventya.vercel.app/growth-advisory">Growth Advisory</Link></li>
        <li><Link href="https://inventya.vercel.app/innovation-funding">Innovation Funding</Link></li>
        <li><Link href="https://inventya.vercel.app/r-d-tax">R&D Tax Credits</Link></li>
        <li><Link href="https://inventya.vercel.app/patent-box">Patent Box</Link></li>
        <li><Link href="https://inventya.vercel.app/commercialisation-pathway">Commercialisation Pathways</Link></li>
      </ul>
    </li>
    <li className="nav_item dropdown"><Link href="#">For Universities</Link>
      <ul className="dropdown_menu">
        <li><Link href="https://inventya.vercel.app/ip-commercialisation">IP Commercialisation</Link></li>
        <li><Link href="https://inventya.vercel.app/spinouts">Spinouts and Licensing</Link></li>
        <li><Link href="https://inventya.vercel.app/research-funding">Research Funding</Link></li>
        <li><Link href="https://inventya.vercel.app/partnership">Partnerships</Link></li>
        <li><Link href="https://inventya.vercel.app/consortium">Consortium Building</Link></li>
        <li><Link href="https://inventya.vercel.app/industry-collaboration">Industry Collaboration</Link></li>
      </ul>
    
    </li>
    <li className="nav_item dropdown"><Link href="#">Services</Link>
    
      <ul className="dropdown_menu">
        <li><Link href="https://inventya.vercel.app/funding-investment">Investment & Funding</Link></li>
        <li><Link href="#">Advisory & Programmes</Link></li>
        <li><Link href="#">Innovation & Commercialisation</Link></li>
        <li><Link href="#">Government & Public Sector Support</Link></li>
      </ul>
    </li>
    <li><Link href="#">Impact</Link></li>
    <li><Link href="#">Company</Link></li>
    <li><Link href="#">Industries</Link></li>

    <li>
      <button className="header_contact_btn">Contact Us</button>
    </li>
  </ul>
</div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexPage;