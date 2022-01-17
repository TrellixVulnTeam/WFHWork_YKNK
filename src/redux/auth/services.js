import {
  sendPostRequest,
  sendPostRequestNew,
} from "../../utilities/hooks/auth/sendRequest";
import { setLocalStorageAccessToken } from "../../utilities/hooks/auth/util";
const config = {
  headers: {
    "Content-Type": "application/json",
    authorization: "my-auth-token",
  },
};

export const generateAccessToken_Service = async (body) => {
  const link = "/genrate-access-tokan";
  const response = await sendPostRequest(body, link, config);

  return response;
};

export const getCountryList_Service = async (body) => {
  const link = "/get-country-list";
  const response = await sendPostRequest(body, link, config);

  return response;
};

export const updateAccessToken_Service = async (body) => {
  const link = "/update-access-tokan";
  const response = await sendPostRequest(body, link, config);

  return response;
};

export const otpRegister_Service = async (data, userInfo) => {
  const { countryCode, mobileNumber, tab } = data;

  var loginData = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    facebook_id: "",
    role: tab,
    mobile: mobileNumber,
    country_code: countryCode,
  };
  const link = "/user-otp-registration-web";
  const response = await sendPostRequest(loginData, link, config);

  return response;
};
export const otpLogin_Service = async (data, userInfo) => {
  const { countryCode, mobileNumber, tab } = data;
  var loginData = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    facebook_id: "",
    role: tab,
    mobile: mobileNumber,
    country_code: countryCode,
  };

  const link = "/otp-login-web";
  const response = await sendPostRequest(loginData, link, config);

  return response;
};
export const facebookLogin_Service = async (data, userInfo) => {
  const { facebook_id, tab } = data;
  var fbloginData = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    facebook_id: facebook_id,
    role: tab,
  };

  const link = "/user-facebook-login";
  const response = await sendPostRequest(fbloginData, link, config);

  return response;
};

export const verify_otp_Service = async (data, userInfo) => {
  const { mobileNumber, tab, otpcode } = data;
  var UserData = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,

    role: tab,
    mobile: mobileNumber,
    otp: otpcode,
  };

  const link = "/user-verify-otp";
  const response = await sendPostRequest(UserData, link, config);

  return response;
};

export const Reset_Signup_otp_Service = async (data, userInfo) => {
  const { mobileNumber, tab, countryCode } = data;
  var UserData = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    country_code: countryCode,
    role: tab,
    mobile: mobileNumber,
  };

  const link = "/resent-otp";
  const response = await sendPostRequest(UserData, link, config);

  return response;
};

export const Reset_Login_otp_Service = async (data, userInfo) => {
  const { mobileNumber, tab, countryCode } = data;
  var UserData = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    country_code: countryCode,
    role: tab,
    mobile: mobileNumber,
  };

  const link = "/resent-otp";
  const response = await sendPostRequest(UserData, link, config);

  return response;
};

//user profile update
export const User_Profile_Update_Service = async (data, userInfo) => {
  const {
    Aboutme,
    EmailAddress,
    fullname,
    Gender,
    PhoneNumber,
    ProfessionalExperience,
    WebsiteLink,
    City,
    selectedCountry,
    pincode,
  } = data;

  var UserData = {
    about_me: Aboutme,
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    city: City,
    country: selectedCountry,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    email: EmailAddress,
    fullname: fullname,
    gender: Gender,
    phone_number: PhoneNumber,
    professional_experience: ProfessionalExperience,
    pincode: pincode,
    uid: userInfo.uid,
    website_link: WebsiteLink,
  };
  const link = "/provider-identify-verification-update";
  const response = await sendPostRequest(UserData, link, config);

  return response;
};

//get profile information
export const Get_User_Information_Service = async (userInfo) => {
  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    provider_id: userInfo.uid,
    uid: userInfo.uid,
  };

  const link = "/get-provider-profile";
  const response = await sendPostRequest(UserData, link, config);

  return response;
};

// profile steps api
export const Profile_steps_Service = async (userInfo) => {
  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    uid: userInfo.uid,
  };

  const link = "/provider-profile-steps";
  const response = await sendPostRequest(UserData, link, config);

  return response;
};

//provier register api
export const Profile_Provider_Register_Service = async (data, userInfo) => {
  const { EmailAddress, city, country, fullname } = data;

  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    city: city,
    country: country,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    email: EmailAddress,
    fullname: fullname,
    uid: userInfo.uid,
  };

  var UserCookieData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    city: city,
    country: country,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    email: EmailAddress,
    fullname: fullname,
    profile_pic: "",
    role: userInfo.role,
    uid: userInfo.uid,
  };

  setLocalStorageAccessToken(UserCookieData);
  const link = "/provider-register-step2";
  const response = await sendPostRequest(UserData, link, config);

  return response;
};

//pop up 2 and 3
export const Provider_Service_Assign_Service = async (data, userInfo) => {
  const { role, serviceIdRole } = data;
  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    other: "",
    role: userInfo.role,
    remove_services: data?.remove_services,
    services_id: serviceIdRole,
    services_type: role,
    uid: userInfo.uid,
  };
  const link = "/provider-assign-service-to-him";
  const response = await sendPostRequest(UserData, link, config);
  return response;
};

