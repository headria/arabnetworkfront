import React from "react";
import { Link } from "react-router-dom";

function Forms() {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact--info-area">
                <h3>Get in touch</h3>
                <p>
                  Looking for help? Fill the form and start a new adventure.
                </p>
                <div className="single-info">
                  <h5>Headquaters</h5>
                  <p>
                    <i className="fal fa-home"></i>
                    744 New York Ave, Brooklyn, Kings,
                    <br /> New York 10224
                  </p>
                </div>
                <div className="single-info">
                  <h5>Phone</h5>
                  <p>
                    <i className="fal fa-phone"></i>
                    (+642) 245 356 432
                    <br />
                    (+420) 336 476 328
                  </p>
                </div>
                <div className="single-info">
                  <h5>Support</h5>
                  <p>
                    <i className="fal fa-envelope"></i>
                    bisy@support.com
                    <br />
                    help@education.com
                  </p>
                </div>
                <div className="ab-social">
                  <h5>Follow Us</h5>
                  <a
                    className="fac"
                    href="https://www.facebook.com/thebigboss"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="you"
                    href="https://www.youtube.com/c/sharifalshawish"
                    target="_blank"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    className="twi"
                    href="https://twitter.com/SharifAlShawish"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="tlg"
                    href="https://t.me/ArabNetworkOfficial"
                    target="_blank"
                  >
                    <i className="fab fa-telegram"></i>
                  </a>
                  <a
                    className="tik"
                    href="https://www.tiktok.com/@sharifalshawish"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                    </svg>
                  </a>
                  <a
                    className="lin"
                    href="https://www.linkedin.com/in/sharifalshawish"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    className="tik"
                    href="https://github.com/Arab-Network"
                    target="_blank"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <h4>Let’s Connect</h4>
                <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
                <form action="#" method="post" className="row">
                  <div className="col-md-6">
                    <input type="text" name="f-name" placeholder="First Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="l-name" placeholder="Last Name" />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-md-12">
                    <input type="text" name="suject" placeholder="Subject" />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <div className="condition-check">
                      <input id="terms-conditions" type="checkbox" />
                      <label htmlFor="terms-conditions">
                        I agree to the <a href="#">Terms & Conditions</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <input type="submit" name="submit" value="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bisylms-map">
        <iframe
          title="map"
          src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=39.966528,-75.158284&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}

export default Forms;
