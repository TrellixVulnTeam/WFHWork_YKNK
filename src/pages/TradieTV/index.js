import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import tradieTv_1 from "../../assets/icons/tradieTV-title-after.svg";
import tradieTv_2 from "../../assets/images/tips-video-thumbnail.png";
import tradieTv_3 from "../../assets/images/professional-tradie.jpg";
import YouTube from "react-youtube";

import { videosCategories } from "./data";
import { categoryNames } from "./data";
import axios from "axios";
import { Link } from "react-router-dom";
import "./TradieTv.css";
import { useSelector } from "react-redux";

const Index = () => {
  const { userData } = useSelector((state) => state.auth);
  const opts = {
    height: "180",
    width: "320",
  };

  const [categoryVideos, setCategoryVideos] = useState([]);
  const [tradietv, setTradeiTv] = useState([]);

  // get videos from local storage
  // useEffect(() => {
  //   const videos =
  //     JSON.parse(localStorage.getItem("categoryVideos"))
  //     ||     videosCategories[1]?.videos;

  //   setCategoryVideos(videos);
  // }, []);
  useEffect(() => {
    axios
      .get("https://api.tapatradie.com/backend/v2/tradietv")
      .then((res) => setTradeiTv(res.data.data));
  }, []);

  const [catname, SetcatName] = useState("");
  // function to fetch videos on click event
  function fetchVideos(e, name) {
   
    SetcatName(name);
    const targetCategory = tradietv?.filter((category) =>
      category.categoryId === e ? category : null
    );
    setCategoryVideos(targetCategory);
    console.log("targetCategory", targetCategory);

    // store videos into local storage
    localStorage.setItem(
      "categoryVideos",
      JSON.stringify(targetCategory?.video_link)
    );
  }

  return (
    <div>
      <Header />

      <section className="section-slider section-top--tradieTV">
        <h2 class="section-top__title">
          <span>Local Tradies</span> tips and tricks for your home projects
          <img class="section-top__title-after" src={tradieTv_1} alt="" />
        </h2>
      </section>

      <section class="section section--tradieTV">
        <div class="tradie-tips">
          <h3 class="section__title">Explore by Categories</h3>
          <nav class="tradie-tips__categories-links">
            {categoryNames.map((name) => (
              <button onClick={() => fetchVideos(name.id, name.name)}>
                {name.name}
              </button>
            ))}

            {/* <a href="#" onClick={fetchVideos}>
              Electrician
            </a>
            <a href="#" onClick={fetchVideos}>
              Plumbing
            </a>
            <a href="#" onClick={fetchVideos}>
              Carpentry
            </a>
            <a href="#">Tiling</a>
            <a href="#">Painting</a>
            <a href="#">Plasterering</a>
            <a href="#">Landscaping</a>
            <a href="#">Labouring</a>
            <a href="#">Bricklaying</a>
            <a href="#">Lawn Maintanance</a>
            <a href="#">Building</a> */}
          </nav>
          <center>
            <h3>
              {catname && categoryNames.length > 0 && categoryVideos.length > 0
                ? catname
                : ""}
            </h3>
          </center>
          <ul className="tradie-tips__videos">
            {categoryVideos.length > 0 ? (
              categoryVideos?.map((video) => (
                <li className="tips-video" key={video}>
                  {console.log("videoss", video)}
                  <div className="tips-video__thumbnail">
                    {/* <YouTube
                        videoId={video.videoId}
                        className="tips-video__youtubePlayer"
                      /> */}
                    <iframe
                      src={video.video_link}
                      title="Video"
                      allowFullScreen
                      frameborder="0"
                      webkitallowfullscreen
                      mozallowfullscreen
                    ></iframe>
                  </div>
                  <h6 className="tips-video__title">{video.title}</h6>
                </li>
              ))
            ) : (
              <img
                src="data:image/png;base64,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"
                alt=""
                // style={{height:"15rem", width:"20rem"}}
              />
            )}
          </ul>

          {/* <h3 class="section__title">Other videos</h3> */}
          {/* 
          <ul className="tradie-tips__videos">
            {categoryVideos !== null
              ? categoryVideos?.map((video) => (
                  <li className="tips-video" key={video}>
                    {console.log("Cat Video")}
                    <div className="tips-video__thumbnail">
                      <YouTube
                        videoId={video}
                        className="tips-video__youtubePlayer"
                      />
                    </div>
                  
                    <h6 className="tips-video__title">{video.title}</h6>
                  </li>
                ))
              : ""}
          </ul> */}

          {/* <div class="tradie-tips__videos">
            <a href="#" class="tips-video">
              <div class="tips-video__thumbnail">
                <YouTube
                  videoId="QrD_oPhMVWs"
                  className="tips-video__youtubePlayer"
                />
                <svg class="tips-video__play-icon">
                  <use xlink:href="/assets/icons/sprite.svg#icon-play"></use>
                </svg>
              </div>
              <h6 class="tips-video__title">
                How to fix common leaks/Basic plumbing
              </h6>
            </a>
            <a href="#" class="tips-video">
              <div class="tips-video__thumbnail">
                <YouTube
                  videoId="QrD_oPhMVWs"
                  className="tips-video__youtubePlayer"
                />
                <svg class="tips-video__play-icon">
                  <use xlink:href="/assets/icons/sprite.svg#icon-play"></use>
                </svg>
              </div>
              <h6 class="tips-video__title">
                How to fix common leaks/Basic plumbing
              </h6>
            </a>
            <a href="#" class="tips-video" onClick={(e) => e.preventDefault()}>
              <div class="tips-video__thumbnail">
                <YouTube
                  videoId="QrD_oPhMVWs"
                  className="tips-video__youtubePlayer"
                />

                <svg class="tips-video__play-icon">
                  <use xlink:href="/assets/icons/sprite.svg#icon-play"></use>
                </svg>
              </div>
              <h6 class="tips-video__title">
                How to fix common leaks/Basic plumbing
              </h6>
            </a>
          </div>
          <h3 class="section__title">Other videos</h3>
          <div class="tradie-tips__videos">
            <a href="#" class="tips-video">
              <div class="tips-video__thumbnail">
                <YouTube
                  videoId="QrD_oPhMVWs"
                  className="tips-video__youtubePlayer"
                />
                <svg class="tips-video__play-icon">
                  <use xlink:href="/assets/icons/sprite.svg#icon-play"></use>
                </svg>
              </div>

              <h6 class="tips-video__title">
                How to fix common leaks/Basic plumbing
              </h6>
            </a>
            <a href="#" class="tips-video">
              <div class="tips-video__thumbnail">
                <YouTube
                  videoId="QrD_oPhMVWs"
                  className="tips-video__youtubePlayer"
                />

                <svg class="tips-video__play-icon">
                  <use xlink:href="/assets/icons/sprite.svg#icon-play"></use>
                </svg>
              </div>

              <h6 class="tips-video__title">
                How to fix common leaks/Basic plumbing
              </h6>
            </a>
            <a href="#" class="tips-video">
              <div class="tips-video__thumbnail">
                <YouTube
                  videoId="QrD_oPhMVWs"
                  className="tips-video__youtubePlayer"
                />

                <svg class="tips-video__play-icon">
                  <use xlink:href="/assets/icons/sprite.svg#icon-play"></use>
                </svg>
              </div>
              <h6 class="tips-video__title">
                How to fix common leaks/Basic plumbing
              </h6>
            </a>
          </div> */}
        </div>
      </section>

      {/* {userData.access === "provider" ? (
        ""
      ) : ( */}
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
              <img src={tradieTv_3} alt="" />
            </div>
          </div>
        </section>
      {/* )} */}
      <Footer />
    </div>
  );
};

export default Index;
