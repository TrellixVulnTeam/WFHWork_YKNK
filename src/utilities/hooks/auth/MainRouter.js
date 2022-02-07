import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../../redux/auth/action";
import { isGenerateAccessToken, isCookiePolicy, isAuthenticated } from "./util";
import PrivateRoute from "./PrivateRoute";
import Homepage from "../../../pages/Home";
import Directory from "../../../pages/Directory";
import TradieTV from "../../../pages/TradieTV";
import AboutUs from "../../../pages/AboutUs";
import Articles from "../../../pages/Articles";
import Partners from "../../../pages/Partners";
import LogIn from "../../../pages/LogIn";
import SignUp from "../../../pages/SignUp";
import Dashboard from "../../../pages/Dashboard";
import Footer from "../../../components/Footer";

// routes created by Muneeb
import BusinessDetails from "../../../pages/BusinessDetails";
import ContactUs from "../../../pages/ContactUs";
import Faq from "../../../pages/Faq";
import IndexApp from "../../../pages/Faq/indexApp";
import HowItWorks from "../../../pages/HowItWorks";
import Landing from "../../../pages/Landing";
import Pricing from "../../../pages/Pricing";
import PrivacyPolicy from "../../../pages/PrivacyPolicy";
import TermsAndConditions from "../../../pages/TermsAndConditions";
import TradieAdditionalInformation from "../../../pages/TradieAdditionalInformation";
import TradieAdditionalServices from "../../../pages/TradieAdditionalServices";
import TradieDirectory from "../../../pages/TradieDirectory";
import TradieLeads from "../../../pages/TradieLeads";
import TradieMembership from "../../../pages/TradieMembership";
import TradieMyProfile from "../../../pages/TradieMyProfile";
import TradieMyProfileUpload from "../../../pages/TradieMyProfileUpload";
import TradiePublicProfile from "../../../pages/TradiePublicProfile";
import TradieReview from "../../../pages/TradieReview";
import TradieServiceLocation from "../../../pages/TradieServiceLocation";
import UserBookings from "../../../pages/UserBookings";
import UserProfile from "../../../pages/UserProfile";
import MyAccount from "../../../pages/MyAccount";
import TradieRequest from "../../../pages/TradieRequest";
import UserInfo from "../../../pages/UserInfo";
import tradiePopUps from "../../../pages/tradieAllPopup";
import Pop2 from "../../../pages/tradieAllPopup/pop2";
import Pop3 from "../../../pages/tradieAllPopup/pop3";
import ScrollingUp from "../DetectOnclickOutside/ScrollingUp";
import Blogs from "../../../pages/Blogs";
import AllServices from "../../../pages/AllServices/index";

// routes created by mustafaa
import UserEditProfile from "../../../pages/UserEditProfile/index";
import DashboardBookingDetail from "../../../pages/DashboardBookingDetail";
//for mobilePages routes
import NewRoutes from "./NewRoutes";

const MainRouter = () => {
  const Dispatch = useDispatch();
  const { cookiePolicy_Action } = Actions;

  useEffect(() => {
    if (!isAuthenticated()) {
      Dispatch(Actions.Logout_Action());
      Dispatch(Actions.generateAccessToken_Action());
    }
  }, [isAuthenticated()]);

  if (!isCookiePolicy()) {
    Dispatch(cookiePolicy_Action(false));
  }

  return (
    <>
      <ScrollingUp />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/directory" component={Directory} />
        <Route exact path="/tradieTV" component={TradieTV} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/our-partners" component={Partners} />
        <Route exact path="/footer" component={Footer} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />

        {/* Routes created by Muneeb */}
        <Route exact path="/business-details" component={BusinessDetails} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/faqapp" component={IndexApp} />
        <Route exact path="/how-it-works" component={HowItWorks} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/terms-conditions" component={TermsAndConditions} />
        <Route exact path="/blogs" component={Blogs} />
        <Route
          exact
          path="/tradie-additional-information"
          component={TradieAdditionalInformation}
        />

        <Route
          exact
          path="/tradie-additional-services"
          component={TradieAdditionalServices}
        />
        <PrivateRoute exact path="/tradie-leads" component={TradieLeads} />
        <Route exact path="/tradie-directory" component={TradieDirectory} />
        <Route exact path="/tradie-membership" component={TradieMembership} />
        <PrivateRoute
          exact
          path="/tradie-my-profile"
          component={TradieMyProfile}
        />

        <Route exact path="/our-services" component={AllServices} />
        <Route
          exact
          path="/tradie-my-profile-upload"
          component={TradieMyProfileUpload}
        />
        <Route
          exact
          path="/tradie-public-profile/:id"
          component={TradiePublicProfile}
        />
        <Route exact path="/tradie-review" component={TradieReview} />
        <Route
          exact
          path="/tradie-service-location"
          component={TradieServiceLocation}
        />
        <Route exact path="/user-bookings" component={UserBookings} />
        <PrivateRoute exact path="/user-profile" component={UserProfile} />
        <Route exact path="/my-account" component={MyAccount} />
        <Route exact path="/tradie-request" component={TradieRequest} />
        <Route exact path="/user-info" component={UserInfo} />
        <PrivateRoute
          exact
          path="/tradie-popup-step1"
          component={tradiePopUps}
        />
        <PrivateRoute exact path="/tradie-popup-step2" component={Pop2} />
        <PrivateRoute exact path="/tradie-popup-step3" component={Pop3} />
        <PrivateRoute
          exact
          path="/user-update-profile"
          component={UserEditProfile}
        />
        <PrivateRoute
          exact
          path="/dashboard-booking-detail/:id"
          component={DashboardBookingDetail}
        />
        <NewRoutes />
        <Route>
          <h3 style={{ textAlign: "center", marginTop: "100px" }}>
            404 Not Found
          </h3>
        </Route>
      </Switch>
    </>
  );
};

export default MainRouter;
