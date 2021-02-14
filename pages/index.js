import Head from 'next/head';
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>87Lux Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
        {/* JUMBO*/}
        <section className="jumbo" id="jumbo">
          <div className="container">
            <div className="row jumbo__row">
              {/* BUSINESS COPY*/}
              <div className="banner col-xs-12 col-lg-6" id="banner">
                <div className="container-fluid banner__container">
                  <h1 className="banner__header">We Give Your Business an Edge Over Your Competitors!</h1>
                  <h4 className="banner__subheader">Everything you need for your online business: Themes, Apps, Assets and More...</h4>
                  <form className="needs-validation" noValidate>
                    <div className="form-row">
                      <div className="col">
                        <input className="banner__input" placeholder="Enter your email address" />
                      </div>
                    </div>
                    <button className="cta-button" type="submit">Get Started</button>
                  </form>
                </div>
              </div>
              {/* SHAPES*/}
              <div className="col-xs-12 col-lg-6">
                <div className="shapes" id="shapes">
                  <div className="shape circle circle1" />
                  <div className="shape circle circle2" />
                  <div className="shape triangle" />
                  <div className="shape rectangle" data-toggle="modal" data-target="#project-modal">
                    <div className="play"><img className="play__image" src="assets/img/icon-play.png" alt="Play button" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ECOMMERCE PLATFORMS*/}
        <section className="platforms" id="platforms">
          <div className="container">
            <h6 className="platforms__header">PLATFORMS </h6>
            <div className="platforms__container row">
              <div className="col-6 col-md-3 platforms__column"><a href="#!"><img className="platforms__logo" src="assets/img/logo-shopify.png" alt="Shopify logo" /></a></div>
              <div className="col-6 col-md-3 platforms__column"><a href="#!"><img className="platforms__logo" src="assets/img/logo-wordpress.png" alt="WordPress logo" /></a></div>
              <div className="col-6 col-md-3 platforms__column"><a href="#!"><img className="platforms__logo" src="assets/img/logo-bigcommerce.png" alt="BigCommerce logo" /></a></div>
              <div className="col-6 col-md-3 platforms__column"><a href="#!"><img className="platforms__logo" src="assets/img/logo-wix.png" alt="Wix logo" /></a></div>
            </div>
          </div>
        </section>
        {/* LATEST PROJECTS*/}
        <section className="latest-projects" id="projects">
          <div className="container">
            <div className="latest-projects__container">
              <div className="back-panel">
                <h5 className="back-panel__header">LATEST PROJECTS</h5>
              </div>
              <div className="projects">
                <div className="project"><a className="project__link" data-toggle="modal" data-target="#project-modal"><img className="project__image" src="assets/img/panel-dashboard.png" alt="Dashboard project" /></a></div>
                <div className="project"> <a className="project__link d-none d-sm-block" data-toggle="modal" data-target="#project-modal"><img className="project__image" src="assets/img/panel-ecstasy.png" alt="Ecstasy landing page project" /></a></div>
                <div className="project"><a className="project__link d-none d-md-block" data-toggle="modal" data-target="#project-modal"><img className="project__image--last" src="assets/img/panel-dailydev.png" alt="DailyDev project" /></a></div>
              </div>
            </div>
            <div className="latest-projects__buttons">
              <div className="view-buttons"><a className="view-buttons__button" href="#!" type="button">View Themes</a><a className="view-buttons__button" href="#!" type="button">View Apps</a></div>
            </div>
          </div>
        </section>
        {/* MEET THE TEAM*/}
        <section>
          <div className="container team-container" id="team">
            <h1 className="team-container__header">Meet the Team</h1>
            <div className="team team--violet team--left team--top"><img className="team__image" src="assets/img/team-violet.jpeg" alt="Team member violet border" /></div>
            <div className="team team--yellow team--left team--bottom"><img className="team__image" src="assets/img/team-yellow.jpeg" alt="Team member yellow border" /></div>
            <div className="team team--blue team--left"><img className="team__image" src="assets/img/team-blue.jpeg" alt="Team member blue border" /></div>
            <div className="team team--green team--top"><img className="team__image" src="assets/img/team-green.jpeg" alt="Team member green border" /></div>
            <div className="team team--orange team--right team--top"><img className="team__image" src="assets/img/team-orange.jpeg" alt="Team member orange border" /></div>
            <div className="team team--purple team--right"><img className="team__image" src="assets/img/team-purple.jpeg" alt="Team member purple border" /></div>
            <div className="team team--red team--right team--bottom"><img className="team__image" src="assets/img/team-red.jpeg" alt="Team member red border" /></div>
          </div>
        </section>
        {/* CUSTOM SOLUTION*/}
        <section className="custom" id="custom">
          <div className="container">
            <h1 className="custom__header">Need a Custom Solution?</h1>
            <div className="row custom__row">
              <div className="col-xs-12 col-xl-2">
                <div className="row custom__list">
                  <div className="col-6 col-xl-12">
                    <div className="custom__item custom__item--active"><span className="number">01 </span><span className="description">Install Theme</span>
                      <p className="text">Having trouble with installing any of our themes? Well, we can help you by installing it for you!</p>
                    </div>
                  </div>
                  <div className="col-6 col-xl-12">
                    <div className="custom__item"><span className="number">02 </span><span className="description">Landing Page</span>
                      <p className="text">Having trouble with your landing pages? Well, we can help you improve your conversions!</p>
                    </div>
                  </div>
                  <div className="col-6 col-xl-12">
                    <div className="custom__item"><span className="number">03 </span><span className="description">Build Online Store</span>
                      <p className="text">Need help building an online store? You've come to the right place!</p>
                    </div>
                  </div>
                  <div className="col-6 col-xl-12">
                    <div className="custom__item"><span className="number">04 </span><span className="description">Custom Theme</span>
                      <p className="text">Want a customized theme for your online presence? You've come to the right place!</p>
                    </div>
                  </div>
                  <div className="col-6 col-xl-12">
                    <div className="custom__item"><span className="number">05 </span><span className="description">Custom App</span>
                      <p className="text">Need a customized app? You've come to the right place!</p>
                    </div>
                  </div>
                  <div className="col-6 col-xl-12">
                    <div className="custom__item"><span className="number">06 </span><span className="description">Marketing Assets</span>
                      <p className="text">We have many digital assets to help you with your online marketing!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-xl-10">
                <div className="custom__window">
                  <ul className="nav custom__navtab">
                    <li className="custom__navitem"><span className="custom__tab-text">Install Theme</span></li>
                  </ul>
                  <div className="custom__window-container container-fluid">
                    <div className="custom__window-text-container container">
                      <p className="custom__window-text">Having trouble with installing any of our themes? Well, we can help you by install the theme for you!</p>
                    </div><img className="custom__image" src="assets/img/custom-landingpage.png" alt="" /><img className="custom__image d-none d-lg-block" src="assets/img/custom-girl-laptop.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

// </div>