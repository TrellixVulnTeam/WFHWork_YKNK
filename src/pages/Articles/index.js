import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import artical_1 from "../../assets/images/featured_img-painter.jpg";
import artical_2 from "../../assets/images/featured_img-electrician.jpg";
import artical_3 from "../../assets/images/featured_img-kitchen.jpg";
import artical_4 from "../../assets/images/featured_img-plumbing.jpg";
import artical_5 from "../../assets/images/featured_img-concrete.jpg";

import Professionaltradie from "../../assets/images/professional-tradie.jpg";
import section_top_before from "../../assets/icons/section-top-before.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import section_top_before from "../../assets/icons/star.svg";
import * as Actions from "../../redux/auth/action";

const Index = () => {
  const Dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { change_blogs_article_Action } = Actions;
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
  return (
    <div>
      <Header />

      <section class="section-top--articles articles-slider-section">
        {/* <div class="section-top__before">
          <img src={section_top_before} alt="" />
          <svg>
					<use xlink:href="/assets/icons/sprite.svg#section-top-before"></use>
				</svg>
        </div> */}
        <h2 class="section-top__title">Well Curated Articles Just for You</h2>
      </section>

      <section class="section">
        <h2 class="section__title">Popular Articles</h2>
        <div class="popular-articles">
          <div class="popular-articles__first">
            <div class="popular-article popular-article--first">
              <img class="popular-article__image" src={artical_1} />
              <div class="popular-article__info">
                <p class="popular-article__date">18th January, 2021</p>
                <h4 class="popular-article__title">
                  Top tips when painting your home interior
                </h4>
                <p class="popular-article__description">
                  Painting the interior of your home for a fresh new look can
                  seem simple. After all, it’s about adding the right color
                  paint to a flat surface, right...
                </p>
                <Link
                  to="/blogs"
                  class="popular-article__read-more btn-primary"
                  onClick={() => {
                    Dispatch(change_blogs_article_Action("painter.jpg"));
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div class="popular-articles__more">
            <Link
              to="/blogs"
              class="popular-article"
              onClick={() => {
                Dispatch(change_blogs_article_Action("electrician.jpg"));
              }}
            >
              <div class="popular-article__image">
                <img src={artical_2} alt="" />
              </div>
              <div class="popular-article___info">
                <p class="popular-article__date">18th January, 2021</p>
                <h4 class="popular-article__title">
                  Guide To Electrical Connections In Your Home
                </h4>
                <p class="popular-article__description">
                  All-around and inside your home are electrical connections
                  from circuit...
                </p>
              </div>
            </Link>
            <Link
              to="/blogs"
              class="popular-article"
              onClick={() => {
                Dispatch(change_blogs_article_Action("kitchen.jpg"));
              }}
            >
              <div class="popular-article__image">
                <img src={artical_3} alt="" />
              </div>
              <div class="popular-article__info">
                <p class="popular-article__date">18th January, 2021</p>
                <h4 class="popular-article__title">
                  Top 6 Kitchen Remodeling Ideas To Consider
                </h4>
                <p class="popular-article__description">
                  Kitchens are a place where family and friends come together...
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="section__title">Latest Articles</h2>
        <div class="latest-articles">
          <div class="latest-article">
            <div class="latest-article__image">
              <img src={artical_1} alt="" />
            </div>
            <h4 class="latest-article__title">
              Top tips when painting your home interior
            </h4>
            <p class="latest-article__description">
              Painting the interior of your home for a fresh new look can seem
              simple. After all, it’s about adding the right color paint to a
              flat surface, right...
            </p>
            <Link
              to="/blogs"
              class="latest-article__read-more"
              onClick={() => {
                Dispatch(change_blogs_article_Action("painter.jpg"));
              }}
            >
              Read More
            </Link>
          </div>
          <div class="latest-article">
            <div class="latest-article__image">
              <img src={artical_2} alt="" />
            </div>
            <h4 class="latest-article__title">
              Guide To Electrical Connections In Your Home
            </h4>
            <p class="latest-article__description">
              All-around and inside your home are electrical connections from
              circuit breakers, electrical outlets, and switches.
            </p>
            <Link
              to="/blogs"
              class="latest-article__read-more"
              onClick={() => {
                Dispatch(change_blogs_article_Action("electrician.jpg"));
              }}
            >
              Read More
            </Link>
          </div>
          <div class="latest-article">
            <div class="latest-article__image">
              <img src={artical_3} alt="" />
            </div>
            <h4 class="latest-article__title">
              Top 6 Kitchen Remodeling Ideas To Consider
            </h4>
            <p class="latest-article__description">
              Kitchens are a place where family and friends come together. Add
              some good food in the mix, and it’s a winning combination.
            </p>
            <Link
              to="/blogs"
              class="latest-article__read-more"
              onClick={() => {
                Dispatch(change_blogs_article_Action("kitchen.jpg"));
              }}
            >
              Read More
            </Link>
          </div>
          <div class="latest-article">
            <div class="latest-article__image">
              <img src={artical_4} alt="" />
            </div>
            <h4 class="latest-article__title">
              How To Find The Best Plumber For Your Home
            </h4>
            <p class="latest-article__description">
              Our home plumbing system can be complex. You may be a DIY
              enthusiast and love fixing things by yourself.
            </p>
            <Link
              to="/blogs"
              class="latest-article__read-more"
              onClick={() => {
                Dispatch(change_blogs_article_Action("plumbing.jpg"));
              }}
            >
              Read More
            </Link>
          </div>
          <div class="latest-article">
            <div class="latest-article__image">
              <img src={artical_5} alt="" />
            </div>
            <h4 class="latest-article__title">
              How You Can Repair Damaged Concrete Steps
            </h4>
            <p class="latest-article__description">
              Granted, concrete steps are durable and are bound to last for many
              years to come. That said, they are not immune to wear and tear.
            </p>
            <Link
              to="/blogs"
              class="latest-article__read-more"
              onClick={() => {
                Dispatch(change_blogs_article_Action("concrete.jpg"));
              }}
            >
              Read More
            </Link>
          </div>
          <div class="latest-article">
            <div class="latest-article__image">
              <img src={artical_1} alt="" />
            </div>
            <h4 class="latest-article__title">
              Top tips when painting your home interior
            </h4>
            <p class="latest-article__description">
              Painting the interior of your home for a fresh new look can seem
              simple. After all, it’s about adding the right color paint to a
              flat surface, right...
            </p>
            <Link
              to="/blogs"
              class="latest-article__read-more"
              onClick={() => {
                Dispatch(change_blogs_article_Action("painter.jpg"));
              }}
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {userInfo?.role == "provider" ? (
        ""
      ) : (
        <section class="section section--left">
          <div class="professional-tradie">
            <div class="professional-tradie__description">
              <h3 class="professional-tradie__title">
                Are you a Professional Tradie?
              </h3>
              <p>
                If you would like to be part of our Tradie community and are
                ready to meet new clients today please continue so we can
                welcome you onboard.
              </p>
              <Link to="/about-us" class="btn-primary">
                Learn More
              </Link>
            </div>
            <div class="professional-tradie__image">
              <img src={Professionaltradie} alt="" />
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default Index;
