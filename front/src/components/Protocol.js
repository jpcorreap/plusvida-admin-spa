import "bootstrap/dist/css/bootstrap.css";
import "../protocol.css";

// Component Father Protocol

import React from "react";
import StepWizard from "react-step-wizard";
import CoolNav from "./CoolNav";
import Title from "./Title";
import Books from "./Books";
import Result from "./Result";

let protocol = {
  title: "",
  subcategories: [],
};

const Protocol = () => (
  <div className="content-protocol">
    <div className="content-wizard">
      <StepWizard nav={<CoolNav />}>
        <Title protocol={protocol} />
        <Books categories={protocol.subcategories} />
        <Result protocol={protocol} />
      </StepWizard>
    </div>
  </div>
);

export default Protocol;
