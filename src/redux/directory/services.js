import { sendPostRequest } from "../../utilities/hooks/auth/sendRequest";
import {
  setLocalStorageAccessSearchInfo,
  setLocalStorageAccessLoadSearchInfo,
} from "../../utilities/hooks/auth/util";
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: "my-auth-token",
  },
};

export const trending_all_categories_Service = async (userInfo) => {
  let data = {
    api_key: "tepatredie005007",
  };
  const link = "/get-all-service";
  const response = await sendPostRequest(data, link, config);
  return response;
};

export const Tradie_search_Service = async (data, userInfo, loadData) => {
  const { search } = data;
  setLocalStorageAccessSearchInfo({ search: search });

  var searchData = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    latitude: loadData.loadlatitude,
    longitude: loadData.loadlongitude,
    page: "all",
    search: search,
    search_type: "service",
    service_id: "",
    sort_by: "",
    tradie_type: "",
    uid: userInfo.uid,
  };

  const link = "/user-tradie-search";
  const response = await sendPostRequest(searchData, link, config);

  return response;
};

export const Tradie_Onclick_search_Service = async (
  data,
  userInfo,
  loadData
) => {
  const { searchQuery, latitude, longitude, locationAdress } = data;
  setLocalStorageAccessSearchInfo({ search: searchQuery });

  let setLoadDataCookie = {
    address: locationAdress,
    city: "Perth",
    country: "Australia",
    loadlatitude: latitude,
    loadlongitude: longitude,
    state: "WA",
  };
  setLocalStorageAccessLoadSearchInfo(setLoadDataCookie);
  var onClickSearchData = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    latitude: latitude,
    longitude: longitude,
    page: "all",
    search: searchQuery,
    search_type: "service",
    service_id: "",
    sort_by: "",
    tradie_type: "",
    uid: userInfo.uid,
  };

  const link = "/user-tradie-search";
  const response = await sendPostRequest(onClickSearchData, link, config);

  return response;
};

export const user_to_tradie_Service = async (data, userInfo) => {
  var tradieData = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    address: data.address,
    // city: data.city,
    // country: data.country,
    date: data.date,
    detail: data.detail,
    latitude: data.latitude,
    longitude: data.longitude,
    // postcode: data.postcode,
    role: userInfo.role,
    search: data.search,
    search_type: data.search_type,
    service_id: data.service_id,
    service_type: data.service_type,
    // state: data.state,
    time: data.time,
    title: data.title,
    tradie_id: data.tradie_id,
    tradie_type: data.tradie_type,
    uid: userInfo.uid,
  };

  const link = "/user-job-request-to-tradie";
  const response = await sendPostRequest(tradieData, link, config);

  return response;
};

export const User_leads_Service = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    page: "all",
    lead_type: data.lead_type,
    uid: userInfo.uid,
  };

  const link = "/user-leads";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};

export const User_leads_history_Service = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    page: "all",
    lead_type: data.lead_type,
    uid: userInfo.uid,
  };

  const link = "/user-leads";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};

export const User_Single_lead_Service = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    uid: userInfo.uid,
    jobid: data.jobid,
  };

  const link = "/user-single-lead";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};
export const Single_tradie_delete_Service = async (data, userInfo) => {
  // console.log("data", data);

  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    uid: userInfo.uid,
    job_id: data.id,
    action: data.action,
    type: data.type,
    pid: data.pid,
  };

  const link = "/user-job-action";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};
export const user_job_delete_Service = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    uid: userInfo.uid,
    job_id: data.job_id,
  };
  const link = "/user-job-delete";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};
export const user_give_reviews = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    id: data.id,
    provider_id: data.provider_id,
    uid: data.uid,
    job_post_id: data.job_post_id,
    rating: data.rating,
    review: data.review,
  };
  const link = "/user-give-review";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};
export const user_rise_disputes = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    // id: data.id,
    // provider_id: data.provider_id,
    uid: data.uid,
    job_id: data.job_post_id,
    resion: data.resion,
  };
  const link = "/user-raise-dispute";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};
export const get_provider_profile_Service = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    provider_id: data.provider_id,
  };

  const link = "/get-provider-profile";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};
export const provider_get_reviewList_Service = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    uid: data ? data : userInfo.uid,
  };

  const link = "/provider-get-review-list";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};

export const send_newsletter_Service = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    subscrib_email: data.subscrib_email,
  };

  const link = "/send-newsletter";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};

export const send_contact_form_Service = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    email: data.email,
    full_name: data.full_name,
    message: data.message,
  };

  const link = "/send-contactform";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};

export const provider_leads_Service = async (userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    lead_type: "new",
    page: "all",
    uid: userInfo.uid,
  };

  const link = "/provider-leads";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};

export const provider_leads_history_Service = async (userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    lead_type: "history",
    page: "all",
    uid: userInfo.uid,
  };

  const link = "/provider-leads";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};

export const provider_job_accept_Service = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    type: data.type,
    action: data.action,
    uid: userInfo.uid,
    job_id: data.id,
  };

  const link = "/provider-job-action";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};
export const provider_job_reject_Service = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    type: "single",
    action: "reject",
    uid: userInfo.uid,
    job_id: data.job_id,
  };

  const link = "/provider-job-action-new";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};
export const tradie_subscription_list_Service = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    uid: userInfo.uid,
  };

  const link = "/get-subscription-list";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};
export const tradie_payment_history_Service = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    uid: userInfo.uid,
  };

  const link = "/get-payment-history";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};
export const tradie_cancel_subscription_Service = async (data, userInfo) => {
  var UserLeads = {
    access_token: userInfo.access_token,
    device_id: userInfo.device_id,
    api_key: userInfo.api_key,
    device_type: userInfo.device_type,
    uid: userInfo.uid,
    subscription_id: data,
  };

  const link = "/cancel-subscription";
  const response = await sendPostRequest(UserLeads, link, config);

  return response;
};
