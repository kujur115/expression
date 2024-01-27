import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Outputs = (props) => {
  const { output } = props;
  return (
    <div className="container m-2">
      <hr />
      <h3>Output</h3>
      <pre className="bg-secondary-subtle p-3 rounded">
        {JSON.stringify(output, null, 2)}
      </pre>
    </div>
  );
};

export default Outputs;
