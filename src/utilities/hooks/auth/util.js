import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

export const setAccessToken = (token) => {
	Cookies.set('token', token);
};

export const getAccessToken = () => {
	return Cookies.get('token');
};
export const removeAccessToken = () => {
	return Cookies.remove('token')
};

export const isAuthenticated = () => {
	if (getAccessToken()) {
		return true;
	} else {
		return false;
	}
};

export const setCookiePolicy = () => {
	let expireDate = new Date();
	expireDate.setFullYear(expireDate.getFullYear(), expireDate.getMonth() + 6);
	Cookies.set('cookiepolicy', 'true', expireDate);
};

export const getCookiePolicy = () => {
	return Cookies.get('cookiepolicy');
};

export const isCookiePolicy = () => {
	if (getCookiePolicy()) {
		return true;
	} else {
		return false;
	}
};

export const decodeJwtToken = (token) => {
	return jwt_decode(token);
};

export const setLocalStorageAccessToken = (info) => {
	localStorage.setItem('tepatredieUserInfo', JSON.stringify(info));
};

export const getLocalStorageAccessToken = () => {
	return JSON.parse(localStorage.getItem('tepatredieUserInfo'));
};
//service search info
export const setLocalStorageAccessSearchInfo = (search) => {
	localStorage.setItem('tradiesearch', JSON.stringify(search));
};

export const getLocalStorageAccessSearchInfo = () => {
	return JSON.parse(localStorage.getItem('tradiesearch'));
};

export const isGenerateAccessToken = () => {
	if (getLocalStorageAccessToken()) {
		return true;
	} else {
		return false;
	}
};

//service load on link set load data
export const setLocalStorageAccessLoadSearchInfo = (search) => {
	localStorage.setItem('onloaddata', JSON.stringify(search));
};

export const getLocalStorageAccessLoadSearchInfo = () => {
	return JSON.parse(localStorage.getItem('onloaddata'));
};
