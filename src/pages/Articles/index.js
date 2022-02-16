import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import artical_1 from "../../assets/images/featured_img-painter.jpg";
import artical_2 from "../../assets/images/featured_img-electrician.jpg";
import artical_3 from "../../assets/images/featured_img-kitchen.jpg";
import artical_4 from "../../assets/images/featured_img-plumbing.jpg";
import artical_5 from "../../assets/images/featured_img-concrete.jpg";
import parse from "html-react-parser";
import Professionaltradie from "../../assets/images/professional-tradie.jpg";
import section_top_before from "../../assets/icons/section-top-before.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import section_top_before from "../../assets/icons/star.svg";
import * as Actions from "../../redux/auth/action";
import axios from "axios";
import moment from "moment";

const Index = () => {
  const Dispatch = useDispatch();
  // const { userData } = useSelector((state) => state.auth);
  const { change_blogs_article_Action } = Actions;
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

  const [articalData, setArticalData] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios
        .get("https://api.tapatradie.com/backend/v2/blog")
        .then((res) => res.data.data);
      setArticalData(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <Header />

      <section className="section-top--articles articles-slider-section">
        {/* <div className="section-top__before">
          <img src={section_top_before} alt="" />
          <svg>
					<use xlink:href="/assets/icons/sprite.svg#section-top-before"></use>
				</svg>
        </div> */}
        <h2 className="section-top__title">Well Curated Articles Just for You</h2>
      </section>

      <section className="section">
        <h2 className="section__title">Popular Articles</h2>
        <div className="popular-articles">
          {articalData.length > 0
            ? articalData?.map((res, index) => (
                <>
                  {articalData[0].id == res.id ? (
                    <div className="popular-articles__first">
                      <div className="popular-article popular-article--first">
                        <img
                          className="popular-article__image"
                          src={`https://api.tapatradie.com/uploads/${res.featured_img}`}
                        />
                        <div className="popular-article__info">
                          <p className="popular-article__date">
                            {moment(res.updated_on, "x").format("DD MMM YYYY")}
                          </p>
                          <h4 className="popular-article__title">{res.title}</h4>
                          <p className="popular-article__description">
                            {res?.description
                              ? parse(`${res?.description?.substr(0, 250)}`)
                              : ""}
                          </p>
                          <Link
                            // to="/blogs"
                            to={{
                              pathname: "/blogs",
                              state: { res },
                            }}
                            className="popular-article__read-more btn-primary"
                            // onClick={() => {
                            //   Dispatch(
                            //     change_blogs_article_Action("painter.jpg")
                            //   );
                            // }}
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {articalData[0].id == res.id ? (
                    ""
                  ) : index < 2 ? (
                    <div className="popular-articles__more">
                      <Link
                        // to="/blogs"
                        to={{
                          pathname: "/blogs",
                          state: { res },
                        }}
                        class="popular-article"
                        // onClick={() => {
                        //   Dispatch(
                        //     change_blogs_article_Action("electrician.jpg")
                        //   );
                        // }}
                      >
                        <div class="popular-article__image">
                          <img
                            src={`https://api.tapatradie.com/uploads/${res.featured_img}`}
                            alt=""
                          />
                        </div>
                        <div class="popular-article___info">
                          <p class="popular-article__date">
                            {" "}
                            {moment(res.updated_on, "x").format("DD MMM YYYY")}
                          </p>
                          <h4 class="popular-article__title">{res.title}</h4>
                          <p class="popular-article__description">
                            {res?.description
                              ? parse(`${res?.description?.substr(0, 200)}`)
                              : ""}
                          </p>
                        </div>
                      </Link>
                      {/* <Link
                           to="/blogs"
                           class="popular-article"
                           onClick={() => {
                             Dispatch(
                               change_blogs_article_Action("kitchen.jpg")
                             );
                           }}
                         >
                           <div class="popular-article__image">
                             <img src={artical_3} alt="" />
                           </div>
                           <div class="popular-article__info">
                             <p class="popular-article__date">
                               18th January, 2021
                             </p>
                             <h4 class="popular-article__title">
                               Top 6 Kitchen Remodeling Ideas To Consider
                             </h4>
                             <p class="popular-article__description">
                               Kitchens are a place where family and friends come
                               together...
                             </p>
                           </div>
                         </Link>  */}
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ))
            : ""}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Latest Articles</h2>
        <div className="latest-articles">
          {articalData.length > 0
            ? articalData?.map((res) => (
                <div className="latest-article" key={res.id}>
                  <div className="latest-article__image">
                    <img
                      src={`https://api.tapatradie.com/uploads/${res.featured_img}`}
                      alt=""
                    />
                  </div>
                  <h4 className="latest-article__title">{res.title}</h4>
                  <p className="latest-article__description">
                    {res?.description
                      ? parse(`${res?.description?.substr(0, 250)}`)
                      : ""}
                  </p>
                  <Link
                    to={{
                      pathname: "/blogs",
                      state: { res },
                    }}
                    // to="/blogs"
                    className="latest-article__read-more"
                    // onClick={() => {
                    //   Dispatch(change_blogs_article_Action("painter.jpg"));
                    // }}
                  >
                    Read More
                  </Link>
                </div>
              ))
            : ""}
          {/* <div class="latest-article">
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
          </div>*/}
        </div>
      </section>

      {userInfo?.role == "provider" ? (
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
