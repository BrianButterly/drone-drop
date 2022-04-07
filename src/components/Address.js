import React, { useState } from "react";
import { AddressForm, verify } from "@lob/react-address-autocomplete";
import { Button } from "react-bootstrap";

const appStyles = {
  padding: "1em",
  width: "32em",
  margin: "auto",
};
const customStyles = {
  lob_container: (provided) => ({
    ...provided,
    backgroundColor: "#EBF0F6",
    borderRadius: "1em",
    padding: "1em",
  }),
  lob_label: (provided) => ({
    ...provided,
    color: "#1E9DB9",
    fontWeight: 700,
  }),
};

function Address() {
  const [selectedAddress, setSelectedAddress] = useState({});
  const [verificationResult, setVerificationResult] = useState(null);

  const verifyAddress = () =>
    verify("test_pub_4ca78cdcf5d051e63a5b3570cc9b466", selectedAddress)
      .then((result) => {
        // Simplify response into something readable to the user
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
        <label>Full name</label>
        <input className="input" />
        <hr />
      </div>
      <AddressForm
        apiKey="test_pub_4ca78cdcf5d051e63a5b3570cc9b466"
        onSelection={(selected) => setSelectedAddress(selected.value)}
        styles={customStyles}
      />
      <p>
        <Button variant="outline-primary" onClick={verifyAddress}>
          Verify address
        </Button>
      </p>
      <p>{verificationResult}</p>
      <Button variant="outline-primary">Finish signup</Button>
      <hr />
    </div>
  );
}

export default Address;
