import axios from "axios";

const { REACT_APP_URL } = process.env;

export const sendPostRequest = async (body, link, config) => {
  let data;
  try {
    await axios
      .post(`https://api.tapatradie.com/api${link}`, body, config)
      .then((response) => {
        data = response;
      });
  } catch (error) {
    console.log(error);
  }
  return { data };
};
export const sendPostRequestNew = async (body, link, config) => {
  let data;
  try {
    await axios
      .post(`${link}`, body, config)
      .then((response) => {
        data = response;
      });
  } catch (error) {
    console.log(error);
  }
  return { data };
};
