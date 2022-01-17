import * as types from "./types";

const initState = {
  loading: false,
  success: false,
  trendingCategories: [],
  searchingTradie: [],
  searchLocation: false,
  userLeads: [],
  singleLead: [],
  singleTradieRes: "",
  reviewRes: "",
  disputeRes: "",
  userTradieReqRes: "",
  getProviderProfile: [],
  getProviderReviewList: [],
  providerLeads: [],
  providerJobAccept: [],
  providerJobReject: [],
  providerLeadsHistory: [],
  userLeadHistory: [],
};

const directoryReducer = (state = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    // TRENDING_ALL_CATEGORIES_LIST_REQUEST
    case types.TRENDING_ALL_CATEGORIES_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // TRENDING_ALL_CATEGORIES_LIST_SUCCESS
    case types.TRENDING_ALL_CATEGORIES_LIST_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        trendingCategories: payload,
      };
    // TRENDING_ALL_CATEGORIES_LIST_RESET
    case types.TRENDING_ALL_CATEGORIES_LIST_RESET:
      return {
        ...state,
        loading: false,
      };
    // TRENDING_ALL_CATEGORIES_LIST_FAILURE
    case types.TRENDING_ALL_CATEGORIES_LIST_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // SEARCH_TRADIE_SERVICE_REQUEST
    case types.SEARCH_TRADIE_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // SEARCH_TRADIE_SERVICE_SUCCESS
    case types.SEARCH_TRADIE_SERVICE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        searchingTradie: payload,
      };
    // SEARCH_TRADIE_SERVICE_RESET
    case types.SEARCH_TRADIE_SERVICE_RESET:
      return {
        ...state,
        loading: false,
      };
    // SEARCH_TRADIE_SERVICE_FAILURE
    case types.SEARCH_TRADIE_SERVICE_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // SEARCH_TRADIE_SERVICE_CLICK_REQUEST
    case types.SEARCH_TRADIE_SERVICE_CLICK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // SEARCH_TRADIE_SERVICE_CLICK_SUCCESS
    case types.SEARCH_TRADIE_SERVICE_CLICK_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        searchingTradie: payload,
        searchLocation: true,
      };
    // SEARCH_TRADIE_SERVICE_CLICK_RESET
    case types.SEARCH_TRADIE_SERVICE_CLICK_RESET:
      return {
        ...state,
        loading: false,
      };
    // SEARCH_TRADIE_SERVICE__CLICK_FAILURE
    case types.SEARCH_TRADIE_SERVICE__CLICK_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // SELECTED_TRADIE_PROFILE_ID_REQUEST
    case types.SELECTED_TRADIE_PROFILE_ID_REQUEST:
      state.searchingTradie.filter((tradiefilterData) => {
        if (
          tradiefilterData.id === payload &&
          tradiefilterData.isBtnSelect === true
        ) {
          tradiefilterData.isBtnSelect = false;
        } else if (
          tradiefilterData.id === payload &&
          tradiefilterData.isBtnSelect === false
        ) {
          tradiefilterData.isBtnSelect = true;
        }
      });
      return {
        ...state,
        searchingTradie: state.searchingTradie,
      };

    // SELECTED__TO_ALL_TRADIE_PROFILE_ID_REQUEST
    case types.SELECTED__TO_ALL_TRADIE_PROFILE_ID_REQUEST:
      state.searchingTradie.filter((tradiefilterData) => {
        if (tradiefilterData.id) {
          tradiefilterData.isBtnSelect = true;
        }
      });
      return {
        ...state,
        searchingTradie: state.searchingTradie,
      };

    // USER_JOB_REQUEST_TO_TRADIE_SUCCESS
    case types.USER_JOB_REQUEST_TO_TRADIE_SUCCESS:
      return {
        ...state,
        userTradieReqRes: payload,
      };
    // USER_LEADS_REQUEST
    case types.USER_LEADS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // USER_LEADS_SUCCESS
    case types.USER_LEADS_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        userLeads: payload,
      };
    // USER_LEADS_RESET
    case types.USER_LEADS_RESET:
      return {
        ...state,
        loading: false,
      };
    // USER_LEADS_FAILURE
    case types.USER_LEADS_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // USER_LEADS_HISTORY_REQUEST
    case types.USER_LEADS_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // USER_LEADS_HISTORY_SUCCESS
    case types.USER_LEADS_HISTORY_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        userLeadHistory: payload,
      };
    // USER_LEADS_HISTORY_RESET
    case types.USER_LEADS_HISTORY_RESET:
      return {
        ...state,
        loading: false,
      };
    // USER_LEADS_HISTORY_FAILURE
    case types.USER_LEADS_HISTORY_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // USER_SINGLE_LEAD_REQUEST
    case types.USER_SINGLE_LEAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // USER_SINGLE_LEAD_SUCCESS
    case types.USER_SINGLE_LEAD_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        singleLead: [payload],
      };
    // USER_SINGLE_LEAD_RESET
    case types.USER_SINGLE_LEAD_RESET:
      return {
        ...state,
        loading: false,
      };
    // USER_SINGLE_LEAD_FAILURE
    case types.USER_SINGLE_LEAD_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // SINGLE_TRADIE_DELETE_REQUEST
    case types.SINGLE_TRADIE_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // SINGLE_TRADIE_DELETE_SUCCESS
    case types.SINGLE_TRADIE_DELETE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        singleTradieRes: payload,
      };
    // SINGLE_TRADIE_DELETE_RESET
    case types.SINGLE_TRADIE_DELETE_RESET:
      return {
        ...state,
        loading: false,
      };
    // SINGLE_TRADIE_DELETE_FAILURE
    case types.SINGLE_TRADIE_DELETE_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // USER_JOB_DELETE_REQUEST
    case types.USER_JOB_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // USER_JOB_DELETE_SUCCESS
    case types.USER_JOB_DELETE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        // singleLead: payload
      };
    // USER_GIVE_REVIEW_SUCCESS
    case types.USER_GIVE_REVIEW_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        reviewRes: payload,
      };
    // USER_RAISE_DISPUTE_SUCCESS
    case types.USER_RAISE_DISPUTE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        disputeRes: payload,
      };
    // USER_JOB_DELETE_RESET
    case types.USER_JOB_DELETE_RESET:
      return {
        ...state,
        loading: false,
      };
    // USER_JOB_DELETE_FAILURE
    case types.USER_JOB_DELETE_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // GET_PROVIDER_PROFILE_REQUEST
    case types.GET_PROVIDER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // GET_PROVIDER_PROFILE_SUCCESS
    case types.GET_PROVIDER_PROFILE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        getProviderProfile: [payload],
      };
    // GET_PROVIDER_PROFILE_RESET
    case types.GET_PROVIDER_PROFILE_RESET:
      return {
        ...state,
        loading: false,
      };
    // GET_PROVIDER_PROFILE_FAILURE
    case types.GET_PROVIDER_PROFILE_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // GET_PROVIDER_REVIEW_LIST_REQUEST
    case types.GET_PROVIDER_REVIEW_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // GET_PROVIDER_REVIEW_LIST_SUCCESS
    case types.GET_PROVIDER_REVIEW_LIST_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        getProviderReviewList: payload,
      };
    // GET_PROVIDER_REVIEW_LIST_RESET
    case types.GET_PROVIDER_REVIEW_LIST_RESET:
      return {
        ...state,
        loading: false,
      };
    // GET_PROVIDER_REVIEW_LIST_FAILURE
    case types.GET_PROVIDER_REVIEW_LIST_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // PROVIDER_LEADS_REQUEST
    case types.PROVIDER_LEADS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // PROVIDER_LEADS_SUCCESS
    case types.PROVIDER_LEADS_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        providerLeads: payload,
      };
    // PROVIDER_LEADS_RESET
    case types.PROVIDER_LEADS_RESET:
      return {
        ...state,
        loading: false,
      };
    // PROVIDER_LEADS_FAILURE
    case types.PROVIDER_LEADS_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // PROVIDER_LEADS_HISTORY_REQUEST
    case types.PROVIDER_LEADS_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // PROVIDER_LEADS_HISTORY_SUCCESS
    case types.PROVIDER_LEADS_HISTORY_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        providerLeadsHistory: payload,
      };
    // PROVIDER_LEADS_HISTORY_RESET
    case types.PROVIDER_LEADS_HISTORY_RESET:
      return {
        ...state,
        loading: false,
      };
    // PROVIDER_LEADS_HISTORY_FAILURE
    case types.PROVIDER_LEADS_HISTORY_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // PROVIDER_JOB_ACCEPT_REQUEST
    case types.PROVIDER_JOB_ACCEPT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // PROVIDER_JOB_ACCEPT_SUCCESS
    case types.PROVIDER_JOB_ACCEPT_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        providerJobAccept: payload,
      };
    // PROVIDER_JOB_ACCEPT_RESET
    case types.PROVIDER_JOB_ACCEPT_RESET:
      return {
        ...state,
        loading: false,
      };
    // PROVIDER_JOB_ACCEPT_FAILURE
    case types.PROVIDER_JOB_ACCEPT_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    // PROVIDER_JOB_REJECT_REQUEST
    case types.PROVIDER_JOB_REJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // PROVIDER_JOB_REJECT_SUCCESS
    case types.PROVIDER_JOB_REJECT_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        providerJobReject: payload,
      };
    // PROVIDER_JOB_REJECT_RESET
    case types.PROVIDER_JOB_REJECT_RESET:
      return {
        ...state,
        loading: false,
      };
    // PROVIDER_JOB_REJECT_FAILURE
    case types.PROVIDER_JOB_REJECT_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
      };

    default:
      return state;
  }
};
export default directoryReducer;
