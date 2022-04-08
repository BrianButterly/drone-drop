import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Form } from "react-bootstrap";

function Signup() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    console.log(ll);
    setAddress(value);
    setCoordinates(ll);
  };

  return (
    <div
      style={{
        backgroundColor: "#EBF0F6",
        borderRadius: "1em",
        padding: "1em",
        color: "#1E9DB9",
        fontWeight: 700,
        marginBottom: "-1em",
      }}
    >
      <h4>geo-location</h4>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div key={suggestions.description}>
            <Form.Control
              {...getInputProps({
                placeholder: "Search Address ...",
                className: "location-search-input",
              })}
            />

            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#bebebe", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
            <br />
            <p>Address: {address} </p>
            <p>Latitude: {coordinates.lat} </p>
            <p>Longitude: {coordinates.lng} </p>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

export default Signup;
