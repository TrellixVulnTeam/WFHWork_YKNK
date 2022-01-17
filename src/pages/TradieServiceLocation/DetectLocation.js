import React, { Component } from "react";

// Importing geolocated reducer function
import { geolocated } from "react-geolocated";

function DetectLocation(props) {
  // Check geolocation supported in
  // browser or not
  return props.isGeolocationAvailable ? (
    // Check location is enable in
    // browser or not
    props.isGeolocationEnabled ? (
      // Check coordinates of current
      // location is available or not
      props.coords ? (
        <div>
          <h1 style={{ color: "green" }}>GeeksForGeeks</h1>
          <h3 style={{ color: "red" }}>
            Current latitude and longitude of the user is
          </h3>
          <ul>
            <li>
              latitude -{" "}
              {props.setDetectButton({
                latitude: props.coords.latitude,
                longitude: props.coords.longitude,
              })}
            </li>
            <li>longitude - {props.coords.longitude}</li>
          </ul>
        </div>
      ) : (
        <h1>Getting the location data</h1>
      )
    ) : (
      <h1>Please enable location on your browser</h1>
    )
  ) : (
    <h1>Please, update your or change the browser </h1>
  );
}

// Binding geolocated() reducer function to
// App component, while exporting it
export default geolocated()(DetectLocation);