//get provider business details
export const Get_Provider_Business_details_Service = async (userInfo) => {
  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    uid: userInfo.uid,
  };
  const link = "/provider-get-business-detail";
  const response = await sendPostRequest(UserData, link, config);
  return response;
};

export const Business_details_Update_Service = async (data, userInfo) => {
  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    business_name: data.businessName,
    city: data.cityAdress,
    country: data.countryAdress,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    house_no: data.houseNo,
    latitude: 24.8607343,
    license_number: data.licenseNumber,
    longitude: 67.0011364,
    pincode: "231242",
    state: data.stateAdress,
    street: data.streetAddress,
    uid: userInfo.uid,
    working_radius: data.workingRadius,
  };
  const link = "/provider-business-detail-update";
  const response = await sendPostRequest(UserData, link, config);
  return response;
};

export const Get_Gallary_List_Service = async (userInfo) => {
  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    uid: userInfo.uid,
  };
  const link = "/provider-gallery-image-list";
  const response = await sendPostRequest(UserData, link, config);
  return response;
};

export const Gallary_Delete_Service = async (userInfo) => {
  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    uid: userInfo.uid,
  };
  const link = "/provider-delete-image";
  const response = await sendPostRequest(UserData, link, config);
  return response;
};

export const Image_Upload_Serivce = async (data, userInfo) => {
  let formData = new FormData(); //formdata object
  for (let i = 0; i < data.length; i++) {
    formData.append("image", data[0]);
  }

  formData.append("access_token", userInfo.access_token); //append the values with key, value pair
  formData.append("api_key", userInfo.api_key);
  formData.append("device_id", userInfo.device_id);
  formData.append("device_type", userInfo.device_type);
  formData.append("uid", userInfo.uid);
  formData.append("length", data.length);

  // var UserData = {
  //   access_token: userInfo.access_token,
  //   api_key: userInfo.api_key,
  //   device_id: userInfo.device_id,
  //   device_type: userInfo.device_type,
  //   uid: userInfo.uid,
  //   length: data.length,
  // };

  const link = "/provider-upload-image";
  const response = await sendPostRequest(formData, link, config);
  return response;
};

export const Get_List_Serivce = async (data, userInfo) => {
  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    fixed_service: 1,
    page: "all",
    role: userInfo.role,
    search: "",
    uid: userInfo.uid,
  };
  const link = "/get-services-list ";
  const response = await sendPostRequest(UserData, link, config);
  return response;
};
//user address

export const Get_User_address_Serivce = async (userInfo) => {
  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    uid: userInfo.uid,
  };
  const link = "/user-get-address";
  const response = await sendPostRequest(UserData, link, config);
  return response;
};

export const Get_Provider_address_Serivce = async (data, userInfo) => {
  var UserData = {
    access_token: userInfo.access_token,
    address: data.address,
    city: data.city,
    api_key: userInfo.api_key,
    country: data.country,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    latitude: data.latitude,
    location_name: "home",
    longitude: data.longitude,
    online: 1,
    role: data.role,
    state: data.state,
    uid: userInfo.uid,
  };
  const link = "/provider-add-address";
  const response = await sendPostRequest(UserData, link, config);
  return response;
};
export const User_logout_Serivce = async (userInfo) => {
  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    uid: userInfo.uid,
  };

  const link = "/logout";
  const response = await sendPostRequest(UserData, link, config);
  return response;
};

//user completion profile
export const User_Enter_Name_Serivce = async (data, userInfo) => {
  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    fullname: data,
    mobile: userInfo.mobile,
    role: userInfo.role,
    uid: userInfo.uid,
  };
  const link = "/user-register-step2";
  const response = await sendPostRequest(UserData, link, config);
  return response;
};

//Submit for Approval
export const tradie_approval_submit = async (data, userInfo) => {
  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    fullname: data,
    mobile: userInfo.mobile,
    role: userInfo.role,
    uid: userInfo.uid,
  };
  const link = "/submit-for-approval";
  const response = await sendPostRequest(UserData, link, config);
  return response;
};

export const User_Update_Profile_Serivce = async (data, userInfo) => {
  const { fullNamee, EmailAddress, number, address } = data;

  var UserData = {
    access_token: userInfo.access_token,
    api_key: userInfo.api_key,
    device_id: userInfo.device_id,
    device_type: userInfo.device_type,
    address: address,
    email: EmailAddress,
    fullname: fullNamee,
    mobile: number,
    uid: userInfo.uid,
  };
  const link = "/user-update-profile";
  const response = await sendPostRequest(UserData, link, config);
  return response;
};
export const upload_user_Profile_picture_Serivce = async (data, userInfo) => {
  let formData = new FormData();
  // for (let i = 0; i < data.length; i++) {

  // }
  formData.append("image", data[0]);
  formData.append("access_token", userInfo.access_token);
  formData.append("api_key", userInfo.api_key);
  formData.append("device_id", userInfo.device_id);
  formData.append("device_type", userInfo.device_type);
  formData.append("uid", userInfo.uid);
  // formData.append("length", data.length);

  const link = "/upload-profile-picture";
  const response = await sendPostRequest(formData, link, config);
  return response;
};
