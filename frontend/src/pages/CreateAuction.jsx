import React, { useState } from "react";
import axios from "axios";
import "./CreateAuction.css"; // Import CSS file for styling

const CreateAuction = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [baseAmount, setBaseAmount] = useState("");
  const [mail, setMail] = useState("");
  const [jobExpRequired, setJobExpRequired] = useState("");
  const [available, setAvailable] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auction/", {
        jobTitle,
        jobDescription,
        jobLocation,
        baseAmount,
        mail,
        jobExpRequired,
        available,
      });
      console.log(res.data);
      // Redirect to all auctions page
      window.location.href = "/";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="create-auction-container">
      <h2>Create Auction</h2>
      <div>
        <p> create an auction for your freelance project</p>
      </div>
      <form onSubmit={handleSubmit} className="auction-form">
        <label>
          Job Title:
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="input-field"
            placeholder="e.g- Software Engineer"
          />
        </label>
        <br />
        <label>
          Job Description:
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="input-field textarea-field"
            placeholder="Give an Extended description of the job"
          />
        </label>
        <br />
        <label>
          Job Location:
          <input
            type="text"
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
            className="input-field"
            placeholder="enter the city name"
          />
        </label>
        <br />
        <label>
          Mail:
          <input
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="input-field"
            placeholder="example@email.com"
          />
        </label>
        <br />
        <label>
          Available:
          <input
            type="text"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
            className="input-field"
            placeholder="e.g- Software Engineer"
          />
        </label>
        <br />
        <label>
          Job Experience Required:
          <input
            type="text"
            value={jobExpRequired}
            onChange={(e) => setJobExpRequired(e.target.value)}
            className="input-field"
            placeholder="1-3yr"
          />
        </label>
        <br />
        <label>
          Base Amount:
          <input
            type="number"
            value={baseAmount}
            onChange={(e) => setBaseAmount(e.target.value)}
            className="input-field"
            placeholder="3-5 lakhs"
          />
        </label>
        <button type="submit" className="submit-button">
          Create Auction
        </button>
      </form>
    </div>
  );
};

export default CreateAuction;
