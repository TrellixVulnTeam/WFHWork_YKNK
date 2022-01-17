import { put, call, takeLatest } from "redux-saga/effects";
import * as types from "./types";
import * as api from "./services";

import { successNotification } from "../../utilities/utils/index";

function* TrendingListCategories_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    const result = yield call(api.trending_all_categories_Service, userInfo);

    yield put({
      type: types.TRENDING_ALL_CATEGORIES_LIST_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.TRENDING_ALL_CATEGORIES_LIST_RESET,
    });
  } catch (error) {
    yield put({
      type: types.TRENDING_ALL_CATEGORIES_LIST_FAILURE,
      payload: error,
    });
  }
}

function* Search_tradie_service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    let loadData = JSON.parse(localStorage.getItem("onloaddata"));
    const result = yield call(
      api.Tradie_search_Service,
      action.payload,
      userInfo,
      loadData
    );

    let tradieData = [];
    result.data.data.data.map((data) => {
      tradieData.push({ ...data, isBtnSelect: false });
    });

    yield put({
      type: types.SEARCH_TRADIE_SERVICE_SUCCESS,
      payload: tradieData,
    });
    yield put({
      type: types.SEARCH_TRADIE_SERVICE_RESET,
    });
  } catch (error) {
    yield put({
      type: types.SEARCH_TRADIE_SERVICE_FAILURE,
      payload: error,
    });
  }
}

function* Search_tradie_onclick_service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
    let loadData = JSON.parse(localStorage.getItem("onloaddata"));
    const result = yield call(
      api.Tradie_Onclick_search_Service,
      action.payload,
      userInfo,
      loadData
    );

    let tradieData = [];
    result.data.data.data.map((data) => {
      tradieData.push({ ...data, isBtnSelect: false });
    });

    yield put({
      type: types.SEARCH_TRADIE_SERVICE_CLICK_SUCCESS,
      payload: tradieData,
    });
    yield put({
      type: types.SEARCH_TRADIE_SERVICE_CLICK_RESET,
    });
  } catch (error) {
    yield put({
      type: types.SEARCH_TRADIE_SERVICE__CLICK_FAILURE,
      payload: error,
    });
  }
}

function* user_to_tradie_request_service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(
      api.user_to_tradie_Service,
      action.payload,
      userInfo
    );

    yield put({
      type: types.USER_JOB_REQUEST_TO_TRADIE_SUCCESS,
      payload: result.data.data,
    });
    yield put({
      type: types.USER_JOB_REQUEST_TO_TRADIE_RESET,
    });
  } catch (error) {
    yield put({
      type: types.USER_JOB_REQUEST_TO_TRADIE_FAILURE,
      payload: error,
    });
  }
}

function* user_leads_service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(api.User_leads_Service, action.payload, userInfo);

    yield put({
      type: types.USER_LEADS_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.USER_LEADS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.USER_LEADS_FAILURE,
      payload: error,
    });
  }
}

function* user_leads_history_service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(
      api.User_leads_history_Service,
      action.payload,
      userInfo
    );

    yield put({
      type: types.USER_LEADS_HISTORY_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.USER_LEADS_HISTORY_RESET,
    });
  } catch (error) {
    yield put({
      type: types.USER_LEADS_HISTORY_FAILURE,
      payload: error,
    });
  }
}
function* user_sinle_lead_service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(
      api.User_Single_lead_Service,
      action.payload,
      userInfo
    );

    yield put({
      type: types.USER_SINGLE_LEAD_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.USER_SINGLE_LEAD_RESET,
    });
  } catch (error) {
    yield put({
      type: types.USER_SINGLE_LEAD_FAILURE,
      payload: error,
    });
  }
}
function* single_tradie_delete_service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(
      api.Single_tradie_delete_Service,
      action.payload,
      userInfo
    );

    yield put({
      type: types.SINGLE_TRADIE_DELETE_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.SINGLE_TRADIE_DELETE_RESET,
    });
  } catch (error) {
    yield put({
      type: types.SINGLE_TRADIE_DELETE_FAILURE,
      payload: error,
    });
  }
}
function* user_job_delete_service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(
      api.user_job_delete_Service,
      action.payload,
      userInfo
    );

    yield put({
      type: types.USER_JOB_DELETE_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.USER_JOB_DELETE_RESET,
    });
  } catch (error) {
    yield put({
      type: types.USER_JOB_DELETE_FAILURE,
      payload: error,
    });
  }
}
function* user_give_review_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(api.user_give_reviews, action.payload, userInfo);

    yield put({
      type: types.USER_GIVE_REVIEW_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.USER_GIVE_REVIEW_RESET,
    });
  } catch (error) {
    yield put({
      type: types.USER_GIVE_REVIEW_FAILURE,
      payload: error,
    });
  }
}
function* user_raise_dispute_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(api.user_rise_disputes, action.payload, userInfo);

    yield put({
      type: types.USER_RAISE_DISPUTE_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.USER_RAISE_DISPUTE_RESET,
    });
  } catch (error) {
    yield put({
      type: types.USER_RAISE_DISPUTE_FAILURE,
      payload: error,
    });
  }
}
function* get_provider_profile_service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(
      api.get_provider_profile_Service,
      action.payload,
      userInfo
    );

    yield put({
      type: types.GET_PROVIDER_PROFILE_SUCCESS,
      payload: result.data.data,
    });
    yield put({
      type: types.GET_PROVIDER_PROFILE_RESET,
    });
  } catch (error) {
    yield put({
      type: types.GET_PROVIDER_PROFILE_FAILURE,
      payload: error,
    });
  }
}
function* provider_get_reviewList_service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(api.provider_get_reviewList_Service, userInfo);

    yield put({
      type: types.GET_PROVIDER_REVIEW_LIST_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.GET_PROVIDER_REVIEW_LIST_RESET,
    });
  } catch (error) {
    yield put({
      type: types.GET_PROVIDER_REVIEW_LIST_FAILURE,
      payload: error,
    });
  }
}
function* send_news_letter_service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(
      api.send_newsletter_Service,
      action.payload,
      userInfo
    );
    successNotification(result);
    yield put({
      type: types.SEND_NEWS_LETTER_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.SEND_NEWS_LETTER_RESET,
    });
  } catch (error) {
    yield put({
      type: types.SEND_NEWS_LETTER_FAILURE,
      payload: error,
    });
  }
}
function* send_contact_form_service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(
      api.send_contact_form_Service,
      action.payload,
      userInfo
    );
    successNotification(result);
    yield put({
      type: types.SEND_CONTACT_FORM_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.SEND_CONTACT_FORM_RESET,
    });
  } catch (error) {
    yield put({
      type: types.SEND_CONTACT_FORM_FAILURE,
      payload: error,
    });
  }
}
function* provider_leads_Saga() {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(api.provider_leads_Service, userInfo);

    yield put({
      type: types.PROVIDER_LEADS_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.PROVIDER_LEADS_RESET,
    });
  } catch (error) {
    yield put({
      type: types.PROVIDER_LEADS_FAILURE,
      payload: error,
    });
  }
}
function* provider_leads_history_Saga() {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(api.provider_leads_history_Service, userInfo);

    yield put({
      type: types.PROVIDER_LEADS_HISTORY_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.PROVIDER_LEADS_HISTORY_RESET,
    });
  } catch (error) {
    yield put({
      type: types.PROVIDER_LEADS_HISTORY_FAILURE,
      payload: error,
    });
  }
}

