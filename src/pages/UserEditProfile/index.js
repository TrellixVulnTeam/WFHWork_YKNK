import React, { useState } from "react";
import Select from "react-select";
import * as Actions from "../../redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/icons/icon-cancelpopup.svg";
import Upload from "../../assets/icons/user.png";
// Handling Form with Formik
import { Formik, Form } from "formik";
// Handling Form Validation with yup
import * as Yup from "yup";

const Pop1 = () => {
  const { userData, editProfile } = useSelector((state) => state.auth);
  const {
    full_name,
    email,
    mobile,
    profile_pic,
    id,
    country_code,
    online_address,
  } = userData;

  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();

  const [redirectpop2, setRedirectpop2] = useState(false);
  const [uploadImg, setUploadImg] = useState("");
  const {
    Signup_User_Completion_Action,
    User_Profile_Get_Information_Action,
    upload_user_Profile_picture_Action,
  } = Actions;

  const initialValues = {
    fullNamee: full_name,
    EmailAddress: email,
    country_code: country_code,
    number: mobile,
    address: online_address,
  };
  const validationSchema = Yup.object().shape({
    fullNamee: Yup.string().required("Full Namee is required"),
    EmailAddress: Yup.string().required("Email is required").email(),
    country_code: Yup.string()
      .required("Country code is required")
      .min(2)
      .max(5),
    number: Yup.string().required("Number is required").min(6).max(16),
    address: Yup.string().required("address is required"),
  });

  const handleSubmit = (data) => {
    dispatch(Signup_User_Completion_Action(data));
  };

  if (editProfile === "Data successfully updated.") {
    return <Redirect to="/user-profile" />;
  }

  const showMyImage = (fileInput) => {
    var files = fileInput.files;
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var imageType = /image.*/;
      if (!file.type.match(imageType)) {
        continue;
      }
      var img = document.getElementById("thumbnil");
      var imageClose = document.getElementById("imageClose");
      img.file = file;
      var reader = new FileReader();
      reader.onload = (function (aImg) {
        return function (e) {
          aImg.src = e.target.result;
          imageClose.style.opacity = "1";
        };
      })(img);
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    var img = document.getElementById("thumbnil");
    var imageClose = document.getElementById("imageClose");
    imageClose.style.opacity = "0";
    img.src = Upload;
    setUploadImg("");
  };

  const fileToDataUri = (image) => {
    return new Promise((res) => {
      const reader = new FileReader();
      const { type, name, size } = image;
      reader.addEventListener("load", () => {
        res({
          base64: reader.result,
          name: name,
          type,
          size: size,
        });
      });
      reader.readAsDataURL(image);
    });
  };

  const handleImageChangeInput = async (event) => {
    const { target } = event;
    const file = [target.files[0]];
    const newImagesPromises = [];
    for (let i = 0; i < target.files.length; i++) {
      newImagesPromises.push(fileToDataUri(target.files[i]));
    }
    const newImages = await Promise.all(newImagesPromises);
    // console.log("files ", file[0]);
    dispatch(upload_user_Profile_picture_Action(file));
  };

  return (
    <div>
      <section className="user-info-modal popup">
        <br />
        <Formik
          enableReinitialize="true"
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(formik, isSubmitting) => {
            return (
              <Form autoComplete="off" className="popup__form">
                {/* <form className="popup__form" onSubmit={handleSubmit(onSubmit)}> */}
                <h2>
                  Edit Your Details
                  <span
                    onClick={(e) => {
                      e.target.parentElement.parentElement.parentElement.style.display =
                        "none";
                      history.push("/user-profile");
                    }}
                    className="Closesvg"
                  >
                    <Close width="30px" height="30px" />
                  </span>
                </h2>

                <div className="input-group" style={{ marginBottom: "1rem" }}>
                  <p>Upload Profile pic</p>
                  <br />
                  <div
                    id="imageClose"
                    style={{ opacity: "0" }}
                    onClick={() => {
                      handleRemoveImage();
                    }}
                  >
                    <Close width="15px" height="15px" />
                  </div>
                  <label for="file-input">
                    <img
                      id="thumbnil"
                      className="userProfile"
                      src={
                        profile_pic === ""
                          ? Upload
                          : `https://api.tapatradie.com/uploads/` + profile_pic
                      }
                    />
                  </label>

                  <input
                    value={uploadImg}
                    id="file-input"
                    type="file"
                    style={{ display: "none" }}
                    {...register("uploadImage", {})}
                    onChange={(e) => {
                      showMyImage(e.target);

                      handleImageChangeInput(e);
                    }}
                  />
                </div>
                <br />
                <div className="input-group" style={{ marginBottom: "1rem" }}>
                  <input
                    placeholder="Full name"
                    type="text"
                    name="fullNamee"
                    onChange={formik.handleChange}
                    value={
                      formik.values.fullNamee?.charAt(0).toUpperCase() +
                      formik.values.fullNamee?.slice(1)
                    }
                  />
                </div>

                {formik.errors.fullNamee && formik.touched.fullNamee ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.fullNamee}{" "}
                  </span>
                ) : null}

                <br />
                <div className="input-group" style={{ marginBottom: "1rem" }}>
                  <input
                    placeholder="Email"
                    type="Email"
                    name="EmailAddress"
                    onChange={formik.handleChange}
                    value={formik.values.EmailAddress}
                  />
                </div>
                {formik.errors.EmailAddress && formik.touched.EmailAddress ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.EmailAddress}{" "}
                  </span>
                ) : null}
                <br />

                <div
                  className="input-group"
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Country Code"
                    name="country_code"
                    onChange={formik.handleChange}
                    value={formik.values.country_code}
                  />
                  <input
                    type="number"
                    placeholder="Number"
                    name="number"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                  />
                </div>
                {formik.errors.number && formik.touched.number ? (
                  <span style={{ color: "red" }}>{formik.errors.number} </span>
                ) : null}
                <br />
                <div className="input-group" style={{ marginBottom: "1rem" }}>
                  <input
                    placeholder="Address"
                    type="text"
                    name="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                </div>
                {formik.errors.address && formik.touched.address ? (
                  <span style={{ color: "red" }}>{formik.errors.address} </span>
                ) : null}
                <br />
                <br />
                <button type="submit" className="btn-primary">
                  Save
                </button>
                {/* </form> */}
              </Form>
            );
          }}
        </Formik>
      </section>
    </div>
  );
};
export default Pop1;
