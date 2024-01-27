import React from "react";

const AddedRule = (props) => {
  const { rule, rules, setRules, index } = props;

  const { key, output } = rule;
  const { value, score, operator } = output;
  const handleDelete = (e) => {
    e.preventDefault();
    if (Array.isArray(rules)) {
      const newRules = [...rules.slice(0, index), ...rules.slice(index + 1)];
      // rules.splice(index, 1);
      setRules(newRules);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center row">
      <div className="col-lg-2 clo-md-4 col-sm-6 col-12">
        <div>
          <div className="mb-3">
            <label htmlFor="ruleType" className="fw-bold form-label">
              Type
            </label>
            <input
              type="text"
              disabled
              value={key}
              id="ruleType"
              className="form-control"
            />
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
              type="text"
              disabled
              value={value}
              id="ruleValue"
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-2 clo-md-4 col-sm-6 col-12">
        <div>
          <div className="mb-3">
            <label htmlFor="ruleOperator" className="fw-bold form-label">
              Operator
            </label>
            <input
              type="text"
              disabled
              value={operator}
              id="ruleOperator"
              className="form-control"
            />
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
              type="text"
              disabled
              value={score}
              id="ruleScore"
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-2 clo-md-4 col-sm-6 col-12">
        <button className="btn btn-danger" onClick={(e) => handleDelete(e)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddedRule;
