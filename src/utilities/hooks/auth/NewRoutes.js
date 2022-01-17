import React from "react";
import { Route, Switch } from "react-router-dom";
import ScrollingUp from "../DetectOnclickOutside/ScrollingUp";
import HowItWorks from "../../../pages/HowItWorks/HowItWorkApp";
import AboutUsApp from "../../../pages/AboutUs/AboutUsApp";
import TermsAndConditionApp from "../../../pages/TermsAndConditions/TandCApp";
import PrivacyPolicyApp from "../../../pages/PrivacyPolicy/PrivacyPolicyApp";
import TermsAndConditionsAPP from "../../../pages/TermsAndConditions/TandCApp";
import ChangeProfile from "../../../pages/TradieMyProfile/ChangeProfile";
function NewRoutes() {
  return (
    <div>
      <ScrollingUp />
      <Switch>
        <Route exact path="/how-it-worksapp" component={HowItWorks} />
        <Route exact path="/about-usapp" component={AboutUsApp} />
        <Route
          exact
          path="/terms-conditionsapp"
          component={TermsAndConditionApp}
        />
        <Route exact path="/privacy-policyapp" component={PrivacyPolicyApp} />
        <Route exact path="/ChangeProfile" component={ChangeProfile} />
      </Switch>
    </div>
  );
}

export default NewRoutes;
