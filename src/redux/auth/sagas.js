import { put, call, takeLatest } from "redux-saga/effects";
import * as types from "./types";
import * as api from "./services";
import { setLocalStorageAccessToken } from "../../utilities/hooks/auth/util";

function* generateAccessToken_Saga(action) {
  try {
    const d = new Date();
    const time = d.getTime();
    const code = Math.floor(1000 + Math.random() * 9000);
    const deviceid = code + "-" + time;
    const body = {
      api_key: "tepatredie005007",
      device_id: deviceid,
      device_type: 3,
      role: "user",
    };
    const result = yield call(api.generateAccessToken_Service, body);

    yield put({
      type: types.GENERATE_ACCESS_TOKEN_SUCCESS,
      payload: { ...body, access_token: result.data.data.token },
    });
    //setAccessToken(result.data.data.token);
    yield put({
      type: types.GENERATE_ACCESS_TOKEN_RESET,
    });
  } catch (error) {
    yield put({
      type: types.GENERATE_ACCESS_TOKEN_FAILURE,
      payload: error,
    });
  }
}

function* updateAccessToken_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(api.updateAccessToken_Service, userInfo);

    yield put({
      type: types.UPDATE_ACCESS_TOKEN_SUCCESS,
      payload: userInfo,
    });
    //setAccessToken(userInfo.access_token);
    yield put({
      type: types.UPDATE_ACCESS_TOKEN_RESET,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_ACCESS_TOKEN_FAILURE,
      payload: error,
    });
  }
}

function* otpRegister_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.otpRegister_Service,
      action.payload,
      userInfo
    );

    yield put({
      type: types.OPT_REGISTER_SUCCESS,
      payload: result.data.data.message,
    });
    yield put({
      type: types.OPT_REGISTER_RESET,
    });
  } catch (error) {
    yield put({
      type: types.OPT_REGISTER_FAILURE,
      payload: error,
    });
  }
}
function* verify_otp_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(api.verify_otp_Service, action.payload, userInfo);

    const setLoginInfo = () => {
      if (result.data.data.success === 1) {
        const setloginInfo = {
          ...result.data.data.data,
          access_token: userInfo.access_token,
          device_id: userInfo.device_id,
          api_key: userInfo.api_key,
          device_type: userInfo.device_type,
          email: result.data.data.data.email,
          fullname: result.data.data.data.full_name,
          mobile: result.data.data.data.mobile,
          profile_pic: result.data.data.data.profile_pic,
          role: result.data.data.data.access,
          uid: result.data.data.data.id,
          message: result.data.data.message,
        };

        return setloginInfo;
      } else {
        const setloginInfo = {
          access_token: userInfo.access_token,
          device_id: userInfo.device_id,
          api_key: userInfo.api_key,
          device_type: userInfo.device_type,
          message: result.data.data.message,
        };

        return setloginInfo;
      }
    };

    yield put({
      type: types.VERIFY_OTP_SUCCESS,
      payload: setLoginInfo(),
    });
    yield put({
      type: types.VERIFY_OTP_RESET,
    });
  } catch (error) {
    yield put({
      type: types.VERIFY_OTP_FAILURE,
      payload: error,
    });
  }
}
function* otpLogin_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(api.otpLogin_Service, action.payload, userInfo);

    yield put({
      type: types.OTP_LOGIN_SUCCESS,
      payload: result.data.data,
    });
    yield put({
      type: types.OTP_LOGIN_RESET,
    });
  } catch (error) {
    yield put({
      type: types.OTP_LOGIN_FAILURE,
      payload: error,
    });
  }
}
function* facebookLogin_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.facebookLogin_Service,
      action.payload,
      userInfo
    );

    const setFBLoginInfo = () => {
      if (result.data.data.success === 1) {
        const setloginInfo = {
          access_token: userInfo.access_token,
          device_id: userInfo.device_id,
          api_key: userInfo.api_key,
          device_type: userInfo.device_type,
          email: result.data.data.data.email,
          fullname: result.data.data.data.full_name,
          mobile: result.data.data.data.mobile,
          profile_pic: result.data.data.data.profile_pic,
          role: result.data.data.data.access,
          uid: result.data.data.data.id,
          message: result.data.data.message,
        };

        return setloginInfo;
      } else {
        const setloginInfo = {
          access_token: userInfo.access_token,
          device_id: userInfo.device_id,
          api_key: userInfo.api_key,
          device_type: userInfo.device_type,
          message: result.data.data.message,
        };

        return setloginInfo;
      }
    };

    yield put({
      type: types.FACEBOOK_LOGIN_SUCCESS,
      payload: setFBLoginInfo(),
    });
    yield put({
      type: types.FACEBOOK_LOGIN_RESET,
    });
  } catch (error) {
    yield put({
      type: types.FACEBOOK_LOGIN_FAILURE,
      payload: error,
    });
  }
}

