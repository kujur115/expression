import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Rules = (props) => {
  const [type, setType] = useState("");
  const [operator, setOperator] = useState("");
  const [value, setValue] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { rules, setRules } = props;
  const handleAddRules = (e) => {
    e.preventDefault();
    setError(false);
    if (!type || !operator || !value || !score) {
      setError(true);
      setErrorMsg("Enter all the fields");
      return;
    }
    setRules([
      {
        key: type,
        output: {
          value: value,
          operator: operator,
          score: score,
        },
      },
      ...rules,
    ]);
    console.log("rules", rules);
    clear();
  };
  const clear = () => {
    setType("");
    setOperator("");
    setScore("");
    setValue("");
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center row">
        <div className="col-lg-2 clo-md-4 col-sm-6 col-12">
          <div>
            <div className="mb-3">
              <label htmlFor="ruleType" className="fw-bold form-label">
                Type
              </label>
              <select
                id="ruleType"
                className="form-select"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option defaultValue={""}>Select Type</option>
                <option value="age">Age</option>
                <option value="credit_score">Credit Score</option>
                <option value="account_balance">Account Balance</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-2 clo-md-4 col-sm-6 col-12">
          <div>
            <div className="mb-3">
              <label htmlFor="ruleValue" className="fw-bold form-label">
                Value
              </label>
              <input
                type="number"
                className="form-control"
                id="ruleValue"
                value={value}
                placeholder="Enter value"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 clo-md-4 col-sm-6 col-12">
          <div>
            <div className="mb-3">
              <label htmlFor="operator" className="fw-bold form-label">
                Operator
              </label>
              <select
                id="operator"
                className="form-select"
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
              >
                <option defaultValue={""}>Select Operator</option>
                <option value=">=">{">="}</option>
                <option value="<=">{"<="}</option>
                <option value=">">{">"}</option>
                <option value="<">{"<"}</option>
                <option value="=">{"="}</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-2 clo-md-4 col-sm-6 col-12">
          <div>
            <div className="mb-3">
              <label htmlFor="ruleScore" className="fw-bold form-label">
                Score
              </label>
              <input
                type="number"
                className="form-control"
                id="ruleScore"
                value={score}
                placeholder="Enter score"
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 clo-md-4 col-sm-6 col-12">
          <button className="mt-3 btn btn-primary" onClick={handleAddRules}>
            Add Rule
          </button>
        </div>
      </div>
      {error && (
        <div
          className="alert alert-danger d-flex align-items-center"
          role="alert"
        >
          <div>{errorMsg}</div>
        </div>
      )}
    </>
  );
};

export default Rules;
