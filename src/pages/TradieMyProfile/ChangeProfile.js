import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import PreviewImage from "./PreviewImage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function ChangeProfile() {
  const history = useHistory();
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(true);
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: "my-auth-token",
    },
  };
  const handleSubmit = async () => {
    setLoading(false);
    const formData = new FormData();
    formData.append("image", imgs[0]);
    formData.append("access_token", userInfo.access_token); //append the values with key, value pair
    formData.append("api_key", userInfo.api_key);
    // formData.append("device_id", userInfo.device_id);
    formData.append("device_type", userInfo.device_type);
    formData.append("uid", userInfo.uid);
    formData.append("length", imgs.length);

    const response = await axios
      .post(
        "https://api.tapatradie.com/api/upload-profile-picture",
        formData,
        config
      )
      .then((res) => res.data)
      .catch((err) => console.log(err));
    if (response) {
      setLoading(true);
    }
    if (response?.success === 1) {
      history.push("/tradie-my-profile");
      toast.success(response.message, {
        position: "bottom-left",
        autoClose: 2000,
        size: "small",
      });
    }
  };
  return (
    <div>
      <Header />
      <Card
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div className="input-group">
          <div className="input-group__city-number-inputs">
            <center>
              <div style={{ width: "11rem" }}>
                {imgs.length > 0 ? <PreviewImage imgs={imgs} /> : ""}
              </div>
            </center>
            {!loading ? (
              <center>
                <CircularProgress />
                loading..
              </center>
            ) : (
              <div style={{ width: "40%" }}>
                <input
                  name="profileImage"
                  type="file"
                  placeholder="Choose Profile"
                  onChange={(e) => setImgs([e.target.files[0]])}
                />
              </div>
            )}
          </div>
        </div>
        <div className="input-group">
          <button
            type="submit"
            className="btn-primary"
            style={{ cursor: "pointer" }}
            onClick={handleSubmit}
          >
            Upload
          </button>
        </div>
      </Card>
      <Footer />
    </div>
  );
}

export default ChangeProfile;
