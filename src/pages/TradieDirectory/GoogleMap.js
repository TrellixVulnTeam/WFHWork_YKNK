import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import dummyUser from "../../assets/images/user.png";
import mapStyles from "./mapStyles";
import { AiFillStar } from "react-icons/ai";

function Map() {
  const history = useHistory();
  const [selectedPark, setSelectedPark] = useState(null);
  const { searchingTradie } = useSelector((state) => state.directory);
  let SearchAllData = JSON.parse(localStorage.getItem("SearchAllData"));

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  const submitTradieRequest = (id) => {
    history.push({
      pathname: "/tradie-request",
      state: {
        id: [id],
      },
    });
  };
  const RedirectToTradie = (id) => {
    history.push("/tradie-public-profile/" + id);
  };

 
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat: SearchAllData?.latitude,
        lng: SearchAllData?.longitude,
      }}

      //   defaultOptions={{ styles: mapStyles }}
    >
      {searchingTradie?.map((park) => (
        <Marker
          key={park.id}
          position={{
            lat: Number(park.latitude),
            lng: Number(park.longitude),
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
          //   icon={{
          //     url: `/skateboarding.svg`,
          //     scaledSize: new window.google.maps.Size(25, 25),
          //   }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: Number(selectedPark.latitude),
            lng: Number(selectedPark.longitude),
          }}
        >
          <div className="find-info-modal">
            <div
              className="profile-icon"
              onClick={() => RedirectToTradie(selectedPark?.id)}
            >
              <img
                src={
                  selectedPark?.profile_pic
                    ? `https://api.tapatradie.com/profile/${selectedPark?.id}/` +
                      selectedPark?.profile_pic
                    : dummyUser
                }
                alt=""
              />
            </div>

            <h2 onClick={() => RedirectToTradie(selectedPark?.id)}>
              {selectedPark?.full_name?.charAt(0).toUpperCase() +
                selectedPark?.full_name?.slice(1)}
              <br />
              <p>
                {selectedPark.service_name}
                {selectedPark?.rating ? (
                  <span>
                    {" "}
                    <AiFillStar />
                    {Math.round(Number(selectedPark?.rating) * 10) / 10}{" "}
                  </span>
                ) : (
                  ""
                )}
              </p>
            </h2>

            <button
              className="btn-primary font-m"
              onClick={() => {
                submitTradieRequest(selectedPark?.id);
              }}
            >
              Request
            </button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GoogleMapss() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDT6N5TjyH0MjDRAcYLGuiL1otostkeYhs`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
