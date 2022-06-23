import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <img src="./assets/img/footer-angle.svg" alt=""/>
      <div className="custom-container">
        <div className="custom-row">
          <div className="cscol-lg-2 cscol-md-4 cscol-sm-12 footer-item">
            <h4>Ecosystem</h4>
            <ul className="footer-nav">
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Industries</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Terms of Service</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Privacy Policy</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">MCA</Link>
              </li>
            </ul>
          </div>
          <div className="cscol-lg-2 cscol-md-4 cscol-sm-12 footer-item">
            <h4>Community</h4>
            <ul className="footer-nav">
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Join our Team</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Hire us</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="cscol-lg-2 cscol-md-4 cscol-sm-12 footer-item">
            <h4>Governance</h4>
            <ul className="footer-nav">
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Resources</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Blog</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Onhovered</Link>
              </li>
            </ul>
          </div>
          <div className="cscol-lg-2 cscol-md-4 cscol-sm-12 footer-item">
            <h4>Developers</h4>
            <ul className="footer-nav">
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Help Center</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">API Docs</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Ticket System</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Status Page</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="cscol-lg-2 cscol-md-4 cscol-sm-12 footer-item">
            <h4>About</h4>
            <ul className="footer-nav">
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Blog</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">FAQ</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Jobs</Link>
              </li>
              <li className="footer-nav-item">
                <Link to="" className="footer-nav-link">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="cscol-lg-2 cscol-md-4 cscol-sm-12 footer-item">
            <h4>Social Networs</h4>
            <div className="footer-social">
              <img src="./assets/img/github.svg" alt=""/>
              <img src="./assets/img/discord.svg" alt=""/>
              <img src="./assets/img/twitter.svg" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container-fluid">
        <div className="custom-row">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="./assets/img/brand-small.svg" alt=""/>
              <span>monetaria.io</span>
            </div>
            <span>&copy; 2022 Monetaria Foundation</span>
          </div>
          <div className="footer-links">
            <Link to="" className="footer-link">Privacy Policy</Link>
            <Link to="" className="footer-link">Terms of Service</Link>
            <Link to="" className="footer-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;