import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Rules from "./Rules";
import Outputs from "./Outputs";
import AddedRule from "./AddedRule";

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
            <label htmlFor="combinator" className="form-label fw-bold">
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
          {rules.length > 0 && (
            <>
              <hr />
              <div className="container">
                <legend>Added Rules</legend>

                {rules.map((rule, i) => (
                  <AddedRule rule={rule} key={i} />
                ))}
              </div>
            </>
          )}
          <div className="d-flex justify-content-center align-items-center row">
            <button onClick={handleSubmit} className="btn btn-success col-1">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
      <Outputs />
    </div>
  );
};

export default Inputs;
