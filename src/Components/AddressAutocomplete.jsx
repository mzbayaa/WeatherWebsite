import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useNavigate } from "react-router";
import "./AddressAutocomplete.css";

const AddressAutocomplete = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  const handleSelect = async (selectedAddress) => {
    setAddress(selectedAddress);
    try {
      const results = await geocodeByAddress(selectedAddress);
      const { lat, lng } = await getLatLng(results[0]);
      navigate(`/weather?lat=${lat}&lon=${lng}`);
      setAddress("");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "Enter Location" })} />
            <div className="list-style">
              {loading ? <div>Loading...</div> : null}
              {suggestions.slice(0, 5).map((suggestion, index) => {
                const style = {
                  backgroundColor: suggestion.active ? "#f5f5f5" : "#ffffff",
                };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, { style })}
                    key={index}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default AddressAutocomplete;
