import React, { Fragment, useState } from "react";

const PreviewImage = ({ imgs }) => {
  const [preview, setPreview] = useState();

  const reader = new FileReader();
  if (imgs) {
    reader.readAsDataURL(imgs[0]);
  }
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <Fragment>
      {preview ? (
        <img
          src={preview}
          alt=""
          style={{ height: "100%", width: "100%", borderRadius: "10%" }}
        />
      ) : (
        "loading.."
      )}
    </Fragment>
  );
};

export default PreviewImage;
