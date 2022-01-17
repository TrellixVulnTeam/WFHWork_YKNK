import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/directory/action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Index = () => {
  const { userData } = useSelector((state) => state.auth);
  const { trendingCategories } = useSelector((state) => state.directory);
  const dispatch = useDispatch();
  const { trendingAllCategories_Action, search_trading_service_Action } =
    Actions;

  useEffect(() => {
    dispatch(trendingAllCategories_Action());
  }, []);

  const SendData = (serachData) => {
    dispatch(search_trading_service_Action(serachData));
  };

  return (
    <div>
      <Header />

      <section class="section-top">
        <h2 class="section-top__title">
          Our <span>Services</span>
        </h2>
      </section>

      <section className="section">
        {/* <h2 className="section__title">Trending Services</h2> */}
        <div className="trending-services">
          {trendingCategories.map((res, i) => {
            return (
              <Link
                className="trending-services__item"
                to="/tradie-directory"
                onClick={() => {
                  SendData({ search: res.name });
                }}
                key={i}
              >
                <div>
                  <img
                    src={`https://sample.jploftsolutions.in/tapImages/${res.image}`}
                    height="23px"
                    width="33px"
                    alt=""
                  />
                </div>
                <h4>{res.name}</h4>
              </Link>
            );
          })}
        </div>
      </section>
      {/* )} */}
      <Footer />
    </div>
  );
};

export default Index;
