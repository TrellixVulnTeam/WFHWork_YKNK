import * as types from "./types";

export const trendingAllCategories_Action = () => {
  return {
    type: types.TRENDING_ALL_CATEGORIES_LIST_REQUEST,
  };
};

export const search_trading_service_Action = (data) => {
  return {
    type: types.SEARCH_TRADIE_SERVICE_REQUEST,
    payload: data,
  };
};

export const search_trading_onClick_search_Action = (data) => {
  return {
    type: types.SEARCH_TRADIE_SERVICE_CLICK_REQUEST,
    payload: data,
  };
};

export const slected_tradie_Id = (data) => {
  return {
    type: types.SELECTED_TRADIE_PROFILE_ID_REQUEST,
    payload: data,
  };
};

export const slected_to_All_tradie_Id = () => {
  return {
    type: types.SELECTED__TO_ALL_TRADIE_PROFILE_ID_REQUEST,
  };
};

export const user_to_tradie_request = (data) => {
  return {
    type: types.USER_JOB_REQUEST_TO_TRADIE_REQUEST,
    payload: data,
  };
};
export const user_leads_request = (data) => {
  return {
    type: types.USER_LEADS_REQUEST,
    payload: data,
  };
};
export const user_leads_history_request = (data) => {
  return {
    type: types.USER_LEADS_HISTORY_REQUEST,
    payload: data,
  };
};
export const user_single_lead_request = (data) => {
  return {
    type: types.USER_SINGLE_LEAD_REQUEST,
    payload: data,
  };
};
export const single_tradie_delete_request = (data) => {
  return {
    type: types.SINGLE_TRADIE_DELETE_REQUEST,
    payload: data,
  };
};
export const user_job_delete_request = (data) => {
  return {
    type: types.USER_JOB_DELETE_REQUEST,
    payload: data,
  };
};
export const user_give_reviews_action = (data) => {
  return {
    type: types.USER_GIVE_REVIEW_ACTION,
    payload: data,
  };
};
export const user_raise_dispute_action = (data) => {
  return {
    type: types.USER_RAISE_DISPUTE_ACTION,
    payload: data,
  };
};

export const get_provider_profile_request = (data) => {
  return {
    type: types.GET_PROVIDER_PROFILE_REQUEST,
    payload: data,
  };
};

export const get_provider_reviewList_request = () => {
  return {
    type: types.GET_PROVIDER_REVIEW_LIST_REQUEST,
  };
};
export const send_newsLetter_request = (data) => {
  return {
    type: types.SEND_NEWS_LETTER_REQUEST,
    payload: data,
  };
};
export const send_contact_form_request = (data) => {
  return {
    type: types.SEND_CONTACT_FORM_REQUEST,
    payload: data,
  };
};
export const provider_leads_request = () => {
  return {
    type: types.PROVIDER_LEADS_REQUEST,
  };
};
export const provider_leads_history_request = () => {
  return {
    type: types.PROVIDER_LEADS_HISTORY_REQUEST,
  };
};
export const provider_job_accept_request = (data) => {
  return {
    type: types.PROVIDER_JOB_ACCEPT_REQUEST,
    payload: data,
  };
};
export const provider_job_reject_request = (data) => {
  return {
    type: types.PROVIDER_JOB_REJECT_REQUEST,
    payload: data,
  };
};
