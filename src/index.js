import React from "react";
import ReactDOM from "react-dom";
import Cover from "./components/cover";
import Result from "./components/result";
import Brief from "./components/brief";
import DownloadMaterial from "./components/downloadMaterial";
import Jury from "./components/jury";
import Awards from "./components/awards";
import ScheduleAndFees from "./components/scheduleAndFees";
import SubmissionRequirements from "./components/submissionReq";
import EligibilityCriteria from "./components/eligibilityCriteria";
import FAQ from "./components/faq";
import MediaParterners from "./components/mediaParterners";
import DownloadPressKit from "./components/downloadPressKit";
import "./styles.css";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* 
      <Cover />
      <hr />
      <Result />
      <hr />
      <Brief />
      <hr />
      <DownloadMaterial />
      <hr />
      <Jury />
      <hr />
      <Awards />
      <hr />
      <ScheduleAndFees />
      <hr />
      */}
        <SubmissionRequirements />
        <hr />
        {/*
      <EligibilityCriteria />
      <hr />
      <FAQ />
      <hr />
      <MediaParterners />
      <hr />
      <DownloadPressKit />
      <hr />
      */}
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