function* otp_Reset_Signup_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.Reset_Signup_otp_Service,
      action.payload,
      userInfo
    );

    yield put({
      type: types.RESET_SIGNUP_OTP_SUCCESS,
      payload: result.data.data.message,
    });
    yield put({
      type: types.RESET_SIGNUP_OTP_RESET,
    });
  } catch (error) {
    yield put({
      type: types.RESET_SIGNUP_OTP_FAILURE,
      payload: error,
    });
  }
}

function* otp_Reset_Login_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.Reset_Login_otp_Service,
      action.payload,
      userInfo
    );

    yield put({
      type: types.RESET_LOGIN_OTP_SUCCESS,
      payload: result.data.data.message,
    });
    yield put({
      type: types.RESET_LOGIN_OTP_RESET,
    });
  } catch (error) {
    yield put({
      type: types.RESET_LOGIN_OTP_FAILURE,
      payload: error,
    });
  }
}

function* update_Profile_Verification_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.User_Profile_Update_Service,
      action.payload,
      userInfo
    );
    // console.log(result, "from saga updatesss");
    yield put({
      type: types.UPDATE_PROFILE_VERIFICATION_SUCCESS,
      payload: result.data.data.message,
    });
    yield put({
      type: types.UPDATE_PROFILE_VERIFICATION_RESET,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_PROFILE_VERIFICATION_FAILURE,
      payload: error,
    });
  }
}
//get user profile
function* get_Profile_Information_Saga() {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(api.Get_User_Information_Service, userInfo);
    yield put({
      type: types.GET_PROFILE_INFORMATION_SUCCESS,
      payload: result.data.data,
    });
    yield put({
      type: types.GET_PROFILE_INFORMATION_RESET,
    });
  } catch (error) {
    yield put({
      type: types.GET_PROFILE_INFORMATION_FAILURE,
      payload: error,
    });
  }
}

//profile steps
function* Profile_steps_Saga() {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(api.Profile_steps_Service, userInfo);
    yield put({
      type: types.PROFILE_STEPS_SUCCESS,
      payload: result.data.data.message,
    });
    yield put({
      type: types.PROFILE_STEPS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.PROFILE_STEPS_FAILURE,
      payload: error,
    });
  }
}

//provider register
function* Provider_Register_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.Profile_Provider_Register_Service,
      action.payload,
      userInfo
    );
   
    yield put({
      type: types.PROFILE_PROVIDER_REGISTER_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.PROFILE_PROVIDER_REGISTER_RESET,
    });
  } catch (error) {
    yield put({
      type: types.PROFILE_PROVIDER_REGISTER_FAILURE,
      payload: error,
    });
  }
}
// pop 3
function* Provider_Assign_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.Provider_Service_Assign_Service,
      action.payload,
      userInfo
    );
  
    yield put({
      type: types.PROVIDER_ASSIGN_POP3_SUCCESS,
      payload: result.data.data,
    });
    yield put({
      type: types.PROVIDER_ASSIGN_POP3_RESET,
    });
  } catch (error) {
    yield put({
      type: types.PROVIDER_ASSIGN_POP3_FAILURE,
      payload: error,
    });
  }
}

//get serivce list

function* Get_Service_List_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(api.Get_List_Serivce, action.payload, userInfo);
  
    yield put({
      type: types.GET_SERVICE_LIST_SUCCESS,
      payload: result.data.data,
    });
    yield put({
      type: types.GET_SERVICE_LIST_RESET,
    });
  } catch (error) {
    yield put({
      type: types.GET_SERVICE_LIST_FAILURE,
      payload: error,
    });
  }
}

function* Get_Business_details_Saga() {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.Get_Provider_Business_details_Service,
      userInfo
    );
    // console.log(result.data.data, "Get_Business_details_Saga");
    yield put({
      type: types.GET_BUSINESSS_DETAILS_SUCCESS,
      payload: result.data.data,
    });
    yield put({
      type: types.GET_BUSINESSS_DETAILS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.GET_BUSINESSS_DETAILS_FAILURE,
      payload: error,
    });
  }
}

