import React, { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img src={require('../assets/img/navbar-logo.svg')} alt="" /></a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars ml-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Team</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Hi there</div>
          <div className="masthead-heading text-uppercase">We build apps</div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
        </div>
      </header>
      <div>
        <lottie-player src="https://assets9.lottiefiles.com/datafiles/gUENLc1262ccKIO/data.json"
          background="transparent" speed="1" style={{width: '300px', height: '300px'}} hover loop autoplay></lottie-player>
      </div>

      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Mobile App Development</h4>
              <p className="text-muted">Android, iOS, iPadOS and Fuchia</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Web App Development</h4>
              <p className="text-muted">Static, Dynamic and PWAs</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Desktop App Development</h4>
              <p className="text-muted">Mac OS, Windows and Linux</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Backend Development</h4>
              <p className="text-muted">NodeJS, Python and GO</p>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">Here are some of our recent work</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src={require('../assets/img/portfolio/01-thumbnail.jpg')} alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Royal Tours and Travels</div>
                  <div className="portfolio-caption-subheading text-muted">Android GPS Tracking and Driver
                            Assistant app</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src={require('../assets/img/portfolio/02-thumbnail.jpg')} alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Lumiton Smart Home</div>
                  <div className="portfolio-caption-subheading text-muted">Smart Home control with an IoT device
                        </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src={require('../assets/img/portfolio/03-thumbnail.jpg')} alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">CoHive</div>
                  <div className="portfolio-caption-subheading text-muted">Entrepreneurs Networking and Referral
                            App</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src={require('../assets/img/portfolio/04-thumbnail.jpg')} alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">E-Store</div>
                  <div className="portfolio-caption-subheading text-muted">Flutter E-commerce targetting Android,
                            iOS and Web Platforms.</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src={require('../assets/img/portfolio/05-thumbnail.jpg')} alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Enphase</div>
                  <div className="portfolio-caption-subheading text-muted">Connecting to Micro Invertors to
                            display status via BLE technology.</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src={require('../assets/img/portfolio/06-thumbnail.jpg')} alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Window</div>
                  <div className="portfolio-caption-subheading text-muted">Photography</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src={require('../assets/img/about/1.jpg')}
                alt="" /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                  voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                            unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src={require('../assets/img/about/2.jpg')}
                alt="" /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                  voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                            unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src={require('../assets/img/about/3.jpg')}
                alt="" /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                  voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                            unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src={require('../assets/img/about/4.jpg')}
                alt="" /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                  voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                            unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                        <br />
                        Of Our
                        <br />
                        Story!
                    </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={require('../assets/img/team/1.jpg')} alt="" />
                <h4>Kay Garland</h4>
                <p className="text-muted">Lead Designer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={require('../assets/img/team/2.jpg')} alt="" />
                <h4>Larry Parker</h4>
                <p className="text-muted">Lead Marketer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={require('../assets/img/team/3.jpg')} alt="" />
                <h4>Diana Petersen</h4>
                <p className="text-muted">Lead Developer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
                    laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid d-block mx-auto" src={require('../assets/img/logos/envato.jpg')} alt="" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid d-block mx-auto" src={require('../assets/img/logos/designmodo.jpg')}
                alt="" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid d-block mx-auto" src={require('../assets/img/logos/themeforest.jpg')}
                alt="" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid d-block mx-auto" src={require('../assets/img/logos/creative-market.jpg')}
                alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *"
                    required="required" data-validation-required-message="Please enter your name." />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *"
                    required="required"
                    data-validation-required-message="Please enter your email address." />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group mb-md-0">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *"
                    required="required"
                    data-validation-required-message="Please enter your phone number." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required"
                    data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div id="success"></div>
              <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send
                    Message</button>
            </div>
          </form>
        </div>
      </section>
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="col-lg-4 text-lg-right">
              <a className="mr-3" href="#!">Privacy Policy</a>
              <a href="#!">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal"><img src={require('../assets/img/close-icon.svg')} alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                            <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src={require('../assets/img/portfolio/01-full.jpg')} alt="" />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                    repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                                nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Threads</li>
                      <li>Category: Illustration</li>
                    </ul>
                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                      <i className="fas fa-times mr-1"></i>
                                Close Project
                            </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal"><img src={require('../assets/img/close-icon.svg')} alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                            <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src={require('../assets/img/portfolio/02-full.jpg')} alt="" />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                    repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                                nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Explore</li>
                      <li>Category: Graphic Design</li>
                    </ul>
                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                      <i className="fas fa-times mr-1"></i>
                                Close Project
                            </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal"><img src={require('../assets/img/close-icon.svg')} alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                            <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src={require('../assets/img/portfolio/03-full.jpg')} alt="" />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                    repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                                nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Finish</li>
                      <li>Category: Identity</li>
                    </ul>
                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                      <i className="fas fa-times mr-1"></i>
                                Close Project
                            </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal"><img src={require('../assets/img/close-icon.svg')} alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                            <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src={require('../assets/img/portfolio/04-full.jpg')} alt="" />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                    repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                                nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Lines</li>
                      <li>Category: Branding</li>
                    </ul>
                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                      <i className="fas fa-times mr-1"></i>
                                Close Project
                            </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal"><img src={require('../assets/img/close-icon.svg')} alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                            <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src={require('../assets/img/portfolio/05-full.jpg')} alt="" />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                    repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                                nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Southwest</li>
                      <li>Category: Website Design</li>
                    </ul>
                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                      <i className="fas fa-times mr-1"></i>
                                Close Project
                            </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal"><img src={require('../assets/img/close-icon.svg')} alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                            <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src={require('../assets/img/portfolio/06-full.jpg')} alt="" />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                    repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                                nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Window</li>
                      <li>Category: Photography</li>
                    </ul>
                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                      <i className="fas fa-times mr-1"></i>
                                Close Project
                            </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

