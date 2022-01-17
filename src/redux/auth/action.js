import * as types from './types';

export const generateAccessToken_Action = () => {
	return {
		type: types.GENERATE_ACCESS_TOKEN_REQUEST
	};
};

export const updateAccessToken_Action = () => {
	return {
		type: types.UPDATE_ACCESS_TOKEN_REQUEST
	};
};

export const otpRegister_Action = (data) => {
	return {
		type: types.OPT_REGISTER_REQUEST,
		payload: data
	};
};
export const otpLogin_Action = (data) => {
	return {
		type: types.OTP_LOGIN_REQUEST,
		payload: data
	};
};
export const verify_otp_Action = (data) => {
	return {
		type: types.VERIFY_OTP_REQUEST,
		payload: data
	};
};

export const test_verify_otp_Action = (data) => {
	return {
		type: types.TEST_VERIFY_OTP_REQUEST,
		payload: data
	};
};

export const cookiePolicy_Action = (data) => {
	return {
		type: types.COOKIE_POLICY,
		payload: data
	};
};
export const faceBookLogin_Action = (data) => {
	return {
		type: types.FACEBOOK_LOGIN_REQUEST,
		payload: data
	};
};
export const Reset_Signup_Otp_Action = (data) => {
	return {
		type: types.RESET_SIGNUP_OTP_REQUEST,
		payload: data
	};
};

export const Reset_Login_Otp_Action = (data) => {
	return {
		type: types.RESET_SIGNUP_OTP_REQUEST,
		payload: data
	};
};
// provider-profile-update
export const User_Profile_Update_Action = (data) => {
	return {
		type: types.UPDATE_PROFILE_VERIFICATION_REQUEST,
		payload: data
	};
};
//get_pofile_information
export const User_Profile_Get_Information_Action = () => {
	return {
		type: types.GET_PROFILE_INFORMATION_REQUEST
	};
};
// /provider-profile-steps
export const Profile_steps_Action = () => {
	return {
		type: types.PROFILE_STEPS_REQUEST
	};
};

// /provider-register-step2
export const Profile_Provider_Register_Action = (data) => {
	return {
		type: types.PROFILE_PROVIDER_REGISTER_REQUEST,
		payload: data
	};
};

//get business details
export const Get_Business_Details_Action = () => {

	return {
		type: types.GET_BUSINESSS_DETAILS_REQUEST
	};
};
//business details update
export const Get_Business_Details_Update_Action = (data) => {
	return {
		type: types.BUSINESSS_DETAILS_UPDATE_REQUEST,
		payload: data
	};
};
//image gllary list
export const Get_Image_list_Action = (data) => {
	return {
		type: types.PROVIDER_GALLARY_LIST_REQUEST,
		payload: data
	};
};
//delete action
export const Image_list_Delete_Action = (data) => {
	return {
		type: types.PROVIDER_GALLARY_DELETE_REQUEST,
		payload: data
	};
};

//upload api
export const Image_Upload_Action = (data) => {
	return {
		type: types.IMAGE_UPLOAD_REQUEST,
		payload: data
	};
};
//service list
export const Get_Service_list_Action = (data) => {
	return {
		type: types.GET_SERVICE_LIST_REQUEST,
		payload: data
	};
};
//Get User Address
export const Get_User_Address_Action = (data) => {
	return {
		type: types.GET_USER_ADDRESS_REQUEST,
		payload: data
	};
};
//provider-add-address
export const Get_Provider_Address_Action = (data) => {
	return {
		type: types.GET_PROVIDER_ADDRESS_REQUEST,
		payload: data
	};
};
//provider assign service
export const Provider_Asssign_Service_Action = (data) => {
	return {
		type: types.PROVIDER_ASSIGN_POP3_REQUEST,
		payload: data
	};
};

//Youtube tradie video search
export const tradieTV_video_search_action = (data) => {
	return {
		type: types.PROVIDER_ASSIGN_POP3_REQUEST,
		payload: data
	};
};
export const Logout_Action = () => {
	return {
		type: types.LOGOUT__REQUEST
	};
};
export const Signup_User_Enter_Name_Action = (data) => {
	return {
		type: types.SIGNUP_USER_ENTER_NAME_REQUEST,
		payload: data
	};
};
export const Signup_User_Completion_Action = (data) => {
	return {
		type: types.SIGNUP_USER_COMPLETION_REQUEST,
		payload: data
	};
};
export const otp_State_Change_Action = (data) => {
	return {
		type: types.OPT_STATE_CHANGE,
		payload: data
	};
};
export const otp_StateReg_Change_Action = (data) => {
	return {
		type: types.OPT_STATE_REG_CHANGE,
		payload: data
	};
};
export const getCountryList_Action = (data) => {
	return {
		type: types.GET_COUNTRY_LIST_REQUEST,
		payload: data
	};
};
export const upload_user_Profile_picture_Action = (data) => {
	return {
		type: types.UPLOAD_USER_PROFILE_PICTURE_REQUEST,
		payload: data
	};
};
export const change_blogs_article_Action = (data) => {
	return {
		type: types.CHANGE_BLOGS_ARTICLE,
		payload: data
	};
};
export const submitForApproval = (data) => {
	return {
		type: types.SUBMIT_FOR_APPROVAL,
		payload: data
	};
};