function* Get_Business_Update_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.Business_details_Update_Service,
      action.payload,
      userInfo
    );
 
    yield put({
      type: types.BUSINESSS_DETAILS_UPDATE_SUCCESS,
      payload: result.data.data.message,
    });
    yield put({
      type: types.BUSINESSS_DETAILS_UPDATE_RESET,
    });
  } catch (error) {
    yield put({
      type: types.BUSINESSS_DETAILS_UPDATE_FAILURE,
      payload: error,
    });
  }
}
//provider image gallary list
function* Get_Image_Gallary_List_Saga() {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(api.Get_Gallary_List_Service, userInfo);

    yield put({
      type: types.PROVIDER_GALLARY_LIST_SUCCESS,
      payload: result.data.data.message,
    });
    yield put({
      type: types.PROVIDER_GALLARY_LIST_RESET,
    });
  } catch (error) {
    yield put({
      type: types.PROVIDER_GALLARY_LIST_FAILURE,
      payload: error,
    });
  }
}

function* Image_Gallary_Delete_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.Gallary_Delete_Service,
      action.payload,
      userInfo
    );
   
    yield put({
      type: types.PROVIDER_GALLARY_DELETE_SUCCESS,
      payload: result.data.data.message,
    });
    yield put({
      type: types.PROVIDER_GALLARY_DELETE_RESET,
    });
  } catch (error) {
    yield put({
      type: types.PROVIDER_GALLARY_DELETE_FAILURE,
      payload: error,
    });
  }
}

function* Image_Upload_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.Image_Upload_Serivce,
      action.payload,
      userInfo
    );
    
    yield put({
      type: types.IMAGE_UPLOAD_SUCCESS,
      payload: result.data.data.message,
    });
    yield put({
      type: types.IMAGE_UPLOAD_RESET,
    });
  } catch (error) {
    yield put({
      type: types.IMAGE_UPLOAD_FAILURE,
      payload: error,
    });
  }
}

//user address
function* Get_user_Address_Saga() {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(api.Get_User_address_Serivce, userInfo);

    yield put({
      type: types.GET_USER_ADDRESS_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.GET_USER_ADDRESS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.GET_USER_ADDRESS_FAILURE,
      payload: error,
    });
  }
}

function* Get_Provider_Address_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.Get_Provider_address_Serivce,
      action.payload,
      userInfo
    );
    
    yield put({
      type: types.GET_PROVIDER_ADDRESS_SUCCESS,
      payload: result.data.data.message,
    });
    yield put({
      type: types.GET_PROVIDER_ADDRESS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.GET_PROVIDER_ADDRESS_FAILURE,
      payload: error,
    });
  }
}
function* Signup_User_Name_Enter_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.User_Enter_Name_Serivce,
      action.payload,
      userInfo
    );
  
    yield put({
      type: types.SIGNUP_USER_ENTER_NAME_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.SIGNUP_USER_ENTER_NAME_RESET,
    });
  } catch (error) {
    yield put({
      type: types.SIGNUP_USER_ENTER_NAME_FAILURE,
      payload: error,
    });
  }
}
function* Signup_User_Completion_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.User_Update_Profile_Serivce,
      action.payload,
      userInfo
    );

    yield put({
      type: types.SIGNUP_USER_COMPLETION_SUCCESS,
      payload: result.data.data.message,
    });
    yield put({
      type: types.SIGNUP_USER_COMPLETION_RESET,
    });
  } catch (error) {
    yield put({
      type: types.SIGNUP_USER_COMPLETION_FAILURE,
      payload: error,
    });
  }
}

function* logout_user_Saga() {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(api.User_logout_Serivce, userInfo);

    yield put({
      type: types.LOGOUT__SUCCESS,
      payload: true,
    });

    yield put({
      type: types.LOGOUT__RESET,
    });
  } catch (error) {
    yield put({
      type: types.LOGOUT__FAILURE,
      payload: error,
    });
  }
}

function* getCountryList_Saga() {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(api.getCountryList_Service, userInfo);

    yield put({
      type: types.GET_COUNTRY_LIST_SUCCESS,
      payload: true,
    });

    yield put({
      type: types.GET_COUNTRY_LIST_RESET,
    });
  } catch (error) {
    yield put({
      type: types.GET_COUNTRY_LIST_FAILURE,
      payload: error,
    });
  }
}
function* submit_tradie_for_approval(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.tradie_approval_submit,
      action.payload,
      userInfo
    );

    yield put({
      type: types.SUBMIT_FOR_APPROVAL_SUCCESS,
      payload: result,
    });

    yield put({
      type: types.SUBMIT_FOR_APPROVAL_RESET,
    });
  } catch (error) {
    yield put({
      type: types.SUBMIT_FOR_APPROVAL_FAILURE,
      payload: error,
    });
  }
}

