import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";


function IndexPage() {
  return (
    <section className="inventya_footer_main">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="inventya_footer_img_box">
            
          <img src="/inventya-negative-RGB.png" alt="" />
          
        </div>
      </div>
    </div>

    <div className="row inventya_main_row">
      <div className="col-lg-2 col-md-2 col-sm-6 col-6">
        <div className="footer_main_link_box">
          <h5>For Investors</h5>
          <ul>
            <li><a href="#">Investment-ready Pipeline</a></li>
            <li><a href="#">Due Diligence</a></li>
            <li><a href="#">Market Insights</a></li>
            <li><a href="#">ROI & Portfolio Success</a></li>
            <li><a href="#">PE/VC collaborations</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
           <h5>For Government</h5>
          <ul>
            <li><a href="#">High-impact Programmes</a></li>
            <li><a href="#">Economic Development Support</a></li>
            <li><a href="#">Grant Management</a></li>
            <li><a href="#">Tender Management</a></li>
            <li><a href="#">Local Authority Success Stories</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
        </div>
      </div>

      <div className="col-lg-2 col-md-2 col-sm-6 col-6">
        <div className="footer_main_link_box">
          <h5>For Businesses</h5>
          <ul>
            <li><a href="#">Growth Advisory (scale-up, funding, exports)</a></li>
            <li><a href="#">Innovation Funding</a></li>
            <li><a href="#">R&D Tax Credits</a></li>
            <li><a href="#">Patent Box</a></li>
            <li><a href="#">Commercialisation Pathways</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
          <h5>For Universities</h5>
          <ul>
            <li><a href="#">IP Commercialisation</a></li>
            <li><a href="#">Spinouts</a></li>
            <li><a href="#">Research Funding</a></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">Stakeholder Collaboration</a></li>
            <li><a href="#">Industry Collaboration</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
        </div>
      </div>

      <div className="col-lg-2 col-md-2 col-sm-6 col-6">
        <div className="footer_main_link_box">
          <h5>Services</h5>
          <ul>
            <li><a href="#">Funding & Investment</a></li>
            <li><a href="#">Advisory & Programmes</a></li>
            <li><a href="#">Innovation & Commercialisation</a></li>
            <li><a href="#">Government & Public Sector Support</a></li>
          </ul>
          <h5>Company</h5>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Our Brands</a></li>
            <li><a href="#">Our Approach</a></li>
            <li><a href="#">Our Accreditations</a></li>
            <li><a href="#">Our Memberships</a></li>
            <li><a href="#">Our Partners</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Industries</a></li>
          </ul>
        </div>
      </div>

      <div className="col-lg-2 col-md-2 col-sm-6 col-6">
        <div className="footer_main_link_box">
          <h5>Contact</h5>
          <ul>
            <li>Send us an email:</li>
            <li><a href="mailto:info@inventya.com">info@inventya.com</a></li>
            <li>520 Birchwood Boulevard Warrington, Cheshire WA3 7QX, UK</li>
          </ul>
           <ul>
            <li>UK CBC House 24 Canning Street Edinburgh, EH3 8EG</li>
            <li>Chat to us on:</li>
            <li>+44 (0) 1925 506 100</li>
            <li>Registered Company No: 07144394</li>
            <li>AML Registration No: XZML00000194286</li>
          </ul>
        </div>
      </div>

      <div className="col-lg-2 col-md-2 col-sm-6 col-6">
        <div className="footer_main_link_box">
          <h5>Social Links</h5>
          <ul className="social_list">
            <li><a href="#"><img src="/fb.svg" alt="facebook" /></a></li>
            <li><a href="#"><img src="/twitter.svg" alt="twitter" /></a></li>
            <li><a href="#"><img src="/linkedin.svg" alt="linkedin" /></a></li>
            <li><a href="#"><img src="/youtube.svg" alt="youtube" /></a></li>
          </ul>
           <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Complaints</a></li>
            <li><a href="#">Member Portal</a></li>
          </ul>
        </div>
      </div>
    </div>

  

    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="copy_right_main_box">
          <p>Copyright © 2025 Inventya Ltd. All rights reserved</p>
        </div>
      </div>
    </div>

  </div>
</section>

  );
}

export default IndexPage;
