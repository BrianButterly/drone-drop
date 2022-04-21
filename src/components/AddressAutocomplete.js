import React, { useState } from "react";
import Geolocate from "./Geolocate";
import { Autocomplete, verify } from "@lob/react-address-autocomplete";
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
        className="divv"
        style={{
          backgroundColor: "#EBF0F6",
          borderRadius: "1em",
          padding: "1em",
          color: "#00000",
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
        <Geolocate
          value={contactInfo.address}
          name="address"
          onChange={handleChange}
        />
        <Button type="submit" variant="warning" onClick={verifyAddress}>
          Verify address
        </Button>
        <br />
        <p>{verificationResult}</p>
        <Button type="submit" variant="warning" onClick={handleSubmit}>
          Finish signup
        </Button>
      </div>
      <br />

      <div
        style={{
          backgroundColor: "#EBF0F6",
          borderRadius: "1em",
          padding: "1em",
          color: "#00000",
          fontWeight: 700,
          marginBottom: "-1em",
        }}
      >
        <h4>Signed up users</h4>
        <hr />
        <br />
        {contacts.map((contact) => (
          <div>
            <h2>{contact.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddressAutocomplete;
