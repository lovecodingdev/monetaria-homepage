import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <img src="./assets/img/landing-left.svg" alt="" className="landing-circle-left"/>
      <img src="./assets/img/landing-mobile-left.svg" alt="" className="landing-circle-left2"/>
      <img src="./assets/img/landing-right.svg" alt="" className="landing-circle-right"/>
      <div className="landing-muted-text">
        <div className="custom-container-fluid">
          <div className="custom-row card-border">
            <div className="cscol-sm-12">
              <img src="./assets/img/star.svg" alt=""/>
            </div>
            <div className="cscol-lg-7 cscol-sm-12">
              <div className="carousel-item">
                <div>
                  <div>
                    <div className="blue-circle"></div>
                    <span>Hey, Did you hear about CAWS?</span>
                  </div>
                  <Link to="" className="btn-mint">Mint Now</Link>
                </div>
                <h1>Monetaria <span>liquidity protocol</span> for altcoins</h1>
                <span>DeFi Yield Protocol works to curb the influence of large whale users.</span>
              </div>
              <div className="carousel-slider">
                <div className="active"></div>
                <div></div>
                <div></div>
              </div>
              <div className="landing-socials">
                <Link to="" className="social-github">
                  <img src="./assets/img/github.svg" alt=""/>
                </Link>
                <Link to="" className="social-twitter">
                  <img src="./assets/img/twitter.svg" alt=""/>
                </Link>
                <Link to="" className="social-discord">
                  <img src="./assets/img/discord.svg" alt=""/>
                </Link>
              </div>
            </div>
            <img src="./assets/img/menu.svg" alt=""/>
          </div>
        </div>
      </div>
      <div className="opportunity">
        <img src="./assets/img/rectangle.svg" alt="" className="img-rectangle"/>
        <div className="custom-container">
          <div className="custom-row">
            <h2>Out Opportunities</h2>
            <div className="opportunity-content">
              <div className="opportunity-item">
                <div>
                  <img src="./assets/img/supply.svg" alt=""/>
                  <h3>Supply</h3>
                  <span>Supply into the protocol and watch your assets grow as a liquidity provider</span>
                  <Link to="" className="btn-opportunity">Enter GOV</Link>
                </div>
              </div>
              <div className="opportunity-item">
                <div>
                  <img src="./assets/img/stake.svg" alt=""/>
                  <h3>Stake</h3>
                  <span>Deposit your Aave into the protocol and earn rewards for securing the protocol</span>
                  <Link to="" className="btn-opportunity">Enter GOV</Link>
                </div>
              </div>
              <div className="opportunity-item">
                <div>
                  <img src="./assets/img/borrow.svg" alt=""/>
                  <h3>Borrow</h3>
                  <span>Borrow against your collateral from across multiple networks and assets</span>
                  <Link to="" className="btn-opportunity">Enter GOV</Link>
                </div>
              </div>
              <div className="opportunity-item">
                <div>
                  <img src="./assets/img/vote.svg" alt=""/>
                  <h3>Vote</h3>
                  <span>Borrow against your collateral from across multiple networks and assets</span>
                  <Link to="" className="btn-opportunity">Vote Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mission">
        <img src="./assets/img/mission-rectangle.svg" alt="" className="clear"/>
        <div className="custom-container">
          <div className="custom-row">
            <div className="cscol-md-6 cscol-sm-12">
              <img src="./assets/img/office.svg" alt=""/>
            </div>
            <div className="cscol-md-6 cscol-sm-12">
              <div className="mission-content">
                <h2>Our Mission</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean enim mauris, viverra dictumst. Eget vulputate consequat consequat at et egestas tempor nunc vitae. Habitasse in sit egestas et feugiat in quam. Cursus eget tellus turpis nulla. Nibh faucibus nisl velit aenean ornare nibh nulla. Congue mi.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="market">
        <div className="custom-container">
          <div className="custom-row">
            <h2>Monetaria Markets</h2>
            <div className="market-content">
              <div className="cscol-sm-12">
                <div className="cscol-md-4 cscol-sm-12 market-item card-border">
                  <div className="market-item-header">
                    <img src="./assets/img/avalance.svg" alt=""/>
                    <Link to="" className="btn-market">
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                  <h4>Avalance</h4>
                  <span>Fast and cheaper transactions. Earn rewards in AVAX for borrowing or supplying liquidity.</span>
                </div>
                <div className="cscol-md-4 cscol-sm-12 market-item card-border">
                  <div className="market-item-header">
                    <img src="./assets/img/polygon.svg" alt=""/>
                    <Link to="" className="btn-market">
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                  <h4>Polygon</h4>
                  <span>Faster transactions and lower fees make interacting with Aave on Polygon perfect for high volume transactions. Earn rewards in polygon for supply liquidity and borrowing.</span>
                </div>
                <div className="cscol-md-4 cscol-sm-12 market-item card-border">
                  <div className="market-item-header">
                    <img src="./assets/img/fantom.svg" alt=""/>
                    <Link to="" className="btn-market">
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                  <h4>Fantom</h4>
                  <span>Fast and cheaper transactions. Earn rewards in AVAX for borrowing or supplying liquidity.</span>
                </div>
              </div>
              <div className="cscol-sm-12">
                <div className="cscol-md-4 cscol-sm-12 market-item card-border">
                  <div className="market-item-header">
                    <img src="./assets/img/arbitrum.svg" alt=""/>
                    <Link to="" className="btn-market">
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                  <h4>Arbitrum</h4>
                  <span>Fast and cheaper transactions. Earn rewards in AVAX for borrowing or supplying liquidity.</span>
                </div>
                <div className="cscol-md-4 cscol-sm-12 market-item card-border">
                  <div className="market-item-header">
                    <img src="./assets/img/avalance.svg" alt=""/>
                    <Link to="" className="btn-market">
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                  <h4>Avalance</h4>
                  <span>Fast and cheaper transactions. Earn rewards in AVAX for borrowing or supplying liquidity.</span>
                </div>
                <div className="cscol-md-4 cscol-sm-12 market-item card-border">
                  <div className="market-item-header">
                    <img src="./assets/img/avalance.svg" alt=""/>
                    <Link to="" className="btn-market">
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                  <h4>Avalance</h4>
                  <span>Fast and cheaper transactions. Earn rewards in AVAX for borrowing or supplying liquidity.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="roadmap">
        <div className="custom-container">
          <div className="custom-row">
            <h2>RoadMap</h2>
            <div className="roadmap-content">
              <div className="roadmap-item active">
                <div className="roadmap-item-list">
                  <div className="roadmap-item-sign">
                    <div></div>
                    <span>Q3 22</span>
                  </div>
                </div>
                <div className="roadmap-item-content">
                  <h4 className="roadmap-item-header">Q3 2022</h4>
                  <ul className="roadmap-item-nav">
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching lending pool on ETH</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching reserve currency/bonding/auto-compound staking</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching official credit score version </Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching credit score-based lending pool</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching monitor module for lending and staking</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-item-list">
                <div className="roadmap-item-sign">
                  <div></div>
                  <span>Q4 22</span>
                </div>
                </div>
                <div className="roadmap-item-content">
                  <h4 className="roadmap-item-header">Q3 2022</h4>
                  <ul className="roadmap-item-nav">
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching lending pool on ETH</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching reserve currency/bonding/auto-compound staking</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching official credit score version </Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching credit score-based lending pool</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching monitor module for lending and staking</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-item-list">
                <div className="roadmap-item-sign">
                  <div></div>
                  <span>Q1 23</span>
                </div>
                </div>
                <div className="roadmap-item-content">
                  <h4 className="roadmap-item-header">Q3 2022</h4>
                  <ul className="roadmap-item-nav">
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-item-list">
                <div className="roadmap-item-sign">
                  <div></div>
                  <span>Q2 23</span>
                </div>
                </div>
                <div className="roadmap-item-content">
                  <h4 className="roadmap-item-header">Q3 2022</h4>
                  <ul className="roadmap-item-nav">
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-item-list">
                <div className="roadmap-item-sign">
                  <div></div>
                  <span>Q3 23</span>
                </div>
                </div>
                <div className="roadmap-item-content">
                  <h4 className="roadmap-item-header">Q3 2022</h4>
                  <ul className="roadmap-item-nav">
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-item-list">
                <div className="roadmap-item-sign">
                  <div></div>
                  <span>Q4 23</span>
                </div>
                </div>
                <div className="roadmap-item-content">
                  <h4 className="roadmap-item-header">Q3 2022</h4>
                  <ul className="roadmap-item-nav">
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                    <li className="roadmap-nav-list">
                      <Link to="" className="roadmap-nav-item">Launching Trava reputation module</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="community">
        <div className="custom-container">
          <div className="custom-row">
            <div className="community-header">
              <h2>Governed by the community</h2>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est aenean gravida ultrices.</span>
            </div>
            <div className="community-content">
              <div className="community-list">
                <div className="community-item">
                  <div className="community-sign">
                    <div><div></div></div>
                    <img src="./assets/img/community-line.svg" alt=""/>
                  </div>
                  <div className="community-item-text">
                    <h4>Development</h4>
                    <span>Monetaria is a fully decentralized, community governed protocol with 110,456 token holders.</span>
                  </div>
                </div>
                <div className="community-item">
                  <div className="community-sign">
                    <div><div></div></div>
                    <img src="./assets/img/community-line.svg" alt=""/>
                  </div>
                  <div className="community-item-text">
                    <h4>Development</h4>
                    <span>Monetaria is a fully decentralized, community governed protocol with 110,456 token holders.</span>
                  </div>
                </div>
              </div>
              <Link to="" className="btn-propose-idea">
                <span>Propose your best ideas</span>
                <i className="fa fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Landing;