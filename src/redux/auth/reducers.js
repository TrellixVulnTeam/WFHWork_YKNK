import * as types from "./types";
import {
  setCookiePolicy,
  setLocalStorageAccessToken,
  setAccessToken,
  removeAccessToken,
} from "../../utilities/hooks/auth/util";

const initState = {
  otp: false,
  loading: false,
  success: false,
  access_token: "",
  access_token_state: false,
  cookiePolicy: false,
  otp_signup: "",
  user: false,
  verify_OTP: [],
  opt_mesg: false,
  login: false,
  logout: false,
  userData: "",
  services: "",
  gallery: "",
  userUpdateRes: "",
  galleryImgDelRes: "",
  businessUpdateres: "",
  userGetMsg: "",
  otp_state: false,
  otp_stateReg: false,
  signupUserData: "",
  editProfile: "",
  blogsArticleId: "",
  register_complete: "",
  businessData: "",
  otp_stateLogin: false,
  otp_stateSignup: false,
  SelectedServices: [],
  selected_services: "",
  tradiaServiceLocation: [],
  MessageServiceLocation: "",
  imageUploadeRes: "",
  submitApprovalRes: "",
};

const AuthReducer = (state = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    // CHANGE_BLOGS_ARTICLE
    case types.CHANGE_BLOGS_ARTICLE:
      return {
        ...state,
        blogsArticleId: payload,
      };
    // PROVIDER_ASSIGN_POP3_SUCCESS
    case types.PROVIDER_ASSIGN_POP3_SUCCESS:
      /*       let providerLogin = false;
      if (payload.message === "Successfully loggedIn.") {
        providerLogin = true;
      } */

      return {
        ...state,
        verify_OTP: {
          ...state.verify_OTP,
          register_complete: payload.register_complete,
        },
        businessUpdateres: payload,
        //login: providerLogin,
      };
    // TEST_VERIFY_OTP_REQUEST
    case types.TEST_VERIFY_OTP_REQUEST:
      if (payload) {
        setAccessToken("dummy_token");
      }
      return {
        ...state,
        user: payload,
      };
    // COOKIE_POLICY
    case types.COOKIE_POLICY:
      if (payload) {
        setCookiePolicy();
      }
      return {
        ...state,
        cookiePolicy: payload,
      };
    // GENERATE_ACCESS_TOKEN_REQUEST
    case types.GENERATE_ACCESS_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // GENERATE_ACCESS_TOKEN_SUCCESS
    case types.GENERATE_ACCESS_TOKEN_SUCCESS:
      setLocalStorageAccessToken(payload);
      return {
        ...state,
        success: true,
        loading: false,
        access_token: payload.access_token,
        access_token_state: true,
      };
    // GENERATE_ACCESS_TOKEN_RESET
    case types.GENERATE_ACCESS_TOKEN_RESET:
      return {
        ...state,
        loading: false,
        success: false,
      };
    // GENERATE_ACCESS_TOKEN_FAILURE
    case types.GENERATE_ACCESS_TOKEN_FAILURE:
      return {
        ...state,

        loading: false,
      };
    // UPDATE_ACCESS_TOKEN_REQUEST
    case types.UPDATE_ACCESS_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // UPDATE_ACCESS_TOKEN_SUCCESS
    case types.UPDATE_ACCESS_TOKEN_SUCCESS:
      setLocalStorageAccessToken(payload);
      return {
        ...state,
        success: true,
        loading: false,
        access_token: payload.access_token,
        access_token_state: true,
      };
    // UPDATE_ACCESS_TOKEN_RESET
    case types.UPDATE_ACCESS_TOKEN_RESET:
      return {
        ...state,
        loading: false,
        success: false,
      };
    // UPDATE_ACCESS_TOKEN_FAILURE
    case types.UPDATE_ACCESS_TOKEN_FAILURE:
      return {
        ...state,

        loading: false,
      };
    // GET_BUSINESSS_DETAILS_REQUEST
    case types.GET_BUSINESSS_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // GET_BUSINESSS_DETAILS_SUCCESS
    case types.GET_BUSINESSS_DETAILS_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        businessData: payload.business_data,
        userData: payload.user_data,
        workingRadius: payload.user_data.working_radius,
      };
    // GET_BUSINESSS_DETAILS_RESET
    case types.GET_BUSINESSS_DETAILS_RESET:
      return {
        ...state,
        loading: false,
        success: false,
      };
    // GET_BUSINESSS_DETAILS_FAILURE
    case types.GET_BUSINESSS_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    // BUSINESSS_DETAILS_UPDATE_REQUEST
    case types.BUSINESSS_DETAILS_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // BUSINESSS_DETAILS_UPDATE_SUCCESS
    case types.BUSINESSS_DETAILS_UPDATE_SUCCESS:
      // console.log("BUSINESSS_DETAILS_UPDATE_SUCCESS", payload);
      return {
        ...state,
        success: true,
        loading: false,
        businessUpdateres: payload,
      };
    // IMAGE_UPLOAD_SUCCESS
    case types.IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        businessUpdateres: payload,
      };
    // PROVIDER_GALLARY_DELETE_SUCCESS
    case types.PROVIDER_GALLARY_DELETE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        galleryImgDelRes: payload,
      };
    // BUSINESSS_DETAILS_UPDATE_RESET
    case types.BUSINESSS_DETAILS_UPDATE_RESET:
      return {
        ...state,
        loading: false,
        success: false,
      };
    // BUSINESSS_DETAILS_UPDATE_FAILURE
    case types.BUSINESSS_DETAILS_UPDATE_FAILURE:
      return {
        ...state,

        loading: false,
      };
    // OPT_REGISTER_REQUEST
    case types.OPT_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // OPT_REGISTER_SUCCESS
    case types.OPT_REGISTER_SUCCESS:
      let otpStateReg = false;
      if (
        payload === "Already tradie exist" ||
        payload === "Already user exist"
      ) {
        otpStateReg = false;
        state.otp_stateSignup = true;
      }
      if (payload === "OTP sent.") {
        otpStateReg = true;
        state.otp_stateSignup = false;
      }
      return {
        ...state,
        success: true,
        loading: false,
        otp: otpStateReg,
        otp_stateReg: otpStateReg,
      };
    // OPT_STATE_REG_CHANGE
    case types.OPT_STATE_REG_CHANGE:
      return {
        ...state,
        otp_stateReg: payload,
        otp_stateSignup: !payload,
      };

    // OPT_REGISTER_RESET
    case types.OPT_REGISTER_RESET:
      return {
        ...state,
        loading: false,
        success: false,
      };
    // OPT_REGISTER_FAILURE
    case types.OPT_REGISTER_FAILURE:
      return {
        ...state,

        loading: false,
      };

    // VERIFY_OTP_REQUEST
    case types.VERIFY_OTP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // VERIFY_OTP_SUCCESS
    case types.VERIFY_OTP_SUCCESS:
      let loginState = false;
      if (payload.message === "Successfully loggedIn.") {
        loginState = true;
        setAccessToken("dfgh456789dfghj");
      }
      setLocalStorageAccessToken(payload);
      let otpStatess = false;

      if (payload.message === "Invalid Otp.") {
        otpStatess = true;
      }
      return {
        ...state,
        success: true,
        loading: false,
        verify_OTP: payload,
        login: loginState,
        otp: otpStatess,
      };

    // VERIFY_OTP_RESET
    case types.VERIFY_OTP_RESET:
      return {
        ...state,
        loading: false,
        success: false,
      };
    // VERIFY_OTP_FAILURE
    case types.VERIFY_OTP_FAILURE:
      return {
        ...state,
        loading: false,
      };

    // OTP_LOGIN_REQUEST
    case types.OTP_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        opt_mesg: false,
      };
    // OTP_LOGIN_SUCCESS
    case types.OTP_LOGIN_SUCCESS:
      let otpState = false;
      if (payload.message === "You are not a registered user.") {
        otpState = false;
        state.otp_stateLogin = true;
      }
      if (payload.message === "OTP sent.") {
        otpState = true;
        state.otp_stateLogin = false;
      }
      return {
        ...state,
        success: true,
        loading: false,
        opt_mesg: otpState,
        otp_state: otpState,
        verify_OTP: payload,
      };
    // OTP_LOGIN_FAILURE
    case types.OTP_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    // OPT_STATE_CHANGE
    case types.OPT_STATE_CHANGE:
      return {
        ...state,
        loading: false,
        otp_state: payload,
        otp_stateLogin: !payload,
      };
    // OTP_LOGIN_RESET
    case types.OTP_LOGIN_RESET:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // Update_Profile
    case types.UPDATE_PROFILE_VERIFICATION_REQUEST:
      return {
        ...state,
      };

    case types.UPDATE_PROFILE_VERIFICATION_SUCCESS:
      return {
        ...state,
        userUpdateRes: payload,
        // workingRadius: payload.working_radius,
      };
    // Update_Profile_FAILURE
    case types.UPDATE_PROFILE_VERIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
      };
    // Update_Profile_RESET
    case types.UPDATE_PROFILE_VERIFICATION_RESET:
      return {
        ...state,
        success: false,
        loading: false,
      };
    // SIGNUP_USER_ENTER_NAME_REQUEST
    case types.SIGNUP_USER_ENTER_NAME_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.SIGNUP_USER_ENTER_NAME_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        signupUserData: payload,
      };
    // SIGNUP_USER_ENTER_NAME_FAILURE
    case types.SIGNUP_USER_ENTER_NAME_FAILURE:
      return {
        ...state,
        loading: false,
      };
    // SIGNUP_USER_ENTER_NAME_RESET
    case types.SIGNUP_USER_ENTER_NAME_RESET:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // Update_Profile
    case types.GET_PROFILE_INFORMATION_REQUEST:
      return {
        ...state,
        // loading: true,
        // opt_mesg: false
      };

    case types.GET_PROFILE_INFORMATION_SUCCESS:
      const { user_data, message, services } = payload;
      return {
        ...state,
        userData: user_data,
        gallery: payload.gallery,
        services: payload.services,
        workingRadius: user_data.working_radius,
        SelectedServices: services,
        userGetMsg: message,
      };
    // Update_Profile_FAILURE
    case types.GET_PROFILE_INFORMATION_FAILURE:
      return {
        ...state,
        // loading: false
      };
    // Update_Profile_RESET
    case types.GET_PROFILE_INFORMATION_RESET:
      return {
        ...state,
        // success: false,
        // loading: false
      };

    // LOGOUT__REQUEST
    case types.LOGOUT__REQUEST:
      return {
        ...state,
      };
    //LOGOUT__SUCCESS
    case types.LOGOUT__SUCCESS:
      if (payload === true) {
        setLocalStorageAccessToken("");
        removeAccessToken();
      }

      return {
        ...state,
        login: false,
        verify_OTP: [],
        // logout: logoutState
      };
    // LOGOUT__FAILURE
    case types.LOGOUT__FAILURE:
      return {
        ...state,
        loading: false,
      };
    // LOGOUT__RESET
    case types.LOGOUT__RESET:
      return {
        ...state,
        success: false,
        loading: false,
        logout: false,
      };

    // FACEBOOK_LOGIN_REQUEST
    case types.FACEBOOK_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // FACEBOOK_LOGIN_SUCCESS
    case types.FACEBOOK_LOGIN_SUCCESS:
      let fbLoginState = false;
      if (payload.message === "Successfully loggedIn.") {
        fbLoginState = true;
        setAccessToken("dfgh456789dfghj");
      }
      setLocalStorageAccessToken(payload);

      return {
        ...state,
        success: true,
        loading: false,
        verify_OTP: payload,
        login: fbLoginState,
      };
    // FACEBOOK_LOGIN_FAILURE
    case types.FACEBOOK_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    // FACEBOOK_LOGIN_RESET
    case types.FACEBOOK_LOGIN_RESET:
      return {
        ...state,
        loading: false,
        success: false,
      };
    // GET_COUNTRY_LIST_REQUEST
    case types.GET_COUNTRY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // GET_COUNTRY_LIST_SUCCESS
    case types.GET_COUNTRY_LIST_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
      };
    // GET_COUNTRY_LIST_FAILURE
    case types.GET_COUNTRY_LIST_FAILURE:
      return {
        ...state,
        loading: false,
      };
    // GET_COUNTRY_LIST_RESET
    case types.GET_COUNTRY_LIST_RESET:
      return {
        ...state,
        loading: false,
        success: false,
      };

    // SIGNUP_USER_COMPLETION_REQUEST
    case types.SIGNUP_USER_COMPLETION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // SIGNUP_USER_COMPLETION_SUCCESS
    case types.SIGNUP_USER_COMPLETION_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        editProfile: payload,
      };
    // SIGNUP_USER_COMPLETION_RESET
    case types.SIGNUP_USER_COMPLETION_RESET:
      return {
        ...state,
        loading: false,
        editProfile: "",
      };
    // SIGNUP_USER_COMPLETION_FAILURE
    case types.SIGNUP_USER_COMPLETION_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      };

    // GET_SERVICE_LIST_REQUEST
    case types.GET_SERVICE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // GET_SERVICE_LIST_SUCCESS
    case types.GET_SERVICE_LIST_SUCCESS:
      const { selected_services, data } = payload;
      return {
        ...state,
        success: true,
        loading: false,
        getServiceList: data,
        selected_services: selected_services,
      };
    // GET_SERVICE_LIST_RESET
    case types.GET_SERVICE_LIST_RESET:
      return {
        ...state,
        loading: false,
      };
    // GET_SERVICE_LIST_FAILURE
    case types.GET_SERVICE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      };

    // GET_USER_ADDRESS_REQUEST
    case types.GET_USER_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // GET_USER_ADDRESS_SUCCESS
    case types.GET_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        tradiaServiceLocation: payload,
      };
    // GET_USER_ADDRESS_RESET
    case types.GET_USER_ADDRESS_RESET:
      return {
        ...state,
        loading: false,
        success: false,
      };
    // GET_USER_ADDRESS_FAILURE
    case types.GET_USER_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    // GET_PROVIDER_ADDRESS_REQUEST
    case types.GET_PROVIDER_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // GET_PROVIDER_ADDRESS_SUCCESS
    case types.GET_PROVIDER_ADDRESS_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        businessUpdateres: payload,
      };
    // GET_PROVIDER_ADDRESS_RESET
    case types.GET_PROVIDER_ADDRESS_RESET:
      return {
        ...state,
        loading: false,
        success: false,
      };
    // GET_PROVIDER_ADDRESS_FAILURE
    case types.GET_PROVIDER_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    // PROFILE_PROVIDER_REGISTER_SUCCESS
    case types.PROFILE_PROVIDER_REGISTER_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        verify_OTP: payload,
      };
    // SUBMIT_FOR_APPROVAL_SUCCESS
    case types.SUBMIT_FOR_APPROVAL_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        submitApprovalRes: payload,
      };

    default:
      return state;
  }
};
export default AuthReducer;
