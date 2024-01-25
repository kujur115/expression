import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Rules from "./Rules";
import Outputs from "./Outputs";

const Inputs = () => {
  const [combinator, setCombinator] = useState("");
  const [rules, setRules] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <form>
        <fieldset>
          <legend>Expression Form</legend>
          <div className="mb-3">
            <label htmlFor="combinator" className="form-label">
              Combinator
            </label>
            <select
              id="combinator"
              className="form-select"
              value={combinator}
              onChange={(e) => setCombinator(e.target.value)}
            >
              <option value="OR">OR</option>
              <option value="AND">AND</option>
            </select>
          </div>
          <Rules rules={rules} setRules={setRules} />
          <div className="d-flex justify-content-center align-items-center row">
            <button onClick={handleSubmit} className="btn btn-primary col-1">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
      <hr />
      <Outputs />
    </div>
  );
};

export default Inputs;
