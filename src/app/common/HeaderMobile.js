import React, { Component } from "react";
import Link from "next/link";

import { slide as Menu } from "react-burger-menu";
import {
  Accordion,
  AccordionItem,     
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

class MobileMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="header-logo-right">      
        <div className="container--">
          <div className="col-md-10--">
            <div className="dropdown mobilemenu-new">
              <Menu>
                <Accordion allowZeroExpanded>
                 

                  
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>For Investors</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Menu-underLink">
                        <ul>
                             <li><Link href="https://inventya.vercel.app/investable-innovation">Investment-ready Pipeline</Link></li>
        <li><Link href="https://inventya.vercel.app/due-delligence">Due Diligence</Link></li>
        <li><Link href="https://inventya.vercel.app/market-insight">Market Insights</Link></li>
        <li><Link href="https://inventya.vercel.app/roi">ROI & Portfolio Success</Link></li>
        <li><Link href="https://inventya.vercel.app/pe-vc-collaboration">PE/VC Collaborations</Link></li>
        <li><Link href="https://inventya.vercel.app/investment-oportunity">Investment Opportunities</Link></li>
        <li><Link href="#">Case Studies</Link></li>
                         
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                   <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>For Government</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Menu-underLink">
                        <ul>
                             <li><Link href="https://inventya.vercel.app/high-impact">High Impact Programmes</Link></li>
        <li><Link href="https://inventya.vercel.app/economic-development">Economic Development Support</Link></li>
        <li><Link href="https://inventya.vercel.app/grant-management">Grant Management</Link></li>
        <li><Link href="https://inventya.vercel.app/tender-management">Tender Management</Link></li>
        <li><Link href="https://inventya.vercel.app/commercialisation-trining">Commercialisation Training</Link></li>
        <li><Link href="https://inventya.vercel.app/secondary-funding">Secondary/Cascade Funding</Link></li>
      
                         
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                   <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>For Businesses</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Menu-underLink">
                        <ul>
                              <li><Link href="https://inventya.vercel.app/growth-advisory">Growth Advisory</Link></li>
        <li><Link href="https://inventya.vercel.app/innovation-funding">Innovation Funding</Link></li>
        <li><Link href="https://inventya.vercel.app/r-d-tax">R&D Tax Credits</Link></li>
        <li><Link href="https://inventya.vercel.app/patent-box">Patent Box</Link></li>
        <li><Link href="https://inventya.vercel.app/commercialisation-pathway">Commercialisation Pathways</Link></li>
     
                         
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                   <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>For Universities</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Menu-underLink">
                        <ul>
                             <li><Link href="https://inventya.vercel.app/ip-commercialisation">IP Commercialisation</Link></li>
        <li><Link href="https://inventya.vercel.app/spinouts">Spinouts and Licensing</Link></li>
        <li><Link href="https://inventya.vercel.app/research-funding">Research Funding</Link></li>
        <li><Link href="https://inventya.vercel.app/partnership">Partnerships</Link></li>
        <li><Link href="https://inventya.vercel.app/consortium">Consortium Building</Link></li>
        <li><Link href="https://inventya.vercel.app/industry-collaboration">Industry Collaboration</Link></li>
      
                         
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                   <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Services</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Menu-underLink">
                        <ul>
                                <li><Link href="/funding-investment">Investment & Funding</Link></li>
        <li><Link href="/advisory-programmes">Advisory & Programmes</Link></li>
        <li><Link href="/innovation-commercialisation">Innovation & Commercialisation</Link></li>
        <li><Link href="/government-public-sector-support">Government & Public Sector Support</Link></li>
     
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                    <AccordionItem>
                  <Link href="#">
                      <AccordionItemHeading>
                        <AccordionItemButton>Impact</AccordionItemButton>
                      </AccordionItemHeading>
                      </Link>
                  </AccordionItem>
                    <AccordionItem>
                  <Link href="#">
                      <AccordionItemHeading>
                        <AccordionItemButton>Company</AccordionItemButton>
                      </AccordionItemHeading>
                      </Link>
                  </AccordionItem>
                    <AccordionItem>
                  <Link href="#">
                      <AccordionItemHeading>
                        <AccordionItemButton>Industries</AccordionItemButton>
                      </AccordionItemHeading>
                      </Link>
                  </AccordionItem>
                    <AccordionItem>
                  <Link href="#">
                      <AccordionItemHeading>
                        <AccordionItemButton>Contact Us</AccordionItemButton>
                      </AccordionItemHeading>
                      </Link>
                  </AccordionItem>
           
                </Accordion>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
