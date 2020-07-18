import React from "react";
import "./App.css";
import Markdown from "react-markdown";
import { Col, Grid, Row } from "./styled-components";

let initialValues = "# Heading 1 \n## Heading 2 \n### Heading 6 \n--- \n";
initialValues +=
  "#### Unordered lists: \n- item 1 \n- item 2 \n  - sub item 1 \n  - sub item 2 \n--- \n";

initialValues +=
  "#### Ordered lists: \n1. item 1 \n2. item 2 \n  1. sub item 1 \n  1. sub item 2 \n--- \n";

initialValues += "#### Code: \n```\ncode better with code editor \n```\n";

const downloadFile = function () {
  const element = document.createElement("a");
  const file = new Blob([document.getElementById("md-textarea").value], {
    type: "text/plain",
  });
  element.href = URL.createObjectURL(file);
  const fileName = document.getElementById("md-filename").value;
  element.download = `${fileName}.md`;
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};

function App() {
  const [content, setContent] = React.useState(initialValues);
  return (
    <React.Fragment>
      <AppHeader />
      <Grid fluid>
        <Row style={{ height: "100%" }}>
          <Col sm={12} md={6} style={{ borderRight: "1px solid" }}>
            <div id="md-source">
              <textarea
                id="md-textarea"
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div id="md-preview">
              <div style={{ height: "85vh" }}>
                <Markdown source={content} />
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
}

function AppHeader() {
  const [fileName, setFileName] = React.useState("README");

  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        background: "#000",
        color: "white",
        boxShadow: "0px 3px 5px 0px #a0b0b0",
        top: "0",
        height: "4rem",
      }}
    >
      <h2 style={{ marginLeft: "1rem" }}>Markdown Live</h2>
      <div
        id="fileDownloadButton"
        style={{
          marginRight: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            marginRight: "0.5rem",
          }}
        >
          Filename:{" "}
        </p>
        <input
          id="md-filename"
          type="text"
          value={fileName}
          onChange={(event) => setFileName(event.target.value)}
        />
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-file-arrow-down"
          fill="aqua"
          onClick={downloadFile}
          style={{
            cursor: "pointer",
            marginLeft: "1rem",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"
          />
          <path
            fill-rule="evenodd"
            d="M4.646 8.146a.5.5 0 0 1 .708 0L8 10.793l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
          />
          <path
            fill-rule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6A.5.5 0 0 1 8 4z"
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
