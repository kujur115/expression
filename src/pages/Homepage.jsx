import React, { useState } from "react";
import { Inputs, Outputs } from "../components";

const Homepage = () => {
  const [output, setOutput] = useState(null);
  return (
    <>
      <Inputs setOutput={setOutput}/>
      {output && <Outputs output={output} />}
    </>
  );
};

export default Homepage;
