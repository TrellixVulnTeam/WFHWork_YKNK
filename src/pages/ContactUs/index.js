import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import contact_us_1 from "../../assets/icons/tradieTV-title-after.svg";
import contact_us_2 from "../../assets/images/map-img-3-1.jpg";
import contact_us_map from "../../assets/images/Contact-us-map.png";
import contact_us_3 from "../../assets/icons/icon-location.png";
import contact_us_4 from "../../assets/icons/icon-email.png";
import contact_us_5 from "../../assets/icons/download-app-after.svg";
import contact_us_6 from "../../assets/icons/download-app-customers-left.svg";
import contact_us_7 from "../../assets/icons/qr.png";
import contact_us_android from "../../assets/icons/android-logo.png";
import contact_us_8 from "../../assets/icons/download-app-customers-right.svg";
import contact_us_9 from "../../assets/icons/download-app-tradies-left.svg";
import contact_us_10 from "../../assets/icons/qr.png";
import contact_us_11 from "../../assets/icons/download-app-tradies-right.svg";
import contact_us_12 from "../../assets/images/professional-tradie.jpg";
import { useForm } from "react-hook-form";
import * as action from "../../redux/directory/action";
import { Link } from "react-router-dom";
const Index = () => {
  const Dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

  const { send_contact_form_request } = action;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched", reValidateMode: "onChange" });

  const onSubmit = (data) => {
    Dispatch(send_contact_form_request(data));
    reset();
  };

  return (
    <div>
      <Header />

      {/* <!-- Contact Us --> */}
      <section className="section-top section-top--contact">
        <h2 className="section-top__title">
          <span>Contact</span> Us
          <img
            className="section-top__title-after"
            src={contact_us_1}
            alt="Tradie TV"
          />
        </h2>
      </section>
      <div
          className="contact-us__map"
          style={{ marginTop: "-5px", marginBottom: "15px" }}
        >
          <img src={contact_us_map} alt="" />
        </div>
      {/* <!-- Get in touch --> */}
      <section className="contact-us section--left">
        <div className="contact-us__info">
          <div className="contact-us__details">
            <h2 className="section__title">Get in touch</h2>
            <ul>
              <li>
                <img src={contact_us_3} alt="" /> Perth WA Australia 6000
              </li>
              <li>
                <img src={contact_us_4} />
                <a href="mailto:info@tapatradie.com">info@tapatradie.com</a>
              </li>
            </ul>
          </div>
          <form className="contact-us__form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h2 className="section__title section__title--gradient">
                Drop us a line
              </h2>
              <input
                type="text"
                placeholder="Your Name"
                {...register("full_name", {
                  required: { value: true, message: " name is required" },
                  minLength: { value: 2, message: "Full name is required" },
                })}
              />
              {errors.full_name && (
                <span style={{ color: "red" }}>{errors.full_name.message}</span>
              )}
              <input
                type="email"
                placeholder="Your Email Address"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                    message: "Enter Valid Email",
                  },
                })}
              />

              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}
              <input
                type="text"
                placeholder="Your Message"
                {...register("message", {
                  required: { value: true, message: "Full name is required" },
                  minLength: { value: 5, message: "short Text character" },
                })}
              />
              {errors.message && (
                <span style={{ color: "red" }}>{errors.message.message}</span>
              )}
              <input
                type="submit"
                value="Get Started"
                className="btn-primary submit-button"
              />
            </div>
          </form>
        </div>
        
      </section>

      {/* <!-- Register as a Tradie Today! --> */}
      {userInfo.fullname ? (
        ""
      ) : (
        <section className="section--register-tradie">
          <div className="register-tradie">
            <h4>Register as a Tradie Today!</h4>
            <p>
              List your business here, fill in your profile, control when and
              where you work and meet some amazing new clients.
            </p>
            <a href="/sign-up" role="button">
              Register Now
            </a>
          </div>
        </section>
      )}

      {/* <!-- There’s so much more to love in the apps --> */}
      <section className="section section--center">
        <h2 className="section__title">
          There’s so much more to love in the apps
        </h2>
        <div className="download-app">
          <img className="download-app__after" src={contact_us_5} />
          <div className="download-app__customers">
            <h2>Customer App Download here</h2>
            <img src={contact_us_6} />
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.si.tapatradie&hl=en_IN"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_7} />
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/android-512.png"
                style={{ height: "8rem", width: "8rem"}}
              />
            </div>
            <div style={{ marginTop: "12px" }}>
              <a
                href="https://apps.apple.com/us/app/tap-a-tradie/id1473400994"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_7} />
              <img
                src="https://www.freeiconspng.com/uploads/ios-png-6.png"
                style={{ height: "8rem", width: "8rem"}}
              />
            </div>
          </div>
          <div className="download-app__tradies">
            <h2>Tradie App Download here</h2>
            <img src={contact_us_9} />
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.si.tradie"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_10} />
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/android-512.png"
                style={{ height: "8rem", width: "8rem"}}
              />
            </div>
            <div style={{ marginTop: "12px" }}>
              <a
                href="https://apps.apple.com/us/app/tradie/id1473400813"
                target="_blank"
                className="btn-primary"
              >
                Download
              </a>
              <img src={contact_us_10} />
              <img
                src="https://www.freeiconspng.com/uploads/ios-png-6.png"
                style={{ height: "8rem", width: "8rem"}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Are you a Professional Tradie? --> */}
      {/* {userData?.access === "provider" ? (
        ""
      ) : ( */}
      <section className="section section--left">
        <div className="professional-tradie">
          <div className="professional-tradie__description">
            <h3 className="professional-tradie__title">
              Are you a Professional Tradie?
            </h3>
            <p>
              If you would like to be part of our Tradie community and are ready
              to meet new clients today please continue so we can welcome you
              onboard.
            </p>
            <Link to="/about-us" className="btn-primary">
              Learn More
            </Link>
          </div>
          <div className="professional-tradie__image">
            <img src={contact_us_12} alt="" />
          </div>
        </div>
      </section>
      {/* )} */}

      <Footer />
    </div>
  );
};

export default Index;
