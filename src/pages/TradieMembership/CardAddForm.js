import React, { useState } from "react";
// Handling Form with Formik
import { Formik, Form } from "formik";
// Handling Form Validation with yup
import * as Yup from "yup";
import { Button, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const CardAddForm = ({ link, subsId }) => {
  const history = useHistory();
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
  const [loading, setLoading] = useState(true);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: "my-auth-token",
    },
  };

  const initialValues = {
    card_number: "",
    exp_month: "",
    exp_year: "",
    cvv: "",
  };

  const validationSchema = Yup.object().shape({
    card_number: Yup.string()
      .required("Card Number is required")
      .min(13)
      .max(16),
    // .matches(/^4[0-9]{12}(?:[0-9]{3})?$/, "Please Enter Valid Card Number"),
    exp_month: Yup.string()
      .required("MM is required")
      .matches(/^(0?[1-9]|1[012])$/, "Invalid Month"),
    exp_year: Yup.string()
      .required("YYYY is required")
      .matches(/(?:(?:20|20)[0-9]{2})/, "Invalid Year")
      .max(4)
      .min(4),
    cvv: Yup.string().required("CVV is required").max(3).min(3),
  });
  //   var UserData = {
  //     access_token: userInfo.access_token,
  //     device_id: userInfo.device_id,
  //     api_key: userInfo.api_key,
  //     device_type: userInfo.device_type,
  //     uid: userInfo.uid,
  //   };
  console.log("userInfo :", userInfo);
  const handleSubmit = (values) => {
    setLoading(false);
    var UserData = {
      access_token: userInfo.access_token,
      device_id: userInfo.device_id,
      api_key: userInfo.api_key,
      device_type: userInfo.device_type,
      uid: userInfo.uid,
      card_number: values.card_number,
      exp_month: values.exp_month,
      exp_year: values.exp_year,
      cvv: values.cvv,
    };
    axios
      .post(
        "https://api.tapatradie.com/api/create-card-token",
        UserData,
        config
      )
      .then((res) => {
        if (res?.data?.success == 1) {
          const data = {
            access_token: userInfo.access_token,
            device_id: userInfo.device_id,
            api_key: userInfo.api_key,
            device_type: userInfo.device_type,
            uid: userInfo.uid,
            // live
            // plan_id: "price_1KTfYGHKYdiVnQytk8ktdUfa",
            //Test
            plan_id: "price_1KRAp7HKYdiVnQyt9gXuPknK",
            token: res?.data?.token,
            id: subsId,
          };
          axios
            .post(
              "https://api.tapatradie.com/api/subscription-payment",
              data,
              config
            )
            .then((res) => {
              if (res?.data?.success == 1) {
                setLoading(true);
                toast.success(res?.data?.message, {
                  position: "bottom-left",
                  autoClose: 3000,
                  size: "small",
                });
                history.push(link ? link : "/");
              } else {
                setLoading(true);
                toast.error(res?.data?.message, {
                  position: "bottom-left",
                  autoClose: 3000,
                  size: "small",
                });
              }
            });
        } else {
          setLoading(true);
          toast.error(res?.data?.message, {
            position: "bottom-left",
            autoClose: 3000,
            size: "small",
          });
        }
      });
  };
  return (
    <div className="formDiv">
      <Formik
        enableReinitialize="true"
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik, isSubmitting) => {
          return (
            <Form autoComplete="off">
              <div className="ContainerInput">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <input
                      type="tel"
                      placeholder="Card Number"
                      name="card_number"
                      onChange={formik.handleChange}
                      value={formik.values.card_number}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {" "}
                      {formik.errors.card_number &&
                      formik.touched.card_number ? (
                        <div>{formik.errors.card_number}</div>
                      ) : null}
                    </span>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <input
                      type="tel"
                      placeholder="MM"
                      name="exp_month"
                      onChange={formik.handleChange}
                      value={formik.values.exp_month}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {" "}
                      {formik.errors.exp_month && formik.touched.exp_month ? (
                        <div>{formik.errors.exp_month}</div>
                      ) : null}
                    </span>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <input
                      type="tel"
                      placeholder="YYYY"
                      name="exp_year"
                      onChange={formik.handleChange}
                      value={formik.values.exp_year}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {" "}
                      {formik.errors.exp_year && formik.touched.exp_year ? (
                        <div>{formik.errors.exp_year}</div>
                      ) : null}
                    </span>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <input
                      type="tel"
                      placeholder="CVV"
                      name="cvv"
                      onChange={formik.handleChange}
                      value={formik.values.cvv}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {" "}
                      {formik.errors.cvv && formik.touched.cvv ? (
                        <div>{formik.errors.cvv}</div>
                      ) : null}
                    </span>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={6} mt={2}>
                  {loading ? (
                    <Button
                      variant="warning"
                      type="submit"
                      className="subscribeBtn"
                    >
                      Subscribe
                    </Button>
                  ) : (
                    <div className="upload-profile-loader">
                      <CircularProgress />
                    </div>
                  )}
                </Grid>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CardAddForm;
