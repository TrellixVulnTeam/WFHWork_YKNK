import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import about_us_1 from "../../assets/icons/tradieTV-title-after.svg";
import about_us_2 from "../../assets/images/female-carpenter-smoothing-lumber-with-sander.jpg";
import about_us_3 from "../../assets/images/photo-1532348260545-b021ade9c70d.jpeg";
import about_us_4 from "../../assets/images/photo-1555963966-b7ae5404b6ed.jpeg";
import about_us_5 from "../../assets/icons/tradieTV-title-after.svg";
import about_us_6 from "../../assets/images/professional-tradie.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AboutUsApp = () => {
  const { userData } = useSelector((state) => state.auth);
  return (
    <div>
      {/* <Header /> */}

      <section className="section-top section-top--about-us">
        <h2 className="section-top__title">
          <span>About</span> Us
          <img className="section-top__title-after" src={about_us_1} />
        </h2>
      </section>

      <section className="section section--left">
        <div className="about-us">
          <h2 className="section__title">Who We Are</h2>
          <div className="about-us__row">
            <div className="about-us__text">
              <p>
                Tap a Tradie is a global marketplace connects in real time,
                consumers who need a job done with ‘Tradies’, a network of
                qualified tradespeople, who have the time and skills needed to
                complete the requested online job request.
              </p>
              <p>
                Tap a Tradie is an easy and effective way for consumers of
                services to outsource jobs to qualified tradies in their local
                area economies.
              </p>
            </div>
            <div className="about-us__image">
              <img src={about_us_2} alt="" />
            </div>
          </div>
          <div className="about-us__row">
            <div className="about-us__image">
              <img src={about_us_3} alt="" />
            </div>
            <div className="about-us__text">
              <h2 className="section__title">What We Aim To Resolve</h2>
              <p>
                Every day consumers are told by tradespeople that they will be
                over to work between 8am – 5pm, staying home from work only for
                the tradesperson not to turn up and cancel plans last minute.
              </p>
              <p>
                Other times there just aren’t any tradespeople available when
                you need one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--left">
        <div className="tradie-solutions">
          <div className="tradie-solutions__row">
            <div className="tradie-solutions__text">
              <h2 className="section__title section__title--gradient">
                The Tap A Tradie Solutions
              </h2>
              <p>
                Tap a Tradie solves these problems through its real time
                approach and geolocation tracking of tradespeople. Consumers can
                find a tradesperson available now in real time, and track them
                on their way to your job.
              </p>
              <p>
                A consumer gets immediate quotes for simple work requests or
                estimates in person depending on the complexity of the work to
                be completed. Tradespeople can connect with consumers for
                additional income opportunities whenever they are available
                choosing their own work schedules, hours and territories.
              </p>
            </div>
            <div className="tradie-solutions__image">
              <img src={about_us_4} alt="" />
            </div>
          </div>
          <div className="tradie-solutions__row">
            <div className="tradie-solutions__status">
              <h6 className="tradie-solutions__status-title">Tradies</h6>
              <h1 className="tradie-solutions__status-number">80+</h1>
            </div>
            <div className="tradie-solutions__status">
              <h6 className="tradie-solutions__status-title">Country</h6>
              <h1 className="tradie-solutions__status-number">65+</h1>
            </div>
            <div className="tradie-solutions__status">
              <h6 className="tradie-solutions__status-title">Happy Clients</h6>
              <h1 className="tradie-solutions__status-number">10k+</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="core-values">
          <h2 className="section__title">Our Core Values</h2>
          <p className="core-values__description">
            Integrity, Passion, Solidarity, Discipline and Respect are the
            defining characteristics of Tap A Tradie.
          </p>
        </div>

        <div className="core-values">
          <div className="core-values__column">
            <div className="core-value">
              <h3 className="core-value__title">Integrity</h3>
              <p className="core-value__description">
                Integrity is central to the spirit of how we conduct our
                business and we endeavour to maintain strong character, honesty
                and fairness through the even toughest of situations.
              </p>
            </div>
            <div className="core-value">
              <h3 className="core-value__title">Discipline</h3>
              <p className="core-value__description">
                A quality that is a key to success in any area of life, we see
                the importance of maintaining a consistent approach toward
                achieving our organisations goals.
              </p>
            </div>
            <div className="core-value">
              <h3 className="core-value__title">Respect</h3>
              <p className="core-value__description">
                Respect is a core element in our organisation. By treating
                others with respect it has been the key to our success.
              </p>
            </div>
          </div>
          <div className="core-values__column">
            <div className="core-value">
              <h3 className="core-value__title">Passion</h3>
              <p className="core-value__description">
                Working at Tap A Tradie generates excitement, emotional
                attachment and a sense of belonging to the global Tap A Tradie
                family. Its the passion for what we do and everything we stand
                for that gets us up out of bed in the morning each and every
                day.
              </p>
            </div>
            <div className="core-value">
              <h3 className="core-value__title">Solidarity</h3>
              <p className="core-value__description">
                Tap A Tradie family is about having each other’s backs
                regardless of our various backgrounds and beliefs. We see past
                our differences and focus on the similarities that unite us all.
                This solidarity creates a unifying spirit that connects our
                global family.
              </p>
            </div>
            <img src={about_us_5} />
          </div>
        </div>
      </section>

      {userData?.access === "provider" ? (
        ""
      ) : (
        <section className="section section--left">
          <div className="professional-tradie">
            <div className="professional-tradie__description">
              <h3 className="professional-tradie__title">
                Are you a Professional Tradie?
              </h3>
              <p>
                If you would like to be part of our Tradie community and are
                ready to meet new clients today please continue so we can
                welcome you onboard.
              </p>
              <Link to="/about-us" className="btn-primary">
                Learn More
              </Link>
            </div>
            <div className="professional-tradie__image">
              <img src={about_us_6} alt="" />
            </div>
          </div>
        </section>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUsApp;
