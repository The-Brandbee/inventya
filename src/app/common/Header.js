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
                <li><a href="#">For Investors</a></li>
                <li><a href="#">For Government</a></li>
                <li><a href="#">For Businesses</a></li>
                <li><a href="#">For Universities</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Impact</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><button className="header_contact_btn">Contact Us</button></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexPage;     
