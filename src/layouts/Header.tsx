import React, { FC, useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const [ isOpenMenu, setIsOpenMenu ] = useState(false);

  const onClickedMenu = ()=>{
    setIsOpenMenu(true);
  }

  const onClickedClose = ()=>{
    setIsOpenMenu(false);    
  }
  return (
    <header>
      <div className="custom-container-fluid">
        <div className="header-brand">
          <Link to="">
            <img src="./assets/img/brand.svg" alt=""/>
            monetaria.io
          </Link>
        </div>
        <nav className="top-navbar">
          <ul className="navbar">
            <li className="top-nav-item">
              <Link to="" className="top-nav-link">Ecosystem</Link>
            </li>
            <li className="top-nav-item">
              <Link to="" className="top-nav-link">Community</Link>
            </li>
            <li className="top-nav-item">
              <Link to="" className="top-nav-link">Governance</Link>
            </li>
            <li className="top-nav-item">
              <Link to="" className="top-nav-link">Developers</Link>
            </li>
            <li className="top-nav-item">
              <Link to="" className="top-nav-link">Blog</Link>
            </li>
            <li className="top-nav-item">
              <Link to="" className="top-nav-link">FAQ</Link>
            </li>
            <li className="top-nav-item">
              <Link to="" className="top-nav-link">Jobs</Link>
            </li>
            <li className="top-nav-item">
              <Link to="" className="top-nav-link btn-launch-app">Launch App</Link>
            </li>
            <li className="top-nav-item">
              {!isOpenMenu ?
                <Link to="" className="btn-hamburger" onClick={()=>onClickedMenu()}>
                  <div></div>
                  <div></div>
                  <div></div>
                </Link>
                :
                <Link to="" className="btn-close" onClick={()=>onClickedClose()}>
                  <img src="./assets/img/btn-close.svg" alt=""/>
                </Link>
              }
            </li>
          </ul>
        </nav>
        {isOpenMenu &&
          <div className="mobile-nav-content">
            <ul className="mobile-nav">
              <li className="mobile-nav-item">
                <Link to="" className="mobile-nav-link">Ecosystem</Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="" className="mobile-nav-link">Community</Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="" className="mobile-nav-link">Governance</Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="" className="mobile-nav-link">Developers</Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="" className="mobile-nav-link">Blog</Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="" className="mobile-nav-link">FAQ</Link>
              </li>
              <li className="mobile-nav-item">
                <Link to="" className="mobile-nav-link">Jobs</Link>
              </li>
            </ul>
          </div>
        }
      </div>
    </header>
  )
}

export default Header;