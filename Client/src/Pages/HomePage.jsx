import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faShieldAlt,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function HomePage() {
  const [inputURL, setInputURL] = useState("");
  const [loadingResult, setLoadingResult] = useState(false);
  const [completeScan, setCompleteScan] = useState(false);

  function startScan(event) {
    event.preventDefault();
    if (loadingResult == false) {
      setLoadingResult(true);
      console.log("Scan Started for URL:", inputURL);
      setTimeout(() => {
        setCompleteScan(true);
      }, 2000);
    }
  }
  function initiateAnotherScan() {
    setCompleteScan(false);
    setLoadingResult(false);
    setInputURL("");
  }
  return (
    <div className="commonContainer">
      <div className="commonContent">
        <div className="commonHeading">
          <FontAwesomeIcon
            icon={faShieldAlt}
            style={{ marginRight: "10px" }}
            size="2x"
            color="yellow"
          />
          <h1>TLS/SSL Inspector</h1>
        </div>
        <div className="commonParagraph">
          <p>
            This Website will provide you a Deep Analysis of the Configuration
            of any SSL Web Server. <br />
            You just have to Enter a Host-Name below to perform a deep Security
            Analysis.
          </p>
        </div>
        <div className="commonFormContainer">
          <form
            className="commonForm"
            onSubmit={(event) => {
              startScan(event);
            }}
          >
            <input
              style={{ width: loadingResult ? "100%" : "80%" }}
              onChange={(event) => {
                setInputURL(event.target.value);
              }}
              type="text"
              value={inputURL}
              className="formInputBox"
              placeholder="Enter a Hostname to Inspect, Example: securityinspector.com"
              required
              readOnly={loadingResult ? true : false}
            ></input>
            {loadingResult ? null : (
              <button type="submit" className="formSubmitButton">
                Scan
              </button>
            )}
          </form>
        </div>
        {completeScan ? (
          <div className="anotherScanContainer">
            <button
              className="anotherScanButton"
              onClick={() => {
                initiateAnotherScan();
              }}
            >
              Scan Another
            </button>
          </div>
        ) : null}
        {loadingResult ? (
          completeScan ? null : (
            <FontAwesomeIcon
              icon={faSpinner}
              size="3x"
              className="rotateAnnimation"
              style={{ marginLeft: "10px" }}
              color="white"
            />
          )
        ) : null}
      </div>
    </div>
  );
}