function* provider_job_accept__service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(
      api.provider_job_accept_Service,
      action.payload,
      userInfo
    );

    yield put({
      type: types.PROVIDER_JOB_ACCEPT_SUCCESS,
      payload: result.data.data,
    });
    yield put({
      type: types.PROVIDER_JOB_ACCEPT_RESET,
    });
  } catch (error) {
    yield put({
      type: types.PROVIDER_JOB_ACCEPT_FAILURE,
      payload: error,
    });
  }
}
function* provider_job_reject__service_Saga(action) {
  try {
    let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));

    const result = yield call(
      api.provider_job_reject_Service,
      action.payload,
      userInfo
    );

    yield put({
      type: types.PROVIDER_JOB_REJECT_SUCCESS,
      payload: result.data.data.data,
    });
    yield put({
      type: types.PROVIDER_JOB_REJECT_RESET,
    });
  } catch (error) {
    yield put({
      type: types.PROVIDER_JOB_REJECT_FAILURE,
      payload: error,
    });
  }
}

export function* directoryWatcher() {
  yield takeLatest(
    types.TRENDING_ALL_CATEGORIES_LIST_REQUEST,
    TrendingListCategories_Saga
  );
  yield takeLatest(
    types.SEARCH_TRADIE_SERVICE_REQUEST,
    Search_tradie_service_Saga
  );
  yield takeLatest(
    types.SEARCH_TRADIE_SERVICE_CLICK_REQUEST,
    Search_tradie_onclick_service_Saga
  );
  yield takeLatest(
    types.USER_JOB_REQUEST_TO_TRADIE_REQUEST,
    user_to_tradie_request_service_Saga
  );
  yield takeLatest(types.USER_LEADS_REQUEST, user_leads_service_Saga);
  yield takeLatest(
    types.USER_SINGLE_LEAD_REQUEST,
    user_sinle_lead_service_Saga
  );
  yield takeLatest(
    types.SINGLE_TRADIE_DELETE_REQUEST,
    single_tradie_delete_service_Saga
  );
  yield takeLatest(types.USER_JOB_DELETE_REQUEST, user_job_delete_service_Saga);
  yield takeLatest(types.USER_GIVE_REVIEW_ACTION, user_give_review_Saga);
  yield takeLatest(types.USER_RAISE_DISPUTE_ACTION, user_raise_dispute_Saga);
  yield takeLatest(
    types.GET_PROVIDER_PROFILE_REQUEST,
    get_provider_profile_service_Saga
  );
  yield takeLatest(
    types.GET_PROVIDER_REVIEW_LIST_REQUEST,
    provider_get_reviewList_service_Saga
  );
  yield takeLatest(
    types.SEND_NEWS_LETTER_REQUEST,
    send_news_letter_service_Saga
  );
  yield takeLatest(
    types.SEND_CONTACT_FORM_REQUEST,
    send_contact_form_service_Saga
  );
  yield takeLatest(types.PROVIDER_LEADS_REQUEST, provider_leads_Saga);
  yield takeLatest(
    types.PROVIDER_JOB_ACCEPT_REQUEST,
    provider_job_accept__service_Saga
  );
  yield takeLatest(
    types.PROVIDER_JOB_REJECT_REQUEST,
    provider_job_reject__service_Saga
  );
  yield takeLatest(
    types.PROVIDER_LEADS_HISTORY_REQUEST,
    provider_leads_history_Saga
  );
  yield takeLatest(
    types.USER_LEADS_HISTORY_REQUEST,
    user_leads_history_service_Saga
  );
}
