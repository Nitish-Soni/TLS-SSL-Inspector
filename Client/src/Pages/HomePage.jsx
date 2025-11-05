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
  const [certificateScanResult, setCertificateScanResult] = useState(false);
  const [configurationScanResult, setConfigurationScanResult] = useState(false);
  const [completeScan, setCompleteScan] = useState(false);

  function startScan(event) {
    event.preventDefault();
    if (loadingResult == false) {
      setLoadingResult(true);
      setCertificateScanResult(true);
      setConfigurationScanResult(true);
      console.log("Scan Started for URL:", inputURL);
      setTimeout(() => {
        setCertificateScanResult(false);
        setConfigurationScanResult(false);
        setCompleteScan(true);
      }, 2000);
    }
  }
  function initiateAnotherScan() {
    setCompleteScan(false);
    setLoadingResult(false);
    setCertificateScanResult(false);
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
          <div className="resultProgressContainer">
            <div className="scanItemList">
              Cerificate Scan{" "}
              {certificateScanResult ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  size="1x"
                  className="rotateAnnimation"
                  style={{ marginLeft: "10px" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="1x"
                  style={{ marginLeft: "10px" }}
                  color="green"
                />
              )}
            </div>
            <div className="scanItemList">
              Configuration Scan{" "}
              {configurationScanResult ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  size="1x"
                  className="rotateAnnimation"
                  style={{ marginLeft: "10px" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="1x"
                  style={{ marginLeft: "10px" }}
                  color="green"
                />
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
