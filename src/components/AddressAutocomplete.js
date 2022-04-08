import React, { useState } from "react";
import Geolocate from "./Geolocate";
import {
  Autocomplete,
  verify,
} from "@lob/react-address-autocomplete";
import { Button } from "react-bootstrap";


const appStyles = {
  padding: "1em",
  width: "32em",
  margin: "auto",
};

function AddressAutocomplete() {
  const [selectedAddress, setSelectedAddress] = useState({});
  const [verificationResult, setVerificationResult] = useState(null);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    address: "",
  });
  const [contacts, updateContacts] = useState([]);

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo]);
  };
  console.log(contacts);

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({ name: "", address: "" });
  };

  const verifyAddress = () =>
    verify("test_pub_4ca78cdcf5d051e63a5b3570cc9b466", selectedAddress)
      .then((result) => {
        const summary = `This address is ${result.deliverability}`;
        setVerificationResult(summary);
      })
      .catch((errorData) => setVerificationResult(errorData.message));

  return (
    <div style={appStyles}>
      <div
        style={{
          backgroundColor: "#EBF0F6",
          borderRadius: "1em 1em 0 0",
          padding: "1em",
          color: "#1E9DB9",
          fontWeight: 700,
          marginBottom: "-1em",
        }}
      >
        <form>
          <label>Please enter your name and address</label>
          <br />
          <br />
          <input
            className="input"
            type="text"
            placeholder="Type name"
            name="name"
            value={contactInfo.name}
            onChange={handleChange}
          />
        </form>
        <br />
        <Autocomplete
          apiKey="test_pub_4ca78cdcf5d051e63a5b3570cc9b466"
          onSelection={(selected) => setSelectedAddress(selected.value)}
        />
      </div>
      <Geolocate
        value={contactInfo.address}
        name="address"
        onChange={handleChange}
      />
      <br />
      <p>
        <Button variant="outline-primary" onClick={verifyAddress}>
          Verify address
        </Button>
      </p>
      <p>{verificationResult}</p>

      <Button type="submit" variant="outline-primary" onClick={handleSubmit}>
        Finish signup
      </Button>
      <hr />
      <h1>Signed up users</h1>
      <hr />
      <div>
        {contacts.map((contact) => (
          <div>
            <p>{contact.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddressAutocomplete;
