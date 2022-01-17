import React from "react";
import tradie_directory_3 from "../../assets/images/user.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Actions from "../../redux/directory/action";
const CategoryInfo = ({ fullName, serviceName, picture, id, about }) => {
  const dispatch = useDispatch();
  const { get_provider_profile_request } = Actions;
  const history = useHistory();

  const handleChangeRoute = (tradieId) => {
    history.push(`/tradie-public-profile/${tradieId}`);
    dispatch(get_provider_profile_request({ provider_id: tradieId }));
  };

  return (
    <div
      className="tradies-item tradies-item--row"
      style={{ cursor: "pointer" }}
      onClick={() => {
        handleChangeRoute(id);
      }}
    >
      <div className="tradies-item__image">
        <img
          src={
            picture
              ? `https://api.tapatradie.com/uploads/` + picture
              : tradie_directory_3
          }
          alt="no image"
        />
      </div>
      <div>
        <h4 className="tradies-item__name">{fullName}</h4>
        <ul className="tradies-item__specialties">
          <li>Builder</li>
          <li>{serviceName}</li>
        </ul>
      </div>

      <p className="tradies-item__description">{about}</p>
    </div>
  );
};
export default CategoryInfo;