function* upload_user_Profile_picture_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(
      api.upload_user_Profile_picture_Serivce,
      action.payload,
      userInfo
    );

    if (result.success === 1) {
      const setloginInfo = {
        access_token: userInfo.access_token,
        device_id: userInfo.device_id,
        api_key: userInfo.api_key,
        device_type: userInfo.device_type,
        email: userInfo.email,
        fullname: userInfo.full_name,
        mobile: userInfo.mobile,
        profile_pic: result.image_url,
        role: userInfo.access,
        uid: userInfo.id,
        message: result.message,
      };
      setLocalStorageAccessToken(setloginInfo);
    }

    yield put({
      type: types.UPLOAD_USER_PROFILE_PICTURE_SUCCESS,
      payload: result.image_url,
    });
    yield put({
      type: types.UPLOAD_USER_PROFILE_PICTURE_RESET,
    });
  } catch (error) {
    yield put({
      type: types.UPLOAD_USER_PROFILE_PICTURE_FAILURE,
      payload: error,
    });
  }
}

export function* authWatcher() {
  yield takeLatest(
    types.GENERATE_ACCESS_TOKEN_REQUEST,
    generateAccessToken_Saga
  );
  yield takeLatest(types.UPDATE_ACCESS_TOKEN_REQUEST, updateAccessToken_Saga);
  yield takeLatest(types.OPT_REGISTER_REQUEST, otpRegister_Saga);
  yield takeLatest(types.OTP_LOGIN_REQUEST, otpLogin_Saga);
  yield takeLatest(types.FACEBOOK_LOGIN_REQUEST, facebookLogin_Saga);
  yield takeLatest(types.VERIFY_OTP_REQUEST, verify_otp_Saga);
  yield takeLatest(types.RESET_SIGNUP_OTP_REQUEST, otp_Reset_Signup_Saga);
  yield takeLatest(types.RESET_LOGIN_OTP_REQUEST, otp_Reset_Login_Saga);
  yield takeLatest(
    types.UPDATE_PROFILE_VERIFICATION_REQUEST,
    update_Profile_Verification_Saga
  );
  yield takeLatest(
    types.GET_PROFILE_INFORMATION_REQUEST,
    get_Profile_Information_Saga
  );
  yield takeLatest(types.PROFILE_STEPS_REQUEST, Profile_steps_Saga);
  yield takeLatest(
    types.PROFILE_PROVIDER_REGISTER_REQUEST,
    Provider_Register_Saga
  );
  yield takeLatest(
    types.GET_BUSINESSS_DETAILS_REQUEST,
    Get_Business_details_Saga
  );
  yield takeLatest(
    types.BUSINESSS_DETAILS_UPDATE_REQUEST,
    Get_Business_Update_Saga
  );
  yield takeLatest(
    types.PROVIDER_GALLARY_LIST_REQUEST,
    Get_Image_Gallary_List_Saga
  );
  yield takeLatest(
    types.PROVIDER_GALLARY_DELETE_REQUEST,
    Image_Gallary_Delete_Saga
  );
  yield takeLatest(types.IMAGE_UPLOAD_REQUEST, Image_Upload_Saga);
  yield takeLatest(types.GET_SERVICE_LIST_REQUEST, Get_Service_List_Saga);
  yield takeLatest(types.GET_USER_ADDRESS_REQUEST, Get_user_Address_Saga);
  yield takeLatest(
    types.GET_PROVIDER_ADDRESS_REQUEST,
    Get_Provider_Address_Saga
  );
  yield takeLatest(types.PROVIDER_ASSIGN_POP3_REQUEST, Provider_Assign_Saga);
  yield takeLatest(
    types.SIGNUP_USER_ENTER_NAME_REQUEST,
    Signup_User_Name_Enter_Saga
  );
  yield takeLatest(
    types.SIGNUP_USER_COMPLETION_REQUEST,
    Signup_User_Completion_Saga
  );
  yield takeLatest(types.LOGOUT__REQUEST, logout_user_Saga);
  yield takeLatest(types.GET_COUNTRY_LIST_REQUEST, getCountryList_Saga);
  yield takeLatest(
    types.UPLOAD_USER_PROFILE_PICTURE_REQUEST,
    upload_user_Profile_picture_Saga
  );
  yield takeLatest(types.SUBMIT_FOR_APPROVAL, submit_tradie_for_approval);
}
