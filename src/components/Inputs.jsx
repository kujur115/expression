import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Rules from "./Rules";
import AddedRule from "./AddedRule";

const Inputs = (props) => {
  const { setOutput } = props;
  const [combinator, setCombinator] = useState("");
  const [rules, setRules] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const clear = () => {
    setCombinator("");
    setRules([]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (!combinator || rules.length === 0) {
      setError(true);
      setErrorMsg("Select a combinator Or add aleast one rule ");
      return;
    }
    setOutput({ rules: rules, combinator: combinator });
    clear();
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
              <option defaultValue={""}>Select Combinator</option>
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
                  <AddedRule
                    rule={rule}
                    rules={rules}
                    setRules={setRules}
                    index={i}
                    key={i}
                  />
                ))}
              </div>
            </>
          )}
          {error && (
            <div
              className="alert alert-danger d-flex align-items-center justify-content-center"
              role="alert"
            >
              <div>{errorMsg}</div>
            </div>
          )}
          <div className="d-flex justify-content-center align-items-center row">
            <button onClick={handleSubmit} className="btn btn-success col-1">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Inputs;
