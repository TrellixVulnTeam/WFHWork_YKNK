import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function ChangeProfile() {
  const history = useHistory();
  const [imgs, setImgs] = useState([]);
  let userInfo = JSON.parse(localStorage.getItem("tepatredieUserInfo"));
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: "my-auth-token",
    },
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("image", imgs[0]);
    formData.append("access_token", userInfo.access_token); //append the values with key, value pair
    formData.append("api_key", userInfo.api_key);
    // formData.append("device_id", userInfo.device_id);
    formData.append("device_type", userInfo.device_type);
    formData.append("uid", userInfo.uid);
    formData.append("length", imgs.length);
    
    axios
      .post(
        "https://api.tapatradie.com/api/upload-profile-picture",
        formData,
        config
      )
      .then((res) => {
        if (res.data.success === 1) {
          history.push("/tradie-my-profile");
          toast.success(res.data.message, {
            position: "bottom-left",
            autoClose: 2000,
            size: "small",
          });
        }
      });
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
            <div style={{ width: "40%" }}>
              <input
                name="profileImage"
                type="file"
                placeholder="Choose Profile"
                onChange={(e) => setImgs([e.target.files[0]])}
              />
            </div>
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
